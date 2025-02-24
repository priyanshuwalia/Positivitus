import { motion } from "framer-motion";

const waveVariants = {
  animate: {
    y: [0, -10, 0], // Moves up and down
    transition: {
      duration: 0.6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function LoadingWave() {
  return (
    <div className="flex space-x-2">
      {[...Array(5)].map((_, i) => (
        <motion.span
          key={i}
          variants={waveVariants}
          animate="animate"
          transition={{ delay: i * 0.1 }} // Staggered wave effect
          className="w-3 h-3 bg-blue-600 rounded-full"
        />
      ))}
    </div>
  );
}
