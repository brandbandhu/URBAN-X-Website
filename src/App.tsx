import HomePage from "./routes";
import AboutPage from "./routes/about";
import ServicesPage from "./routes/services";
import ContactPage from "./routes/contact";
import NewRoyalServicesPage from "./routes/new-royal-services";
import AishwaryaRentalPage from "./routes/aishwarya-rental";
import UrbanDePage from "./routes/urban-de";

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
    default:
      return <NotFoundPage />;
  }
}
