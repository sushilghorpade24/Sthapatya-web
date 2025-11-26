"use client"
import { motion } from "motion/react";
import { ReactNode } from "react";
import { getThemeColors } from "../common/serverutility/getThemeColors";
// import { useThemeColors } from "./useThemeColors";

interface AnimatedButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "gradient" | "glass";
    onClick?: () => void;
    className?: string;
    icon?: ReactNode;
    iconPosition?: "left" | "right";
}

export function AnimatedButton({
    children,
    variant = "primary",
    onClick,
    className = "",
    icon,
    iconPosition = "left"
}: AnimatedButtonProps) {
    const { colors } = getThemeColors();

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-blue-100 hover:border-blue-200 transition-all duration-300 shadow-sm hover:shadow-md ${className}`}
            style={{
                color: colors.primary
            }}
        >
            {/* Content */}
            <span className="relative z-10 flex items-center gap-2">
                {icon && iconPosition === "left" && (
                    <span className="inline-flex" style={{ fontSize: '1.1rem' }}>
                        {icon}
                    </span>
                )}

                <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {children}
                </span>

                {icon && iconPosition === "right" && (
                    <span className="inline-flex" style={{ fontSize: '1.1rem' }}>
                        {icon}
                    </span>
                )}
            </span>
        </motion.button>
    );
}
