// Dependency-free EPUB 3 builder: an uncompressed (STORE) zip containing one XHTML chapter per article.
import { JOURNAL_INFO, type Article } from "@/data/journal";
import { ARTICLE_BODIES, exhibitTables, type BodyExhibits } from "@/data/article-bodies";
import { figureSvg } from "@/lib/figures";
import { formatCitation } from "@/lib/citations";
import { institutionName, referenceLabel, referenceYear, splitCitations } from "@/lib/references";
import { doiUrl } from "@/lib/doi";

/* ---------------- minimal zip writer ---------------- */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(bytes: Uint8Array) {
  let c = 0xffffffff;
  for (const b of bytes) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function zip(files: { name: string; data: string }[]): Blob {
  const enc = new TextEncoder();
  const chunks: Uint8Array[] = [];
  const central: Uint8Array[] = [];
  let offset = 0;

  for (const f of files) {
    const name = enc.encode(f.name);
    const data = enc.encode(f.data);
    const crc = crc32(data);

    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true);
    local.setUint16(4, 20, true); // version needed
    local.setUint16(8, 0, true); // method: STORE
    local.setUint32(14, crc, true);
    local.setUint32(18, data.length, true);
    local.setUint32(22, data.length, true);
    local.setUint16(26, name.length, true);
    chunks.push(new Uint8Array(local.buffer), name, data);

    const cen = new DataView(new ArrayBuffer(46));
    cen.setUint32(0, 0x02014b50, true);
    cen.setUint16(4, 20, true);
    cen.setUint16(6, 20, true);
    cen.setUint32(16, crc, true);
    cen.setUint32(20, data.length, true);
    cen.setUint32(24, data.length, true);
    cen.setUint16(28, name.length, true);
    cen.setUint32(42, offset, true);
    central.push(new Uint8Array(cen.buffer), name);

    offset += 30 + name.length + data.length;
  }

  const centralSize = central.reduce((n, c) => n + c.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true);
  end.setUint16(8, files.length, true);
  end.setUint16(10, files.length, true);
  end.setUint32(12, centralSize, true);
  end.setUint32(16, offset, true);

  return new Blob([...chunks, ...central, new Uint8Array(end.buffer)] as BlobPart[], { type: "application/epub+zip" });
}

/* ---------------- article → XHTML ---------------- */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function withCitations(a: Article, text: string) {
  return splitCitations(text)
    .map((part) => {
      if (typeof part === "string")
        return esc(part).replace(/(https?:\/\/[^\s)<]+[^\s).,;<])/g, (u) => `<a href="${u}">${u}</a>`);
      const links = part.refs.map((n) => {
        const ref = a.references?.find((r) => r.number === n);
        const label = ref ? (part.narrative ? referenceYear(ref) : referenceLabel(ref)) : String(n);
        return `<a href="#ref-${n}">${esc(label)}</a>`;
      });
      return `(${links.join("; ")})`;
    })
    .join("");
}

/** Absolute link to the article on the journal website (works inside e-readers too). */
function siteUrl(articleId: string) {
  const base = typeof window !== "undefined" ? `${window.location.origin}${window.location.pathname}` : `${JOURNAL_INFO.website}/`;
  return `${base}#/reader/${articleId}`;
}

function exhibitsXhtml(x: BodyExhibits) {
  const tables = exhibitTables(x)
    .map(
      (t) =>
        `<table id="${t.id}"><caption>${esc(t.caption)}</caption><thead><tr>${t.columns.map((c) => `<th>${esc(c)}</th>`).join("")}</tr></thead><tbody>${t.rows
          .map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`)
          .join("")}</tbody></table>${t.note ? `<p class="note">${esc(t.note)}</p>` : ""}`
    )
    .join("\n");
  const figures = (x.figures ?? [])
    .map((f) => `<div class="figure" id="${f.id}"><p class="caption">${esc(f.caption)}</p>${figureSvg(f)}${f.note ? `<p class="note">${esc(f.note)}</p>` : ""}</div>`)
    .join("\n");
  return `${tables}\n${figures}`;
}

function articleXhtml(a: Article) {
  const body = ARTICLE_BODIES[a.id];
  const affs = a.affiliations ?? [];
  const authors = (a.structuredAuthors ?? a.authors.map((x) => ({ name: x.name, affiliationIds: [] as string[] })))
    .map((au, i) => {
      const inst = institutionName(affs.find((af) => au.affiliationIds.includes(af.id))) ?? a.authors[i]?.affiliation.split(",")[0] ?? "";
      return `<p class="author">${esc(au.name.toUpperCase())}<br/><span>${esc(inst)}</span></p>`;
    })
    .join("\n");

  const sections = (body ?? [])
    .map(
      (s) => `${s.heading ? `<h2 id="${s.id}">${esc(s.heading.replace(/^\d+\.\s*/, "").toUpperCase())}</h2>` : `<div id="${s.id}"></div>`}
