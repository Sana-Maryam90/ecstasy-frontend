"use client";
import { useState, useRef, useEffect } from "react";

export default function Dropdown({ label, children, className = "" }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="flex items-center gap-1 select-none"
        aria-expanded={open}
      >
        {label}
      </button>

      {open && (
        <div className="absolute bg-white shadow-md mt-2 w-40 z-20 rounded-md">
          {children}
        </div>
      )}
    </div>
  );
}
