import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MobileCarouselProps<T> = {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    interval?: number; // ms
    className?: string;
};

export function MobileCarousel<T>({
    items,
    renderItem,
    interval = 3000,
    className,
}: MobileCarouselProps<T>) {
    const [index, setIndex] = useState(0);
    const timerRef = useRef<number | null>(null);
    const touchStartX = useRef<number | null>(null);
    const touchDeltaX = useRef<number>(0);

    useEffect(() => {
        if (!items || items.length <= 1) return;

        const startTimer = () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
            timerRef.current = window.setInterval(() => {
                setIndex((i) => (i + 1) % items.length);
            }, interval) as unknown as number;
        };

        startTimer();

        return () => {
            if (timerRef.current) window.clearInterval(timerRef.current);
        };
    }, [items.length, interval]);

    const goTo = (i: number) => {
        setIndex((_) => {
            if (i < 0) return items.length - 1;
            if (i >= items.length) return 0;
            return i;
        });
    };

    const onTouchStart: React.TouchEventHandler = (e) => {
        if (timerRef.current) window.clearInterval(timerRef.current);
        touchStartX.current = e.touches[0].clientX;
        touchDeltaX.current = 0;
    };

    const onTouchMove: React.TouchEventHandler = (e) => {
        if (touchStartX.current == null) return;
        touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
    };

    const onTouchEnd: React.TouchEventHandler = () => {
        const dx = touchDeltaX.current;
        const threshold = 40; // px
        if (dx > threshold) {
            goTo(index - 1);
        } else if (dx < -threshold) {
            goTo(index + 1);
        }

        // restart timer
        if (timerRef.current) window.clearInterval(timerRef.current);
        timerRef.current = window.setInterval(() => {
            setIndex((i) => (i + 1) % items.length);
        }, interval) as unknown as number;

        touchStartX.current = null;
        touchDeltaX.current = 0;
    };

    return (
        <div className={className}>
            <div
                className="relative overflow-hidden w-full"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="flex"
                    style={{
                        width: `${items.length * 100}%`,
                        transform: `translateX(-${index * (100 / items.length)}%)`,
                        transition: "transform 400ms cubic-bezier(.22,1,.36,1)",
                        willChange: "transform",
                    }}
                >
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className="flex-shrink-0 w-full"
                            style={{ width: `${100 / items.length}%` }}
                        >
                            {renderItem(item, i)}
                        </div>
                    ))}
                </div>

                {/* Prev / Next buttons (optional) */}
                <button
                    aria-label="Previous"
                    onClick={() => goTo(index - 1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    aria-label="Next"
                    onClick={() => goTo(index + 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-3">
                {items.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`h-2 rounded-full transition-all duration-200 ${i === index ? "w-6 bg-black" : "w-2 bg-black/30"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export default MobileCarousel;