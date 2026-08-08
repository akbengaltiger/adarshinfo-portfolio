export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tech: string[];
  github: string;
  demo: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IT Governance Portal",
    description:
      "Enterprise IT Governance Portal developed using Laravel with RBAC, audit logs, document management, compliance tracking, and dashboard analytics.",
    tech: [
      "Laravel",
      "PHP",
      "MySQL",
      "Docker",
      "Bootstrap",
      "REST API",
    ],
    github: "https://github.com/akbengaltiger",
    demo: "https://adarshinfo.in",
    featured: true,
  },

  {
    id: 2,
    title: "Asset Inventory Management",
    description:
      "Centralized IT asset inventory system with QR code generation, employee mapping, reporting, and complete asset lifecycle tracking.",
    tech: [
      "Laravel",
      "MySQL",
      "Bootstrap",
      "QR Code",
    ],
    github: "https://github.com/akbengaltiger",
    demo: "https://adarshinfo.in",
  },

  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Personal portfolio built using Next.js, Tailwind CSS, Framer Motion, EmailJS, responsive design, and modern UI/UX.",
    tech: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "EmailJS",
      "Framer Motion",
    ],
    github: "https://github.com/akbengaltiger",
    demo: "https://adarshinfo.in",
  },

  {
    id: 4,
    title: "Vulnerability Assessment Manager",
    description:
      "Security dashboard for vulnerability management, endpoint monitoring, report generation, vulnerability tracking, and remediation management.",
    tech: [
      "Laravel",
      "Docker",
      "Linux",
      "MySQL",
      "REST API",
    ],
    github: "https://github.com/akbengaltiger",
    demo: "https://adarshinfo.in",
  },

  {
    id: 5,
    title: "Desktop Support Automation",
    description:
      "Automation tools for Windows administration, software deployment, reporting, PowerShell scripting, system management, and IT operations.",
    tech: [
      "PowerShell",
      "Windows",
      "Active Directory",
      "Batch",
    ],
    github: "https://github.com/akbengaltiger",
    demo: "https://adarshinfo.in",
  },

  {
    id: 6,
    title: "Infrastructure Monitoring",
    description:
      "Infrastructure monitoring solution using Grafana, Zabbix, Wazuh, and Docker for real-time server health monitoring, alerts, and operational visibility.",
    tech: [
      "Grafana",
      "Zabbix",
      "Docker",
      "Linux",
      "Wazuh",
    ],
    github: "https://github.com/akbengaltiger",
    demo: "https://adarshinfo.in",
  },
];