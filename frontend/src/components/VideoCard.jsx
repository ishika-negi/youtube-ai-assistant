import { useEffect, useState } from "react";
import { getCurrentTab } from "../services/chrome";
import { getVideoId } from "../utils/youtube";
import { FaYoutube } from "react-icons/fa";

function VideoCard() {
  const [videoId, setVideoId] = useState(null);

  useEffect(() => {
    async function loadVideo() {
      const tab = await getCurrentTab();

      if (!tab?.url) return;

      const id = getVideoId(tab.url);

      setVideoId(id);
    }

    loadVideo();
  }, []);

  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <div className="bg-[#181A20] rounded-2xl border border-[#2A2F3A] overflow-hidden">

      {/* Thumbnail */}

      <div className="h-52 bg-[#262A35]">

        {thumbnail ? (
          <img
            src={thumbnail}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <FaYoutube size={70} />
          </div>
        )}

      </div>

      {/* Content */}

      <div className="p-5">

        <h2 className="text-xl font-semibold">
          Current Video
        </h2>

        <p className="text-gray-400 mt-2">
          Title will appear here
        </p>

        <p className="text-sm text-gray-500">
          Channel will appear here
        </p>

        <div className="mt-4 flex items-center gap-2">

          <div className="w-3 h-3 rounded-full bg-green-500" />

          <span className="text-green-400 text-sm">
            Video Detected
          </span>

        </div>

        <button
          className="mt-6 w-full bg-red-600 hover:bg-red-700 transition-all duration-200 rounded-xl py-3 font-semibold"
        >
          ✨ Analyze Video
        </button>

      </div>

    </div>
  );
}

export default VideoCard;