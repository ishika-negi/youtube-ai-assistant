function TopicsCard() {
  const topics = [
    "Machine Learning",
    "Deep Learning",
    "Transformers",
    "Attention",
  ];

  return (
    <div className="bg-[#181A20] rounded-xl border border-[#2A2F3A] p-4">
      <h2 className="text-lg font-semibold mb-3">📚 Topics</h2>

      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <span
            key={topic}
            className="bg-[#2A2F3A] px-3 py-1 rounded-full text-sm"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
}

export default TopicsCard;