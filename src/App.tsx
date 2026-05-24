import WallScene from "./components/wall/WallScene";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <main className="flex min-h-screen bg-[#f5f1eb] text-black">
      <Sidebar />
      <WallScene />
    </main>
  );
}

export default App;
