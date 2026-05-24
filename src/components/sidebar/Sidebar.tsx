function Sidebar() {
  return (
    <aside
      className="
        fixed left-6 top-6 z-50
        flex h-[90vh] w-[280px] flex-col
        rounded-[32px]
        border border-white/10
        bg-black/30
        p-6
        backdrop-blur-xl
      "
    >
      <h1 className="text-2xl font-semibold text-white">Echowall</h1>

      <p className="mt-2 text-sm text-white/60">interactive emotional wall</p>
    </aside>
  );
}

export default Sidebar;
