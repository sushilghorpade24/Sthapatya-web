"use client"
import { motion } from "motion/react";
import { useState } from "react";

interface HomeSidebarProps {
  sections?: { id: string; name: string }[]; // <-- allow undefined
  activeSection: string;
  onSectionClick: (id: string) => void;
}

export default function HomeSidebar({
  sections = [],             // <-- fallback protects .map()
  activeSection,
  onSectionClick,
}: HomeSidebarProps) {
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center gap-3 cursor-pointer flex-row-reverse"
            onMouseEnter={() => setHoveredSection(section.id)}
            onMouseLeave={() => setHoveredSection(null)}
            onClick={() => onSectionClick(section.id)}
          >
            {/* Vertical Line */}
            <motion.div
              className={`w-0.5 transition-all ${
                activeSection === section.id
                  ? "h-12 bg-[#D84040]"
                  : "h-8 bg-[#8E1616]"
              }`}
              animate={{
                height:
                  activeSection === section.id
                    ? 48
                    : hoveredSection === section.id
                    ? 40
                    : 32,
                backgroundColor:
                  activeSection === section.id
                    ? "#D84040"
                    : hoveredSection === section.id
                    ? "#8E1616"
                    : "#8E1616",
              }}
            />

            {/* Section Name */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{
                opacity:
                  hoveredSection === section.id ||
                  activeSection === section.id
                    ? 1
                    : 0,
                x:
                  hoveredSection === section.id ||
                  activeSection === section.id
                    ? 0
                    : 10,
              }}
              className={`absolute right-2 whitespace-nowrap px-3 py-1.5 rounded-md ${
                activeSection === section.id
                  ? "bg-[#8E1616] text-white"
                  : "bg-white/95 text-[#1D1616] shadow-lg"
              }`}
            >
              {section.name}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
