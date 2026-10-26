import type { StructureResolver } from "sanity/structure";
import { ALL_ISSUES } from "./current-issue";

/** Papers workspace: Volume → Issue → papers, newest volume first. */
export const papersStructure: StructureResolver = (S) => {
  const volumes = Array.from(new Set(ALL_ISSUES.map((i) => i.volume)));
  return S.list()
    .title("Papers")
    .items(
      volumes.map((v) =>
        S.listItem()
          .id(`volume-${v}`)
          .title(`Volume ${v} (${ALL_ISSUES.find((i) => i.volume === v)!.year})`)
          .child(
            S.list()
              .title(`Volume ${v}`)
              .items(
                ALL_ISSUES.filter((i) => i.volume === v).map((i) =>
                  S.listItem()
                    .id(`issue-${v}-${i.issue}`)
                    .title(i.label)
                    .child(
                      S.documentTypeList("paper")
                        .title(i.label)
                        .filter('_type == "paper" && volume == $v && issue == $i')
                        .params({ v: i.volume, i: i.issue })
                        .defaultOrdering([{ field: "articleId", direction: "asc" }]),
                    ),
                ),
              ),
          ),
      ),
    );
};

/** Forms workspace: one list per website form. */
export const formsStructure: StructureResolver = (S) =>
  S.list()
    .title("Form submissions")
    .items([
      S.documentTypeListItem("manuscriptSubmission").title("Manuscript submissions"),
      S.documentTypeListItem("fullTextRequest").title("Full-paper requests"),
      S.documentTypeListItem("contactMessage").title("Contact messages"),
      S.documentTypeListItem("alertSubscription").title("Email alert subscriptions"),
      S.documentTypeListItem("readerAccount").title("Reader accounts (sign-ups)"),
    ]);
