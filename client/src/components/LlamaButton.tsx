import { motion } from "framer-motion";
import { useState } from "react";

interface LlamaButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export default function LlamaButton({ text = "Home", onClick, className = "" }: LlamaButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants for the ears
  const leftEarVariants = {
    idle: { rotate: 0 },
    hover: {
      rotate: [0, -15, 5, -10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  const rightEarVariants = {
    idle: { rotate: 0 },
    hover: {
      rotate: [0, 15, -5, 10, 0],
      transition: {
        duration: 0.6,
        ease: "easeInOut" as const,
        repeat: Infinity,
        repeatType: "reverse" as const,
        delay: 0.1, // Slight offset for natural feel
      },
    },
  };

  return (
    <div 
      className={`relative inline-block cursor-pointer group ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* SVG Container */}
      <svg
        width="200"
        height="220"
        viewBox="0 0 200 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Left Ear */}
        <motion.g
          initial="idle"
          animate={isHovered ? "hover" : "idle"}
          variants={leftEarVariants}
          style={{ originX: 0.8, originY: 0.9 }} // Pivot point at the base of the ear
        >
          <path
            d="M60 90 C 50 40, 50 20, 70 20 C 90 20, 90 40, 80 90"
            stroke="var(--color-llama-stroke)"
            strokeWidth="6"
            fill="var(--color-llama-fill)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M65 80 C 60 50, 60 35, 70 35 C 80 35, 80 50, 75 80"
            stroke="var(--color-llama-stroke)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Right Ear */}
        <motion.g
          initial="idle"
          animate={isHovered ? "hover" : "idle"}
          variants={rightEarVariants}
          style={{ originX: 0.2, originY: 0.9 }} // Pivot point at the base of the ear
        >
          <path
            d="M140 90 C 150 40, 150 20, 130 20 C 110 20, 110 40, 120 90"
            stroke="var(--color-llama-stroke)"
            strokeWidth="6"
            fill="var(--color-llama-fill)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M135 80 C 140 50, 140 35, 130 35 C 120 35, 120 50, 125 80"
            stroke="var(--color-llama-stroke)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Head Fluff (Top) */}
        <path
          d="M70 90 C 75 80, 85 80, 90 85 C 95 80, 105 80, 110 85 C 115 80, 125 80, 130 90"
          stroke="var(--color-llama-stroke)"
          strokeWidth="6"
          fill="var(--color-llama-fill)"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="z-10 relative"
        />

        {/* Body Main Shape - Rounder and Chubbier */}
        <path
          d="M50 110 
             C 40 115, 35 125, 35 140
             C 35 155, 40 165, 50 170
             C 40 175, 35 185, 35 195
             C 35 205, 40 210, 50 210
             L 150 210
             C 160 210, 165 205, 165 195
             C 165 185, 160 175, 150 170
             C 160 165, 165 155, 165 140
             C 165 125, 160 115, 150 110
             C 140 85, 60 85, 50 110 Z"
          stroke="var(--color-llama-stroke)"
          strokeWidth="6"
          fill="var(--color-llama-fill)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom Line */}
        <line 
          x1="20" 
          y1="200" 
          x2="180" 
          y2="200" 
          stroke="var(--color-llama-stroke)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pt-20 pointer-events-none">
        <span className="text-3xl font-bold text-[var(--color-llama-stroke)] tracking-wide">
          {text}
        </span>
      </div>
    </div>
  );
}
