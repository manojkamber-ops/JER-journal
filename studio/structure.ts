import type { StructureResolver } from "sanity/structure";

/** Studio sidebar: 2026 papers by issue, then every website form in its own list. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Journal of Economics")
    .items([
      S.listItem()
        .title("2026 papers (Volume 31)")
        .child(
          S.list()
            .title("Volume 31 (2026)")
            .items([
              S.listItem().title("All 2026 papers").child(S.documentTypeList("paper").title("All 2026 papers").filter('_type == "paper" && year == 2026')),
              ...[1, 2, 3, 4].map((issue) =>
                S.listItem()
                  .title(`Issue ${issue}`)
                  .child(
                    S.documentTypeList("paper")
                      .title(`Volume 31, Issue ${issue}`)
                      .filter('_type == "paper" && volume == 31 && issue == $issue')
                      .params({ issue })
                      .defaultOrdering([{ field: "articleId", direction: "asc" }]),
                  ),
              ),
            ]),
        ),
      S.divider(),
      S.listItem().title("Form submissions").child(
        S.list()
          .title("Form submissions")
          .items([
            S.documentTypeListItem("manuscriptSubmission").title("Manuscript submissions"),
            S.documentTypeListItem("fullTextRequest").title("Full-paper requests"),
            S.documentTypeListItem("contactMessage").title("Contact messages"),
            S.documentTypeListItem("alertSubscription").title("Email alert subscriptions"),
            S.documentTypeListItem("readerAccount").title("Reader accounts (sign-ups)"),
          ]),
      ),
    ]);
