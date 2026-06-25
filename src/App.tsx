import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./routes"));
const AboutPage = lazy(() => import("./routes/about"));
const ServicesPage = lazy(() => import("./routes/services"));
const ContactPage = lazy(() => import("./routes/contact"));
const NewRoyalServicesPage = lazy(() => import("./routes/new-royal-services"));
const AishwaryaRentalPage = lazy(() => import("./routes/aishwarya-rental"));
const UrbanDePage = lazy(() => import("./routes/urban-de"));
const RoyalFoodsPage = lazy(() => import("./routes/royal-foods"));

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-2 border-gold border-t-transparent" />
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          Loading page
        </p>
      </div>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  return (
    <Suspense fallback={<RouteFallback />}>
      {(() => {
        switch (path) {
          case "/":
            return <HomePage />;
          case "/about":
            return <AboutPage />;
          case "/services":
            return <ServicesPage />;
          case "/contact":
            return <ContactPage />;
          case "/new-royal-services":
            return <NewRoyalServicesPage />;
          case "/aishwarya-rental":
            return <AishwaryaRentalPage />;
          case "/urban-de":
            return <UrbanDePage />;
          case "/royal-foods":
            return <RoyalFoodsPage />;
          default:
            return <NotFoundPage />;
        }
      })()}
    </Suspense>
  );
}
