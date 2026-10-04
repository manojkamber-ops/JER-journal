"use client";

import { Header } from "./header";
import { Footer } from "./footer";
import { NavProvider, useNav } from "./nav-context";
import { HomePage } from "./pages/home-page";
import { AboutPage } from "./pages/about-page";
import { EditorialBoardPage } from "./pages/editorial-board-page";
import { CurrentIssuePage } from "./pages/current-issue-page";
import { ArchivePage } from "./pages/archive-page";
import { ArticleViewPage } from "./pages/article-view-page";
import { SubmissionPage } from "./pages/submission-page";
import { AuthorGuidelinesPage } from "./pages/author-guidelines-page";
import { PoliciesPage } from "./pages/policies-page";
import { NewsPage } from "./pages/news-page";
import { ContactPage } from "./pages/contact-page";

function PageRouter() {
  const { page, articleId } = useNav();

  switch (page) {
    case "home":
      return <HomePage />;
    case "about":
      return <AboutPage />;
    case "editorial-board":
      return <EditorialBoardPage />;
    case "current-issue":
      return <CurrentIssuePage />;
    case "archive":
      return <ArchivePage />;
    case "article":
      return <ArticleViewPage articleId={articleId} />;
    case "submission":
      return <SubmissionPage />;
    case "author-guidelines":
      return <AuthorGuidelinesPage />;
    case "policies":
      return <PoliciesPage />;
    case "news":
      return <NewsPage />;
    case "contact":
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

export function JournalLayout({ children }: { children?: React.ReactNode }) {
  return (
    <NavProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <PageRouter />
        </main>
        <Footer />
      </div>
    </NavProvider>
  );
}
