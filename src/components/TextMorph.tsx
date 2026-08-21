"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TextMorphProps {
  words: string[];
  className?: string;
  style?: React.CSSProperties;
  interval?: number;
}

export default function TextMorph({ words, className = "", style = {}, interval = 2500 }: TextMorphProps) {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLSpanElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const el = textRef.current;
      if (!el) {
        isAnimating.current = false;
        return;
      }

      // Fade out
      gsap.to(el, {
        y: -12,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % words.length);
          // Fade in
          gsap.fromTo(
            el,
            { y: 12, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              ease: "power2.out",
              onComplete: () => {
                isAnimating.current = false;
              },
            }
          );
        },
      });
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span
      ref={textRef}
      className={className}
      style={{
        display: "inline-block",
        background: "linear-gradient(135deg, #7dffd6, #2BAE8E)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        ...style,
      }}
    >
      {words[index]}
    </span>
  );
}
