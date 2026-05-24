import CokeHeart from "./CokeHeart";

function WallScene() {
  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden bg-[#e7dfd4]">
      {/* sunlight */}
      <div className="absolute right-0 top-0 h-[700px] w-[700px] bg-white/30 blur-3xl" />

      {/* wall texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_60%)]" />

      {/* floor shadow */}
      <div className="absolute bottom-[-120px] h-[260px] w-[900px] rounded-full bg-black/10 blur-3xl" />

      {/* heart */}
      <div className="relative translate-x-[80px] scale-[0.68]">
        <CokeHeart />
      </div>
    </main>
  );
}

export default WallScene;
