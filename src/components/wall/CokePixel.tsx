import { motion } from "framer-motion";

type CokePixelProps = {
  active: boolean;
};

function CokePixel({ active }: CokePixelProps) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.03,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className={`
        relative h-[52px] w-[34px] rounded-full
        overflow-hidden
        ${
          active
            ? "bg-gradient-to-b from-[#f7f7f7] via-[#d9d9d9] to-[#bdbdbd]"
            : "bg-gradient-to-b from-[#f4f1ec] to-[#e4dfd7]"
        }
      `}
      style={{
        boxShadow: active
          ? `
            inset 0 2px 3px rgba(255,255,255,0.8),
            inset 0 -4px 8px rgba(0,0,0,0.12),
            0 10px 20px rgba(0,0,0,0.12)
          `
          : `
            inset 0 2px 2px rgba(255,255,255,0.5)
          `,
      }}
    >
      {/* metallic shine */}
      <div className="absolute left-[6px] top-[8px] h-[24px] w-[2px] rounded-full bg-white/60 blur-[1px]" />

      {/* top rim */}
      <div className="absolute left-1/2 top-[4px] h-[3px] w-[70%] -translate-x-1/2 rounded-full bg-white/70" />

      {/* bottom rim */}
      <div className="absolute bottom-[4px] left-1/2 h-[3px] w-[65%] -translate-x-1/2 rounded-full bg-black/10" />

      {/* coke-inspired typography */}
      {active && (
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <span
            className="
              translate-y-[1px]
              text-[24px]
              font-light
              tracking-[-2px]
              text-[#d90429]/90
              opacity-90
              select-none
            "
            style={{
              fontFamily: "serif",
            }}
          >
            Co
          </span>
        </div>
      )}
    </motion.div>
  );
}

export default CokePixel;
