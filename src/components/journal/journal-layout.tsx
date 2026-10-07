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
import { AccountPage } from "./pages/account-page";
import { LegalPage } from "./pages/legal-page";
import { SessionProvider } from "./session";
import { ReaderPage } from "./pages/reader-page";
import { articleByDoi } from "@/lib/doi";
import { applyLivePapers } from "@/data/live-papers";
import type { PaperSpec } from "@/data/paper-spec";

function PageRouter() {
  const { page, articleId, params } = useNav();

  switch (page) {
    case "home":
      return <HomePage />;
    case "about":
      return <AboutPage />;
    case "editorial-board":
      return <EditorialBoardPage />;
    case "current-issue":
      return <CurrentIssuePage key={`${params.volume}-${params.issue}`} />;
    case "archive":
      return <ArchivePage key={params.q ?? ""} />;
    case "article":
      return <ArticleViewPage key={articleId} articleId={articleId} />;
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
    case "account":
      return <AccountPage />;
    case "legal":
      return <LegalPage />;
    case "doi":
      return <DoiNotFound />;
    default:
      return <HomePage />;
  }
}

// The ePub-style reader is full screen, without the site header and footer
function Shell() {
  const { page, articleId } = useNav();
  if (page === "reader") return <ReaderPage key={articleId} articleId={articleId} />;
  if (page === "doi") {
    // DOI resolver: a JER DOI opens the paper as a PDF
    const article = articleId ? articleByDoi(articleId) : undefined;
    if (article) return <ReaderPage key={article.id} articleId={article.id} defaultView="pdf" />;
  }
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <PageRouter />
      </main>
      <Footer />
    </div>
  );
}

export function JournalLayout({ livePapers }: { livePapers?: PaperSpec[] | null }) {
  // Current-issue papers published in Sanity replace the repository copies before anything renders
  applyLivePapers(livePapers);
  return (
    <NavProvider>
      <SessionProvider>
        <Shell />
      </SessionProvider>
    </NavProvider>
  );
}

function DoiNotFound() {
  const { articleId, navigate } = useNav();
  return (
    <div className="container mx-auto px-4 py-24 text-center max-w-xl">
      <h1 className="text-[26px] font-bold text-primary mb-2">DOI not found</h1>
      <p className="text-[16px] text-[#616161] mb-6">
        No article in the Journal of Economic Research has the DOI <span className="font-mono">{articleId}</span>.
      </p>
      <button onClick={() => navigate("archive", articleId ? { params: { q: articleId } } : undefined)} className="h-10 px-5 bg-[var(--aom-button)] text-white font-semibold">
        Search the archive
      </button>
    </div>
  );
}
