"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  type?: "blur" | "reveal" | "scale";
}

export function AnimatedSection({
  children,
  className = "",
  delayMs = 0,
  type = "reveal",
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getAnimationClasses = () => {
    if (!isVisible) {
      if (type === "blur") return "opacity-0 blur-md translate-y-6 transition-all duration-1000 ease-out";
      if (type === "scale") return "opacity-0 scale-95 translate-y-8 transition-all duration-800 ease-out";
      return "opacity-0 translate-y-8 transition-all duration-800 ease-out";
    }

    if (type === "blur") return "opacity-100 blur-0 translate-y-0 transition-all duration-1000 ease-out";
    if (type === "scale") return "opacity-100 scale-100 translate-y-0 transition-all duration-800 ease-out";
    return "opacity-100 translate-y-0 transition-all duration-800 ease-out";
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}

export function BlurText({
  text,
  className = "",
  delayMs = 0,
}: {
  text: string;
  className?: string;
  delayMs?: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 filter-none translate-y-0"
          : "opacity-0 blur-lg translate-y-4"
      } ${className}`}
    >
      {text}
    </div>
  );
}
