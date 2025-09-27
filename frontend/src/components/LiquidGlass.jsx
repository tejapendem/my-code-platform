// src/components/LiquidGlass.jsx
import React from "react";

export default function LiquidGlass({ children, className = "", opacity = -0.90 }) {
  return (
    <div
      className={`rounded-2xl border border-white/20 
                  bg-white/${Math.floor(opacity * 100)} dark:bg-white/${Math.floor(opacity * 50)}
                  backdrop-blur-xl shadow-xl 
                  transition-all duration-300 ${className}`}
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`, // Light mode
        backdropFilter: "blur(20px)", // Strong blur
      }}
    >
      {children}
    </div>
  );
}
