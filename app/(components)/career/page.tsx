export const metadata = {
  title: "Career",
  description:
    "Explore career opportunities at Sthapatya Web. Join our team of passionate professionals in architecture, construction, interior design, and planning.",
  keywords: [
    "career at Sthapatya Web",
    "architecture jobs",
    "construction jobs",
    "interior design careers",
    "architect hiring",
    "planning engineer jobs",
    "work with Sthapatya Web"
  ],
  openGraph: {
    title: "Career at Sthapatya Web",
    description:
      "Build your future with Sthapatya Web. We offer opportunities in architecture, interior design, planning, construction, and project management.",
    url: "https://your-domain.com/career",
    images: [
      {
        url: "/og-career.jpg", // replace with your image
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Career at Sthapatya Web",
    description:
      "Join our team and grow your career in architecture, planning, interior design, and construction services.",
    images: ["/og-career.jpg"],
  },
};
import CareerPageClient from "./CareerPageClient";

export default function CareerPage(){
    return<CareerPageClient/>
}