export const metadata = {
  title: "Our Services",
  description:
    "Discover the range of architectural, construction, interior design, planning, and consultation services offered by Sthapatya Web. We deliver tailored solutions with precision and creativity.",
  keywords: [
    "architecture services",
    "construction services",
    "interior design services",
    "building planning",
    "house elevation services",
    "architectural consultancy",
    "Sthapatya Web services",
    "design and build services"
  ],
  openGraph: {
    title: "Our Services – Sthapatya Web",
    description:
      "Explore our comprehensive services in architecture, planning, interior design, construction, and project management.",
    url: "https://sthapatya-web.vercel.app/services",
    images: [
      {
        url: "/og-services.jpg",  // change to your banner image
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services – Sthapatya Web",
    description:
      "We offer expert services in architecture, planning, interior design, and construction with a focus on quality and innovation.",
    images: ["/og-services.jpg"],
  },
};
import ServicePageClient from "./ServicePageClient";

export default function ServicesPage(){
    return<ServicePageClient/>
}