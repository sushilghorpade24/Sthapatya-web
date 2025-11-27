"use client"

import { motion } from "motion/react";
import {
    MapPin,
    Briefcase,
    Clock,
    TrendingUp,
    Heart,
    Award,
    Users,
    Target,
    Code,
    BarChart,
    Headphones,
    FolderKanban,
    Send,
    X,
    Plus,
    Trash2,
    CheckCircle2,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useEffect, useRef, useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { getThemeColors } from "@/app/common/serverutility/getThemeColors";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import { Checkbox } from "../ui/checkbox";
import { toast } from "sonner";
import { Label } from "../ui/label";

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
    url: "https://sthapatya-web.vercel.app/career",
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

interface WorkExperience {
    id: number;
    companyName: string;
    jobRole: string;
    jobDescription: string;
    startDate: string;
    endDate: string;
    currentlyWorking: boolean;
}
interface CareerFormData {

    fullName: string;
    email: string;
    mobile: string;
    address: string;
    noticePeriod: string;

    additionalInfo: string;
    resume: File | null;
}
interface CultureSlide {
    id: number;
    title: string;
    subtitle: string;
    hashtag: string;
    points: string[];
    image: string;
}
interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  text?: string;
  background?: string;
}

// Culture Carousel Component with Auto-play
function CultureCarousel({ colors, cultureSlides }: { colors: ThemeColors; cultureSlides: CultureSlide[] }) {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [currentIndex, setCurrentIndex] = useState(0);
   const autoplayRef = useRef<NodeJS.Timeout | null>(null);
const isAutoScrollingRef = useRef<boolean>(false);

    // Reset autoplay timer
    const resetAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
        autoplayRef.current = setInterval(() => {
            if (carouselApi?.canScrollNext()) {
                isAutoScrollingRef.current = true;
                carouselApi.scrollNext();
            } else {
                isAutoScrollingRef.current = true;
                carouselApi?.scrollTo(0);
            }
        }, 3500);
    };

    useEffect(() => {
        if (!carouselApi) {
            return;
        }

        // Update current index when carousel scrolls
        carouselApi.on("select", () => {
            setCurrentIndex(carouselApi.selectedScrollSnap());

            // If this was a manual scroll (not auto), reset the timer
            if (!isAutoScrollingRef.current) {
                resetAutoplay();
            }
            // Reset the flag
            isAutoScrollingRef.current = false;
        });

        // Start autoplay
        resetAutoplay();

        // Cleanup
        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [carouselApi]);

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-10 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4" style={{ fontWeight: 700, color: colors.text }}>
                        Our Culture & Values
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
                        Experience a workplace that values your well-being, growth, and contributions
                    </p>
                </motion.div>

                <Carousel
                    setApi={setCarouselApi}
                    className="w-full"
                    opts={{ align: "start", loop: true }}
                >
                    <CarouselContent>
                        {cultureSlides.map((slide, index) => {
                            // Different background colors for each slide
                            const cardBackgrounds = [
                                'linear-gradient(135deg, #FED7B0 0%, #F9C89B 100%)', // Peachy orange
                                'linear-gradient(135deg, #C8E6F5 0%, #A5D8F0 100%)', // Light blue
                                'linear-gradient(135deg, #E5D4F7 0%, #D4BBEF 100%)'  // Light purple
                            ];

                            return (
                                <CarouselItem key={slide.id}>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
                                        style={{
                                            background: cardBackgrounds[index % cardBackgrounds.length]
                                        }}
                                    >
                                        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-0">
                                            {/* Left Side - Content */}
                                            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
                                                <h3
                                                    className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4"
                                                    style={{
                                                        fontWeight: 700,
                                                        color: colors.primary
                                                    }}
                                                >
                                                    {slide.title}
                                                </h3>
                                                <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8" style={{ color: '#1F2937' }}>
                                                    {slide.subtitle}
                                                </p>

                                                <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                                                    {slide.points.map((point, idx) => (
                                                        <div key={idx} className="pb-3 sm:pb-4 border-b border-gray-400/40">
                                                            <div className="flex items-start gap-3">
                                                                <CheckCircle2
                                                                    className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5"
                                                                    style={{ color: colors.accent }}
                                                                />
                                                                <p className="text-sm sm:text-base" style={{ color: '#1F2937' }}>
                                                                    {point}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right Side - Image */}
                                            <div className="relative h-80 sm:h-96 lg:h-[420px] order-1 lg:order-2 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                                                <div className="relative w-full h-full max-w-xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
                                                    <ImageWithFallback
                                                        src={slide.image}
                                                        alt={slide.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    {/* Overlay with Hashtag */}
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end pb-4 sm:pb-6">
                                                        <h4
                                                            className="text-xl sm:text-2xl lg:text-3xl text-white mb-1 sm:mb-2"
                                                            style={{ fontWeight: 700 }}
                                                        >
                                                            {slide.title}
                                                        </h4>
                                                        <p
                                                            className="text-sm sm:text-base lg:text-lg text-white/90"
                                                            style={{ fontWeight: 500 }}
                                                        >
                                                            {slide.hashtag}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>

                    {/* Custom Navigation Buttons - Fully Responsive */}
                    <CarouselPrevious
                        className="left-2 sm:left-3 md:left-4 lg:-left-12 xl:-left-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-x-1 border-0 z-20 [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-4 sm:[&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6"
                        style={{
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                            color: 'white'
                        }}
                    />
                    <CarouselNext
                        className="right-2 sm:right-3 md:right-4 lg:-right-12 xl:-right-16 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-x-1 border-0 z-20 [&>svg]:w-3.5 [&>svg]:h-3.5 sm:[&>svg]:w-4 sm:[&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5 lg:[&>svg]:w-6 lg:[&>svg]:h-6"
                        style={{
                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                            color: 'white'
                        }}
                    />
                </Carousel>

                {/* Active Indicator Dots - Responsive */}
                <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5 md:mt-6">
                    {cultureSlides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                carouselApi?.scrollTo(idx);
                            }}
                            className="transition-all duration-300 cursor-pointer hover:opacity-75"
                            aria-label={`Go to slide ${idx + 1}`}
                        >
                            <div
                                className={`rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'w-6 h-1.5 sm:w-7 sm:h-2 md:w-8 md:h-2'
                                    : 'w-1.5 h-1.5 sm:w-2 sm:h-2'
                                    }`}
                                style={{
                                    backgroundColor: idx === currentIndex ? colors.primary : '#D1D5DB'
                                }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function CareerPage() {
    const { colors } = getThemeColors();
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    const [hasWorkExperience, setHasWorkExperience] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(10);
    const formRef = useRef<HTMLFormElement>(null);
    const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
        {
            id: 1,
            companyName: "",
            jobRole: "",
            jobDescription: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
        }
    ]);

    // Culture & Values Carousel Data
    const cultureSlides = [
        {
            id: 1,
            title: "#InnovationFirst",
            subtitle: "Nurturing everyone's physical and mental wellness through",
            hashtag: "#ThriveAtSthapatya",
            points: [
                "Support and empathy for colleagues during challenging times",
                "Awareness about menstrual and menopausal health",
                "Measures to reduce stress and promote work-life balance"
            ],
            image: "/image_data/CareerPage/career6.avif"
        },
        {
            id: 2,
            title: "#GrowthCulture",
            subtitle: "Empowering every team member to reach their full potential through",
            hashtag: "#LearnAndGrow",
            points: [
                "Continuous learning and skill development programs",
                "Career advancement opportunities across departments",
                "Mentorship from industry leaders and experts"
            ],
            image: "/image_data/CareerPage/career1.avif"
        },
        {
            id: 3,
            title: "#WellnessMatters",
            subtitle: "Building tomorrow's solutions for municipal governance through",
            hashtag: "#TechForGood",
            points: [
                "Cutting-edge GIS and IT solutions development",
                "Collaboration with leading technology partners",
                "Impact-driven projects transforming urban India"
            ],
            image: "/image_data/CareerPage/career2.avif"
        },
        {
            id: 4,
            title: "#Growth",
            subtitle: "Building tomorrow's solutions for municipal governance through",
            hashtag: "#TechForGood",
            points: [
                "Cutting-edge GIS and IT solutions development",
                "Collaboration with leading technology partners",
                "Impact-driven projects transforming urban India"
            ],
            image: "/image_data/CareerPage/career7.avif"
        },
        {
            id: 5,
            title: "#InnovationFirst",
            subtitle: "Building tomorrow's solutions for municipal governance through",
            hashtag: "#TechForGood",
            points: [
                "Cutting-edge GIS and IT solutions development",
                "Collaboration with leading technology partners",
                "Impact-driven projects transforming urban India"
            ],
            image: "/image_data/CareerPage/career5.avif"
        },
        {
            id: 6,
            title: "#HappyTeam",
            subtitle: "Building tomorrow's solutions for municipal governance through",
            hashtag: "#TechForGood",
            points: [
                "Cutting-edge GIS and IT solutions development",
                "Collaboration with leading technology partners",
                "Impact-driven projects transforming urban India"
            ],
            image: "/image_data/CareerPage/career3.avif"
        }
    ];

    // Form state
    const [formData, setFormData] = useState<CareerFormData>({
        fullName: "",
        email: "",
        mobile: "",
        address: "",
        noticePeriod: "",
        additionalInfo: "",
        resume: null,
    });

    const positions = [
        {
            id: 1,
            title: ".NET Core Developer [Intern]",
            department: "Technology",
            category: "Technology",
            location: "Pune, Maharashtra",
            type: "Internship | Walk-In",
            experience: "Freshers",
            icon: MapPin,
            responsibilities: [
                "Develop RESTful APIs using ASP.NET Core, Dapper, SQL, and design patterns.",
                "Work with Web API, JavaScript / jQuery, and JWT token authentication.",
                "Collaborate using GitHub and version control systems.",
                "Exposure to Microservices architecture is a plus.",
                "Collaborate with teams",

            ]
        },
        {
            id: 2,
            title: "Full Stack Mobile Developer",
            department: "Technology",
            category: "Technology",
            location: "Pune, Maharashtra",
            type: "Internship | Walk-In",
            experience: "Freshers",
            icon: Users,
            responsibilities: [
                "Build and maintain Android apps using Java / Kotlin / Flutter / React Native.",
                "Integrate APIs, Room DB, and Retrofit.",
                "Collaborate with UI/UX and backend teams.",
                "Follow MVVM / MVP architecture and Clean Code practices.",
                "Maintain quality standards"
            ]
        },
        {
            id: 3,
            title: "Digital Marketing Intern", 
            department: "Analytics",
            category: "Analytics",
            location: "Pune, Maharashtra",
            type: "Internship | Walk-In",
            experience: "Freshers",
            icon: BarChart,
            responsibilities: [
                "Create and edit engaging visual content for social media and campaigns",
                "Work on graphic design and video editing projects.",
                "Assist in implementing social media optimization strategies.",
                "Support decision-making processes",
                "Hands-on experience with Canva, CorelDRAW, CAPCUT, etc.",
                "Good knowledge of Graphic Design and Video Editing.",
                "Understanding of digital trends and analytics."
            ]
        },
        {
            id: 4,
            title: "Network Engineer",
            department: "Technology",
            category: "Technology",
            location: "Pune, Maharashtra",
            type: "Full-Time | Walk-In",
            experience: "2 years",
            icon: FolderKanban,
            responsibilities: [
                "Manage and troubleshoot TCP/IP, DNS, DHCP, VLANs, and VPNs.",
                "Configure and maintain Cisco, MikroTik, and Fortinet network hardware.",
                "Handle firewall management, monitoring tools, and routing protocols.",
                "Ensure cybersecurity and access control compliance.",
                "Certifications like CCNA, CompTIA Network+ preferred.",
                "Client relationship management"
            ]
        },
        {
            id: 5,
            title: "Human Resource Intern",
            department: "Management",
            category: "Management",
            location: " Pune, Maharashtra",
            type: "Internship / Full-Time | Walk-In",
            experience: "Freshers",
            icon: Code,
            responsibilities: [
                "Assist in recruitment, onboarding, and employee engagement.",
                "Maintain HR records and support performance processes.",
                "Learn and apply MS Office tools for HR operations.",
                "Excellent communication and interpersonal skills.",
                "Proficiency in MS Office (Excel, Word, Outlook).",
            ]
        },
        {
            id: 6,
            title: "Receptionist (Male/Female)",
            department: "Support",
            category: "Support",
            location: "Pune, Maharashtra",
            type: "Internship / Full-Time | Walk-In",
            experience: "Freshers",
            icon: Headphones,
            responsibilities: [
                "Manage calls, visitors, and front-desk operations.",
                "Maintain professionalism and confidentiality.",
                "Support administrative coordination.",
                "MBA / Bachelor’s in HR or relevant field.",
                "Excellent communication and interpersonal skills.",
                "Proficiency in MS Office (Excel, Word, Outlook)."
            ]
        },
        {
            id: 7,
            title: "GIS Analyst",
            department: "Technology",
            category: "Technology",
            location: "Pune, Maharashtra",
            type: " Internship | Walk-In",
            experience: "Freshers",
            icon: Code,
            responsibilities: [
                "Work on GIS mapping and spatial data analysis.",
                "Use tools like ArcGIS, QGIS, AutoCAD, and Google Earth.",
                "Support mapping projects for ULBs and government clients.",
                "B.E. / B.Tech (Civil), M.Tech, M.Sc (GIS) for GIS role.",
                "Optimize spatial queries",
                "Implement advanced mapping features"
            ]
        },
        {
            id: 8,
            title: "Data Entry Operator ( Intern )",
            department: "Analytics",
            category: "Analytics",
            location: "Pune, Maharashtra",
            type: "Intern",
            experience: "Freshers",
            icon: BarChart,
            responsibilities: [
                "Data entry with accuracy (30–40 WPM).",
                "Handle Excel and Word documentation.",
                "Maintain data confidentiality and integrity.",
                "B.E. / B.Tech (Civil), M.Tech, M.Sc (GIS) for GIS role.",
                "Any Graduate for Data Entry role."
            ]
        },
        //{
        //    id: 9,
        //    title: "Field Operations Manager",
        //    department: "Operations",
        //    category: "Operations",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "4-6 years",
        //    icon: Users,
        //    responsibilities: [
        //        "Manage field survey teams",
        //        "Plan and execute survey operations",
        //        "Monitor survey progress",
        //        "Ensure quality compliance",
        //        "Handle stakeholder coordination",
        //        "Optimize field processes"
        //    ]
        //},
        //{
        //    id: 10,
        //    title: "Business Analyst",
        //    department: "Analytics",
        //    category: "Analytics",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "3-5 years",
        //    icon: BarChart,
        //    responsibilities: [
        //        "Analyze business requirements",
        //        "Create functional specifications",
        //        "Design process improvements",
        //        "Support system implementations",
        //        "Generate business insights",
        //        "Facilitate stakeholder meetings"
        //    ]
        //},
        //{
        //    id: 11,
        //    title: "Technical Support Lead",
        //    department: "Support",
        //    category: "Support",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "3-5 years",
        //    icon: Headphones,
        //    responsibilities: [
        //        "Lead support team operations",
        //        "Handle escalated issues",
        //        "Improve support processes",
        //        "Conduct training programs",
        //        "Monitor support metrics",
        //        "Ensure SLA compliance"
        //    ]
        //},
        //{
        //    id: 12,
        //    title: "Senior Project Manager",
        //    department: "Management",
        //    category: "Management",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "8-12 years",
        //    icon: FolderKanban,
        //    responsibilities: [
        //        "Lead multiple ULB projects",
        //        "Strategic planning and execution",
        //        "Manage project portfolios",
        //        "Client relationship management",
        //        "Team leadership and development",
        //        "Budget and resource optimization"
        //    ]
        //},
        //{
        //    id: 13,
        //    title: "Survey Team Leader",
        //    department: "Operations",
        //    category: "Operations",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "2-4 years",
        //    icon: Users,
        //    responsibilities: [
        //        "Lead survey teams on-ground",
        //        "Ensure survey quality standards",
        //        "Train new survey members",
        //        "Coordinate with local authorities",
        //        "Monitor daily targets",
        //        "Resolve field challenges"
        //    ]
        //},
        //{
        //    id: 14,
        //    title: "Full Stack Developer",
        //    department: "Technology",
        //    category: "Technology",
        //    location: "Pune, Maharashtra",
        //    type: "Full-time",
        //    experience: "3-6 years",
        //    icon: Code,
        //    responsibilities: [
        //        "Develop web applications",
        //        "Build RESTful APIs",
        //        "Database design and optimization",
        //        "Implement frontend features",
        //        "Code reviews and testing",
        //        "Deploy and maintain applications"
        //    ]
        //},
        //{
        //    id: 15,
        //    title: "UI/UX Designer",
        //    department: "Technology",
        //    category: "Technology",
        //    location: "Pune, Maharashtra",
        //    type: "Full-time",
        //    experience: "2-4 years",
        //    icon: Code,
        //    responsibilities: [
        //        "Design user interfaces",
        //        "Create wireframes and prototypes",
        //        "Conduct user research",
        //        "Develop design systems",
        //        "Collaborate with developers",
        //        "Ensure accessibility standards"
        //    ]
        //},
        //{
        //    id: 16,
        //    title: "Data Engineer",
        //    department: "Analytics",
        //    category: "Analytics",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "3-5 years",
        //    icon: BarChart,
        //    responsibilities: [
        //        "Build data pipelines",
        //        "Design data warehouse solutions",
        //        "Optimize ETL processes",
        //        "Implement data integration",
        //        "Ensure data security",
        //        "Monitor data infrastructure"
        //    ]
        //},
        //{
        //    id: 17,
        //    title: "Client Success Manager",
        //    department: "Support",
        //    category: "Support",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "4-6 years",
        //    icon: Headphones,
        //    responsibilities: [
        //        "Manage client relationships",
        //        "Ensure client satisfaction",
        //        "Drive product adoption",
        //        "Identify upsell opportunities",
        //        "Conduct business reviews",
        //        "Resolve client concerns"
        //    ]
        //},
        //{
        //    id: 18,
        //    title: "Assistant Project Manager",
        //    department: "Management",
        //    category: "Management",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "2-4 years",
        //    icon: FolderKanban,
        //    responsibilities: [
        //        "Support project execution",
        //        "Coordinate project activities",
        //        "Track project milestones",
        //        "Prepare project reports",
        //        "Assist in stakeholder management",
        //        "Monitor project documentation"
        //    ]
        //},
        //{
        //    id: 19,
        //    title: "Survey Coordinator",
        //    department: "Operations",
        //    category: "Operations",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "1-3 years",
        //    icon: Users,
        //    responsibilities: [
        //        "Plan survey schedules",
        //        "Allocate resources",
        //        "Monitor survey progress",
        //        "Ensure data quality",
        //        "Generate progress reports",
        //        "Support field teams"
        //    ]
        //},
        //{
        //    id: 20,
        //    title: "DevOps Engineer",
        //    department: "Technology",
        //    category: "Technology",
        //    location: "Pune, Maharashtra",
        //    type: "Full-time",
        //    experience: "3-5 years",
        //    icon: Code,
        //    responsibilities: [
        //        "Manage cloud infrastructure",
        //        "Implement CI/CD pipelines",
        //        "Monitor system performance",
        //        "Ensure application security",
        //        "Automate deployment processes",
        //        "Handle incident management"
        //    ]
        //},
        //{
        //    id: 21,
        //    title: "Training Specialist",
        //    department: "Support",
        //    category: "Support",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "2-4 years",
        //    icon: Headphones,
        //    responsibilities: [
        //        "Develop training materials",
        //        "Conduct user training sessions",
        //        "Create documentation",
        //        "Assess training effectiveness",
        //        "Support knowledge transfer",
        //        "Maintain training records"
        //    ]
        //},
        //{
        //    id: 22,
        //    title: "Quality Assurance Lead",
        //    department: "Technology",
        //    category: "Technology",
        //    location: "Multiple locations",
        //    type: "Full-time",
        //    experience: "4-6 years",
        //    icon: Code,
        //    responsibilities: [
        //        "Lead QA team activities",
        //        "Develop test strategies",
        //        "Conduct test automation",
        //        "Ensure quality standards",
        //        "Perform regression testing",
        //        "Document test results"
        //    ]
        //}
    ];

    // Get unique categories from positions
    const categories = ["All", ...Array.from(new Set(positions.map(p => p.category)))];

    // Filter positions based on selected category
    const filteredPositions = selectedCategory === "All"
        ? positions
        : positions.filter(p => p.category === selectedCategory);

    // Get visible positions based on pagination
    const visiblePositions = filteredPositions.slice(0, visibleCount);
    const hasMore = visibleCount < filteredPositions.length;

    const [selectedPosition, setSelectedPosition] = useState(positions[0]);

    // Reset visible count when category changes
    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
        setVisibleCount(10);
        // Set first position of the filtered category as selected
        const firstInCategory = category === "All"
            ? positions[0]
            : positions.find(p => p.category === category) || positions[0];
        setSelectedPosition(firstInCategory);

        // Smooth scroll to positions section
        setTimeout(() => {
            document.getElementById('open-positions')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }, 100);
    };

    const benefits = [
        {
            icon: TrendingUp,
            title: "Career Growth",
            desc: "Continuous learning opportunities and clear career progression paths"
        },
        {
            icon: Heart,
            title: "Work-Life Balance",
            desc: "Flexible working arrangements and supportive work environment"
        },
        {
            icon: Award,
            title: "Impact & Recognition",
            desc: "Make a difference in urban governance and get recognized for your contributions"
        }
    ];

    // Handle form field changes
    const handleFormChange = (field: keyof typeof formData, value: unknown) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();

            // Set position and department from selected position
            formDataToSend.append("PositionTitle", selectedPosition.title);
            formDataToSend.append("Department", selectedPosition.department);

            // Other fields
            formDataToSend.append("FullName", formData.fullName || "");
            formDataToSend.append("Email", formData.email || "");
            formDataToSend.append("Mobile", formData.mobile || "");
            formDataToSend.append("Address", formData.address || "");
            formDataToSend.append("NoticePeriod", formData.noticePeriod || "");

            // Format work experience properly for email readability
            let workExpString;
            if (hasWorkExperience && workExperiences.length > 0) {
                workExpString = workExperiences.map((exp, index) => {
                    const currentWorkingText = exp.currentlyWorking ? " (Currently Working)" : "";
                    const endDateText = exp.currentlyWorking ? "Present" : exp.endDate;

                    return `Experience ${index + 1}:
Company: ${exp.companyName}
Role: ${exp.jobRole}
Description: ${exp.jobDescription}
Period: ${exp.startDate} to ${endDateText}${currentWorkingText}`;
                }).join('\n\n');
            } else {
                workExpString = "No work experience provided";
            }

            formDataToSend.append("WorkExperience", workExpString);
            formDataToSend.append("AdditionalInfo", formData.additionalInfo || "");

            // Resume file
            if (formData.resume instanceof File) {
                formDataToSend.append("ResumeFile", formData.resume);
            }

            // Debug: Log all form data
            console.log("=== FORM DATA BEING SENT ===");
            for (const [key, value] of formDataToSend.entries()) {
                console.log(`${key}:`, value);
            }

            // API call with better error handling
            const response = await fetch("https://sthapatyabackend.tabamc.in/api/career/apply", {
                method: "POST",
                body: formDataToSend,
            });

            console.log("Response status:", response.status);

            if (!response.ok) {
                const errorText = await response.text();
                console.error("Server error response:", errorText);
                throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`);
            }

            const result = await response.json();
            console.log("Success response:", result);

            if (result.success) {
                toast.success("✅ Application submitted successfully!");
                // Reset form
                setFormData({
                    fullName: "",
                    email: "",
                    mobile: "",
                    address: "",
                    noticePeriod: "",
                    additionalInfo: "",
                    resume: null,
                });
                setWorkExperiences([{
                    id: 1,
                    companyName: "",
                    jobRole: "",
                    jobDescription: "",
                    startDate: "",
                    endDate: "",
                    currentlyWorking: false,
                }]);
                setHasWorkExperience(false);
                setIsApplicationOpen(false);
            } else {
                toast.error(`❌ ${result.message || "Failed to submit application"}`);
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error("❌ Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const addWorkExperience = () => {
        setWorkExperiences([
            ...workExperiences,
            {
                id: Date.now(),
                companyName: "",
                jobRole: "",
                jobDescription: "",
                startDate: "",
                endDate: "",
                currentlyWorking: false,
            }
        ]);
    };

    const removeWorkExperience = (id: number) => {
        if (workExperiences.length > 1) {
            setWorkExperiences(workExperiences.filter(exp => exp.id !== id));
        }
    };

    const updateWorkExperience = (id: number, field: keyof WorkExperience, value: unknown) => {
        setWorkExperiences(prevExperiences =>
            prevExperiences.map(exp => {
                if (exp.id === id) {
                    // If updating currentlyWorking to true, also clear the endDate
                    if (field === 'currentlyWorking' && value === true) {
                        return { ...exp, [field]: value, endDate: '' };
                    }
                    return { ...exp, [field]: value };
                }
                return exp;
            })
        );
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image - FIXED: Added proper top padding for navbar */}
            <div className="relative pt-20 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/image_data/Website_Hero_Section/career.avif"
                        alt="Career Opportunities"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 md:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center max-w-5xl mx-auto"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-5 text-white px-4"
                            style={{ fontWeight: 700 }}
                        >
                            Build Your Future
                            <br />
                            <span style={{ color: colors.accent }}>Transform Urban India</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
                        >
                            Join 800+ professionals making a real impact on municipal governance across Maharashtra
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <button
                                onClick={() => {
                                    document.getElementById('open-positions')?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start'
                                    });
                                }}
                                className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                                    color: 'white',
                                    fontWeight: 600
                                }}
                            >
                                View Open Positions
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Culture & Values Carousel */}
            <CultureCarousel colors={colors} cultureSlides={cultureSlides} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 sm:mb-8"
                >
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all text-xs sm:text-sm ${selectedCategory === category
                                    ? 'shadow-lg'
                                    : 'border-2 border-gray-300 hover:border-gray-400'
                                    }`}
                                style={selectedCategory === category ? {
                                    backgroundColor: colors.primary,
                                    color: 'white',
                                    fontWeight: 600
                                } : {
                                    backgroundColor: 'white',
                                    color: colors.text,
                                    fontWeight: 500
                                }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div id="open-positions" className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8 lg:mb-12">
                    {/* Position Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-1"
                    >
                        <div className="lg:sticky lg:top-24">
                            <div className="mb-3 sm:mb-4">
                                <div className="w-12 sm:w-16 h-1 mb-2 sm:mb-3 lg:mb-4 rounded-full" style={{ backgroundColor: colors.accent }} />
                                <h2 className="text-lg sm:text-xl lg:text-2xl" style={{ fontWeight: 700, color: colors.text }}>
                                    Open Positions
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">
                                    Showing {visiblePositions.length} of {filteredPositions.length} {selectedCategory !== "All" ? selectedCategory : ""} positions
                                </p>
                            </div>

                            <div className="space-y-2 max-h-[300px] sm:max-h-[350px] lg:max-h-[450px] overflow-y-auto pr-1 sm:pr-2 custom-scrollbar">
                                {visiblePositions.map((position) => (
                                    <motion.button
                                        key={position.id}
                                        onClick={() => setSelectedPosition(position)}
                                        whileHover={{ x: 5 }}
                                        className={`w-full text-left p-2.5 sm:p-3 lg:p-4 rounded-lg sm:rounded-xl border-2 transition-all ${selectedPosition.id === position.id
                                            ? 'border-transparent shadow-lg'
                                            : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        style={selectedPosition.id === position.id ? {
                                            backgroundColor: colors.primary,
                                            color: 'white'
                                        } : {}}
                                    >
                                        <div className="flex items-start gap-2 sm:gap-2.5 lg:gap-3">
                                            <position.icon
                                                size={16}
                                                className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 mt-0.5 ${selectedPosition.id === position.id ? 'text-white' : ''}`}
                                                style={selectedPosition.id !== position.id ? { color: colors.accent } : {}}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <h3
                                                    className="text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1 line-clamp-2"
                                                    style={{
                                                        fontWeight: 600,
                                                        color: selectedPosition.id === position.id ? 'white' : colors.text
                                                    }}
                                                >
                                                    {position.title}
                                                </h3>
                                                <p className={`text-[10px] sm:text-xs lg:text-sm truncate ${selectedPosition.id === position.id ? 'text-white/80' : 'text-gray-500'}`}>
                                                    {position.location}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.button>
                                ))}
                            </div>

                            {/* Show More Button */}
                            {hasMore && (
                                <motion.button
                                    onClick={() => setVisibleCount(prev => prev + 10)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-3 px-4 py-2.5 rounded-lg border-2 transition-all text-xs sm:text-sm"
                                    style={{
                                        borderColor: colors.accent,
                                        color: colors.primary,
                                        fontWeight: 600,
                                        backgroundColor: 'white'
                                    }}
                                >
                                    Show More ({filteredPositions.length - visibleCount} remaining)
                                </motion.button>
                            )}
                        </div>
                    </motion.div>

                    {/* Position Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 xl:p-8 border-2 border-gray-200 shadow-lg">
                            {/* Position Header */}
                            <div className="mb-4 sm:mb-6 lg:mb-8">
                                <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
                                    <div
                                        className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{ backgroundColor: `${colors.accent}20` }}
                                    >
                                        <selectedPosition.icon size={20} className="sm:w-6 sm:h-6 lg:w-8 lg:h-8" style={{ color: colors.accent }} />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl mb-1 sm:mb-1.5 lg:mb-2" style={{ fontWeight: 700, color: colors.text }}>
                                            {selectedPosition.title}
                                        </h2>
                                        <p className="text-xs sm:text-sm lg:text-base text-gray-600">{selectedPosition.department}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3">
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gray-50 rounded-full">
                                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0" style={{ color: colors.accent }} />
                                        <span className="text-[10px] sm:text-xs lg:text-sm text-gray-700">{selectedPosition.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gray-50 rounded-full">
                                        <Briefcase size={12} className="sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0" style={{ color: colors.accent }} />
                                        <span className="text-[10px] sm:text-xs lg:text-sm text-gray-700">{selectedPosition.type}</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gray-50 rounded-full">
                                        <Clock size={12} className="sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0" style={{ color: colors.accent }} />
                                        <span className="text-[10px] sm:text-xs lg:text-sm text-gray-700">{selectedPosition.experience}</span>
                                    </div>
                                </div>
                            </div>

                            {/* About This Role */}
                            <div className="mb-4 sm:mb-6 lg:mb-8">
                                <h3 className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4" style={{ fontWeight: 600, color: colors.text }}>
                                    About This Role
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                                    We are looking for a talented {selectedPosition.title} to join our {selectedPosition.department} team.
                                    This role offers an exciting opportunity to work on large-scale municipal projects across Maharashtra
                                    and contribute to transforming urban governance.
                                </p>
                            </div>

                            {/* Key Responsibilities */}
                            <div className="mb-4 sm:mb-6 lg:mb-8">
                                <h3 className="text-base sm:text-lg lg:text-xl mb-2 sm:mb-3 lg:mb-4" style={{ fontWeight: 600, color: colors.text }}>
                                    Key Responsibilities
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-2.5 lg:gap-3">
                                    {selectedPosition.responsibilities.map((responsibility, index) => (
                                        <div key={index} className="flex items-start gap-1.5 sm:gap-2">
                                            <Target size={12} className="sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 flex-shrink-0 mt-0.5 sm:mt-1" style={{ color: colors.accent }} />
                                            <span className="text-[10px] sm:text-xs lg:text-sm text-gray-700">{responsibility}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Apply Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setIsApplicationOpen(true)}
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full text-white shadow-lg text-sm sm:text-base"
                                style={{ backgroundColor: colors.primary, fontWeight: 600 }}
                            >
                                Apply for this Position
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Why Work With Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-b from-gray-50 to-white rounded-xl sm:rounded-2xl py-6 sm:py-8 px-4 sm:px-6"
                >
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-lg sm:text-xl lg:text-2xl text-center mb-4 sm:mb-6" style={{ fontWeight: 700, color: colors.text }}>
                            Why Work With Us
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 text-center border-2 border-gray-200 hover:shadow-lg transition-all"
                                >
                                    <div
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-2.5"
                                        style={{ backgroundColor: `${colors.accent}20` }}
                                    >
                                        <benefit.icon size={16} className="sm:w-5 sm:h-5" style={{ color: colors.accent }} />
                                    </div>
                                    <h2 className="text-xl sm:text-base mb-1.5 sm:mb-2" style={{ fontWeight: 600, color: colors.text }}>
                                        {benefit.title}
                                    </h2>
                                    <p className="text-[10px] sm:text-sm text-gray-600">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Don't See Your Role? */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-6 sm:mt-8 mb-4 sm:mb-6"
                >
                    <div className="max-w-5xl mx-auto bg-white rounded-2xl p-5 sm:p-6 md:p-8 border-2 border-gray-200 shadow-lg text-center">
                        <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3" style={{ fontWeight: 600, color: colors.text }}>
                            Don&apos;t See Your Role?
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                            We&apos;re always looking for talented individuals to join our team. Send us your resume and we&apos;ll keep you in mind for future opportunities.
                        </p>
                        <motion.a
                            href="mailto:recruitment@sthapatya.in"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
                            style={{
                                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                                color: 'white',
                                fontWeight: 600
                            }}
                        >
                            <Send size={16} className="sm:w-5 sm:h-5" />
                            Send Your Resume
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Application Form Dialog */}
            <Dialog open={isApplicationOpen} onOpenChange={setIsApplicationOpen}>
                <DialogContent className="max-w-[90vw] w-[90vw] lg:max-w-[1200px] lg:w-[1200px] max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-2xl" style={{ fontWeight: 700, color: colors.text }}>
                            Apply for {selectedPosition.title}
                        </DialogTitle>
                        <DialogDescription>
                            Fill out the form below to submit your application for this position.
                        </DialogDescription>
                    </DialogHeader>

                    <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                        {/* Full Name */}
                        <div className="space-y-2">
                            <Label htmlFor="fullName">Full Name *</Label>
                            <Input
                                id="fullName"
                                required
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={(e) => handleFormChange("fullName", e.target.value)}
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                                id="email"
                                type="email"
                                required
                                placeholder="your.email@example.com"
                                value={formData.email}
                                onChange={(e) => handleFormChange("email", e.target.value)}
                            />
                        </div>

                        {/* Mobile */}
                        <div className="space-y-2">
                            <Label htmlFor="mobile">Mobile *</Label>
                            <Input
                                id="mobile"
                                type="tel"
                                required
                                placeholder="Enter 10 digit Mobile Number"
                                value={formData.mobile}
                                maxLength={10}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/\D/g, "");  // ⬅️ remove any non-digit
                                    handleFormChange("mobile", value);
                                }}
                            />
                        </div>

                        {/* Current Address */}
                        <div className="space-y-2">
                            <Label htmlFor="address">Current Address *</Label>
                            <Textarea
                                id="address"
                                required
                                placeholder="Enter your current address"
                                rows={3}
                                value={formData.address}
                                onChange={(e) => handleFormChange("address", e.target.value)}
                            />
                        </div>

                        {/* Work Experience Toggle */}
                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                            <Switch
                                id="workExperience"
                                checked={hasWorkExperience}
                                onCheckedChange={setHasWorkExperience}
                            />
                            <Label htmlFor="workExperience" className="cursor-pointer">
                                I have work experience
                            </Label>
                        </div>

                        {/* Conditional Work Experience Fields */}
                        {hasWorkExperience && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg" style={{ fontWeight: 600, color: colors.text }}>
                                        Work Experience Details
                                    </h3>
                                    <button
                                        type="button"
                                        onClick={addWorkExperience}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105"
                                        style={{ borderColor: colors.primary, color: colors.primary, fontWeight: 600 }}
                                    >
                                        <Plus size={16} />
                                        Add More Experience
                                    </button>
                                </div>

                                {workExperiences.map((experience, index) => (
                                    <div
                                        key={experience.id}
                                        className="space-y-4 p-6 bg-gray-50 rounded-lg border-2 border-gray-200 relative"
                                    >
                                        {workExperiences.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeWorkExperience(experience.id)}
                                                className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-50 transition-colors"
                                                style={{ color: '#BF3131' }}
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        )}

                                        <h4 className="text-base" style={{ fontWeight: 600, color: colors.text }}>
                                            Experience {index + 1}
                                        </h4>

                                        {/* Company Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`companyName-${experience.id}`}>Company Name *</Label>
                                            <Input
                                                id={`companyName-${experience.id}`}
                                                required
                                                placeholder="Enter company name"
                                                value={experience.companyName}
                                                onChange={(e) => updateWorkExperience(experience.id, 'companyName', e.target.value)}
                                            />
                                        </div>

                                        {/* Job Role */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`jobRole-${experience.id}`}>Job Role *</Label>
                                            <Input
                                                id={`jobRole-${experience.id}`}
                                                required
                                                placeholder="Enter your job role"
                                                value={experience.jobRole}
                                                onChange={(e) => updateWorkExperience(experience.id, 'jobRole', e.target.value)}
                                            />
                                        </div>

                                        {/* Job Description */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`jobDescription-${experience.id}`}>Job Description *</Label>
                                            <Textarea
                                                id={`jobDescription-${experience.id}`}
                                                required
                                                placeholder="Describe your responsibilities"
                                                rows={4}
                                                value={experience.jobDescription}
                                                onChange={(e) => updateWorkExperience(experience.id, 'jobDescription', e.target.value)}
                                            />
                                        </div>

                                        {/* Starting Date */}
                                        <div className="space-y-2">
                                            <Label htmlFor={`startDate-${experience.id}`}>Starting Date *</Label>
                                            <Input
                                                id={`startDate-${experience.id}`}
                                                type="date"
                                                required
                                                value={experience.startDate}
                                                onChange={(e) => updateWorkExperience(experience.id, 'startDate', e.target.value)}
                                            />
                                        </div>

                                        {/* Currently Working Checkbox */}
                                        <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`currentlyWorking-${experience.id}`}
                                                checked={experience.currentlyWorking}
                                                onCheckedChange={(checked: boolean) => {
                                                    const isChecked = checked === true;
                                                    updateWorkExperience(experience.id, 'currentlyWorking', isChecked);
                                                }}
                                            />
                                            <Label htmlFor={`currentlyWorking-${experience.id}`} className="cursor-pointer">
                                                Currently working here
                                            </Label>
                                        </div>

                                        {/* End Date */}
                                        {!experience.currentlyWorking && (
                                            <div className="space-y-2">
                                                <Label htmlFor={`endDate-${experience.id}`}>End Date *</Label>
                                                <Input
                                                    id={`endDate-${experience.id}`}
                                                    type="date"
                                                    required
                                                    value={experience.endDate}
                                                    onChange={(e) => updateWorkExperience(experience.id, 'endDate', e.target.value)}
                                                />
                                            </div>
                                        )}

                                        {experience.currentlyWorking && (
                                            <div className="space-y-2">
                                                <p className="text-sm" style={{ color: colors.accent, fontWeight: 500 }}>
                                                    ✓ Currently working at this company
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {/* Attach Resume */}
                        <div className="space-y-2">
                            <Label htmlFor="resume">Attach Resume *</Label>
                            <Input
                                id="resume"
                                type="file"
                                required
                                accept=".pdf,.doc,.docx"
                                onChange={(e) => handleFormChange("resume", e.target.files?.[0] || null)}
                            />
                            <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                        </div>

                        {/* Notice Period */}
                        <div className="space-y-2">
                            <Label htmlFor="noticePeriod">Notice Period (in days) *</Label>
                            <Input
                                id="noticePeriod"
                                type="number"
                                required
                                min="0"
                                placeholder="Enter notice period in days (e.g., 30)"
                                value={formData.noticePeriod}
                                onChange={(e) => handleFormChange("noticePeriod", e.target.value)}
                            />
                            <p className="text-xs text-gray-500">Enter 0 if you can join immediately</p>
                        </div>

                        {/* Tell Us More */}
                        <div className="space-y-2">
                            <Label htmlFor="additionalInfo">Tell Us More About You</Label>
                            <Textarea
                                id="additionalInfo"
                                placeholder="Share any additional information that might be relevant to your application"
                                rows={4}
                                value={formData.additionalInfo}
                                onChange={(e) => handleFormChange("additionalInfo", e.target.value)}
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4 sm:justify-center">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-8 py-3 rounded-full text-white transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                style={{ backgroundColor: colors.primary, fontWeight: 600 }}
                            >
                                {isSubmitting ? "Submitting..." : "Submit Application"}
                            </button>
                            <button
                                type="button"
                                onClick={() => setIsApplicationOpen(false)}
                                disabled={isSubmitting}
                                className="px-8 py-3 rounded-full border-2 transition-all duration-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                style={{ borderColor: colors.primary, color: colors.primary, fontWeight: 600 }}
                            >
                                Back
                            </button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>

            {/* <Footer /> */}
        </div>
    );
}
