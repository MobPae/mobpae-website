export type RouteMeta = {
  title: string;
  description: string;
  canonicalPath: string;
  robots?: string;
};

const routeMeta: Record<string, RouteMeta> = {
  "/": {
    title: "Employer-Backed Earned Wage Access | MobPae",
    description: "MobPae helps employers offer controlled earned wage access with employee request tracking and payroll-aware recovery visibility.",
    canonicalPath: "/",
  },
  "/help-center": {
    title: "Help Center | MobPae",
    description: "Guides for MobPae employees, employers, and partners on requests, approvals, payroll recovery, and support.",
    canonicalPath: "/help-center",
  },
  "/privacy-policy": {
    title: "Privacy Policy | MobPae",
    description: "How MobPae collects, uses, shares, and protects information from the website, enquiries, and salary-access product.",
    canonicalPath: "/privacy-policy",
  },
  "/terms": {
    title: "Website Terms and Conditions | MobPae",
    description: "Terms for using the MobPae website, enquiry forms, and public information about employer-powered earned wage access.",
    canonicalPath: "/terms",
  },
  "/careers": {
    title: "Careers | MobPae",
    description: "Explore how to work with MobPae on employer-powered salary access for India’s workforce.",
    canonicalPath: "/careers",
  },
  "/contact": {
    title: "Contact | MobPae",
    description: "Contact MobPae in Ahmedabad or request a demo for employer-powered earned wage access.",
    canonicalPath: "/contact",
  },
};

export function getRouteMeta(pathname: string): RouteMeta {
  return routeMeta[pathname] ?? {
    title: "Page Not Found | MobPae",
    description: "The requested MobPae page could not be found.",
    canonicalPath: pathname,
    robots: "noindex, nofollow",
  };
}
