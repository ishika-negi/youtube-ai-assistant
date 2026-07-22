function Tabs() {
  return (
    <div className="bg-[#181A20] rounded-xl border border-[#2A2F3A] p-2 flex justify-between">
      <button className="text-red-500 font-medium">Summary</button>
      <button className="text-gray-400">Key Points</button>
      <button className="text-gray-400">Topics</button>
      <button className="text-gray-400">Quiz</button>
      <button className="text-gray-400">Chat</button>
    </div>
  );
}

export default Tabs;