import { motion } from "framer-motion";

type PixelProps = {
  active: boolean;
};

function Pixel({ active }: PixelProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="relative flex h-14 w-10 items-center justify-center"
    >
      {/* Capsule Body */}
      <div
        className={`
          relative h-full w-full rounded-full
          ${
            active
              ? "bg-gradient-to-b from-[#ff335f] via-[#e00034] to-[#b80028]"
              : "bg-gradient-to-b from-[#f8f8f8] to-[#e8e8e8]"
          }
        `}
        style={{
          boxShadow: active
            ? `
              inset 0 2px 4px rgba(255,255,255,0.45),
              inset 0 -4px 8px rgba(0,0,0,0.18),
              0 12px 25px rgba(217,4,41,0.18)
            `
            : `
              inset 0 2px 4px rgba(255,255,255,0.7),
              inset 0 -2px 6px rgba(0,0,0,0.08)
            `,
        }}
      >
        {/* Metallic top */}
        <div className="absolute left-1/2 top-1 h-1.5 w-7 -translate-x-1/2 rounded-full bg-white/70 blur-[0.3px]" />

        {/* Metallic bottom */}
        <div className="absolute bottom-1 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-black/10 blur-[0.4px]" />

        {/* Reflection */}
        <div className="absolute left-2 top-3 h-6 w-1 rounded-full bg-white/30 blur-[1px]" />
      </div>
    </motion.div>
  );
}

export default Pixel;
