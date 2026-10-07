"use client";

import type { CSSProperties, ReactNode } from "react";
import { isJerDoi } from "@/lib/doi";
import { useNav } from "./nav-context";

/** DOI link: JER DOIs open the paper's PDF on this site; other DOIs open doi.org in a new tab. */
export function DoiLink({ doi, children, className, style }: { doi: string; children?: ReactNode; className?: string; style?: CSSProperties }) {
  const { navigate } = useNav();
  const label = children ?? `https://doi.org/${doi}`;

  if (!isJerDoi(doi)) {
    return (
      <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer" className={className} style={style}>
        {label}
      </a>
    );
  }
  return (
    <a
      href={`#/doi/${doi}`}
      title="Open this article as a PDF"
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; // allow open-in-new-tab
        e.preventDefault();
        navigate("doi", { articleId: doi });
      }}
      className={className}
      style={style}
    >
      {label}
    </a>
  );
}
