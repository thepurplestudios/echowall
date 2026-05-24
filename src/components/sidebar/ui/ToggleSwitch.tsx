import { motion } from "framer-motion";

type ToggleProps = {
  label: string;
  active?: boolean;
  icon?: React.ReactNode;
};

export default function ToggleSwitch({
  label,
  active = false,
  icon,
}: ToggleProps) {
  return (
    <div className="flex items-center justify-between">
      {/* LEFT */}
      <div className="flex items-center gap-3 text-white/80 text-sm">
        {icon && <div className="text-white/60">{icon}</div>}
        {label}
      </div>

      {/* SWITCH */}
      <motion.div
        initial={false}
        animate={{
          backgroundColor: active ? "#ff4d4d" : "#3a3a3a",
        }}
        className="w-11 h-5 rounded-full p-[2px] cursor-pointer"
      >
        <motion.div
          animate={{
            x: active ? 20 : 0,
          }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="w-4 h-4 bg-white rounded-full shadow-md"
        />
      </motion.div>
    </div>
  );
}
