import SectionTitle from "./ui/SectionTitle";
import ToggleSwitch from "./ui/ToggleSwitch";

import { MousePointer2, Music, Mic, Sparkles } from "lucide-react";

export default function InteractionSection() {
  return (
    <div>
      <SectionTitle title="INTERACTIONS" />

      <div className="space-y-3 mt-2">
        <ToggleSwitch
          label="Hover React"
          active
          icon={<MousePointer2 size={14} />}
        />
        <ToggleSwitch
          label="Music Reactive"
          active
          icon={<Music size={14} />}
        />
        <ToggleSwitch label="Mic Reactive" icon={<Mic size={14} />} />
        <ToggleSwitch
          label="Light Particles"
          active
          icon={<Sparkles size={14} />}
        />
      </div>
    </div>
  );
}
