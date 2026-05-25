import ModeButton from "./ui/ModeButton";
import SectionTitle from "./ui/SectionTitle";
import { useUIStore } from "../../store/useUIStore";

import { Heart, Leaf, Zap, Cloud, Gamepad2 } from "lucide-react";

export default function ModeSection() {
  const { mode, setMode } = useUIStore();

  return (
    <div>
      <SectionTitle title="MODE" />

      <div className="space-y-2">
        <ModeButton
          label="Minimal"
          active={mode === "Minimal"}
          icon={<Heart size={16} />}
          onClick={() => setMode("Minimal")}
        />
        <ModeButton
          label="Japanese"
          active={mode === "Japanese"}
          icon={<Leaf size={16} />}
          onClick={() => setMode("Japanese")}
        />
        <ModeButton
          label="Cyber"
          active={mode === "Cyber"}
          icon={<Zap size={16} />}
          onClick={() => setMode("Cyber")}
        />
        <ModeButton
          label="Dreamy"
          active={mode === "Dreamy"}
          icon={<Cloud size={16} />}
          onClick={() => setMode("Dreamy")}
        />
        <ModeButton
          label="Arcade"
          active={mode === "Arcade"}
          icon={<Gamepad2 size={16} />}
          onClick={() => setMode("Arcade")}
        />
      </div>
    </div>
  );
}
