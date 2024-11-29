import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // console.log(currentUser?.user_metadata.avatar_url);
  return (
    <nav className="bg-gray-900 text-white shadow-md border-b border-gray-400 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link to="/">FeedVerse</Link>
        </div>

        {/* Links */}
        <div className="flex items-center space-x-6">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/explore" className="hover:text-gray-400">
            Explore
          </a>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>

          {/* Login/Logout */}
          {currentUser ? (
            <>
              <div className="relative">
                {/* User Avatar */}
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

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg z-10">
                    <ul className="py-2">
                      {/* Dashboard Link */}
                      <li>
                        <Link
                          to={`/user/dashboard/${currentUser.id}`}
                          className="block px-4 py-2 hover:bg-gray-700 rounded-md"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          {currentUser.user_metadata.full_name}
                        </Link>
                      </li>
                      {/* Customize Feed */}
                      <li>
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            console.log("Customize Feed clicked");
                          }}
                          className="block w-full text-left px-4 py-2 hover:bg-gray-700 rounded-md"
                        >
                          Custom Feed
                        </button>
                      </li>
                      {/* Plan */}
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
                            setIsDropdownOpen(false); // Close dropdown
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
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-400">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
