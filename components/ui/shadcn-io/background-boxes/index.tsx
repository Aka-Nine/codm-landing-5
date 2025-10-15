"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/styles/lib/utils";

export interface BoxesProps {
    className?: string;
}

export const Boxes = ({ className, ...rest }: BoxesProps) => {
    const rows = new Array(150).fill(1);
    const cols = new Array(100).fill(1);

    // Vibrant, saturated colors for light mode
    const colors = [
        "rgb(56, 189, 248)",   // sky-400
        "rgb(244, 114, 182)",  // pink-400
        "rgb(74, 222, 128)",   // green-400
        "rgb(250, 204, 21)",   // yellow-400
        "rgb(248, 113, 113)",  // red-400
        "rgb(192, 132, 252)",  // purple-400
        "rgb(96, 165, 250)",   // blue-400
        "rgb(129, 140, 248)",  // indigo-400
        "rgb(167, 139, 250)",  // violet-400
    ];

    const getRandomColor = () => {
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div
            style={{
                transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
            }}
            className={cn(
                "absolute left-1/4 p-4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0",
                className
            )}
            {...rest}
        >
            {rows.map((_, i) => (
                <motion.div
                    key={`row${i}`}
                    style={{
                        width: "4rem",
                        height: "2rem",
                        borderLeft: "1px solid rgba(203, 213, 225, 1)", // Light slate border
                        position: "relative",
                    }}
                >
                    {cols.map((_, j) => (
                        <motion.div
                            whileHover={{
                                backgroundColor: getRandomColor(),
                                scale: 1.08,
                                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
                                transition: { duration: 0 },
                            }}
                            animate={{
                                transition: { duration: 2 },
                            }}
                            key={`col${j}`}
                            style={{
                                width: "4rem",
                                height: "2rem",
                                borderRight: "1px solid rgba(203, 213, 225, 1)",
                                borderTop: "1px solid rgba(203, 213, 225, 1)",
                                position: "relative",
                                cursor: "pointer",
                                backgroundColor: "rgba(241, 245, 249, 0.5)", // Light base
                            }}
                        >
                            {j % 2 === 0 && i % 2 === 0 ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    style={{
                                        position: "absolute",
                                        height: "1.5rem",
                                        width: "2.5rem",
                                        top: "-14px",
                                        left: "-22px",
                                        color: "rgba(148, 163, 184, 1)",
                                        pointerEvents: "none",
                                    }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
                                    />
                                </svg>
                            ) : null}
                        </motion.div>
                    ))}
                </motion.div>
            ))}
        </div>
    );
};