"use client";

import { useState, useEffect } from "react";
import { Building2, Droplet, Map, BarChart3, MapPin, FileCheck, Package, Shield, LucideIcon } from "lucide-react";
import measuringTapeFlower from "../assets/b13a83b5d029e2e2aa6a839554617f84a51050ec.png";
import Image from "next/image";

// All Figma imports removed — replaced with real public paths
// Center rotating image stored inside public folder:
// interface Service {
//     icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
//     image?: string;
//     title: string;
//     description: string;
//     angle: number;
// }


interface Service {

    icon?: LucideIcon;
    image?: string;
    title: string;
    description: string;
    angle: number;
}

const services: Service[] = [
    {
        image: "/municiple_logo/panvel.avif",
        title: "Panvel Municipal Corporation",
        description: "Comprehensive property tax assessment and collection",
        angle: 0,
    },
    {
        image: "/municiple_logo/dhule.avif",
        title: "Dhule Municipal Council",
        description: "Efficient water billing and tax collection system",
        angle: 45,
    },
    {
        image: "/municiple_logo/thane.avif",
        title: "Thane Municipal Corporation",
        description: "Land use mapping for urban planning",
        angle: 90,
    },
    {
        image: "/municiple_logo/jalgaon.avif",
        title: "Jalgaon Municipal Corporation",
        description: "Transform municipal data into insights",
        angle: 135,
    },
    {
        image: "/municiple_logo/akola.avif",
        title: "Akola Municipal Corporation",
        description: "Advanced geospatial information systems",
        angle: 180,
    },
    {
        image: "/municiple_logo/amt.avif",
        title: "Amravati Municipal Corporation",
        description: "Digital license management system",
        angle: 225,
    },
    {
        image: "/municiple_logo/pandharpur.avif",
        title: "Pandharpur Municipal Corporation",
        description: "Comprehensive asset tracking",
        angle: 270,
    },
    {
        image: "/municiple_logo/washim.avif",
        title: "Washim Municipal Council",
        description: "Secure blockchain document storage",
        angle: 315,
    },
];

export function ServiceFlower() {
    const [rotation, setRotation] = useState(0);

    // Continuous rotation
    useEffect(() => {
        const interval = setInterval(
            () => setRotation((prev) => (prev + 0.3) % 360),
            50
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative w-[1000px] h-[900px] -ml-[890px]">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Petal shape */}
                        <ellipse id="petal" cx="0" cy="-160" rx="50" ry="110" />

                        {/* Petal gradients */}
                        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                            <radialGradient id={`petalGradient${i}`} key={i}>
                                <stop offset="0%" stopColor={["#E87A7A", "#E0A66D", "#DEB965", "#7BC77E", "#66C1B3", "#73A9D8", "#9E84D8", "#DC81A7"][i]} />
                                <stop offset="50%" stopColor={["#CF4646", "#C98038", "#C99D2C", "#52A855", "#37A190", "#4988C4", "#795DC2", "#C95782"][i]} />
                                <stop offset="100%" stopColor={["#A63535", "#A66629", "#A68123", "#3D8640", "#2A7F6F", "#366B9C", "#5B469E", "#A54166"][i]} />
                            </radialGradient>
                        ))}
                    </defs>

                    {/* Rotating petals */}
                    <g
                        transform={`translate(300, 300) rotate(${rotation})`}
                        style={{ transition: "none" }}
                    >
                        {services.map((service, index) => {
                            const petalAngle = service.angle;

                            return (
                                <g key={index} transform={`rotate(${petalAngle})`}>
                                    {/* Petal */}
                                    <use
                                        href="#petal"
                                        fill={`url(#petalGradient${index})`}
                                        stroke="#999"
                                        strokeWidth="4"
                                        opacity="0.85"
                                        style={{
                                            filter: "drop-shadow(0 3px 8px rgba(0, 0, 0, 0.1))",
                                        }}
                                    />

                                    {/* Text & logo */}
                                    <foreignObject x="-100" y="-250" width="200" height="180">
                                        <div
                                            className="flex items-center justify-center h-full w-full"
                                            style={{ overflow: "visible" }}
                                        >
                                            <div
                                                style={{
                                                    transform: "rotate(-90deg)",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                    transformOrigin: "center center",
                                                }}
                                            >
                                                {service.image ? (
                                                    <div className="relative w-8 h-8">
                                                        <Image
                                                            src={service.image}
                                                            alt={service.title}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                ) : (
                                                    service.icon && (
                                                        <service.icon
                                                            size={24}
                                                            className="text-black"
                                                            strokeWidth={2.5}
                                                        />
                                                    )
                                                )}

                                                <span
                                                    className="text-black"
                                                    style={{
                                                        fontSize: "11px",
                                                        fontWeight: 600,
                                                        lineHeight: "1.2",
                                                        textAlign: "center",
                                                        whiteSpace: "nowrap",
                                                    }}
                                                >
                                                    {service.title}
                                                </span>
                                            </div>
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })}
                    </g>

                    {/* Center Circle */}
                    <circle cx="300" cy="300" r="60" fill="#ff9e2c" />
                    <circle cx="300" cy="300" r="50" fill="#ffcc66" opacity="0.4" />

                    {/* Rotating Center Logo */}
                    <foreignObject x="240" y="240" width="120" height="120">
                        <div
                            className="w-full h-full flex items-center justify-center"
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                transformOrigin: "center center",
                            }}
                        >
                            <Image
                                src={measuringTapeFlower}
                                alt="Measuring Tape Flower"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </foreignObject>
                </svg>
            </div>
        </div>
    );
}
