"use client"
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useState, useRef } from "react";
import {
    ArrowRight,
    MapPin,
    TrendingUp,
    Building2,
    Users,
    Briefcase,
    Mail,
    Phone,
    Clock,
    Linkedin,
    Twitter,
    Globe,
    Home,
    Newspaper,
    FileText,
    Award,
    CheckCircle2,
    Sparkles,
    Target,
    Zap,
    Smartphone,
    History,
    Droplet,
    Map,
    BarChart3,
    FileCheck,
    Package,
    Shield,
    X,
} from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ServiceFlower } from "../ServiceFlower";
import { getThemeColors } from "@/app/common/serverutility/getThemeColors";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Link from "next/link";
import { AnimatedButton } from "../AnimatedButton";
import MobileCarousel from "../ui/MobileCarousel";
import HomeSidebar from "../homesidebar.tsx/page";
import Image from "next/image";

// Optimized Service Slideshow Component with Enhanced Animations
function ServiceSlideshow({
    onServiceChange,
}: {
    onServiceChange?: (serviceName: string) => void;
}) {
    const { colors } = getThemeColors();
    const services = [
        {
            name: "Property Tax Management",
            image: "/image_data/Website_Hero_Section/ptax.avif",
            direction: "up",
        },
        {
            name: "Municipal Water Bill Management",
            image: "/image_data/Website_Hero_Section/wtax.avif",
            direction: "right",
        },
        {
            name: "Trade License",
            image: "/image_data/Website_Hero_Section/trade.avif",
            direction: "down",
        },

        {
            name: "Asset Management",
            image: "/image_data/Website_Hero_Section/asset.avif",
            direction: "right",
        },
        {
            name: "Data Analysis",
            image: "/image_data/Website_Hero_Section/data.avif",
            direction: "down",
        },
        {
            name: "Integrated Software & Mobile Apps",
            image: "/image_data/Website_Hero_Section/softwares.avif",
            direction: "left",
        },
        {
            name: "GIS Mapping",
            image: "/image_data/Website_Hero_Section/gis.avif",
            direction: "up",
        },
        {
            name: "ELU-PLU City Mapping",
            image: "/image_data/Website_Hero_Section/eluplu.avif",
            direction: "right",
        },
        {
            name: "Driving Smart Governance & Revenue Growth",
            image: "/image_data/Website_Hero_Section/smartcity.avif",
            direction: "up",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    // Preload next image
    useEffect(() => {
        const nextIndex = (currentIndex + 1) % services.length;
        const img = new window.Image();
        img.src = services[nextIndex].image;
    }, [currentIndex, services]);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [services.length]);

    const currentService = services[currentIndex];

    // Notify parent component of service change
    useEffect(() => {
        if (onServiceChange) {
            onServiceChange(currentService.name);
        }
    }, [currentIndex, currentService.name, onServiceChange]);

    const getAnimationProps = (direction: string) => {
        const animations = {
            right: {
                initial: { x: "100%", opacity: 0 },
                animate: { x: 0, opacity: 1 },
                exit: { x: "-100%", opacity: 0 },
            },
            left: {
                initial: { x: "-100%", opacity: 0 },
                animate: { x: 0, opacity: 1 },
                exit: { x: "100%", opacity: 0 },
            },
            up: {
                initial: { y: "100%", opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: "-100%", opacity: 0 },
            },
            down: {
                initial: { y: "-100%", opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: "100%", opacity: 0 },
            },
        };
        return animations[direction as keyof typeof animations] || animations.right;
    };

    const animationProps = getAnimationProps(currentService.direction);

    return (
        <div
            className="absolute inset-0 overflow-hidden"
            style={{ backgroundColor: colors.primaryDark }}
        >
            <motion.div
                key={currentIndex}
                initial={animationProps.initial}
                animate={animationProps.animate}
                exit={animationProps.exit}
                transition={{
                    duration: 0.8,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />


                <Image
                    src={currentService.image}
                    alt={currentService.name}
                    width={800}         // Required
                    height={600}
                    // Required
                    priority             // equals loading="eager"
                    onLoad={() => setIsLoaded(true)}
                    className="w-full h-full object-contain sm:object-cover"
                    style={{
                        willChange: "transform",
                        transform: "translateZ(0)",
                        objectPosition: "center",
                    }}
                />

                {/* Service Name Badge - Hidden on mobile, shown on sm and up */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="hidden sm:block absolute bottom-44 sm:bottom-24 md:bottom-8 left-3 sm:left-6 md:left-8 bg-white/10 backdrop-blur-md px-2 py-1.5 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-md sm:rounded-xl border border-white/30 z-20 shadow-2xl max-w-[160px] sm:max-w-[250px] md:max-w-none"
                >
                    <p
                        className="text-white text-[10px] sm:text-sm md:text-base truncate"
                        style={{ fontWeight: 600, letterSpacing: "0.02em" }}
                    >
                        {currentService.name}
                    </p>
                </motion.div>
            </motion.div>

            {/* Progress indicators */}
            <div className="absolute bottom-44 sm:bottom-24 md:bottom-8 right-3 sm:right-6 md:right-8 flex gap-1 sm:gap-2 z-20">
                {services.map((_, index) => (
                    <div
                        key={index}
                        className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "w-6 sm:w-10 bg-white shadow-lg"
                            : "w-1 sm:w-1.5 bg-white/40 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

// Service data for small cards
const serviceData = [
    {
        icon: Building2,
        title: "Municipal Property Tax Management",
        description: "Transforming property data into municipal revenue.",
        features: [
            "GIS-based door-to-door property surveys for accurate assessment",
            "Drone mapping for high-precision property visualization",
            "Use of advanced software tools for data analysis and automation",
            "25+ years of expertise in municipal tax systems",
            "Helping ULBs unlock hidden revenue and improve collections",
            "Promoting tax equity and transparency",
            "Enabling citizen inclusion in the formal taxation system",
        ],
        color: "#BF3131",
    },
    {
        icon: Droplet,
        title: "Municipal Water Bill Management",
        description: "Every drop accounted. Every source optimized.",
        features: [
            "Field surveys to digital billing for complete water management",
            "Track, monitor, and recover water usage efficiently",
            "Data-backed systems for better decision-making",
            "Ensure transparency in operations",
            "Enable leak detection and quick response",
            "Build citizen trust in water tax processes",
        ],
        color: "#7D0A0A",
    },
    {
        icon: Map,
        title: "Municipal ELU/PLU City Mapping",
        description:
            "Land use mapping for urban planning and development with GIS integration",
        features: [
            "ELU & PLU projects at Shegaon, Parbhani",
            "GIS-based planning and mapping expertise",
            "Statutory compliance and accuracy ensured",
            "Data-driven zoning and land analysis",
            "Sustainable and future-ready development plans",
            "Collaborative approach with stakeholders",
        ],
        color: "#BF3131",
    },
    {
        icon: BarChart3,
        title: "Municipal Smart Valuation Analytics",
        description:
            "Transform municipal data into actionable insights for better decision-making",
        features: [
            "Real-time Analytics Dashboard",
            "Predictive Modeling",
            "Custom Report Generation",
            "Performance Metrics",
            "Trend Analysis",
        ],
        color: "#7D0A0A",
    },
    {
        icon: MapPin,
        title: "Municipal GIS Mapping & Urban Intelligence Platforms",
        description: "Spatial intelligence for smarter cities.",
        features: [
            "Creation of base maps and ward boundaries",
            "Integration of utilities and property layers",
            "Drone and DGPS-based surveys",
            "AI-assisted segmentation and analytics",
            "Interactive urban dashboards for governance",
        ],
        color: "#BF3131",
    },
    {
        icon: FileCheck,
        title: "Municipal Trade License Management",
        description: "Empowering local businesses. Enabling municipal compliance.",
        features: [
            "QR-code based registrations and renewals",
            "Mobile app for traders and inspectors",
            "Geo-tagged field verification",
            "Automated workflow and notifications",
            "Revenue boosting with transparency and ease",
        ],
        color: "#7D0A0A",
    },
    {
        icon: Package,
        title: "Municipal Asset & Estate Management",
        description: "Mapping public wealth. Maximizing its value.",
        features: [
            "GIS-tagged inventory of civic assets",
            "Lease and rent management modules",
            "Legal and financial system integration",
            "Monitoring of markets, plots, and buildings",
            "Optimized monetization of public property",
        ],
        color: "#BF3131",
    },
    {
        icon: Package,
        title: "Driving Smart Governance & Revenue Growth",
        description: "Mapping public wealth. Maximizing its value.",
        features: [
            "GIS-tagged inventory of civic assets",
            "Lease and rent management modules",
            "Legal and financial system integration",
            "Monitoring of markets, plots, and buildings",
            "Optimized monetization of public property",
        ],
        color: "#BF3131",
    },
];

// Service-to-Image Mapping
const serviceImageMap: { [key: string]: string } = {
    "Municipal Property Tax Management": "/image_data/homeService/ptax.avif",
    "Municipal Water Bill Management": "/image_data/homeService/wtax.avif",
    "Municipal ELU/PLU City Mapping": "/image_data/homeService/eluplu.avif",
    "Municipal Smart Valuation Analytics": "/image_data/homeService/data.avif",
    "Municipal GIS Mapping & Urban Intelligence Platforms":
        "/image_data/homeService/gis.avif",
    "Municipal Trade License Management": "/image_data/homeService/trade.avif",
    "Municipal Asset & Estate Management": "/image_data/homeService/asset.avif",
    "Driving Smart Governance & Revenue Growth":
        "/image_data/homeService/smartcity.avif",
};

// Service Description Card Component (displays beside service cards)
function ServiceDescriptionCard({
    service,
}: {
    service: (typeof serviceData)[0] | null;
}) {
    const { colors } = getThemeColors();
    const Icon = service?.icon;

    if (!service) {
        return (
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative overflow-hidden rounded-xl md:rounded-2xl p-4 md:p-5 shadow-xl bg-white flex flex-col justify-center w-full h-auto min-h-[350px] sm:min-h-[400px] md:h-[600px] lg:h-[650px] xl:h-[700px]"
                style={{
                    borderColor: "#000000",
                }}
            >
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <Sparkles
                        size={32}
                        className="sm:w-10 sm:h-10 mb-2 sm:mb-3 opacity-30"
                        style={{ color: colors.textLight }}
                    />
                    <p
                        className="text-xs sm:text-sm px-4"
                        style={{
                            color: colors.textLight,
                        }}
                    >
                        Click on a service card to view details
                    </p>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            key={service.title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-xl md:rounded-2xl p-4 md:p-5 shadow-xl hover:shadow-2xl transition-shadow bg-white flex flex-col w-full h-auto md:h-[600px] lg:h-[650px] xl:h-[700px]"
            style={{
                borderColor: "#000000",
            }}
        >
            <div className="relative z-10 h-full flex flex-col">
                {/* Service Image */}
                <div className="mb-2.5 sm:mb-3 md:mb-4 -mx-4 md:-mx-5 -mt-4 md:-mt-5 flex-shrink-0">
                    <ImageWithFallback
                        src={
                            serviceImageMap[service.title] ||
                            "https://images.unsplash.com/photo-1710367847938-c92cf56a7a9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlY2hub2xvZ3klMjBzZXJ2aWNlc3xlbnwxfHx8fDE3NjE4MzMxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        }
                        alt={service.title}
                        className="w-full h-32 sm:h-36 md:h-48 lg:h-56 xl:h-60 object-fill rounded-t-xl md:rounded-t-2xl transition-transform duration-500 mb-4"
                    />
                </div>

                {/* Header */}
                <div className="flex items-center gap-2 md:gap-2.5 lg:gap-3 mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 flex-shrink-0 mt-3 md:mt-4">
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                        className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 lg:w-12 lg:h-12 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
                        style={{ backgroundColor: "#000000" }}
                    >
                        {Icon && (
                            <Icon className="text-white w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                        )}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                        <h3
                            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl line-clamp-2"
                            style={{ fontWeight: 700, color: "#000000" }}
                        >
                            {service.title}
                        </h3>
                    </div>
                </div>

                {/* Description */}
                <p
                    className="mb-1.5 sm:mb-2 md:mb-3 lg:mb-4 leading-relaxed italic text-xs sm:text-sm md:text-base line-clamp-2 flex-shrink-0"
                    style={{
                        color: colors.textLight,
                    }}
                >
                    {service.description}
                </p>

                {/* Features List */}
                <div className="flex-1 overflow-y-auto min-h-0 mt-4 md:mt-6">
                    <h4
                        className="text-sm sm:text-sm md:text-base mb-1 sm:mb-1.5 md:mb-2 flex-shrink-0"
                        style={{ fontWeight: 700, color: "#000000" }}
                    >
                        Key Features:
                    </h4>
                    <ul className="space-y-1 sm:space-y-1.5 md:space-y-1.5 lg:space-y-2">
                        {service.features.map((feature, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="flex items-start gap-1.5 md:gap-2"
                            >
                                <CheckCircle2
                                    size={12}
                                    className="sm:w-3 sm:h-3 md:w-4 md:h-4 flex-shrink-0 mt-0.5"
                                    style={{ color: "#000000" }}
                                />
                                <span
                                    className="text-[10px] sm:text-xs md:text-sm line-clamp-2"
                                    style={{
                                        color: colors.textLight,
                                    }}
                                >
                                    {feature}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}

// About Section Component with Modern Design
function AboutSection({
    scrollToSection,
}: {
    scrollToSection: (id: string) => void;
}) {
    const { colors, text: themeText } = getThemeColors();

    const [selectedService, setSelectedService] = useState<
        (typeof serviceData)[0] | null
    >(serviceData[0]);

    const handleServiceClick = (service: (typeof serviceData)[0]) => {
        setSelectedService(service);
    };

    return (
        <section
            id="about"
            className="pt-20 sm:pt-16 pb-12 sm:pb-16 bg-white relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
                        backgroundSize: "40px 40px",
                    }}
                />
            </div>

            {/* Hidden anchor for services navigation */}
            <div id="services" style={{ position: "absolute", top: "-100px" }}></div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10 md:overflow-x-hidden xl:overflow-x-visible">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-6 sm:mb-8 md:mb-10"
                    >
                        <h2
                            className="mb-4"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                                // ...themeText.gradient,
                            }}
                        >
                            Leading Municipal Excellence
                        </h2>

                        <p
                            className="max-w-4xl mx-auto leading-relaxed"
                            style={{
                                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                                color: colors.textLight,
                                fontWeight: 500,
                                letterSpacing: "0.01em",
                            }}
                        >
                            Specializing in{" "}
                            <span
                                style={{
                                    fontWeight: 700,
                                    color: colors.primary,
                                }}
                            >
                                GIS-based property tax surveys
                            </span>{" "}
                            and comprehensive IT solutions for municipalities across
                            Maharashtra
                        </p>
                    </motion.div>

                    {/* Three Column Layout: Service Flower | Service List | Description Card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-6 sm:mb-8 items-start justify-items-center max-w-7xl mx-auto">
                        {/* Left Column: Service Flower - HIDDEN ON MOBILE, VISIBLE FROM TABLET */}

                        {/* Middle Column: Service List */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="w-full max-w-[530px] md:max-w-none"
                        >
                            <div
                                className="bg-white rounded-xl md:rounded-2xl shadow-xl p-3 sm:p-4 md:p-6 w-[95%] h-auto md:h-[600px] lg:h-[650px] xl:h-[700px]"
                                style={{
                                    borderColor: "#000000",
                                    overflow: "hidden",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                {/* Mobile & Tablet Dropdown */}
                                <div className="md:hidden mb-3 sm:mb-4 flex-shrink-0">
                                    <Select
                                        value={selectedService?.title || ""}
                                        onValueChange={(value: string) => {
                                            const service = serviceData.find(
                                                (s) => s.title === value
                                            );
                                            if (service) handleServiceClick(service);
                                        }}
                                    >
                                        <SelectTrigger
                                            className="w-full h-9 sm:h-10 border-2 text-xs sm:text-sm"
                                            style={{ borderColor: "#BF3131" }}
                                        >
                                            <SelectValue placeholder="Select a service" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {serviceData.map((service, index) => {
                                                const Icon = service.icon;
                                                return (
                                                    <SelectItem
                                                        key={index}
                                                        value={service.title}
                                                        className="cursor-pointer text-xs sm:text-sm"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <Icon size={14} className="sm:w-4 sm:h-4" />
                                                            <span className="line-clamp-2">
                                                                {service.title}
                                                            </span>
                                                        </div>
                                                    </SelectItem>
                                                );
                                            })}
                                        </SelectContent>
                                    </Select>
                                </div>

                                {/* Desktop & Tablet Scrollable Service List */}
                                <div className="hidden md:block flex-1 overflow-y-auto space-y-1.5 md:space-y-2 pr-1 md:pr-2">
                                    {serviceData.map((service, index) => {
                                        const Icon = service.icon;
                                        const isSelected = selectedService?.title === service.title;

                                        return (
                                            <motion.button
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: 0.1 + index * 0.05,
                                                }}
                                                whileHover={{ x: 8, scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleServiceClick(service)}
                                                className="w-full text-left p-2.5 md:p-3 lg:p-4 rounded-lg md:rounded-xl transition-all cursor-pointer group flex items-center gap-2 md:gap-2.5 lg:gap-3"
                                                style={{
                                                    borderColor: isSelected ? "#BF3131" : "#000000",
                                                    backgroundColor: isSelected ? "#FEF2F2" : "white",
                                                }}
                                            >
                                                {/* Icon */}
                                                <div
                                                    className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 rounded-md md:rounded-lg flex items-center justify-center flex-shrink-0 transition-all"
                                                    style={{
                                                        backgroundColor: isSelected ? "#BF3131" : "#000000",
                                                    }}
                                                >
                                                    <Icon className="text-white w-3.5 h-3.5 md:w-4 md:h-4 lg:w-[18px] lg:h-[18px]" />
                                                </div>

                                                {/* Title */}
                                                <div className="flex-1 min-w-0">
                                                    <p
                                                        className="text-[10px] md:text-xs lg:text-sm leading-tight line-clamp-2"
                                                        style={{
                                                            fontWeight: isSelected ? 700 : 600,
                                                            color: isSelected ? "#BF3131" : "#000000",
                                                        }}
                                                    >
                                                        {service.title}
                                                    </p>
                                                </div>

                                                {/* Selected indicator */}
                                                {isSelected && (
                                                    <motion.div
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        className="flex-shrink-0"
                                                    >
                                                        <CheckCircle2
                                                            size={16}
                                                            className="md:w-[18px] md:h-[18px] lg:w-5 lg:h-5"
                                                            style={{ color: "#BF3131" }}
                                                        />
                                                    </motion.div>
                                                )}

                                                {/* Hover indicator */}
                                                {!isSelected && (
                                                    <motion.div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <ArrowRight
                                                            size={14}
                                                            className="md:w-[15px] md:h-[15px] lg:w-4 lg:h-4"
                                                            style={{ color: "#000000" }}
                                                        />
                                                    </motion.div>
                                                )}
                                            </motion.button>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>

                        {/* Third Column: Service Description Card */}
                        <div className="w-full max-w-[650px] md:max-w-none">
                            <ServiceDescriptionCard service={selectedService} />
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="/about">
                            <AnimatedButton
                                variant="secondary"
                                icon={<ArrowRight size={18} />}
                                className="px-8 py-4"
                            >
                                Learn More About Us
                            </AnimatedButton>
                        </Link>
                        <Link href="/services">
                            <AnimatedButton
                                variant="secondary"
                                icon={<ArrowRight size={18} />}
                                className="px-8 py-4"
                            >
                                Explore All Services
                            </AnimatedButton>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

export default function HomePage() {
    const { colors, text: themeText } = getThemeColors();
    const [activeSection, setActiveSection] = useState("hero");
    const [currentServiceName, setCurrentServiceName] = useState(
        "Municipal Water Bill Management"
    );
    const [currentSlide, setCurrentSlide] = useState(0);
    const [alternatingWord, setAlternatingWord] = useState<
        "Consultants" | "Softwares"
    >("Consultants");
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll();
    const autoplayPlugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

    const heroSlides = [
        {
            image: "/image_data/Website_Hero_Section/smartcity1.avif",
            title: "Sthapatya Consultants",
            titleWords: [
                "Sthapatya",
                "Consultants",
                "Softwares",
                "(I) Private Limited",
            ],
            subtitle: "(I) PRIVATE LIMITED",
            description:
                "Leading Municipal Service Provider for GIS-Based Property Tax Survey & Comprehensive IT Solutions",
            showStats: true,
            stats: [
                { value: "100", suffix: "+", label: "Municipal Councils" },
                { value: "8", suffix: "+", label: "Municipal Corporations" },
                { value: "50L", suffix: "+", label: "Properties Surveyed" },
                { value: "25", suffix: "+", label: "Years Experience" },
            ],
        },
        {
            image: "/image_data/Website_Hero_Section/ptax.avif",
            title: "Property Tax Management",
            subtitle: "SMART ASSESSMENT",
            description: "Door-to-Door Surveys for building Transparent Governance",
            showStats: false,
        },
        {
            image: "/image_data/Website_Hero_Section/gis.avif",
            title: " GIS Mapping",
            subtitle: "DGCA Approved Drone Imaging",
            description:
                "Mapping today for tomorrow's urban clarity and accountability",
            showStats: false,
        },
        {
            image: "/image_data/Website_Hero_Section/wtax.avif",
            title: " Water Bill Management",
            subtitle: "SMART COLLECTION",
            description: "From Meter to Management — Simplifying Water Tax Systems.",
            showStats: false,
        },
        {
            image: "/image_data/Website_Hero_Section/trade.avif",
            title: " Trade License",
            subtitle: "SIMPLIFIED LICENSING",
            description:
                "Self-service licensing with digital inspections and instant certificate download",
            showStats: false,
        },
        {
            image: "/image_data/Website_Hero_Section/asset.avif",
            title: " Asset Management",
            subtitle: "RESOURCE MONITORING",
            description: "Transforming Municipal Assets into Growth Opportunities",
            showStats: false,
        },
        {
            image: "/image_data/Website_Hero_Section/data.avif",
            title: " Smart Valuation Analytics",
            subtitle: "PERFORMANCE METRICS",
            description:
                "Every Data Point Counts — for Better Governance and Higher Revenue.",
            showStats: false,
        },
        {
            image: "/image_data/Website_Hero_Section/software.avif",
            title: " Integrated Software & Mobile Apps",
            subtitle: "DIGITAL INTEGRATION",
            description:
                "Smart governance powered by seamless web and mobile integration",
            showStats: false,
        },

        {
            image: "/image_data/Website_Hero_Section/eluplu.avif",
            title: " ELU-PLU DP Consultants",
            subtitle: "City GIS Mapping",
            description:
                "GIS-powered ELU–PLU mapping for planning, monitoring, and compliance",
            showStats: false,
        },
    ];

    const sections = [
        { id: "hero", name: "Home" },
        { id: "clients", name: "Clients" },
        { id: "about", name: "About" },
        { id: "journey", name: "Journey" },
        { id: "career", name: "Career" },
        { id: "contact", name: "Contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // Alternating word animation for first slide
    useEffect(() => {
        if (currentSlide === 0) {
            const interval = setInterval(() => {
                setAlternatingWord((prev) =>
                    prev === "Consultants" ? "Softwares" : "Consultants"
                );
            }, 3000); // Switch every 3 seconds

            return () => clearInterval(interval);
        }
    }, [currentSlide]);

    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map((s) => ({
                id: s.id,
                element: document.getElementById(s.id),
            }));

            const currentSection = sectionElements.find((section) => {
                if (section.element) {
                    const rect = section.element.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection.id);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Auto-advance hero slides
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, [heroSlides.length]);

    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    return (
        <div ref={containerRef} className="relative">
            <HomeSidebar
                sections={sections}
                activeSection={activeSection}
                onSectionClick={scrollToSection}
            />

            {/* Hero Section - Enhanced */}
            <motion.section
                id="hero"
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative h-screen pt-20 sm:pt-20 flex items-center justify-center overflow-hidden"
            >
                {/* Slide Background Images */}
                <div className="absolute inset-0">
                    {heroSlides.map((slide, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: currentSlide === index ? 1 : 0 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <ImageWithFallback
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-black/55" />
                        </motion.div>
                    ))}
                </div>

                {/* ServiceFlower Overlay - Positioned on Left Side */}
                <div className="absolute left-[20%] top-[55%] -translate-y-1/2 z-20 hidden lg:block pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="hidden md:flex w-full h-auto md:h-[600px] lg:h-[650px] xl:h-[700px] items-center justify-center"
                    >
                        <div className="w-full h-full flex items-center justify-center overflow-visible">
                            <div className="md:scale-[0.85] lg:scale-[0.92] xl:scale-100">
                                <ServiceFlower />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Animated Drone for GIS Mapping Slide (index 2) */}
                {currentSlide === 2 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 z-10 pointer-events-none overflow-hidden"
                    >
                        <motion.img
                            src="/image_data/Website_Hero_Section/drone.avif"
                            alt="Drone"
                            className="absolute w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
                            initial={{ left: "80%", top: "10%" }}
                            animate={{
                                left: ["80%", "10%", "10%", "80%"],
                                top: ["10%", "80%", "10%", "80%"],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                times: [0, 0.33, 0.66, 1],
                            }}
                            style={{ transform: "translate(-50%, -50%)" }}
                        />
                    </motion.div>
                )}

                {/* Hero Content */}
                <div className="relative z-10 text-center px-3 sm:px-4 max-w-6xl mx-auto pb-32 sm:pb-16 md:pb-0">
                    <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-2 sm:space-y-6"
                    >
                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="mb-2 sm:mb-6"
                            style={{
                                fontSize: "clamp(1.75rem, 7vw, 5rem)",
                                fontWeight: 900,
                                letterSpacing: "-0.03em",
                                lineHeight: 1.1,
                            }}
                        >
                            {currentSlide === 0 ? (
                                <span className="text-white drop-shadow-2xl">
                                    {/* Sthapatya - Static */}
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        className="block"
                                    >
                                        Sthapatya
                                    </motion.span>

                                    {/* Consultants / Softwares - Alternating */}
                                    <div className="relative h-[1.2em] overflow-hidden">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={alternatingWord}
                                                initial={{
                                                    x: alternatingWord === "Consultants" ? -100 : 100,
                                                    opacity: 0,
                                                }}
                                                animate={{
                                                    x: 0,
                                                    opacity: 1,
                                                }}
                                                exit={{
                                                    x: alternatingWord === "Consultants" ? 100 : -100,
                                                    opacity: 0,
                                                }}
                                                transition={{
                                                    duration: 0.8,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="block absolute inset-0"
                                            >
                                                {alternatingWord}
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>

                                    {/* Private Limited - Static */}
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                        className="block"
                                    >
                                        (I) Private Limited
                                    </motion.span>
                                </span>
                            ) : (
                                <>
                                    <span
                                        className="inline-block text-white/95"
                                        style={{
                                            fontSize: "0.5em",
                                            fontWeight: 700,
                                            letterSpacing: "0.1em",
                                        }}
                                    >
                                        E-Governance and Municipal
                                    </span>
                                    <br />
                                    <span className="inline-block text-white drop-shadow-2xl">
                                        {heroSlides[currentSlide].title}
                                    </span>
                                    <br />
                                    <span
                                        className="inline-block text-white/95"
                                        style={{
                                            fontSize: "0.5em",
                                            fontWeight: 700,
                                            letterSpacing: "0.1em",
                                        }}
                                    >
                                        {heroSlides[currentSlide].subtitle}
                                    </span>
                                </>
                            )}
                        </motion.h1>

                        {/* Subheading */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="max-w-4xl mx-auto leading-snug sm:leading-relaxed mb-2 sm:mb-6 md:mb-8"
                            style={{
                                fontSize: "clamp(0.8rem, 2.2vw, 1.6rem)",
                                fontWeight: 500,
                                letterSpacing: "0.01em",
                                color: "rgba(255, 255, 255, 0.95)",
                                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
                            }}
                        >
                            {heroSlides[currentSlide].description}
                        </motion.p>

                        {/* Stats Cards - Only show on first slide */}
                        {heroSlides[currentSlide].showStats && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 max-w-5xl mx-auto mb-2 sm:mb-6 md:mb-8"
                            >
                                {heroSlides[currentSlide].stats?.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.8 + index * 0.1,
                                            type: "spring",
                                        }}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        className="relative px-2 py-2 sm:px-5 sm:py-4 md:px-6 md:py-5 backdrop-blur-xl rounded-lg sm:rounded-2xl border border-white/40 shadow-2xl overflow-hidden group cursor-pointer"
                                        style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                                        }}
                                    >
                                        <div
                                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{
                                                backgroundColor: "rgba(255, 255, 255, 0.15)",
                                            }}
                                        />
                                        <p
                                            className="relative text-2xl sm:text-4xl md:text-5xl text-white mb-0.5 sm:mb-2"
                                            style={{
                                                fontWeight: 900,
                                                textShadow: "0 4px 20px rgba(0,0,0,0.4)",
                                            }}
                                        >
                                            {stat.value}
                                            <span className="text-base sm:text-2xl md:text-3xl">
                                                {stat.suffix}
                                            </span>
                                        </p>
                                        <p
                                            className="relative text-[10px] sm:text-sm text-white/95 leading-tight"
                                            style={{
                                                fontWeight: 600,
                                                letterSpacing: "0.03em",
                                            }}
                                        >
                                            {stat.label}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="pt-1 sm:pt-0"
                        >
                            <AnimatedButton
                                variant="primary"
                                onClick={() => scrollToSection("about")}
                                icon={<ArrowRight size={16} className="sm:w-5 sm:h-5" />}
                                className="px-5 py-2.5 sm:px-8 sm:py-4 md:px-10 md:py-5 text-xs sm:text-base md:text-lg"
                            >
                                Explore Our Work
                            </AnimatedButton>
                        </motion.div>

                        {/* Slide Indicators */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex justify-center gap-2 mt-6"
                        >
                            {heroSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide
                                        ? "w-8 bg-white shadow-lg"
                                        : "w-2 bg-white/40 hover:bg-white/60"
                                        }`}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Clients Section - Enhanced */}
            <section
                id="clients"
                className="pt-16 sm:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 bg-white relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Section Header */}
                        <div className="text-center mb-16">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 border bg-white"
                                style={{
                                    borderColor: colors.accent,
                                }}
                            >
                                <Building2 size={18} style={{ color: colors.accent }} />
                                <span
                                    style={{
                                        color: colors.primary,
                                        fontWeight: 600,
                                        fontSize: "0.9rem",
                                    }}
                                >
                                    Our Trusted Partners
                                </span>
                            </motion.div>

                            <p
                                className="max-w-5xl mx-auto leading-relaxed"
                                style={{
                                    fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                                    color: colors.textLight,
                                    fontWeight: 500,
                                }}
                            >
                                Trusted by{" "}
                                <span style={{ fontWeight: 700 }}>100+ Municipal Councils</span>{" "}
                                and{" "}
                                <span style={{ fontWeight: 700 }}>
                                    8+ Municipal Corporations
                                </span>{" "}
                                across Maharashtra
                            </p>
                        </div>

                        {/* Client Cards - Carousel on Mobile, Grid on Desktop */}
                        {(() => {
                            const clients = [
                                {
                                    name: "Thane Municipal Corporation",
                                    logo: "/municiple_logo/thane.avif",
                                },
                                {
                                    name: "Pimpri-Chinchwad Municipal Corporation",
                                    logo: "/municiple_logo/pcmc.avif",
                                },
                                {
                                    name: "Panvel Municipal Corporation",
                                    logo: "/municiple_logo/panvel.avif",
                                },
                                {
                                    name: "Amravati Municipal Corporation",
                                    logo: "/municiple_logo/amt.avif",
                                },
                                {
                                    name: "Akola Municipal Corporation",
                                    logo: "/municiple_logo/akola.avif",
                                },
                                {
                                    name: "Jalgaon Municipal Corporation",
                                    logo: "/municiple_logo/jalgaon.avif",
                                },
                                {
                                    name: "Dhule Municipal Corporation",
                                    logo: "/municiple_logo/dhule.avif",
                                },
                                {
                                    name: "Baramati Municipal Council",
                                    logo: "/municiple_logo/baramati.avif",
                                },
                                {
                                    name: "Chakan Municipal Council",
                                    logo: "/municiple_logo/chakan.avif",
                                },
                                {
                                    name: "Washim Municipal Council",
                                    logo: "/municiple_logo/washim.avif",
                                },
                            ];

                            const ClientCard = ({
                                client,
                                index,
                            }: {
                                client: (typeof clients)[0];
                                index: number;
                            }) => {
                                // Determine row based on 5-column grid (lg breakpoint)
                                const row = Math.floor(index / 5);
                                const isEvenRow = row % 2 === 0;

                                // Alternate between red and gray colors
                                const cardColor =
                                    index % 2 === 0
                                        ? { bg: "#7D0A0A", border: "#A01010", icon: "#BF3131" } // Primary dark red
                                        : { bg: "#B3B3B3", border: "#999999", icon: "#BF3131" }; // Light gray with red accent

                                return (
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            x: isEvenRow ? -50 : 50,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                        }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{
                                            delay: index * 0.05,
                                            duration: 0.6,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}   // 👈 Base transition
                                        whileHover={{
                                            scale: 1.08,
                                            y: -10,
                                            transition: { duration: 0.2, ease: "easeOut" }, // 👈 Hover transition goes here
                                        }}
                                        className="p-4 sm:p-6 border-2 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center text-center group h-full relative overflow-hidden cursor-pointer will-change-transform"
                                        style={{
                                            borderColor: cardColor.border,
                                            backgroundColor: cardColor.bg,
                                            boxShadow: `0 4px 15px rgba(0,0,0,0.2)`,
                                        }}
                                        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                                            const hoverBorderColor =
                                                index % 2 === 0 ? cardColor.icon : cardColor.border;

                                            e.currentTarget.style.borderColor = hoverBorderColor;
                                            e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.3), 0 0 0 2px ${hoverBorderColor}`;
                                        }}
                                        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                                            e.currentTarget.style.borderColor = cardColor.border;
                                            e.currentTarget.style.boxShadow = `0 4px 15px rgba(0,0,0,0.2)`;
                                        }}
                                    >
                                        <div
                                            className="absolute top-0 left-0 right-0 h-1 transition-all duration-200 group-hover:h-2"
                                            style={{ backgroundColor: cardColor.icon }}
                                        />
                                    </motion.div>


                                );
                            };

                            return (
                                <>
                                    {/* Mobile Carousel - Hidden on sm and up */}
                                    <div className="md:hidden mb-8 relative">
                                        <MobileCarousel
                                            items={clients}
                                            interval={3000}
                                            className="w-full"
                                            renderItem={(client, idx) => (
                                                <div className="p-2">
                                                    <ClientCard client={client} index={idx} />
                                                </div>
                                            )}
                                        />

                                    </div>


                                    {/* Desktop Grid - Visible on sm and up, hidden on mobile */}
                                    <div
                                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8"
                                        style={{ display: "none" }}
                                        ref={(el) => {
                                            if (el) {
                                                const mediaQuery =
                                                    window.matchMedia("(min-width: 768px)");
                                                const updateDisplay = () => {
                                                    el.style.display = mediaQuery.matches
                                                        ? "grid"
                                                        : "none";
                                                };
                                                mediaQuery.addEventListener("change", updateDisplay);
                                                updateDisplay(); // Set initial state
                                            }
                                        }}
                                    >
                                        {[
                                            {
                                                name: "Thane Municipal Corporation",
                                                logo: "/municiple_logo/thane.avif",
                                            },
                                            {
                                                name: "Pimpri-Chinchwad Municipal Corporation",
                                                logo: "/municiple_logo/pcmc.avif",
                                            },
                                            {
                                                name: "Panvel Municipal Corporation",
                                                logo: "/municiple_logo/panvel.avif",
                                            },
                                            {
                                                name: "Amravati Municipal Corporation",
                                                logo: "/municiple_logo/amt.avif",
                                            },
                                            {
                                                name: "Jalgaon Municipal Corporation",
                                                logo: "/municiple_logo/jalgaon.avif",
                                            },
                                            {
                                                name: "Akola Municipal Corporation",
                                                logo: "/municiple_logo/akola.avif",
                                            },
                                            {
                                                name: "Dhule Municipal Corporation",
                                                logo: "/municiple_logo/dhule.avif",
                                            },
                                            {
                                                name: "Baramati Municipal Council",
                                                logo: "/municiple_logo/baramati.avif",
                                            },
                                            {
                                                name: "Chakan Municipal Council",
                                                logo: "/municiple_logo/chakan.avif",
                                            },
                                            {
                                                name: "Washim Municipal Council",
                                                logo: "/municiple_logo/washim.avif",
                                            },
                                        ].map((client, index) => {
                                            // Alternate between red and gray colors
                                            const cardColor =
                                                index % 2 === 0
                                                    ? {
                                                        bg: "#7D0A0A",
                                                        border: "#A01010",
                                                        icon: "#BF3131",
                                                    } // Primary dark red
                                                    : {
                                                        bg: "#B3B3B3",
                                                        border: "#999999",
                                                        icon: "#BF3131",
                                                    }; // Light gray with red accent

                                            return (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: index * 0.05,
                                                        duration: 0.2,
                                                        ease: "easeOut",
                                                    }}
                                                    whileHover={{
                                                        scale: 1.08,
                                                        y: -10,
                                                    }}
                                                    className="p-6 border-2 rounded-2xl shadow-lg hover:shadow-2xl flex flex-col items-center justify-center text-center group relative overflow-hidden cursor-pointer will-change-transform"
                                                    style={{
                                                        borderColor: cardColor.border,
                                                        backgroundColor: cardColor.bg,
                                                        boxShadow: `0 4px 15px rgba(0,0,0,0.2)`,
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        const hoverBorderColor =
                                                            index % 2 === 0 ? cardColor.icon : cardColor.border;
                                                        e.currentTarget.style.borderColor = hoverBorderColor;
                                                        e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.3), 0 0 0 2px ${hoverBorderColor}`;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.borderColor = cardColor.border;
                                                        e.currentTarget.style.boxShadow = `0 4px 15px rgba(0,0,0,0.2)`;
                                                    }}
                                                >

                                                    {/* Top accent bar */}

                                                    {/* Municipal Emblem */}
                                                    <motion.div
                                                        className="mb-4 relative z-10"
                                                        whileHover={{
                                                            scale: 1.1,
                                                        }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <div className="w-28 h-28 flex items-center justify-center p-2 rounded-lg transition-shadow duration-300">
                                                            <Image
                                                                src={client.logo}
                                                                alt={`${client.name} Logo`}
                                                                width={200}          // required
                                                                height={100}         // required
                                                                className="w-full h-full object-contain"
                                                            />
                                                        </div>
                                                    </motion.div>

                                                    {/* Client Name */}
                                                    <h3
                                                        className="text-base relative z-10 transition-all duration-300"
                                                        style={{
                                                            fontWeight: 700,
                                                            color: "white",
                                                            lineHeight: 1.4,
                                                        }}
                                                    >
                                                        {client.name}
                                                    </h3>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </>
                            );
                        })()}

                        {/* View All Button */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center"
                        >
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="mb-6"
                                style={{
                                    fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
                                    color: colors.textLight,
                                    fontWeight: 600,
                                }}
                            >
                                ...and{" "}
                                <span style={{ color: colors.primary, fontWeight: 700 }}>
                                    100+ more projects
                                </span>{" "}
                                delivered across Maharashtra
                            </motion.p>
                            <Link href="/projectpage">
                                <AnimatedButton
                                    variant="secondary"
                                    icon={<ArrowRight size={18} />}
                                    className="px-8 py-4"
                                >
                                    View All Projects
                                </AnimatedButton>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Certifications Section */}
            <section className="py-8 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-8"
                            style={{
                                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                                color: colors.primary,
                                fontWeight: 800,
                            }}
                        >
                            Certifications & Co-partners
                        </motion.h2>

                        {/* Horizontal Certificate Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-gradient-to-r from-gray-50 to-white border-2 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                            style={{ borderColor: colors.accent }}
                        >
                            {/* Certificate Logos Grid */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
                                {[
                                    {
                                        name: "ISO 9001:2015",
                                        logo: "/image_data/AboutPage/1.avif",
                                    },
                                    {
                                        name: "Quality Management",
                                        logo: "/image_data/AboutPage/2.avif",
                                    },
                                    {
                                        name: "Professional Seal",
                                        logo: "/image_data/AboutPage/3.avif",
                                    },
                                    {
                                        name: "Business Excellence",
                                        logo: "/image_data/AboutPage/4.avif",
                                    },
                                    {
                                        name: "Industry Award",
                                        logo: "/image_data/AboutPage/5.avif",
                                    },
                                    {
                                        name: "Excellence Badge",
                                        logo: "/image_data/AboutPage/6.avif",
                                    },
                                    {
                                        name: "Quality Certificate",
                                        logo: "/image_data/AboutPage/7.avif",
                                    },
                                    {
                                        name: "Accreditation",
                                        logo: "/image_data/AboutPage/8.avif",
                                    },
                                ].map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.08, duration: 0.4 }}
                                        whileHover={{ scale: 1.15, y: -5 }}
                                        className="flex items-center justify-center"
                                    >
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center transition-all duration-300">
                                            <ImageWithFallback
                                                src={cert.logo}
                                                alt={cert.name}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <AboutSection scrollToSection={scrollToSection} />

            {/* Journey Preview - Compact */}
            <section
                id="journey"
                className="py-4 px-4 bg-gradient-to-b from-white to-red-50 overflow-hidden"
            >
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2
                            className="mb-6 text-center"
                            style={{
                                fontSize: "clamp(2rem, 5vw, 3rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                                backgroundImage:
                                    "linear-gradient(135deg, #7D0A0A 0%, #BF3131 50%, #BF3131 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            Our Journey
                        </h2>

                        <div className="relative px-4 md:px-8">
                            {/* Horizontal Zigzag Path */}
                            <div className="relative">
                                {/* SVG Path Line */}
                                <svg
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                    style={{ height: "400px" }}
                                >
                                    <motion.path
                                        d="M 50 100 Q 150 50, 250 100 T 450 100 Q 550 50, 650 100 T 850 100 Q 950 50, 1050 100 T 1250 100"
                                        stroke="#BF3131"
                                        strokeWidth="3"
                                        fill="none"
                                        strokeDasharray="10 5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{
                                            pathLength: 1,
                                            opacity: 0.4,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </svg>

                                {/* Journey Milestones - More Compact */}
                                <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-3">
                                    {[
                                        {
                                            year: "2001",
                                            title: "Foundation",
                                            desc: "Started with a vision to transform urban governance in Maharashtra",
                                            position: "top",
                                        },
                                        {
                                            year: "2010",
                                            title: "Benchmark",
                                            desc: "Completed over 50 major projects across municipal corporations",
                                            position: "bottom",
                                        },
                                        {
                                            year: "2016",
                                            title: "Recognition",
                                            desc: "Central India’s 1st DGCA-Approved UAV Flight | 10L+ Properties Surveyed",
                                            position: "top",
                                        },
                                        {
                                            year: "2021",
                                            title: "SCOCH Award",
                                            desc: "Received the Skoch Award from the Central Government for Excellence in Innovation, with 18L+ Properties Surveyed",
                                            position: "bottom",
                                        },
                                        {
                                            year: "2023",
                                            title: "IGR Integration",
                                            desc: "Completed Maharashtra’s first ULB–IGR integration; surveyed 35L+ properties",
                                            position: "top",
                                        },
                                        {
                                            year: "2025",
                                            title: "Today",
                                            desc: "Most experienced in India for Property Tax Survey and Assessment, with 50L+ properties completed",
                                            position: "bottom",
                                        },
                                    ].map((milestone, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{
                                                opacity: 0,
                                                y: milestone.position === "top" ? -50 : 50,
                                                scale: 0.5,
                                            }}
                                            whileInView={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{
                                                delay: index * 0.2,
                                                duration: 0.6,
                                                type: "spring",
                                                stiffness: 100,
                                            }}
                                            className={`flex flex-col items-center ${milestone.position === "top"
                                                ? "pt-4 pb-20"
                                                : "pt-20 pb-4"
                                                }`}
                                        >
                                            {/* Connector Line to Path */}
                                            <motion.div
                                                initial={{ height: 0 }}
                                                whileInView={{
                                                    height:
                                                        milestone.position === "top" ? "50px" : "50px",
                                                }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    delay: index * 0.2 + 0.3,
                                                    duration: 0.4,
                                                }}
                                                className={`w-0.5 bg-gradient-to-b from-[#BF3131] to-transparent ${milestone.position === "top"
                                                    ? "order-2 mt-2"
                                                    : "order-1 mb-2"
                                                    }`}
                                            />

                                            {/* Content Card */}
                                            <motion.div
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className={`${milestone.position === "top" ? "order-1" : "order-2"
                                                    } relative`}
                                            >
                                                {/* Circle with Year - Smaller */}
                                                <motion.div
                                                    initial={{ rotate: -180 }}
                                                    whileInView={{ rotate: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: index * 0.2 + 0.4,
                                                        duration: 0.6,
                                                    }}
                                                    className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-2"
                                                >
                                                    {/* Outer Glow Ring */}
                                                    <motion.div
                                                        animate={{
                                                            scale: [1, 1.1, 1],
                                                            opacity: [0.3, 0.6, 0.3],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: index * 0.3,
                                                        }}
                                                        className="absolute inset-0 bg-gradient-to-br from-[#7D0A0A] to-[#BF3131] rounded-full blur-md"
                                                    />

                                                    {/* Main Circle */}
                                                    <div className="relative w-full h-full bg-gradient-to-br from-[#7D0A0A] to-[#BF3131] rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                                                        <span
                                                            className="text-white"
                                                            style={{
                                                                fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
                                                                fontWeight: 700,
                                                            }}
                                                        >
                                                            {milestone.year}
                                                        </span>
                                                    </div>
                                                </motion.div>

                                                {/* Title & Description - Smaller */}
                                                <div className="text-center max-w-[160px]">
                                                    <h3
                                                        className="mb-1"
                                                        style={{
                                                            fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
                                                            fontWeight: 700,
                                                            color: "#000000",
                                                        }}
                                                    >
                                                        {milestone.title}
                                                    </h3>
                                                    <p
                                                        style={{
                                                            fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
                                                            fontWeight: 500,
                                                            color: "#BF3131",
                                                        }}
                                                    >
                                                        {milestone.desc}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center mt-4">
                                <Link href="/journeypage">
                                    <AnimatedButton
                                        variant="secondary"
                                        icon={<ArrowRight size={18} />}
                                        className="px-6 py-3"
                                    >
                                        View Full Journey
                                    </AnimatedButton>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Career Preview - Enhanced with Carousel */}
            <section
                id="career"
                className="py-20 px-4 bg-white relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                {/* Floating Gradient Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl"
                    style={{ backgroundColor: `${colors.accent}33` }}
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl"
                    style={{ backgroundColor: `${colors.primary}33` }}
                />

                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 border bg-white"
                            style={{
                                borderColor: colors.accent,
                            }}
                        >
                            <Users size={20} style={{ color: colors.accent }} />
                            <span
                                style={{
                                    color: colors.primary,
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                }}
                            >
                                Join Our Growing Family
                            </span>
                        </motion.div>

                        <h2
                            className="mb-4"
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                                color: "#BF3131",
                            }}
                        >
                            Our Strength
                        </h2>

                        {/* Team Size Badge */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-3 px-7 py-4 rounded-full shadow-lg"
                            style={{
                                background: "linear-gradient(to right, #BF3131, #7D0A0A)",
                            }}
                        >
                            <Users size={22} className="text-white" />
                            <span
                                className="text-white"
                                style={{
                                    fontWeight: 700,
                                    fontSize: "1.15rem",
                                }}
                            >
                                700+ Team Members
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Image Gallery Layout */}
                    <div className="flex justify-center">
                        {/* 5 Image Grid Layout */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full"
                        >
                            {/* Desktop Layout */}
                            <div className="hidden md:flex gap-4 h-[600px] w-full max-w-[1420px] mx-auto">
                                {/* Far Left Side - 2 Square Images */}
                                <div className="flex flex-col gap-4 w-[260px]">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.05 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/13.avif"
                                            alt="Professional Team"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/16.avif"
                                            alt="Office Collaboration"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute top-0 bottom-0 left-[-30px] right-[-30px] rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Left Side - 2 Square Images */}
                                <div className="flex flex-col gap-4 w-[260px]">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.15 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/7.avif"
                                            alt="Team Collaboration"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/5.avif"
                                            alt="Professional Excellence"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Center - 1 Vertical Rectangular Image */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.25 }}
                                    className="relative group w-[400px] overflow-hidden rounded-2xl shadow-2xl"
                                >
                                    <ImageWithFallback
                                        src="/image_data/Team_photo/16.avif"
                                        alt="Diverse Teamwork"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ borderColor: colors.accent }}
                                    />
                                </motion.div>

                                {/* Right Side - 2 Square Images */}
                                <div className="flex flex-col gap-4 w-[260px]">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/3.avif"
                                            alt="Innovation & Growth"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.35 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/2.avif"
                                            alt="Modern Workspace"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                </div>

                                {/* Far Right Side - 2 Square Images */}
                                <div className="flex flex-col gap-4 w-[260px]">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/12.avif"
                                            alt="Business Professionals"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.45 }}
                                        className="relative group flex-1 overflow-hidden rounded-2xl shadow-xl"
                                    >
                                        <ImageWithFallback
                                            src="/image_data/Team_photo/17.avif"
                                            alt="Corporate Culture"
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div
                                            className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{ borderColor: colors.accent }}
                                        />
                                    </motion.div>
                                </div>
                            </div>

                            {/* Mobile Collage Layout */}
                            <div className="md:hidden px-4">
                                <div className="flex flex-col gap-3">
                                    {/* Row 1: Large Left + Small Right Stack */}
                                    <div className="flex gap-3">
                                        {/* Large Image - Left */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.05 }}
                                            className="relative group flex-1 overflow-hidden rounded-2xl shadow-lg"
                                            style={{ minHeight: "220px" }}
                                        >
                                            <ImageWithFallback
                                                src="/image_data/Team_photo/13.avif"
                                                alt="Professional Team"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div
                                                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{ borderColor: colors.accent }}
                                            />
                                        </motion.div>

                                        {/* Small Images Stack - Right */}
                                        <div className="flex flex-col gap-3 flex-1">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.1 }}
                                                className="relative group overflow-hidden rounded-2xl shadow-lg flex-1"
                                            >
                                                <ImageWithFallback
                                                    src="/image_data/Team_photo/16.avif"
                                                    alt="Office Collaboration"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ borderColor: colors.accent }}
                                                />
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.15 }}
                                                className="relative group overflow-hidden rounded-2xl shadow-lg flex-1"
                                            >
                                                <ImageWithFallback
                                                    src="/image_data/Team_photo/7.avif"
                                                    alt="Team Collaboration"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ borderColor: colors.accent }}
                                                />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Row 2: Small Left Stack + Large Right */}
                                    <div className="flex gap-3">
                                        {/* Small Images Stack - Left */}
                                        <div className="flex flex-col gap-3 flex-1">
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.2 }}
                                                className="relative group overflow-hidden rounded-2xl shadow-lg flex-1"
                                            >
                                                <ImageWithFallback
                                                    src="/image_data/Team_photo/5.avif"
                                                    alt="Professional Excellence"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ borderColor: colors.accent }}
                                                />
                                            </motion.div>

                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.25 }}
                                                className="relative group overflow-hidden rounded-2xl shadow-lg flex-1"
                                            >
                                                <ImageWithFallback
                                                    src="/image_data/Team_photo/2.avif"
                                                    alt="Modern Workspace"
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                    style={{ borderColor: colors.accent }}
                                                />
                                            </motion.div>
                                        </div>

                                        {/* Large Image - Right */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                            className="relative group flex-1 overflow-hidden rounded-2xl shadow-lg"
                                            style={{ minHeight: "220px" }}
                                        >
                                            <ImageWithFallback
                                                src="/image_data/Team_photo/3.avif"
                                                alt="Innovation & Growth"
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div
                                                className="absolute inset-0 rounded-2xl border-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                style={{ borderColor: colors.accent }}
                                            />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Contact & Footer Section - Enhanced */}
            <section
                id="contact"
                className="py-16 px-4 bg-white relative overflow-hidden"
            >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, ${colors.primary} 1px, transparent 0)`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                </div>

                <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 relative z-10">
                    {/* Contact Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        {/* CTA Button - Explore Career Opportunities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex justify-center mb-12"
                        >
                            <Link href="/career">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative overflow-hidden rounded-full px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-300"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <div className="relative flex items-center gap-3">
                                        <Briefcase size={20} className="text-white" />
                                        <span
                                            className="text-white"
                                            style={{
                                                fontWeight: 700,
                                                fontSize: "1.05rem",
                                            }}
                                        >
                                            Explore Career Opportunities
                                        </span>
                                        <motion.div
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <ArrowRight size={20} className="text-white" />
                                        </motion.div>
                                    </div>
                                </motion.button>
                            </Link>
                        </motion.div>

                        <h2
                            className="mb-2"
                            style={{
                                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                                fontWeight: 800,
                                letterSpacing: "-0.02em",
                                color: colors.primary,
                            }}
                        >
                            Visit Our Offices
                        </h2>

                        <p
                            className="max-w-5xl mx-auto mb-3 leading-relaxed"
                            style={{
                                fontSize: "clamp(1.1rem, 1.8vw, 1.3rem)",
                                color: colors.textLight,
                                fontWeight: 500,
                            }}
                        >
                            We&apos;re located across Maharashtra to serve you better
                        </p>
                    </motion.div>

                    {/* Office Locations Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {[
                            {
                                name: "Amravati",
                                type: "Head Office",
                                address: "Amravati, Maharashtra",
                                image: "/image_data/Our_Offices/amt.avif",
                                isHeadOffice: true,
                                mapsUrl: "https://maps.app.goo.gl/oyq5cLpRp3ac8iq8A",
                            },
                            {
                                name: "Pune",
                                type: "Regional Office",
                                address: "Pune, Maharashtra",
                                image: "/image_data/Our_Offices/pn.avif",
                                isHeadOffice: false,
                                mapsUrl: "https://maps.app.goo.gl/6tUHWSNHjfYSj6UF9",
                            },
                            {
                                name: "Thane",
                                type: "Regional Office",
                                address: "Thane, Maharashtra",
                                image: "/image_data/Our_Offices/th.avif",
                                isHeadOffice: false,
                                mapsUrl: "https://maps.app.goo.gl/YCK7vUYffYDTAAKz6",
                            },
                            {
                                name: "Panvel",
                                type: "Regional Office",
                                address: "Panvel, Maharashtra",
                                image: "/image_data/Our_Offices/pv.avif",
                                isHeadOffice: false,
                                mapsUrl: "https://maps.app.goo.gl/bjNnLRrooyvwSfW39",
                            },
                        ].map((office, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="group relative"
                            >
                                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-black-100 hover:border-black-300">
                                    {/* Office Badge */}
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 0.5,
                                            type: "spring",
                                        }}
                                        className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full shadow-lg"
                                    >
                                        <span
                                            className="text-white text-xs"
                                            style={{ fontWeight: 700 }}
                                        >
                                            {office.isHeadOffice ? "HEAD OFFICE" : "REGIONAL OFFICE"}
                                        </span>
                                    </motion.div>

                                    {/* Office Image */}
                                    <div className="relative h-60 overflow-hidden">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.6 }}
                                            className="w-full h-full"
                                        >
                                            <ImageWithFallback
                                                src={office.image}
                                                alt={`${office.name} Office`}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                        {/* Gradient Overlay */}
                                        <div className="absolute inset-x-0 top-0 bottom-[-30%] bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                    </div>

                                    {/* Office Details */}
                                    <div className="p-4">
                                        <p
                                            className="text-xs mb-3"
                                            style={{
                                                color: "black",
                                                fontWeight: 500,
                                            }}
                                        >
                                            {office.address}
                                        </p>

                                        {/* Contact Button */}
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => window.open(office.mapsUrl, "_blank")}
                                            className="w-full py-1.5 px-3 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                                            style={{
                                                fontWeight: 600,
                                                fontSize: "0.75rem",
                                                backgroundColor: colors.accent,
                                            }}
                                        >
                                            <MapPin size={14} />
                                            Get Directions
                                        </motion.button>
                                    </div>
                                </div>

                                {/* Hover Glow Effect - Removed */}
                            </motion.div>
                        ))}
                    </div>

                    {/* Centered Get In Touch Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex justify-center mb-10"
                    >
                        <Link href="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="group relative overflow-hidden rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
                                style={{ backgroundColor: "white" }}
                            >
                                <div className="relative px-8 py-4 flex items-center justify-center gap-3 overflow-hidden">
                                    {/* Content */}
                                    <Mail
                                        size={20}
                                        className="text-red relative z-10"
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "1.1rem",
                                            color: colors.primary,
                                        }}
                                    />
                                    <span
                                        className="relative text-white z-10"
                                        style={{
                                            fontWeight: 700,
                                            fontSize: "1.1rem",
                                            color: colors.primary,
                                        }}
                                    >
                                        Get In Touch
                                    </span>
                                    <motion.div
                                        className="relative z-10"
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Infinity,
                                        }}
                                    >
                                        <ArrowRight
                                            size={20}
                                            className="text-red"
                                            style={{
                                                fontWeight: 700,
                                                fontSize: "1.1rem",
                                                color: colors.primary,
                                            }}
                                        />
                                    </motion.div>
                                </div>
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Footer Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="pt-6 border-t-2 border-black-400"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-4">
                            {/* Company Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >


                                <Image
                                    src="/image_data/Website_Hero_Section/footer.avif"
                                    alt="Sthapatya Consultants - Municipal Services"
                                    width={320}
                                    height={200}
                                    className="mb-4 w-full max-w-[320px] h-auto rounded-lg"
                                />

                            </motion.div>

                            {/* Quick Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <h4
                                    className="text-lg mb-4"
                                    style={{
                                        fontWeight: 700,
                                        color: colors.text,
                                    }}
                                >
                                    Quick Links
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        {
                                            name: "About Us",
                                            path: "/about",
                                            icon: Building2,
                                        },
                                        {
                                            name: "Services",
                                            path: "/services",
                                            icon: Briefcase,
                                        },
                                        {
                                            name: "Projects",
                                            path: "/projectpage",
                                            icon: FileText,
                                        },
                                        {
                                            name: "Journey",
                                            path: "/journeypage",
                                            icon: TrendingUp,
                                        },
                                    ].map((link, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        >
                                            <Link
                                                href={link.path}
                                                className="flex items-center gap-2 text-base transition-colors duration-300"
                                                style={{
                                                    color: colors.textLight,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                <link.icon size={16} style={{ color: "#BF3131" }} />
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* More Links */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4
                                    className="text-lg mb-4"
                                    style={{
                                        fontWeight: 700,
                                        color: colors.text,
                                    }}
                                >
                                    Connect
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        {
                                            name: "Career",
                                            path: "/career",
                                            icon: Users,
                                        },
                                        {
                                            name: "Contact",
                                            path: "/contact",
                                            icon: Mail,
                                        },
                                    ].map((link, index) => (
                                        <motion.li
                                            key={index}
                                            whileHover={{ x: 5 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                            }}
                                        >
                                            <Link
                                                href={link.path}
                                                className="flex items-center gap-2 text-base transition-colors duration-300"
                                                style={{
                                                    color: colors.textLight,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                <link.icon size={16} style={{ color: "#BF3131" }} />
                                                {link.name}
                                            </Link>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <h4
                                    className="text-lg mb-4"
                                    style={{
                                        fontWeight: 700,
                                        color: colors.text,
                                    }}
                                >
                                    Contact Us
                                </h4>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <Mail
                                            size={16}
                                            className="mt-1 flex-shrink-0"
                                            style={{ color: "#BF3131" }}
                                        />
                                        <div className="flex flex-col gap-1">
                                            <a
                                                href="mailto:scipl@sthapatya.in"
                                                className="text-base transition-colors duration-300"
                                                style={{
                                                    color: colors.textLight,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                scipl@sthapatya.in
                                            </a>
                                            <a
                                                href="mailto:recruitment@sthapatya.in"
                                                className="text-base transition-colors duration-300"
                                                style={{
                                                    color: colors.textLight,
                                                    fontWeight: 500,
                                                }}
                                            >
                                                recruitment@sthapatya.in
                                            </a>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Phone
                                            size={16}
                                            className="mt-1 flex-shrink-0"
                                            style={{ color: "#BF3131" }}
                                        />
                                        <a
                                            href="tel:+917774091416"
                                            className="text-base transition-colors duration-300"
                                            style={{
                                                color: colors.textLight,
                                                fontWeight: 500,
                                            }}
                                        >
                                            +91 7774091416
                                        </a>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Clock
                                            size={16}
                                            className="mt-1 flex-shrink-0"
                                            style={{ color: "#BF3131" }}
                                        />
                                        <span
                                            className="text-base"
                                            style={{
                                                color: colors.textLight,
                                                fontWeight: 500,
                                            }}
                                        >
                                            Mon - Fri: 10:00 AM - 6:00 PM
                                        </span>
                                    </li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* Copyright Bar */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="pt-8 text-center"
                        >
                            {/* <p
                                className="text-sm"
                                style={{
                                    color: colors.textLight,
                                    fontWeight: 500,
                                }}
                            >
                                © 2025 Sthapatya Consultants India Pvt. Ltd. All rights
                                reserved.
                            </p> */}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
