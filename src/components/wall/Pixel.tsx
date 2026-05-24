import { motion } from "framer-motion";

type PixelProps = {
  active: boolean;
};

function Pixel({ active }: PixelProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.05,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        relative h-10 w-10 overflow-hidden rounded-[14px]
        ${
          active
            ? "bg-gradient-to-b from-[#ff1744] to-[#d90429]"
            : "bg-white/40"
        }
      `}
      style={{
        boxShadow: active
          ? `
            inset 0 1px 1px rgba(255,255,255,0.4),
            inset 0 -2px 6px rgba(0,0,0,0.15),
            0 10px 30px rgba(217,4,41,0.18)
          `
          : `
            inset 0 1px 1px rgba(255,255,255,0.6)
          `,
      }}
    >
      <div className="absolute left-1 top-1 h-2 w-2 rounded-full bg-white/40 blur-[1px]" />
    </motion.div>
  );
}

export default Pixel;
