import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
};

const siteName = "MobPae";
const siteUrl = "https://mobpae.com";

export function SEO({ title, description, path = "/" }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
    const canonicalUrl = `${siteUrl}${path}`;

    document.title = fullTitle;
    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setCanonical(canonicalUrl);
  }, [description, path, title]);

  return null;
}

function setMeta(name: string, content: string, attr: "name" | "property" = "name") {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }
  element.href = url;
}
