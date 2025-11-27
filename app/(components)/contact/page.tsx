export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Sthapatya Web for architecture, construction, interior design, and planning services. We are here to assist you with all your project inquiries.",
  keywords: [
    "contact Sthapatya Web",
    "architecture contact",
    "construction services",
    "interior design consultation",
    "building planning enquiry",
    "architect support"
  ],
  openGraph: {
    title: "Contact Sthapatya Web",
    description:
      "Reach out to Sthapatya Web for professional architectural, planning, interior, and construction services. We respond quickly to all enquiries.",
    url: "https://sthapatya-web.vercel.app/contact",
    images: [
      {
        url: "/og-contact.jpg", // replace with your actual image
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Sthapatya Web",
    description:
      "We provide complete support for architecture, planning, interior, and construction services. Contact us today.",
    images: ["/og-contact.jpg"],
  },
};

import ContactPageClient from "./ContactPageClient";

export default function ContactPage(){
    return<ContactPageClient/>
}