function BottomBar() {
  return (
    <div className="grid grid-cols-3 gap-2">

      <button className="bg-[#181A20] border border-[#2A2F3A] rounded-lg py-3">
        📄 Export
      </button>

      <button className="bg-[#181A20] border border-[#2A2F3A] rounded-lg py-3">
        ⭐ Save
      </button>

      <button className="bg-red-600 rounded-lg py-3">
        🗑 Clear
      </button>

    </div>
  );
}

export default BottomBar;