import { useEffect } from "react";

const siteName = "D Marvel Infra Solutions";
const defaultDescription =
  "D Marvel Infra Solutions delivers interior design, architectural design solutions, infrastructure development, landscaping and project execution.";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: `${siteName} | Interior Design & Infrastructure Solutions`,
    description: defaultDescription,
  },
  "/about": {
    title: `About | ${siteName}`,
    description: `Learn about ${siteName}'s interior design, architectural planning, infrastructure and landscaping capabilities.`,
  },
  "/services": {
    title: `Services | ${siteName}`,
    description: `Interior design and execution, infrastructure development, architectural solutions and landscaping from ${siteName}.`,
  },
  "/portfolio": {
    title: `Projects & Portfolio | ${siteName}`,
    description: `Explore project records across interior design, residential, commercial, institutional, infrastructure, landscaping and architectural design.`,
  },
  "/contact": {
    title: `Contact | ${siteName}`,
    description: `Discuss residential, commercial, institutional and infrastructure requirements with ${siteName}.`,
  },
};

function setMeta(name: string, content: string, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    if (property) element.setAttribute("property", name);
    else element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function Seo({ title, description }: { title?: string; description?: string }) {
  useEffect(() => {
    const path = window.location.pathname.replace(/\/$/, "") || "/";
    const meta = routeMeta[path] ?? {
      title: `${siteName} | Project Portfolio`,
      description: defaultDescription,
    };
    const resolvedTitle = title ?? meta.title;
    const resolvedDescription = description ?? meta.description;
    const canonical = `${window.location.origin}${window.location.pathname}`;

    document.title = resolvedTitle;
    setMeta("description", resolvedDescription);
    setMeta("og:type", "website", true);
    setMeta("og:site_name", siteName, true);
    setMeta("og:title", resolvedTitle, true);
    setMeta("og:description", resolvedDescription, true);
    setMeta("og:url", canonical, true);
    setMeta("og:image", `${window.location.origin}/demarvel-social-preview.png`, true);
    setMeta("og:image:alt", `${siteName} logo`, true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", resolvedTitle);
    setMeta("twitter:description", resolvedDescription);
    setMeta("twitter:image", `${window.location.origin}/demarvel-social-preview.png`);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    let structuredData = document.head.querySelector<HTMLScriptElement>("#dmarvel-structured-data");
    if (!structuredData) {
      structuredData = document.createElement("script");
      structuredData.id = "dmarvel-structured-data";
      structuredData.type = "application/ld+json";
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteName,
      url: window.location.origin,
      telephone: "+91 8983630096",
      sameAs: [],
    });
  }, [description, title]);

  return null;
}
