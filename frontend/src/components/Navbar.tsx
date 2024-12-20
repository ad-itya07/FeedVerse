import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import MobileNavbarPanel from "../components/MobileNavbarPanel";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false); // State for the sliding panel

  return (
    <nav className="bg-gray-900 text-white shadow-md border-b border-gray-400 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">FeedVerse</Link>
        </div>

        {/* Links */}
        {currentUser ? (
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="hover:text-gray-400">
              Home
            </a>
            <a href="/explore" className="hover:text-gray-400">
              Explore
            </a>
            <a href="/about" className="hover:text-gray-400">
              About
            </a>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center focus:outline-none"
              >
                <img
                  src={currentUser.user_metadata.avatar_url}
                  alt="User Avatar"
                  className="rounded-full w-10 h-10 border-2 border-gray-600 hover:border-blue-500"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg z-10">
                  <ul className="py-2">
                    <li>
                      <Link
                        to={`/user/dashboard/${currentUser.id}`}
                        className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        {currentUser.user_metadata.full_name}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={`/user/${currentUser.id}/plan`}
                        className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Your Plan
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          logout();
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white text-gray-900 px-4 py-2 rounded-md shadow-md font-medium hover:bg-gray-200 transition duration-200"
          >
            Login
          </Link>
        )}

        {/* Mobile Profile Icon */}
        {currentUser && (
          <div className="md:hidden">
            <button
              onClick={() => setIsPanelOpen(true)}
              className="flex items-center focus:outline-none"
            >
              <img
                src={currentUser.user_metadata.avatar_url}
                alt="User Avatar"
                className="rounded-full w-10 h-10 border-2 border-gray-600 hover:border-blue-500"
              />
            </button>
          </div>
        )}
      </div>

      {/* Sliding Panel */}
      {currentUser && (
        <MobileNavbarPanel
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
        >
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                onClick={() => setIsPanelOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/explore"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                onClick={() => setIsPanelOpen(false)}
              >
                Explore
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                onClick={() => setIsPanelOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={`/user/dashboard/${currentUser.id}`}
                className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                onClick={() => setIsPanelOpen(false)}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  setIsPanelOpen(false);
                }}
                className="block px-4 py-2 hover:bg-gray-700 rounded-md"
              >
                Logout
              </button>
            </li>
          </ul>
        </MobileNavbarPanel>
      )}
    </nav>
  );
};

export default Navbar;
