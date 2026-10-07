import type { StructureResolver } from "sanity/structure";
import { CURRENT_ISSUE } from "./current-issue";

/** Papers workspace: the current issue's papers. */
export const papersStructure: StructureResolver = (S) =>
  S.list()
    .title(`Volume ${CURRENT_ISSUE.volume}, Issue ${CURRENT_ISSUE.issue} (${CURRENT_ISSUE.year})`)
    .items([
      S.listItem()
        .title("Papers in the current issue")
        .child(
          S.documentTypeList("paper")
            .title(`Vol. ${CURRENT_ISSUE.volume}, No. ${CURRENT_ISSUE.issue} papers`)
            .filter('_type == "paper" && volume == $v && issue == $i')
            .params({ v: CURRENT_ISSUE.volume, i: CURRENT_ISSUE.issue })
            .defaultOrdering([{ field: "articleId", direction: "asc" }]),
        ),
    ]);

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
