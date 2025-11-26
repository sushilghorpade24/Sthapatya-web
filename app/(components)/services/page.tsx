"use client"
import { motion, AnimatePresence } from "motion/react";
import {
    Building2,
    Droplet,
    MapPin,
    Briefcase,
    Package,
    Shield,
    ScanLine,
    CheckCircle,
    ArrowRight,
    Zap,
    Target,
    Users,
    TrendingUp,
    Cloud,
    Lock,
    Workflow,
    Network,
    Link,
    Database,
    Globe,
    Smartphone,
    Award,
    X,
} from "lucide-react";
import { useState } from "react";
import { getThemeColors } from "@/app/common/serverutility/getThemeColors";
import { useRouter } from "next/navigation";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import Footer from "../shared/Footer";

export default function ServicesPage() {
    const { colors } = getThemeColors();
    const navigate =useRouter();
    const [selectedService, setSelectedService] = useState<
        number | null
    >(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        {
            icon: Building2,
            title: "Property Tax Survey",
            desc: "Comprehensive GIS-based property surveys with accurate data collection and digitization.",
            image: "/image_data/ServicePage/ptax.avif",
            features: [
                "Complete property assessment",
                "GPS-based mapping",
                "Digital documentation",
                "Real-time data sync"
            ],
        },
        {
            icon: Droplet,
            title: "Municipal Water Bill Management",
            desc: "Efficient water tax assessment and collection systems for urban local bodies.",
            image: "/image_data/ServicePage/wtax.avif",
            features: [
                "Connection management",
                "Billing automation",
                "Payment tracking",
                "Consumer database"
            ],
        },
        {
            icon: MapPin,
            title: "GIS Mapping",
            desc: "High-precision geographic information systems for municipal planning and analysis.",
            image: "/image_data/ServicePage/gis.avif",
            features: [
                "Satellite imagery",
                "Property mapping",
                "Spatial analysis",
                "Layer management"
            ],
        },
        {
            icon: Briefcase,
            title: "Trade License",
            desc: "Streamlined trade license management and approval workflows for businesses.",
            image: "/image_data/ServicePage/trade.avif",
            features: [
                "Online applications",
                "Approval workflows",
                "Fee collection",
                "License tracking"
            ],
        },
        {
            icon: Package,
            title: "Asset Management",
            desc: "Comprehensive municipal property and asset tracking systems.",
            image: "/image_data/ServicePage/asset.avif",
            features: [
                "Asset inventory",
                "Maintenance scheduling",
                "Lifecycle tracking",
                "Value assessment"
            ],
        },
        {
            icon: Shield,
            title: "Data Analysis",
            desc: "Predictive models for revenue, demand, and service delivery outcomes",
            image: "/image_data/ServicePage/software.avif",
            features: [
                "Document security",
                "Tamper-proof records",
                "Verification system",
                "Digital signatures"
            ],
        },
        {
            icon: ScanLine,
            title: "Scanning & Digitization",
            desc: "Large-scale document scanning and digitization services for municipal archives.",
            image: "/image_data/ServicePage/data.avif",
            features: [
                "Bulk scanning",
                "OCR processing",
                "Digital archiving",
                "Search functionality"
            ],
        },
        {
            icon: MapPin,
            title: "ELU-PLU",
            desc: "Existing Land Use and Proposed Land Use mapping for comprehensive urban planning and development control.",
            image: "/image_data/ServicePage/eluplu.avif",
            features: [
                "Land use surveys",
                "Development planning",
                "Zoning analysis",
                "Master plan support"
            ],
        },
        {
            icon: Award,
            title: "Our Commitment to Excellence",
            desc: "With 25 years of experience and 50+ lakh properties surveyed, we continue to set benchmarks in municipal services.",
            image: "/image_data/ServicePage/3.avif",
            features: [
                "100+ ULBs served",
                "Proven track record",
                "Continuous innovation",
                "Your success is our priority"
            ],
        },
    ];

    const benefits = [
        {
            icon: Globe,
            title: "Trusted Expertise",
            desc: "Decades of experience delivering reliable and result-oriented solutions."
        },
        {
            icon: Zap,
            title: "Proven Excellence",
            desc: "Consistent quality and performance that clients trust."
        },
        {
            icon: Shield,
            title: "Smart Governance",
            desc: "Innovative tools that simplify and strengthen administration."
        },
        {
            icon: Smartphone,
            title: "Municipal Innovation",
            desc: "Modern solutions driving efficiency and transparency in services."
        }
    ];

    const techStack = [
        {
            icon: Database,
            title: "Robust Databases",
            desc: "PostgreSQL, MySQL, MongoDB",
            color: colors.primary
        },
        {
            icon: Cloud,
            title: "Cloud Infrastructure",
            desc: "AWS, Azure, Google Cloud",
            color: colors.accent
        },
        {
            icon: Smartphone,
            title: "Mobile Development",
            desc: "React Native, Flutter, Android",
            color: colors.primary
        },
        {
            icon: Globe,
            title: "Web Technologies",
            desc: "React, Node.js, .NET Core",
            color: colors.accent
        },
        {
            icon: MapPin,
            title: "GIS Technologies",
            desc: "ArcGIS, QGIS, Google Maps API",
            color: colors.primary
        },
        {
            icon: Lock,
            title: "Security",
            desc: "SSL/TLS, OAuth, Encryption",
            color: colors.accent
        }
    ];

    const techStackItems = [
        { title: "AI chatbot", icon: Cloud },
        { title: "Mobile Apps", icon: Smartphone },
        { title: "Web Portal", icon: Globe },
        { title: "Real-time Data", icon: Database },
        { title: "Secure Storage", icon: Lock },
        { title: "24/7 Support", icon: Shield }
    ];

    const integrations = [
        {
            icon: Network,
            title: "IGR Portal",
            desc: "Inspector General of Registration integration for seamless property data exchange and verification"
        },
        {
            icon: Link,
            title: "Aaple Sarkar Portal",
            desc: "Government of Maharashtra's unified portal for citizen services and administrative workflows"
        },
        {
            icon: Workflow,
            title: "Payment Gateways",
            desc: "Multiple payment gateway integrations for secure online tax and fee collection"
        },
        {
            icon: Shield,
            title: "Digital Signature",
            desc: "Integration with digital signature services for authenticated document processing"
        },
        {
            icon: Network,
            title: "Citizen Portal",
            desc: "Integration with digital signature services for authenticated document processing"
        },
        {
            icon: Workflow,
            title: "Chatbots",
            desc: "Integration with digital signature services for authenticated document processing"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Video Background */}
            <div className="relative pt-20 h-[60vh] sm:h-[65vh] md:h-[70vh] min-h-[500px] sm:min-h-[550px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        style={{
                            objectPosition: 'center center'
                        }}
                    >
                        <source
                            src="/image_data/Website_Hero_Section/servicepage.webm"
                            type="video/mp4"
                        />
                    </video>
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10">
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
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 text-white"
                            style={{ fontWeight: 700 }}
                        >
                            Transforming Cities
                            <br />
                            <span style={{ color: colors.accent }}>Empowering People</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
                        >
                            Comprehensive digital solutions for modern urban development and municipal excellence across Maharashtra
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            className="flex flex-wrap gap-4 justify-center"
                        >
                            <button
                                onClick={() => {
                                    document
                                        .getElementById("services")
                                        ?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                }}
                                className="px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                style={{
                                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`,
                                    color: 'white',
                                    fontWeight: 600
                                }}
                            >
                                Explore Services
                            </button>
                            <button
                                onClick={() => navigate.push('/contact')}
                                className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
                                style={{ fontWeight: 600 }}
                            >
                                Contact Us
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Services Grid */}
                <div
                    id="services"
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            onClick={() => {
                                setSelectedService(index);
                                setIsModalOpen(true);
                            }}
                            className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all border-2 cursor-pointer"
                            style={{
                                borderColor: colors.accent,
                                borderWidth: "2px"
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <ImageWithFallback
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/45" />
                            </div>

                            {/* Content */}
                            <div className="relative z-10 p-6">
                                <div
                                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform backdrop-blur-sm"
                                    style={{
                                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`
                                    }}
                                >
                                    <service.icon className="text-white" size={28} />
                                </div>

                                <h3 className="text-2xl mb-3 text-white" style={{ fontWeight: 600, textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                                    {service.title}
                                </h3>

                                <p className="text-white/90 mb-4 leading-relaxed" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}>
                                    {service.desc}
                                </p>

                                <div className="space-y-2">
                                    {service.features.slice(0, 3).map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <CheckCircle size={16} style={{ color: colors.accent }} className="flex-shrink-0 mt-1" />
                                            <span className="text-sm text-white/90" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Click to view more indicator */}
                                <div className="mt-4 flex items-center gap-2 text-white/80 group-hover:text-white transition-colors">
                                    <span className="text-sm">Click for details</span>
                                    <ArrowRight size={16} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Our Services */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-b from-gray-50 to-white rounded-3xl py-12 px-4 mb-16"
                >
                    <div className="max-w-5xl mx-auto">
                        <h2
                            className="text-4xl text-center mb-10"
                            style={{ fontWeight: 700, color: colors.text }}
                        >
                            Why Choose Our Services
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="text-center"
                                >
                                    <div
                                        className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                                        style={{ backgroundColor: `${colors.accent}20` }}
                                    >
                                        <benefit.icon size={28} style={{ color: colors.accent }} />
                                    </div>
                                    <h3 className="text-xl mb-2" style={{ fontWeight: 600, color: colors.text }}>
                                        {benefit.title}
                                    </h3>
                                    <p className="text-gray-600">{benefit.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Technology Stack and Seamless Integration - Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    {/* Technology Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                            <h2
                                className="text-3xl mb-6"
                                style={{ fontWeight: 600, color: colors.text }}
                            >
                                Technology Stack
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {techStackItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle
                                            size={20}
                                            style={{ color: colors.accent }}
                                            className="flex-shrink-0"
                                        />
                                        <span
                                            style={{
                                                color: colors.accent,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {item.title}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Seamless Integration */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 h-full">
                            <h2
                                className="text-3xl mb-6"
                                style={{ fontWeight: 600, color: colors.text }}
                            >
                                Seamless Integration
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {integrations.map((integration, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle
                                            size={20}
                                            style={{ color: colors.accent }}
                                            className="flex-shrink-0"
                                        />
                                        <span
                                            style={{
                                                color: colors.accent,
                                                fontWeight: 500,
                                            }}
                                        >
                                            {integration.title}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Service Details Modal - Slides from Right to Center */}
            <AnimatePresence>
                {isModalOpen && selectedService !== null && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                            onClick={() => setIsModalOpen(false)}
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, x: "100%", scale: 0.8 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: "100%", scale: 0.8 }}
                            transition={{
                                type: "spring",
                                damping: 25,
                                stiffness: 300,
                                duration: 0.5
                            }}
                            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl z-50 overflow-hidden"
                        >
                            {/* Background Image with Overlay */}
                            <div className="absolute inset-0">
                                <ImageWithFallback
                                    src={services[selectedService].image}
                                    alt={services[selectedService].title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/50 to-black/55" />
                            </div>

                            {/* Close Button */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsModalOpen(false);
                                }}
                                className="absolute top-6 right-6 z-[100] w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all group cursor-pointer"
                            >
                                <X className="text-white group-hover:rotate-90 transition-transform duration-300" size={20} />
                            </button>

                            {/* Scrollable Content */}
                            <div className="relative z-10 overflow-y-auto max-h-[85vh] p-8 md:p-12">
                                {/* Header */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center mb-8"
                                >
                                    <div
                                        className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
                                        style={{
                                            background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.accent} 100%)`
                                        }}
                                    >
                                        {(() => {
                                            const ServiceIcon = services[selectedService].icon;
                                            return <ServiceIcon className="text-white" size={48} />;
                                        })()}
                                    </div>
                                    <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontWeight: 700 }}>
                                        {services[selectedService].title}
                                    </h2>
                                    <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                                        {services[selectedService].desc}
                                    </p>
                                </motion.div>

                                {/* Features Grid */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="mb-8"
                                >
                                    <h3 className="text-2xl mb-6 text-white text-center" style={{ fontWeight: 600 }}>
                                        Key Features
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {services[selectedService].features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + idx * 0.1 }}
                                                className="flex items-start gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 transition-all"
                                            >
                                                <CheckCircle
                                                    size={20}
                                                    style={{ color: colors.accent }}
                                                    className="flex-shrink-0 mt-1"
                                                />
                                                <span className="text-white/90">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Benefits */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="mb-8"
                                >
                                    <h3 className="text-2xl mb-6 text-white text-center" style={{ fontWeight: 600 }}>
                                        Why Choose This Service?
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {benefits.map((benefit, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 + idx * 0.1 }}
                                                className="p-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <div
                                                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                        style={{ backgroundColor: `${colors.accent}40` }}
                                                    >
                                                        <benefit.icon size={20} style={{ color: colors.accent }} />
                                                    </div>
                                                    <div>
                                                        <p className="text-white mb-1" style={{ fontWeight: 600 }}>
                                                            {benefit.title}
                                                        </p>
                                                        <p className="text-sm text-white/80">{benefit.desc}</p>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* <Footer /> */}
        </div>
    );
}