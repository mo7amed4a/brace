"use client"
import React, { useEffect, useRef } from "react";

interface InfiniteSliderProps {
  speed?: number; // سرعة الحركة بالثواني
  direction?: "left" | "right"; // اتجاه الحركة
  children?: React.ReactNode
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  speed = 10,
  direction = "left",
  children
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // كلون قائمة العناصر لضمان التكرار السلس
    const clonedItems = slider.innerHTML;
    slider.innerHTML += clonedItems;

    // إضافة أنيميشن ديناميكي
    const keyframes = `
      @keyframes slide {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(${direction === "left" ? "-50%" : "50%"});
        }
      }
    `;

    const styleSheet = document.createElement("style");
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    slider.style.animation = `slide ${speed}s linear infinite`;
    if (direction === "right") {
      slider.style.animationDirection = "reverse";
    }

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [speed, direction]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={sliderRef}
        className="flex flex-nowrap whitespace-nowrap w-full"
      >
        {children}
      </div>
    </div>
  );
};

export default InfiniteSlider;