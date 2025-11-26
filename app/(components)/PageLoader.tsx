"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import logoImage from "../assets/b13a83b5d029e2e2aa6a839554617f84a51050ec.png";

export function PageLoader() {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setShow(false), 1200); // 1.2 sec loader
        return () => clearTimeout(timer);
    }, []);

    if (!show) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
            <motion.div
                animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.9, 1, 0.9],
                    rotate: 360,
                }}
                transition={{
                    scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                    opacity: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                    rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                }}
                className="w-48 h-48 flex items-center justify-center"
            >
                <Image
                    src={logoImage}
                    alt="Loading..."
                    className="drop-shadow-2xl object-contain"
                    width={192}
                    height={192}
                />
            </motion.div>
        </motion.div>
    );
}
