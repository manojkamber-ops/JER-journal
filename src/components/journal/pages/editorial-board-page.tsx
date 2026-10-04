"use client";

import { EDITORIAL_BOARD, ADVISORY_BOARD, JOURNAL_INFO } from "@/data/journal";
import { Badge } from "@/components/ui/badge";
import { Mail, GraduationCap, MapPin, Globe } from "lucide-react";

export function EditorialBoardPage() {
  const chiefEditor = EDITORIAL_BOARD.find((e) => e.role === "Editor-in-Chief")!;
  const coEditors = EDITORIAL_BOARD.filter((e) => e.role === "Co-Editor");
  const managingEditor = EDITORIAL_BOARD.find((e) => e.role === "Managing Editor")!;
  const associateEditors = EDITORIAL_BOARD.filter((e) => e.role === "Associate Editor");

  return (
    <div>
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="font-sans text-xs uppercase tracking-widest text-accent mb-2">
            Editorial Board
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            Editorial Board
          </h1>
          <p className="font-serif text-lg opacity-90 max-w-3xl">
            The editorial board of the Journal of Economic Research comprises economists
            from leading universities across Asia, Europe, and North America.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        {/* Editor-in-Chief */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-border pb-2">
            Editor-in-Chief
          </h2>
          <EditorCard editor={chiefEditor} highlighted />
        </div>

        {/* Co-Editors */}
        {coEditors.length > 0 && (
          <div className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-border pb-2">
              Co-Editors
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {coEditors.map((editor) => (
                <EditorCard key={editor.id} editor={editor} />
              ))}
            </div>
          </div>
        )}

        {/* Managing Editor */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-6 border-b border-border pb-2">
            Managing Editor
          </h2>
          <EditorCard editor={managingEditor} />
        </div>

        {/* Associate Editors */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-2 border-b border-border pb-2">
            Associate Editors
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Associate editors oversee the peer review of submissions in their areas of
            expertise. They are supported by a panel of more than 250 external referees
            across {associateEditors.length} countries.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {associateEditors.map((editor) => (
              <EditorCard key={editor.id} editor={editor} />
            ))}
          </div>
        </div>

        {/* International Advisory Board */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-primary mb-2 border-b border-border pb-2">
            International Advisory Board
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-6">
            Members of the International Advisory Board provide strategic guidance on the
            journal&apos;s editorial direction, special issues, and the development of new
            subject areas.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ADVISORY_BOARD.map((member, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-md p-5 hover:border-accent transition-colors"
              >
                <h3 className="font-serif text-base font-semibold text-primary mb-1">
                  {member.name}
                </h3>
                <p className="font-sans text-sm text-foreground/80 mb-2">
                  {member.affiliation}
                </p>
                <p className="font-sans text-xs text-muted-foreground flex items-center gap-1.5">
                  <Globe className="w-3 h-3" />
                  {member.country}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial office */}
        <div className="bg-secondary/50 border border-border rounded-md p-6 sm:p-8">
          <h2 className="font-serif text-xl font-bold text-primary mb-3">
            Editorial Office
          </h2>
          <p className="font-serif text-sm leading-relaxed text-foreground/85 mb-3">
            All correspondence regarding editorial matters, submissions, and journal
            policy should be directed to the editorial office at Hanyang University.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 font-sans text-sm">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <span>{JOURNAL_INFO.editorInChiefOffice}</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <a
                href={`mailto:${JOURNAL_INFO.contactEmail}`}
                className="hover:text-accent hover:underline"
              >
                {JOURNAL_INFO.contactEmail}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function EditorCard({
  editor,
  highlighted = false,
}: {
  editor: (typeof EDITORIAL_BOARD)[number];
  highlighted?: boolean;
}) {
  const initials = editor.name
    .replace(/^Prof\.\s*/, "")
    .replace(/^Dr\.\s*/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");

  return (
    <article
      className={`bg-card border rounded-md p-5 hover:border-accent transition-colors ${
        highlighted ? "border-accent shadow-sm" : "border-border"
      }`}
    >
      <div className="flex items-start gap-4 mb-3">
        <div
          className={`w-12 h-12 rounded-full flex-shrink-0 flex items-center justify-center font-serif font-semibold text-lg ${
            highlighted ? "bg-primary text-primary-foreground" : "bg-secondary text-primary"
          }`}
          aria-hidden
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="font-serif text-base font-semibold text-primary leading-tight">
            {editor.name}
          </h3>
          <p className="font-sans text-xs text-accent uppercase tracking-wide mt-1">
            {editor.role}
          </p>
        </div>
      </div>

      <p className="font-sans text-sm text-foreground/80 mb-2 flex items-start gap-1.5">
        <GraduationCap className="w-3.5 h-3.5 mt-0.5 text-accent flex-shrink-0" />
        {editor.affiliation}
      </p>
      <p className="font-sans text-xs text-muted-foreground mb-3 flex items-center gap-1.5">
        <Globe className="w-3 h-3" />
        {editor.country}
      </p>

      <div className="mb-3">
        <p className="font-sans text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">
          Research areas
        </p>
        <div className="flex flex-wrap gap-1">
          {editor.researchAreas.map((area) => (
            <Badge
              key={area}
              variant="secondary"
              className="font-sans text-[10px] font-normal"
            >
              {area}
            </Badge>
          ))}
        </div>
      </div>

      <a
        href={`mailto:${editor.email}`}
        className="font-sans text-xs text-primary hover:text-accent hover:underline flex items-center gap-1.5"
      >
        <Mail className="w-3 h-3" />
        {editor.email}
      </a>
    </article>
  );
}
