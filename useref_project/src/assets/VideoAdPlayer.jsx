import React, { useEffect, useState, useRef } from "react";

function VideoAdPlayer() {
  const [showAd, setShowAd] = useState(true); // Ad video visible first
  const [showSkip, setShowSkip] = useState(false); // Skip button visibility
  const [showMainVideo, setShowMainVideo] = useState(false); // Main video visibility

  const adVideoRef = useRef(null);
  const mainVideoRef = useRef(null);

  // 🧠 useEffect to trigger ad flow
  useEffect(() => {
    if (showAd) {
      // show skip button after 5 seconds
      const timer = setTimeout(() => setShowSkip(true), 5000);

      // when ad video ends automatically show main
      adVideoRef.current?.addEventListener("ended", handleAdComplete);

      return () => {
        clearTimeout(timer);
        adVideoRef.current?.removeEventListener("ended", handleAdComplete);
      };
    }
  }, [showAd]);

  const handleAdComplete = () => {
    setShowAd(false);
    setShowMainVideo(true);
  };

  const handleSkipAd = () => {
    setShowAd(false);
    setShowMainVideo(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white relative">
      {/* 🟡 Ad Video */}
      {showAd && (
        <div className="relative">
          <video
            ref={adVideoRef}
            width="800"
            height="450"
            autoPlay
            muted
            className="rounded-xl shadow-lg"
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>

          {/* ⏩ Skip Ad button (only visible after 5s) */}
          {showSkip && (
            <button
              onClick={handleSkipAd}
              className="absolute top-4 right-4 bg-black bg-opacity-60 text-white px-4 py-2 rounded-lg border border-white"
            >
              Skip Ad ▶
            </button>
          )}

          {/* Ad Label */}
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 px-3 py-1 rounded text-sm">
            Advertisement
          </div>
        </div>
      )}

      {/* 🟢 Main Video */}
      {showMainVideo && (
        <div>
          <video
            ref={mainVideoRef}
            width="800"
            height="450"
            controls
            autoPlay
            className="rounded-xl shadow-lg"
          >
            <source
              src="https://www.w3schools.com/html/movie.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML video.
          </video>
        </div>
      )}
    </div>
  );
}

export default VideoAdPlayer;