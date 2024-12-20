import React, { useEffect, useRef } from "react";

interface SlidingPanelProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const MobileNavbarPanel: React.FC<SlidingPanelProps> = ({ isOpen, onClose, children }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Close panel if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Overlay (semi-transparent background) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      )}

      {/* Sliding Panel */}
      <div
        ref={panelRef}
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
        >
          &times;
        </button>
        {/* Content */}
        <div className="mt-12 px-4 group-active:bg-[#334155]">{children}</div>
      </div>
    </>
  );
};

export default MobileNavbarPanel;
