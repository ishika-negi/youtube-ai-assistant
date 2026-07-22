import Header from "./components/Header";
import VideoCard from "./components/VideoCard";

function App() {
  return (
    <div className="w-[430px] min-h-[650px] bg-[#0F1117] text-white p-5">
      <Header />

      <div className="mt-5">
        <VideoCard />
      </div>
    </div>
  );
}

export default App;