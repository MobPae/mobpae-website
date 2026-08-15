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
  "/privacy-policy": {
    title: "Privacy Policy | MobPae",
    description: "Read how MobPae handles information submitted through the website and enquiry forms.",
    canonicalPath: "/privacy-policy",
  },
  "/terms": {
    title: "Website Terms and Conditions | MobPae",
    description: "Read the terms governing use of the MobPae website and public enquiry experience.",
    canonicalPath: "/terms",
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
