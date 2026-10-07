import type { StructureResolver } from "sanity/structure";
import { MANAGED_ISSUES } from "./current-issue";

/** Papers workspace: one list per issue managed in Sanity. */
export const papersStructure: StructureResolver = (S) =>
  S.list()
    .title("Papers")
    .items(
      MANAGED_ISSUES.map((i) =>
        S.listItem()
          .title(i.label)
          .child(
            S.documentTypeList("paper")
              .title(i.label)
              .filter('_type == "paper" && volume == $v && issue == $i')
              .params({ v: i.volume, i: i.issue })
              .defaultOrdering([{ field: "articleId", direction: "asc" }]),
          ),
      ),
    );

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
