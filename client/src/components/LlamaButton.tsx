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
        width="220"
        height="240"
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
            d="M55 90 C 45 40, 45 15, 70 15 C 95 15, 95 40, 85 90"
            stroke="var(--color-llama-stroke)"
            strokeWidth="6"
            fill="var(--color-llama-fill)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 80 C 55 50, 55 30, 70 30 C 85 30, 85 50, 80 80"
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
            d="M145 90 C 155 40, 155 15, 130 15 C 105 15, 105 40, 115 90"
            stroke="var(--color-llama-stroke)"
            strokeWidth="6"
            fill="var(--color-llama-fill)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M140 80 C 145 50, 145 30, 130 30 C 115 30, 115 50, 120 80"
            stroke="var(--color-llama-stroke)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* Head Fluff (Top) */}
        <path
          d="M65 90 C 70 75, 80 75, 90 80 C 100 75, 110 75, 120 80 C 130 75, 140 75, 135 90"
          stroke="var(--color-llama-stroke)"
          strokeWidth="6"
          fill="var(--color-llama-fill)"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="z-10 relative"
        />

        {/* Body Main Shape */}
        <path
          d="M55 100 
             C 50 105, 50 115, 55 120 
             C 50 125, 50 135, 55 140 
             C 50 145, 50 155, 55 160 
             C 50 165, 50 175, 55 180 
             C 50 185, 50 195, 55 200
             L 145 200
             C 150 195, 150 185, 145 180
             C 150 175, 150 165, 145 160
             C 150 155, 150 145, 145 140
             C 150 135, 150 125, 145 120
             C 150 115, 150 105, 145 100
             C 135 80, 65 80, 55 100 Z"
          stroke="var(--color-llama-stroke)"
          strokeWidth="6"
          fill="var(--color-llama-fill)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Bottom Line */}
        <line 
          x1="15" 
          y1="200" 
          x2="185" 
          y2="200" 
          stroke="var(--color-llama-stroke)" 
          strokeWidth="6" 
          strokeLinecap="round"
        />
      </svg>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pt-24 pointer-events-none">
        <span className="text-3xl font-bold text-[var(--color-llama-stroke)] tracking-wide">
          {text}
        </span>
      </div>
    </div>
  );
}
