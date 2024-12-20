import React from "react";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black">
          Discover. Engage. Stay Updated.
        </h1>
        <p className="text-lg md:text-2xl mb-8 text-gray-600">
          Your personalized feed for news, communities, and insights.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
            Get Started
          </button>
          <button className="bg-black text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium">
            Explore Feeds
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
  <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-black">
    Why FeedVerse?
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-blue-50">
      <h3 className="text-xl font-bold mb-4 text-black">
        Personalized Feeds
      </h3>
      <p className="text-gray-600">
        Tailored content from your favorite communities and news sources.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-blue-50">
      <h3 className="text-xl font-bold mb-4 text-black">
        Stay Organized
      </h3>
      <p className="text-gray-600">
        Categorize and save posts to keep track of what matters.
      </p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-blue-50">
      <h3 className="text-xl font-bold mb-4 text-black">
        Discover Communities
      </h3>
      <p className="text-gray-600">
        Connect with trending and niche communities effortlessly.
      </p>
    </div>
  </div>
</section>


      {/* Feed Preview Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-black">
          Trending Feeds at Your Fingertips
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 p-4 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-blue-50"
            >
              <img
                src={`https://via.placeholder.com/150?text=Feed+${index + 1}`}
                alt={`Feed ${index + 1}`}
                className="w-full h-32 object-cover rounded-md mb-4 transition-opacity duration-300 hover:opacity-90"
              />
              <h3 className="font-bold text-lg text-black">
                Feed Title {index + 1}
              </h3>
              <p className="text-sm text-gray-600">
                Views: {Math.floor(Math.random() * 1000)}
              </p>
            </div>
          ))}
        </div>
        <button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
          View More Feeds
        </button>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-black">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105 hover:bg-blue-50"
            >
              <p className="italic text-gray-600">
                "FeedVerse helped me stay connected with my favorite
                communities!"
              </p>
              <div className="mt-4 text-sm font-medium text-gray-800">
                User {index + 1}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 px-8 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-black">
          Ready to Dive In?
        </h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium">
          Sign Up Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
