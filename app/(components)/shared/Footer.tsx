
"use client"
import { getThemeColors } from "@/app/common/serverutility/getThemeColors";

export default function Footer() {
  const { colors } = getThemeColors(); // or "dark"

  return (
    <footer
      className="py-6 border-t-2"
      style={{ backgroundColor: colors.backgroundLight }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <p
          className="text-center text-sm"
          style={{ color: colors.textLight }}
        >
           All rights reserved © {new Date().getFullYear()} Sthapatya Consultants India Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
}
