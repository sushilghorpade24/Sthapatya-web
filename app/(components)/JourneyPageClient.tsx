"use client"
import { motion } from "motion/react";
import {  MapPin, Award, TrendingUp, Building, Rocket, Heart, Shield, Users, Star, Sparkles } from "lucide-react";
import { getThemeColors } from "@/app/common/serverutility/getThemeColors";
import { ImageWithFallback } from "./figma/ImageWithFallback";
// import { ImageWithFallback } from "../figma/ImageWithFallback";



export default function JourneyPageClient() {
    const { colors } = getThemeColors();

    const milestones = [
        {
            year: "2001",
            title: "Foundation",
            desc: "Vision to transform urban governance",
            icon: Building,
            stats: "Commitment",
        },
        {
            year: "2010",
            title: "Achievement",
            desc: "Completed 50+ Projects",
            icon: MapPin,
            stats: "50+ Projects",
        },
        {
            year: "2016",
            title: "Major Expansion",
            desc: "1st UAV DGCA approved Drone Fying 5CM Data in Maharashtra's ULBs",
            icon: TrendingUp,
            stats: "1st UAV DGCA",
        },
        {
            year: "2017",
            title: "Growth",
            desc: "MMR Region ULBs undertaken and Completed 100+ ULBs.",
            icon: Award,
            stats: "100+ ULBs",
        },
        {
            year: "2021",
            title: "Recognition",
            desc: "SCOCH Award by central government & received ",
            icon: Award,
            stats: "75+ Projects",
        },
        {
            year: "2023",
            title: "Recognition",
            desc: "1st IGR Integration in Maharashtra ULB",
            icon: Rocket,
            stats: "100+ ULBs",
        },
        {
            year: "2024",
            title: "Growth",
            desc: "THANE | PCMC | PANVEL , 9L Properties completed with 150+ projects",
            icon: TrendingUp,
            stats: "9L Properties",
        },
        {
            year: "2025",
            title: "Growth",
            desc: "4000Cr+ Revenue generated | Completed 50L+ properties and 150+ ULBs",
            icon: MapPin,
            stats: "4500Cr+ Revenue",
        },
    ];

    const commitments = [
        {
            icon: Heart,
            title: "Excellence in Service",
            desc: "Delivering quality solutions that exceed expectations"
        },
        {
            icon: Shield,
            title: "Trust & Reliability",
            desc: "Building lasting partnerships through integrity"
        },
        {
            icon: Users,
            title: "Client-Centric Approach",
            desc: "Your success is our priority, always"
        },
        {
            icon: Star,
            title: "Innovation First",
            desc: "Leading with cutting-edge technology solutions"
        }
    ];

    const upcomingEnhancements = [
        "AI-powered property assessment and valuation",
        "Blockchain integration for transparent revenue tracking",
        "IoT sensors for smart infrastructure monitoring",
        "Advanced predictive analytics dashboard",
        "Drone-based aerial surveying technology",
        "Mobile-first citizen interactive portal",
        "Real-time compliance and audit automation",
        "AI-Based Chatbots for faster customer service"
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section with Background Image */}
            <div className="relative pt-24 sm:pt-20 h-auto sm:h-[65vh] md:h-[70vh] min-h-[550px] sm:min-h-[550px] md:min-h-[600px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <ImageWithFallback
                        src="/image_data/Website_Hero_Section/journey.avif"
                        alt="Smart City Technology Background"
                        className="w-full h-full object-cover"
                        style={{
                            objectPosition: 'center center'
                        }}
                    />
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/30 to-black/40" />
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
                            Milestones That
                            <br />
                            <span style={{ color: "white" }}>Define Us</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-2xl sm:text-xl md:text-2xl lg:text-3xl text-gray-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-4"
                        >
                            From a visionary start to becoming Maharashtra&apos;s leading urban governance partner —
                            our journey of innovation, growth, and unwavering commitment
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-6 sm:pt-8 pb-6 sm:pb-8">
                {/* Two Column Layout: Journey Cards (Left) + Commitment (Right) */}
                <div className="grid lg:grid-cols-[1fr_380px] gap-6 sm:gap-8 mb-6 sm:mb-8">

                    {/* Left: Journey Timeline */}
                    <div className="relative">
                        {/* Section Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-6 sm:mb-8"
                        >
                            <h2 className="text-2xl sm:text-3xl md:text-4xl mb-2" style={{ fontWeight: 700, color: colors.primary }}>
                                Timeline of Growth
                            </h2>
                            <p className="text-sm sm:text-base" style={{ color: colors.secondary }}>
                                Every milestone marks a step towards excellence
                            </p>
                        </motion.div>

                        {/* Vertical line */}
                        <div
                            className="absolute left-[18px] sm:left-[22px] top-20 sm:top-24 bottom-8 w-0.5"
                            style={{ backgroundColor: colors.primary }}
                        />

                        <div className="space-y-3 sm:space-y-4">
                            {milestones.map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.05 }}
                                    className="relative flex items-start gap-2.5 sm:gap-4"
                                >
                                    {/* Icon circle */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                                        style={{ backgroundColor: '#BF3131' }}
                                    >
                                        <milestone.icon className="text-white" size={16} />
                                    </motion.div>

                                    {/* Card */}
                                    <motion.div
                                        whileHover={{ scale: 1.01, y: -2 }}
                                        className="flex-1 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-md border border-gray-200 hover:shadow-lg transition-all min-w-0"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                                            <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-3 flex-1 min-w-0">
                                                {/* Year badge */}
                                                <div
                                                    className="px-2.5 sm:px-3 py-1 rounded-full text-white text-xs sm:text-sm flex-shrink-0 w-fit"
                                                    style={{ backgroundColor: '#7D0A0A', fontWeight: 700 }}
                                                >
                                                    {milestone.year}
                                                </div>

                                                {/* Content */}
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-base sm:text-lg mb-0.5 sm:mb-1" style={{ fontWeight: 700, color: colors.primary }}>
                                                        {milestone.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-sm" style={{ color: '#BF3131' }}>
                                                        {milestone.desc}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Stats badge */}
                                            <div
                                                className="text-xs sm:text-sm flex-shrink-0"
                                                style={{ color: '#7D0A0A', fontWeight: 700 }}
                                            >
                                                {milestone.stats}
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            ))}

                            {/* Journey Continues */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="relative flex items-center gap-2.5 sm:gap-4 mt-4 sm:mt-6"
                            >
                                {/* Animated growing icon */}
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center flex-shrink-0 z-10 shadow-lg"
                                    style={{
                                        backgroundColor: '#BF3131',
                                        boxShadow: '0 0 20px rgba(191, 49, 49, 0.3)'
                                    }}
                                >
                                    <TrendingUp className="text-white" size={20} />
                                </motion.div>

                                {/* Continuation message */}
                                <motion.div
                                    className="flex-1 bg-gradient-to-r from-red-50 to-white rounded-xl sm:rounded-2xl p-3 sm:p-4 border-2 border-dashed min-w-0"
                                    style={{ borderColor: '#BF3131' }}
                                >
                                    <div className="flex items-center gap-2 sm:gap-3">
                                        <Sparkles size={16} className="sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#BF3131' }} />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm sm:text-base mb-0.5 sm:mb-1" style={{ fontWeight: 700, color: colors.primary }}>
                                                Journey Continues...
                                            </h3>
                                            <p className="text-xs sm:text-sm" style={{ color: '#7D0A0A' }}>
                                                To become the most experienced company for Property tax Survey and Assessment domain in India.
                                            </p>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                            className="flex-shrink-0 hidden sm:block"
                                        >
                                            <Sparkles size={18} style={{ color: '#BF3131' }} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Commitment Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="h-fit lg:sticky lg:top-24"
                    >
                        {/* Commitment Card */}
                        <div
                            className="bg-gradient-to-br rounded-xl sm:rounded-2xl p-4 sm:p-6 border shadow-lg"
                            style={{
                                borderColor: `${colors.primary}15`,
                                background: `linear-gradient(135deg, ${colors.primary}05 0%, ${colors.accent}08 100%)`
                            }}
                        >
                            <div className="text-center mb-4 sm:mb-5">
                                <div
                                    className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: colors.accent }}
                                >
                                    <Heart className="text-white" size={24} />
                                </div>
                                <h2 className="text-xl sm:text-2xl mb-1.5 sm:mb-2" style={{ fontWeight: 700, color: colors.primary }}>
                                    Our Commitment
                                </h2>
                                <p className="text-xs sm:text-sm text-gray-600">
                                    Values that drive our excellence
                                </p>
                            </div>

                            <div className="space-y-2.5 sm:space-y-3">
                                {commitments.map((commitment, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5, scale: 1.02 }}
                                        className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border hover:shadow-md transition-all"
                                        style={{ borderColor: `${colors.accent}20` }}
                                    >
                                        <div className="flex items-start gap-2.5 sm:gap-3">
                                            <div
                                                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                style={{ backgroundColor: `${colors.accent}15` }}
                                            >
                                                <commitment.icon size={18} style={{ color: colors.accent }} />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xs sm:text-sm mb-0.5 sm:mb-1" style={{ fontWeight: 700, color: colors.text }}>
                                                    {commitment.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                    {commitment.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Future Goals - Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl"
                    style={{
                        background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`
                    }}
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                                    backgroundSize: '40px 40px'
                                }}
                            />
                        </div>

                        {/* Floating shapes - hidden on small screens */}
                        <motion.div
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-10 right-20 w-20 h-20 rounded-full border-2 border-white/20 hidden sm:block"
                        />
                        <motion.div
                            animate={{
                                y: [0, 20, 0],
                                rotate: [360, 180, 0]
                            }}
                            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                            className="absolute bottom-10 left-20 w-16 h-16 rounded-full border-2 border-white/20 hidden sm:block"
                        />
                    </div>

                    <div className="relative z-10">
                        <div className="text-center mb-4 sm:mb-6">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-1.5 sm:mb-2" style={{ fontWeight: 800 }}>
                                Future Goals <span style={{ color: colors.accent }}>2025+</span>
                            </h2>
                            <p className="text-base sm:text-xl text-white/90 max-w-2xl mx-auto mb-0.5 sm:mb-1">
                                Upcoming Enhancements
                            </p>
                            <p className="text-xs sm:text-sm text-white/80 max-w-2xl mx-auto px-2 sm:px-0">
                                Continuing our mission to transform urban governance across India
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
                            {/* Left Column - First 4 points */}
                            <div className="space-y-4">
                                {upcomingEnhancements.slice(0, 4).map((enhancement, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                            style={{ backgroundColor: colors.accent }}
                                        >
                                            <Sparkles className="text-white" size={16} />
                                        </div>
                                        <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed" style={{ fontWeight: 500 }}>
                                            {enhancement}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Right Column - Last 4 points */}
                            <div className="space-y-4">
                                {upcomingEnhancements.slice(4, 8).map((enhancement, index) => (
                                    <motion.div
                                        key={index + 4}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <div
                                            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                                            style={{ backgroundColor: colors.accent }}
                                        >
                                            <Sparkles className="text-white" size={16} />
                                        </div>
                                        <p className="text-sm sm:text-base lg:text-lg text-white/95 leading-relaxed" style={{ fontWeight: 500 }}>
                                            {enhancement}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            
        </div>
    );
}