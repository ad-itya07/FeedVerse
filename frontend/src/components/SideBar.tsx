import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
    { id: 9, name: "Category 9" },
    { id: 10, name: "Category 10" },
    { id: 11, name: "Category 11" },
    { id: 12, name: "Category 12" },
    { id: 13, name: "Category 13" },
    { id: 14, name: "Category 14" },
    { id: 15, name: "Category 15" },
    { id: 16, name: "Category 16" },
    { id: 17, name: "Category 17" },
    { id: 18, name: "Category 18" },
    { id: 19, name: "Category 19" },
    { id: 20, name: "Category 20" },
  ];

  // Track window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`bg-[#111827] text-gray-200 ${
        isOpen ? "w-64" : "w-16"
      } ${windowWidth >= 768 ? "md:w-64" : ""} h-screen overflow-y-auto border-r border-gray-400 sticky top-0 z-30 transition-all duration-300`}
    >
      {/* Header with Hamburger Menu */}
      <div
        className={`flex items-center ${
          isOpen ? "justify-between" : "justify-center"
        } px-4 py-4 border-b border-gray-700`}
      >
        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
        {(isOpen || windowWidth >= 768) && (
          <h2 className="text-xl font-bold">Your Verses</h2>
        )}
      </div>

      {/* Sidebar Content */}
      <ul
        className={`mt-6 space-y-3 px-4 ${
          isOpen || windowWidth >= 768 ? "block" : "hidden"
        } transition-all duration-300`}
      >
        {categories.slice(0, 6).map((category) => (
          <li key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="block px-4 py-3 rounded-md text-lg hover:bg-[#334155] group-active:bg-[#334155] transition-all duration-200"
            >
              {category.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to="/categories"
            className="block px-4 py-3 rounded-md text-lg text-center font-semibold text-[#3B82F6] hover:bg-[#334155] transition-all duration-200"
          >
            View All
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

