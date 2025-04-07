"use client";
import { useEffect, useState } from "react";

export default function StarsBackground() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 50 }).map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute w-[4px] h-[4px] bg-white rounded-full animate-ping"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}
