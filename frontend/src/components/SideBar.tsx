import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
  ];

  return (
    <aside className="bg-[#111827] text-gray-200 w-64 h-screen hidden md:block border-r border-gray-400 sticky top-0 z-30">
      <div className="flex justify-center">
      <div className="p-4 border-b w-[80%] border-gray-700 flex justify-center">
        <h2 className="text-xl font-bold">Your Verses</h2>
      </div>
      </div>
      <ul className="mt-6 space-y-3 px-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="block px-4 py-3 rounded-md text-lg hover:bg-[#334155] transition-all duration-200"
            >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
