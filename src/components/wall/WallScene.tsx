import CokeHeart from "./CokeHeart";

function WallScene() {
  return (
    <main className="relative flex min-h-screen flex-1 items-center justify-center overflow-hidden bg-[#e9e3da]">
      {/* sunlight */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-white/30 blur-3xl" />

      {/* floor shadow */}
      <div className="absolute bottom-[-120px] h-[240px] w-[700px] rounded-full bg-black/10 blur-3xl" />

      {/* heart wall */}
      <div className="relative">
        <CokeHeart />
      </div>
    </main>
  );
}

export default WallScene;
