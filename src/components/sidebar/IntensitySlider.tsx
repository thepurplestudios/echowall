import SectionTitle from "./ui/SectionTitle";
import { motion } from "framer-motion";
import { useState } from "react";

export default function IntensitySlider() {
  const [value, setValue] = useState(60);

  return (
    <div>
      <SectionTitle title="INTENSITY" />

      <div className="mt-4">
        {/* VALUE LABEL */}
        <div className="flex justify-between text-xs text-white/50 mb-2">
          <span>LOW</span>
          <span>{value}%</span>
          <span>HIGH</span>
        </div>

        {/* SLIDER TRACK */}
        <div
          className="
            relative h-[6px] w-full
            rounded-full
            bg-white/10
          "
        >
          {/* ACTIVE TRACK */}
          <div
            className="absolute h-full rounded-full"
            style={{
              width: `${value}%`,
              background: "linear-gradient(to right, #ff4d4d, #ff1f1f)",
              boxShadow: "0 0 12px rgba(255, 80, 80, 0.8)",
            }}
          />

          {/* THUMB */}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 260 }}
            dragElastic={0}
            onDrag={(e, info) => {
              const newValue = Math.min(
                100,
                Math.max(0, (info.point.x / 260) * 100),
              );
              setValue(Math.round(newValue));
            }}
            className="
              absolute top-1/2
              w-[14px] h-[14px]
              rounded-full
              bg-white
              cursor-pointer
            "
            style={{
              left: `calc(${value}% - 7px)`,
              transform: "translateY(-50%)",
              boxShadow: "0 0 10px rgba(255,255,255,0.9)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
