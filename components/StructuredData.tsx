export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Adarsh Kumar Singh",

    url: "https://www.adarshinfo.in",

    image: "https://www.adarshinfo.in/images/profile.jpg",

    email: "mailto:contact@adarshinfo.in",

    jobTitle: "IT Team Leader | System Administrator",

    description:
      "IT Team Leader specializing in Windows Server, Active Directory, Networking, Infrastructure Management, Automation and Full Stack Development.",

    sameAs: [
      "https://github.com/akbengaltiger",
      "https://www.linkedin.com/in/singhadarshkumar",
      "https://www.instagram.com/singh.saahab_13",
      "https://www.youtube.com/channel/UC-ZSkRakPIPLBpYMWN7BG7A",
    ],

    worksFor: {
      "@type": "Organization",
      name: "Finmech Business Services Pvt. Ltd.",
    },

    knowsAbout: [
      "Windows Server",
      "Active Directory",
      "Networking",
      "Docker",
      "Linux",
      "Ubuntu",
      "Virtualization",
      "Next.js",
      "React",
      "Cyber Security",
      "Infrastructure",
      "Automation",
      "System Administration",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}