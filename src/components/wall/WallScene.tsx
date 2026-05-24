import HeartGrid from "./HeartGrid";

function WallScene() {
  return (
    <section className="relative flex flex-1 items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.8),transparent_60%)]" />

      <div className="rounded-[3rem] border border-black/5 bg-white/30 p-16 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl">
        <HeartGrid />
      </div>
    </section>
  );
}

export default WallScene;
