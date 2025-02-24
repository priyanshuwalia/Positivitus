import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
      }}
      className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50"
    />
  );
}
