import Sidebar from "./components/sidebar/Sidebar";
import WallScene from "./components/wall/WallScene";

function App() {
  return (
    <div className="flex min-h-screen bg-[#e9e3da]">
      <Sidebar />
      <WallScene />
    </div>
  );
}

export default App;
