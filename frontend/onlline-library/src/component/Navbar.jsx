import React from "react";
import { Search, Heart } from "lucide-react";
import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <>
      <header className="hidden md:flex items-center justify-between px-8 py-4 border-b border-[#E2E8F0] bg-[#FBF9F5] sticky top-0 z-50">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#1A362B] rounded flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="font-serif text-xl font-bold tracking-tight">
              Bargin
            </span>
          </div>
          <nav className="flex items-center space-x-6 text-xs font-medium text-[#424844]">
            <NavLink
            to="/"
              className="text-[#1A362B] font-semibold border-b-2 border-[#1A362B] pb-1"
            >
              Home
            </NavLink>
            <NavLink to="/explorebooks" className="hover:text-[#1A362B]">
              Explore Books
            </NavLink>
            <NavLink to="/library" className="hover:text-[#1A362B]">
              My Library
            </NavLink>
            <NavLink to="/author" href="#authors" className="hover:text-[#1A362B]">
              Authors
            </NavLink>
            <NavLink  to="/community" className="hover:text-[#1A362B]">
              Community
            </NavLink>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search
                className="absolute left-3 top-2.5 text-gray-400"
                size={16}
              />

              <input
                type="text"
                placeholder="Search titles, authors..."
                className="w-full bg-[#F3F4F6] text-xs pl-9 pr-3 py-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#1A362B]"
              />
            </div>
            <Heart size={14}/>
            <img className="w-3" src="./noticification.png"/>
          </div>
          <div className="flex items-center space-x-3 border-l border-gray-200 pl-4">
            {/* BACKEND: Get current logged-in user info */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
              alt="User Avatar"
              className="w-8 h-8 rounded-full object-cover border border-[#C86D51]"
            />
            <div className="text-left">
              <p className="text-xs font-semibold">Clara Jensen</p>
              <p className="text-[10px] text-[#C86D51]">Patron Fellow</p>
            </div>
          </div>
        </div>
      </header>
      <div className="md:hidden flex items-center justify-between px-5 py-4">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 bg-[#1A362B] rounded flex items-center justify-center text-white font-bold text-sm">
            B
          </div>
          <span className="font-serif text-lg font-bold">Bookora</span>
        </div>
        <div className="flex items-center space-x-3">
          <button className="p-1.5 bg-[#F3F4F6] rounded-lg text-gray-700">
            <Search size={18} />
          </button>

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            alt="User Avatar"
            className="w-7 h-7 rounded-full object-cover border border-[#C86D51]"
          />
        </div>
      </div>
    </>
  );
}
