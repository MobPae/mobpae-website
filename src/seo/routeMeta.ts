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
  "/employers": {
    title: "Earned Wage Access for Employers | MobPae",
    description: "Explore MobPae's employer experience for policy controls, request approvals, payroll integration and recovery visibility.",
    canonicalPath: "/employers",
  },
  "/employers/benefits": {
    title: "Employer Benefits | MobPae",
    description: "See how MobPae supports employee financial wellness with a structured employer-led salary access workflow.",
    canonicalPath: "/employers/benefits",
  },
  "/employees": {
    title: "Earned Salary Access for Employees | MobPae",
    description: "Preview the MobPae employee journey for setup, available access, request status and repayment visibility.",
    canonicalPath: "/employees",
  },
  "/how-it-works": {
    title: "How MobPae Works | Earned Wage Access",
    description: "Follow the MobPae workflow from employer setup and employee requests through approval, disbursal and payroll recovery.",
    canonicalPath: "/how-it-works",
  },
  "/product": {
    title: "MobPae Product | One Salary Access Workflow",
    description: "Explore the MobPae product experience for employees, employers and capital partners across request, approval and settlement.",
    canonicalPath: "/product",
  },
  "/faqs": {
    title: "Frequently Asked Questions | MobPae",
    description: "Answers about MobPae onboarding, salary access requests, employer approvals, repayment visibility and support.",
    canonicalPath: "/faqs",
  },
  "/about": {
    title: "Our Story | MobPae",
    description: "Learn about MobPae's approach to employer-backed salary access and responsible workplace financial wellness.",
    canonicalPath: "/about",
  },
  "/team": {
    title: "Meet the MobPae Team",
    description: "Meet the people combining finance, engineering and operations experience to build MobPae.",
    canonicalPath: "/team",
    robots: "noindex, follow",
  },
  "/teams": {
    title: "Meet the MobPae Team",
    description: "Meet the people combining finance, engineering and operations experience to build MobPae.",
    canonicalPath: "/team",
    robots: "noindex, follow",
  },
  "/careers": {
    title: "Careers at MobPae",
    description: "Explore opportunities to build employer-backed financial wellness products with the MobPae team.",
    canonicalPath: "/careers",
  },
  "/style-guide": {
    title: "MobPae Website Style Guide",
    description: "A design-system reference for MobPae's website typography, colors, components, grids and motion.",
    canonicalPath: "/style-guide",
    robots: "noindex, follow",
  },
  "/admin/style-guide": {
    title: "MobPae Website Style Guide",
    description: "A design-system reference for MobPae's website typography, colors, components, grids and motion.",
    canonicalPath: "/style-guide",
    robots: "noindex, follow",
  },
  "/contact": {
    title: "Contact MobPae",
    description: "Contact MobPae to discuss employer onboarding, employee support or a product demonstration.",
    canonicalPath: "/contact",
  },
  "/help-center": {
    title: "MobPae Help Center",
    description: "Find guidance for employee setup, salary access requests, employer workflows and account support.",
    canonicalPath: "/help-center",
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
  "/blog": {
    title: "MobPae Insights",
    description: "MobPae insights on earned wage access, payroll and employee financial wellness are coming soon.",
    canonicalPath: "/blog",
    robots: "noindex, follow",
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
