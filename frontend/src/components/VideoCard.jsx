import { useEffect, useState } from "react";
import {
  getCurrentTab,
  getVideoId,
} from "../services/chrome";

import { FaYoutube } from "react-icons/fa";
import { getTranscript } from "../services/api";

function VideoCard() {
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  // Detect the currently open YouTube video
  useEffect(() => {
    async function detectVideo() {
      const tab = await getCurrentTab();

      console.log("Current tab:", tab);
      console.log("Current URL:", tab?.url);

      if (!tab?.url) {
        return;
      }

      const id = getVideoId(tab.url);

      console.log("Detected video ID:", id);

      setVideoId(id);
    }

    detectVideo();
  }, []);

  // Analyze video
  async function handleAnalyze() {
    if (!videoId) {
      setError("Please open a YouTube video first.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);

      console.log("Analyzing:", videoId);

      const data = await getTranscript(videoId);

      console.log("Transcript received:", data);

      setResult(data);
    } catch (error) {
      console.error("Analysis failed:", error);

      setError(
        error.message || "Something went wrong while analyzing the video."
      );
    } finally {
      setLoading(false);
    }
  }

  const thumbnail = videoId
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : null;

  return (
    <div className="w-full">

      {/* Thumbnail */}
      <div className="h-52 bg-[#262A35] rounded-2xl overflow-hidden">

        {thumbnail ? (
          <img
            src={thumbnail}
            alt="YouTube Video Thumbnail"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <FaYoutube size={70} />
          </div>
        )}

      </div>

      {/* Video Information */}
      <div className="p-5">

        <h2 className="text-xl font-semibold text-white">
          Current Video
        </h2>

        <p className="text-gray-400 mt-2">
          Your currently opened YouTube video
        </p>

        <p className="text-xs text-gray-500 mt-1 break-all">
          {videoId
            ? `Video ID: ${videoId}`
            : "No YouTube video detected"}
        </p>

        {/* Detection Status */}
        <div className="mt-4 flex items-center gap-2">

          <div
            className={`w-3 h-3 rounded-full ${
              videoId ? "bg-green-500" : "bg-gray-500"
            }`}
          />

          <span
            className={`text-sm ${
              videoId ? "text-green-400" : "text-gray-500"
            }`}
          >
            {videoId ? "Video Detected" : "No Video Detected"}
          </span>

        </div>

        {/* Analyze Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading || !videoId}
          className="
            w-full
            mt-5
            px-5
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-blue-600
            hover:from-purple-500
            hover:to-blue-500
            disabled:from-gray-700
            disabled:to-gray-700
            disabled:cursor-not-allowed
            text-white
            font-semibold
            shadow-lg
            shadow-purple-500/20
            transition-all
            duration-200
          "
        >
          {loading ? (
            <span className="flex items-center justify-center gap-2">
              <span
                className="
                  w-4
                  h-4
                  border-2
                  border-white/30
                  border-t-white
                  rounded-full
                  animate-spin
                "
              />

              Analyzing Video...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              ✨ Analyze Video
            </span>
          )}
        </button>

        {/* Error */}
        {error && (
          <div className="mt-4 p-4 rounded-xl border border-red-500/20 bg-red-500/10">
            <p className="text-red-400 text-sm">
              ⚠️ {error}
            </p>
          </div>
        )}

      </div>

      {/* Transcript Result */}
      {result?.transcript && (
        <div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-[#151923] overflow-hidden">

          {/* Transcript Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">

            <div>
              <h2 className="text-white font-semibold text-lg">
                📝 Transcript
              </h2>

              <p className="text-gray-400 text-xs mt-1">
                Transcript extracted from the YouTube video
              </p>
            </div>

            <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs">
              Transcript
            </span>

          </div>

          {/* Transcript Content */}
          <div className="p-5 max-h-[400px] overflow-y-auto">

            <p className="text-gray-300 text-sm leading-7 whitespace-pre-wrap">
              {result.transcript}
            </p>

          </div>

        </div>
      )}

    </div>
  );
}

export default VideoCard;