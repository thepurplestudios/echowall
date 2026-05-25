import SectionTitle from "./ui/SectionTitle";
import ToggleSwitch from "./ui/ToggleSwitch";
import { useUIStore } from "../../store/useUIStore";

import { MousePointer2, Music, Mic, Sparkles } from "lucide-react";

export default function InteractionSection() {
  const { interactions, toggleInteraction } = useUIStore();

  return (
    <div>
      <SectionTitle title="INTERACTIONS" />

      <div className="space-y-3 mt-2">
        <ToggleSwitch
          label="Hover React"
          active={interactions.hover}
          icon={<MousePointer2 size={14} />}
          onClick={() => toggleInteraction("hover")}
        />

        <ToggleSwitch
          label="Music Reactive"
          active={interactions.music}
          icon={<Music size={14} />}
          onClick={() => toggleInteraction("music")}
        />

        <ToggleSwitch
          label="Mic Reactive"
          active={interactions.mic}
          icon={<Mic size={14} />}
          onClick={() => toggleInteraction("mic")}
        />

        <ToggleSwitch
          label="Light Particles"
          active={interactions.particles}
          icon={<Sparkles size={14} />}
          onClick={() => toggleInteraction("particles")}
        />
      </div>
    </div>
  );
}
