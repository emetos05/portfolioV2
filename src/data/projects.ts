export interface Project {
  id: string;
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  preview: string; // Can be video (.mp4, .webm, .mov) or image (.png, .jpg, .jpeg, .webp)
  language: string;
  topics?: string[];
  updated_at: string;
  created_at: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  has_pages: boolean;
  visibility: string;
}

export const projects: Project[] = [
  {
    id: "980654617",
    name: "tradetrackr client",
    description:
      "A jobs management platform for tradespeople with none of the complications",
    html_url: "https://github.com/emetos05/tradetrackr_client",
    homepage: "https://tradetrackrclient.vercel.app",
    preview: "/videos/tradetrackr.webm",
    language: "TypeScript",
    topics: ["invoice", "tracker", "trades", "business"],
    updated_at: "2025-07-30T11:01:25Z",
    created_at: "2025-05-09T13:41:54Z",
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0,
    has_pages: false,
    visibility: "public",
  },
  {
    id: "711311617",
    name: "saskfund",
    description:
      "A simple loan eligibility checker tailored to newcomers in Saskatchewan",
    html_url: "https://github.com/emetos05/saskfund",
    homepage: "https://saskfund.netlify.app/",
    preview: "/videos/saskfund.webm",
    language: "JavaScript",
    topics: ["finance", "eligibility", "saskatchewan", "newcomers"],
    updated_at: "2025-07-26T13:29:45Z",
    created_at: "2023-10-28T21:11:36Z",
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0,
    has_pages: false,
    visibility: "public",
  },
  {
    id: "1026147034",
    name: "invoicetrack",
    description: "Invoice tracking application UI",
    html_url: "https://github.com/emetos05/invoicetrack",
    homepage: "https://invoicetrack.netlify.app/",
    preview: "/videos/invoicetrack.webm",
    language: "JavaScript",
    topics: ["invoice", "tracking", "ui"],
    updated_at: "2025-07-26T16:21:41Z",
    created_at: "2025-07-25T11:41:38Z",
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0,
    has_pages: false,
    visibility: "public",
  },
  {
    id: "583007057",
    name: "tradetrackr API",
    description: ".NET 8.0 Web API for tradetrackr client app",
    html_url: "https://github.com/emetos05/tradetrackr_api",
    homepage: "https://tradetrackr-kgdc.onrender.com/swagger/index.html",
    preview: "/images/tradetrackr_api.png",
    language: "C#",
    topics: ["trades", "clients", "jobs", "invoices"],
    updated_at: "2025-07-28T21:38:25Z",
    created_at: "2025-05-09T13:42:57Z",
    stargazers_count: 0,
    forks_count: 0,
    open_issues_count: 0,
    has_pages: false,
    visibility: "public",
  },
];

export const featuredProjects = [
  "tradetrackr client",
  "saskfund",
  "invoicetrack",
  "tradetrackr API",
];
