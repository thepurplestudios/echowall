import { motion } from "framer-motion";

type ModeButtonProps = {
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
};

export default function ModeButton({
  label,
  active = false,
  icon,
  onClick,
}: ModeButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="relative"
    >
      <div
        className="
          relative flex items-center justify-between
          px-4 py-3
          rounded-[16px]
          cursor-pointer
          transition-all duration-300
          overflow-hidden
        "
        style={{
          background: active
            ? "rgba(255, 70, 70, 0.12)"
            : "rgba(255,255,255,0.04)",

          boxShadow: active
            ? `
              0 0 0 1px rgba(255,90,90,0.4),
              0 0 25px rgba(255,60,60,0.25),
              inset 0 0 20px rgba(255,60,60,0.15)
            `
            : `
              inset 0 0 0 1px rgba(255,255,255,0.06)
            `,
        }}
      >
        {/* 🔥 subtle glow sweep on hover */}
        <motion.div
          onClick={onClick}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            background:
              "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />

        {/* LEFT CONTENT */}
        <div className="flex items-center gap-3 z-10">
          {icon && <div className="text-white/70">{icon}</div>}

          <span className="text-sm text-white/90">{label}</span>
        </div>

        {/* 🔴 STATUS DOT */}
        <div
          className="z-10 w-2.5 h-2.5 rounded-full"
          style={{
            background: active ? "#ff4d4d" : "rgba(255,255,255,0.3)",
            boxShadow: active ? "0 0 12px rgba(255,80,80,0.9)" : "none",
          }}
        />
      </div>
    </motion.div>
  );
}
