export const metadata = {
  title: "Our Projects",
  description:
    "Explore Sthapatya Web’s completed and ongoing projects in architecture, construction, interior design, and planning. View our portfolio showcasing quality, innovation, and craftsmanship.",
  keywords: [
    "architecture projects",
    "construction projects",
    "interior design projects",
    "building design portfolio",
    "Sthapatya Web projects",
    "residential projects",
    "commercial projects",
    "architectural portfolio"
  ],
  openGraph: {
    title: "Our Projects – Sthapatya Web",
    description:
      "Discover our wide range of architectural and construction projects that highlight creativity, precision, and modern design expertise.",
    url: "https://sthapatya-web.vercel.app/projectpage",
    images: [
      {
        url: "/og-projects.jpg", // replace with your project banner
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects – Sthapatya Web",
    description:
      "Browse our architectural, interior, and construction projects that demonstrate our commitment to excellence.",
    images: ["/og-projects.jpg"],
  },
};

import ProjectPageClient from "./ProjectPageClient";

export default function ProjectsPage(){
    return<ProjectPageClient/>
}