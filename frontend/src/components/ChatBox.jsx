function ChatBox() {
  return (
    <div className="bg-white rounded-xl shadow p-5">
      <h2 className="font-semibold mb-3">
        💬 Ask about this video
      </h2>

      <input
        type="text"
        placeholder="Ask a question..."
        className="w-full border rounded-lg p-2"
      />

      <button className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg">
        Send
      </button>
    </div>
  );
}

export default ChatBox;