${s.paragraphs.map((p) => `<p>${withCitations(a, p)}</p>`).join("\n")}
${exhibitsXhtml(s)}
${(s.subsections ?? [])
  .map((x) => `<h3 id="${x.id}">${esc(x.heading.replace(/^[\d.]+\s*/, ""))}</h3>\n${x.paragraphs.map((p) => `<p>${withCitations(a, p)}</p>`).join("\n")}\n${exhibitsXhtml(x)}`)
  .join("\n")}`
    )
    .join("\n");

  const back = [
    ["Acknowledgments", a.acknowledgments],
    ["Funding", a.funding],
    ["Data Availability Statement", a.dataAvailability],
  ]
    .filter(([, v]) => v)
    .map(([h, v]) => `<h2>${esc(h!.toUpperCase())}</h2><p>${withCitations(a, v!)}</p>`)
    .join("\n");

  const refs = a.references?.length
    ? `<h2 id="references">REFERENCES</h2>\n${a.references
        .map(
          (r) =>
            `<p class="ref" id="ref-${r.number}">${esc(r.text)}${r.doi ? ` <a href="${esc(doiUrl(r.doi))}">https://doi.org/${esc(r.doi)}</a>` : ""}${
              r.articleId ? ` <a href="${esc(siteUrl(r.articleId))}">Read in JER</a>` : ""
            }</p>`
        )
        .join("\n")}`
    : "";

  return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en">
<head><meta charset="UTF-8"/><title>${esc(a.title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>
<p class="masthead"><em>© ${esc(JOURNAL_INFO.title)}</em><br/>${a.year}, Vol. ${a.volume}, No. ${a.issue}, ${esc(a.pages.replace("–", "-"))}.<br/><a href="${esc(doiUrl(a.doi))}">https://doi.org/${esc(a.doi)}</a></p>
<p class="kicker">${esc(a.type.toUpperCase())}</p>
<h1>${esc(a.title.toUpperCase())}</h1>
${authors}
${
  a.type === "Editorial"
    ? ""
    : `<h2 id="abstract">ABSTRACT</h2>
<p class="abstract">${esc(a.abstract)}</p>
<p class="kw"><strong>Keywords:</strong> ${esc(a.keywords.join(", "))}. <strong>JEL:</strong> ${esc(a.jelCodes.join(", "))}.</p>`
}
${sections || `<p class="note">The full text of this article is available in the PDF version.</p>`}
${back}
${refs}
${
  a.type === "Editorial"
    ? `<p class="signature"><strong>${esc(a.authors[0]?.name ?? "")}</strong><br/><em>Editor-in-Chief</em><br/>${esc(
        a.affiliations?.[0] ? `${a.affiliations[0].department}, ${a.affiliations[0].institution}, ${a.affiliations[0].city}, ${a.affiliations[0].country}` : a.authors[0]?.affiliation ?? ""
      )}${a.affiliations?.[0]?.email ? `<br/><a href="mailto:${esc(a.affiliations[0].email)}">${esc(a.affiliations[0].email)}</a>` : ""}</p>`
    : ""
}
<p class="note">How to cite: ${esc(formatCitation(a, "apa"))}</p>
<p class="note">${esc(JOURNAL_INFO.license)}.</p>
</body></html>`;
}

const STYLE = `body{font-family:"Times New Roman",Times,serif;line-height:1.5;margin:0 5%}
.masthead{font-size:.8em}
.kicker{text-align:center;letter-spacing:.3em;font-size:1.6em;border-bottom:1px solid #444;padding-bottom:.4em;margin-top:1.5em}
h1{text-align:center;font-size:1.25em;margin:1.2em 0}
.author{text-align:center;font-weight:bold;margin:.6em 0}
.author span{font-weight:normal}
h2{text-align:center;font-size:1em;margin-top:1.8em}
h3{font-style:italic;font-size:1em}
p{text-align:justify;text-indent:1.5em;margin:.3em 0;hyphens:auto;-webkit-hyphens:auto;-epub-hyphens:auto}
.masthead,.author,.kicker,.abstract,.kw,.ref,.note,.signature{text-indent:0}
.signature{text-align:right;margin-top:2em}
.abstract{font-style:italic;margin:0 2em}
.ref{padding-left:2em;text-indent:-2em}
table{border-collapse:collapse;width:100%;margin:1em 0;font-size:.85em}
caption{font-weight:bold;text-align:left;margin-bottom:.3em}
th,td{border-bottom:1px solid #999;padding:.2em .4em;text-align:right}
th:first-child,td:first-child{text-align:left}
.note{font-size:.85em;color:#555}
.figure{margin:1.2em 0}
.caption{font-weight:bold;text-indent:0}`;

export function articleEpub(a: Article): Blob {
  const creators = a.authors.map((au, i) => `<dc:creator id="creator${i}">${esc(au.name)}</dc:creator>`).join("\n    ");
  const modified = new Date().toISOString().replace(/\.\d+Z$/, "Z");
  const hasSvg = (ARTICLE_BODIES[a.id] ?? []).some((sec) => [sec, ...(sec.subsections ?? [])].some((x) => (x.figures ?? []).length > 0));
  const opf = `<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="uid">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="uid">doi:${esc(a.doi)}</dc:identifier>
    <dc:title>${esc(a.title)}</dc:title>
    ${creators}
    <dc:language>en</dc:language>
    <dc:publisher>${esc(JOURNAL_INFO.publisher)}</dc:publisher>
    <dc:source>${esc(JOURNAL_INFO.title)}, Vol. ${a.volume}, No. ${a.issue}</dc:source>
    <dc:rights>${esc(JOURNAL_INFO.license)}</dc:rights>
    <meta property="dcterms:modified">${modified}</meta>
  </metadata>
  <manifest>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
    <item id="article" href="article.xhtml" media-type="application/xhtml+xml"${hasSvg ? ' properties="svg"' : ""}/>
    <item id="css" href="style.css" media-type="text/css"/>
  </manifest>
  <spine><itemref idref="article"/></spine>
</package>`;

  const body = ARTICLE_BODIES[a.id] ?? [];
  const navItems = [
    ...(a.type === "Editorial" ? [] : [`<li><a href="article.xhtml#abstract">Abstract</a></li>`]),
    ...body.map((s) => `<li><a href="article.xhtml#${s.id}">${esc(s.heading || "Editorial")}</a></li>`),
    ...(a.references?.length ? [`<li><a href="article.xhtml#references">References</a></li>`] : []),
  ].join("\n      ");
  const nav = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="en">
<head><meta charset="UTF-8"/><title>Contents</title></head>
<body><nav epub:type="toc" id="toc"><h1>Contents</h1><ol>
      ${navItems}
</ol></nav></body></html>`;

  return zip([
    { name: "mimetype", data: "application/epub+zip" },
    {
      name: "META-INF/container.xml",
      data: `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>`,
    },
    { name: "OEBPS/content.opf", data: opf },
    { name: "OEBPS/nav.xhtml", data: nav },
    { name: "OEBPS/article.xhtml", data: articleXhtml(a) },
    { name: "OEBPS/style.css", data: STYLE },
  ]);
}

export function formatBytes(n: number) {
  return n < 1024 * 1024 ? `${(n / 1024).toFixed(1)} KB` : `${(n / 1024 / 1024).toFixed(2)} MB`;
}
