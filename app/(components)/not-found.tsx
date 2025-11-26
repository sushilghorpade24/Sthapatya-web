"use client";

import { ArrowRight, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-white via-[#fff4f0] to-white px-4 py-8">
            {/* Centered card */}
            <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl border border-[#f2d3cb] overflow-hidden animate-fadeIn">
                <div className="grid md:grid-cols-2">

                    {/* LEFT: TEXT SECTION */}
                    <div className="relative p-8 md:p-10 lg:px-12 flex flex-col justify-center">

                        {/* Badge + 404 */}
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#A62828]/6 px-4 py-1 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#A62828] mb-4">
                            <h1 className="text-5xl md:text-6xl font-extrabold text-[#A62828] leading-none">
                                404
                            </h1>
                            Not Found
                        </div>

                        {/* Button */}
                        <div className="mt-8 flex justify-center">
                            <button
                                onClick={() => router.push("/")}
                                className="inline-flex items-center gap-2 rounded-full bg-[#BF3131] px-6 py-2.5 text-sm font-medium text-black shadow-md shadow-[#A62828]/35 hover:bg-[#8e2020] hover:shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.97]"
                            >
                                <Home size={16} />
                                Go to Home
                            </button>
                        </div>

                        <h2 className="mt-3 text-xl md:text-2xl font-semibold text-neutral-900">
                            Looks like you&apos;re lost
                        </h2>

                        <p className="mt-2 text-sm md:text-base text-neutral-600 max-w-md">
                            The page you are looking for is not available or may have been
                            moved. Please check the URL or return to the home page.
                        </p>

                        {/* Steps */}
                        <div className="mt-6 space-y-3 text-xs md:text-sm text-neutral-600">
                            <div className="flex items-start gap-3">
                                <span className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 text-[11px] text-neutral-700">
                                    1
                                </span>
                                <span>Verify that the address bar URL is typed correctly.</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-[2px] flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 text-[11px] text-neutral-700">
                                    2
                                </span>
                                <span>Use the main navigation on the home page to find what you need.</span>
                            </div>
                        </div>

                        <p className="mt-3 text-[11px] text-neutral-400">
                            If you believe this is an error, please contact the administrator.
                        </p>
                    </div>

                    {/* RIGHT: Illustration */}
                    <div className="relative bg-gradient-to-br from-[#A62828]/7 via-[#A62828]/30 to-[#6f1515] text-white flex items-center justify-center p-8 md:p-8">
                        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />

                        <div className="relative w-full max-w-sm animate-float">

                            {/* SVG Illustration */}
                            <svg
                                viewBox="0 0 260 260"
                                className="w-full h-auto drop-shadow-[0_18px_45px_rgba(0,0,0,0.3)]"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="bulbGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#FFE4DF" />
                                        <stop offset="100%" stopColor="#F9C2BA" />
                                    </linearGradient>
                                    <linearGradient id="baseGrad" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#FFF" stopOpacity="0.95" />
                                        <stop offset="100%" stopColor="#F3E1DE" />
                                    </linearGradient>
                                </defs>

                                <circle cx="130" cy="120" r="105" fill="rgba(255,255,255,0.12)" />

                                {/* Bulb body */}
                                <path
                                    d="M130 35C101 35 78 58 78 87c0 17 7 31 18 41 8 7 12 17 12 28v7h44v-7c0-11 4-21 12-28 11-10 18-24 18-41 0-29-23-52-52-52Z"
                                    fill="url(#bulbGrad)"
                                    stroke="#F4B3A6"
                                    strokeWidth="2.5"
                                />

                                {/* Crack */}
                                <path
                                    d="M96 61l12 18 14-10 10 14 16-20"
                                    fill="none"
                                    stroke="#A62828"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />

                                {/* Interior lines */}
                                <path
                                    d="M120 90l10 40M140 90l-6 24"
                                    stroke="#D88B7E"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />

                                {/* Base */}
                                <rect
                                    x="102"
                                    y="156"
                                    width="56"
                                    height="11"
                                    rx="5.5"
                                    fill="url(#baseGrad)"
                                    stroke="#E4CBC5"
                                    strokeWidth="1.5"
                                />
                                <rect
                                    x="102"
                                    y="171"
                                    width="56"
                                    height="11"
                                    rx="5.5"
                                    fill="url(#baseGrad)"
                                    stroke="#E4CBC5"
                                    strokeWidth="1.5"
                                />

                                <rect x="108" y="188" width="44" height="8" rx="4" fill="#A62828" />
                                <rect x="108" y="199" width="44" height="8" rx="4" fill="#7C1919" />

                                {/* Sparks */}
                                <g stroke="#FFEDE8" strokeWidth="2" strokeLinecap="round">
                                    <path d="M68 82h10" />
                                    <path d="M70 100h10" />
                                    <path d="M184 82h10" />
                                    <path d="M182 100h10" />
                                    <path d="M128 30v10" />
                                </g>
                            </svg>

                            <p className="mt-5 text-[11px] text-white/80 text-center tracking-[0.25em] uppercase">
                                Sthapatya Consultants
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
