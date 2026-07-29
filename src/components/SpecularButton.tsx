"use client";

import React from "react";
import "./SpecularButton.css";

export interface SpecularButtonProps {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  bgGradient?: string;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function SpecularButton({
  children = "Get Started",
  size = "lg",
  radius = 999,
  bgGradient = "linear-gradient(110deg, #444517 0%, #094f48 18%, #015863 50%, #007686 80%, #008c9d 100%)",
  textColor = "#ffffff",
  lineColor = "rgba(250, 204, 21, 0.7)",
  disabled = false,
  onClick,
  className = "",
  type = "button",
}: SpecularButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`specular-button specular-button--${size}${className ? ` ${className}` : ""}`}
      style={{
        "--sb-radius": `${radius}px`,
        "--sb-text-color": textColor,
        "--sb-bg": bgGradient,
        "--sb-line-color": lineColor,
      } as React.CSSProperties}
    >
      <span className="specular-button__label">{children}</span>
    </button>
  );
}
