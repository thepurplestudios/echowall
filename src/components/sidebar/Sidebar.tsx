function Sidebar() {
  return (
    <aside className="flex w-72 flex-col border-r border-black/5 bg-white/40 p-6 backdrop-blur-xl">
      <div className="mb-12">
        <h1 className="text-2xl font-black tracking-tight">Echowall</h1>

        <p className="mt-2 text-sm text-black/50">interactive emotional wall</p>
      </div>

      <div className="space-y-8">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-black/40">
            Modes
          </p>

          <div className="space-y-2">
            <button className="w-full rounded-2xl bg-black px-4 py-3 text-left text-sm text-white transition hover:scale-[1.02]">
              Minimal
            </button>

            <button className="w-full rounded-2xl bg-black/5 px-4 py-3 text-left text-sm transition hover:bg-black/10">
              Dreamy
            </button>

            <button className="w-full rounded-2xl bg-black/5 px-4 py-3 text-left text-sm transition hover:bg-black/10">
              Cyber
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
