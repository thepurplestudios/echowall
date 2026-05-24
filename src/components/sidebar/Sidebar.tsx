import ModeSection from "./ModeSection";
import InteractionSection from "./InteractionSection";
import IntensitySlider from "./IntensitySlider";

function Sidebar() {
  return (
    <aside className="fixed left-6 top-6 z-50 h-[92vh] w-[300px]">
      {/* MAIN GLASS PANEL */}
      <div
        className="
          relative h-full w-full
          rounded-[32px]
          p-6
          flex flex-col
          text-white
          backdrop-blur-2xl
          overflow-hidden
        "
        style={{
          background: "rgba(10,10,10,0.55)",
          boxShadow: `
            inset 0 0 0 1px rgba(255,255,255,0.08),
            0 20px 60px rgba(0,0,0,0.55),
            0 0 40px rgba(255,0,0,0.08)
          `,
        }}
      >
        {/* 🔥 OUTER GLOW BORDER */}
        <div
          className="absolute inset-0 rounded-[32px] pointer-events-none"
          style={{
            border: "1px solid rgba(255,255,255,0.12)",
            boxShadow: "0 0 25px rgba(255, 80, 80, 0.15)",
          }}
        />

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-[16px] tracking-[0.2em] font-medium">
            PIXEL EMOTION WALL
          </h1>

          <p className="text-sm text-white/60 mt-1">express your vibe.</p>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-6">
          <ModeSection />
          <InteractionSection />
          <IntensitySlider />
        </div>

        {/* FOOTER */}
        <div className="pt-4 mt-4 border-t border-white/10 text-center">
          <button
            className="
              text-sm text-white/70
              hover:text-white
              transition-colors
            "
          >
            Hide Panel ←
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
