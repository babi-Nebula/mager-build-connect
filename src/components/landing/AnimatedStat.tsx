
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedStatProps {
  targetValue: number;
  duration?: number; // in milliseconds
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedStat: React.FC<AnimatedStatProps> = ({
  targetValue,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const statRef = useRef<HTMLParagraphElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    const currentStatRef = statRef.current;

    if (currentStatRef) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            let startTimestamp: number | null = null;
            const step = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              setCurrentValue(Math.floor(progress * targetValue));
              if (progress < 1) {
                animationFrameId.current = requestAnimationFrame(step);
              }
            };
            animationFrameId.current = requestAnimationFrame(step);
            observer.unobserve(entry.target); // Animate only once
          }
        },
        { threshold: 0.1 } // Trigger when 10% of the element is visible
      );
      observer.observe(currentStatRef);
    }

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (currentStatRef && observer) {
        observer.unobserve(currentStatRef);
      }
    };
  }, [targetValue, duration]);

  return (
    <p className={className} ref={statRef}>
      {prefix}{currentValue}{suffix}
    </p>
  );
};

export default AnimatedStat;
