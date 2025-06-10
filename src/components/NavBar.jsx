import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar  text-neutral-content px-8 py-4">

      {/* Logo */}
      <div className="flex-1">
        <div className="flex items-center space-x-3">
          <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
            <div className="w-6 h-6 flex items-center justify-center text-white">🌐</div>
          </div>
          <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-indigo-100">
            React Exercises
          </span>
        </div>
      </div>
      
      {/* Menu Items */}
      <div className="flex-none">
        <ul className="menu menu-horizontal space-x-1 px-1">
          {/* User Mgt Page */}
          <li>
            <NavLink 
              to="/user-mgt"
              className={({ isActive }) => 
                `py-3 px-5 rounded-lg transition-all duration-300 ${isActive 
                  ? 'bg-white/20 backdrop-blur-sm font-semibold' 
                  : 'hover:bg-white/10'}`
              }
            >
              User Management
            </NavLink>
          </li>
          {/* Weather Page */}
          <li>
            <NavLink 
              to="/weather"
              className={({ isActive }) => 
                `py-3 px-5 rounded-lg transition-all duration-300 ${isActive 
                  ? 'bg-white/20 backdrop-blur-sm font-semibold' 
                  : 'hover:bg-white/10'}`
              }
            >
              Weather
            </NavLink>
          </li>
          {/* Store Page */}
          <li>
            <NavLink 
              to="/store"
              className={({ isActive }) => 
                `py-3 px-5 rounded-lg transition-all duration-300 ${isActive 
                  ? 'bg-white/20 backdrop-blur-sm font-semibold' 
                  : 'hover:bg-white/10'}`
              }
            >
              Store
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;