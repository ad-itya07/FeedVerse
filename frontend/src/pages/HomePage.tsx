import React from "react";
import { Link } from "react-router-dom";

const MainContent = () => {
  const feeds = Array.from({ length: 50 }, (_, index) => ({
    id: index + 1,
    title: `Post Title ${index + 1}`,
    views: Math.floor(Math.random() * 1000),
    image: `https://via.placeholder.com/150?text=Image+${index + 1}`,
    source: "https://source.com/post", 
  }));

  return (
    <div className="bg-gray-800 text-gray-200 flex-1 h-full overflow-y-auto p-6">
      <div className="grid gap-6">
        {feeds.map((feed) => (
          <div
            key={feed.id}
            className="flex items-center justify-between bg-gray-900 rounded-lg shadow-lg p-4 transition hover:shadow-2xl hover:bg-gray-700"
          >
            {/* Left Side: Title and Views */}
            <div className="space-y-2">
              <Link
                to={`/post/${feed.id}`}
                className="text-lg font-bold text-blue-400 hover:underline"
              >
                {feed.title}
              </Link>
              <p className="text-sm text-gray-400">
                {feed.views} views •{" "}
                <Link
                  to={`/post/${feed.id}`}
                  className="text-gray-300 hover:underline"
                >
                  Read more
                </Link>
              </p>
            </div>

            {/* Right Side: Image */}
            <Link
              to={feed.source}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-24 h-24 md:w-32 md:h-32"
            >
              <img
                src={feed.image}
                alt={`Image for ${feed.title}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
