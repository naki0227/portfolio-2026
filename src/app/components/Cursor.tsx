import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

export function Cursor() {
  const [cursorType, setCursorType] = useState("default");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const trail1X = useSpring(mouseX, { damping: 25, stiffness: 330 });
  const trail1Y = useSpring(mouseY, { damping: 25, stiffness: 330 });
  const trail2X = useSpring(mouseX, { damping: 25, stiffness: 220 });
  const trail2Y = useSpring(mouseY, { damping: 25, stiffness: 220 });

  const x1 = useTransform(trail1X, (v) => v - 12);
  const y1 = useTransform(trail1Y, (v) => v - 12);
  const x2 = useTransform(trail2X, (v) => v - 8);
  const y2 = useTransform(trail2Y, (v) => v - 8);
  const cx = useTransform(cursorX, (v) => v - 24);
  const cy = useTransform(cursorY, (v) => v - 24);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        setCursorType("pointer");
      } else if (target.closest('code') || target.closest('pre')) {
        setCursorType("code");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Trailing smoke (afterimages) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-6 h-6 rounded-full bg-[#FF66B2]/20 mix-blend-screen blur-[4px]"
        style={{ x: x1, y: y1 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] w-4 h-4 rounded-full bg-[#FF66B2]/10 mix-blend-screen blur-[6px]"
        style={{ x: x2, y: y2 }}
      />

      {/* Main Cursor - Tanuki Tail with scale effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-12 h-12 flex items-center justify-center"
        style={{
          x: cx,
          y: cy,
        }}
        animate={{
          scale: cursorType === "pointer" ? 1.5 : (cursorType === "code" ? 0.8 : 1),
          rotate: cursorType === "code" ? 0 : -45
        }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {cursorType === "code" ? (
          <div className="w-10 h-10 rounded-lg bg-[#DB2777]/80 dark:bg-[#FF66B2]/80 flex items-center justify-center text-[10px] font-black text-white shadow-lg">
            &lt;/&gt;
          </div>
        ) : (
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 80 20 C 100 50, 70 90, 40 90 C 20 90, 10 70, 15 50 C 20 20, 50 10, 80 20 Z" fill="#8B5A2B" />
            <path d="M 70 30 C 85 50, 60 75, 40 80 C 30 65, 25 50, 35 40 C 45 30, 60 25, 70 30 Z" fill="#3D2616" />
            <path d="M 60 40 C 70 55, 50 65, 40 70 C 35 60, 35 50, 40 45 C 45 40, 55 35, 60 40 Z" fill="#8B5A2B" />
          </svg>
        )}
      </motion.div>
    </>
  );
}
