import ModeButton from "./ui/ModeButton";
import SectionTitle from "./ui/SectionTitle";

import { Heart, Leaf, Zap, Cloud, Gamepad2 } from "lucide-react";

export default function ModeSection() {
  return (
    <div>
      <SectionTitle title="MODE" />

      <div className="space-y-2">
        <ModeButton label="Minimal" active icon={<Heart size={16} />} />
        <ModeButton label="Japanese" icon={<Leaf size={16} />} />
        <ModeButton label="Cyber" icon={<Zap size={16} />} />
        <ModeButton label="Dreamy" icon={<Cloud size={16} />} />
        <ModeButton label="Arcade" icon={<Gamepad2 size={16} />} />
      </div>
    </div>
  );
}
