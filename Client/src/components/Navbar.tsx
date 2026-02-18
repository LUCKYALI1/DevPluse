import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bell, Heart, User, Settings, LayoutDashboard, 
  LogOut, ChevronDown, Mail, Home, Flame, BookOpen
} from 'lucide-react';

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={22} /> },
    { name: 'Trends', path: '/trends', icon: <Flame size={22} /> },
    { name: 'Blogs', path: '/blogs', icon: <BookOpen size={22} /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* --- TOP NAVBAR (Logo & Desktop Actions) --- */}
      <nav className="w-full h-16 bg-[#09090b] text-zinc-100 border-b border-zinc-800/50 sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl h-full mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          <div className="flex items-center gap-10">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform">
                <span className="font-black text-white text-xl">D</span>
              </div>
              <span className="text-lg font-bold tracking-tighter">
                Dev<span className="text-zinc-500 font-medium text-base">Pluses</span>
              </span>
            </Link>

            <ul className="hidden md:flex items-center space-x-1 text-[13px] font-medium text-zinc-400">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className={`px-4 py-2 rounded-md transition-all ${isActive(link.path) ? 'text-white bg-zinc-800' : 'hover:text-white hover:bg-zinc-800/50'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Desktop Icons & Profile */}
          <div className="flex items-center justify-end gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-1 text-zinc-400">
              <button className="p-2 hover:text-white hover:bg-zinc-800 rounded-full transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-blue-500 rounded-full ring-2 ring-[#09090b]"></span>
              </button>
              <Link to="/activity" className="p-2 hover:text-white hover:bg-zinc-800 rounded-full transition-all">
                <Heart size={20} />
              </Link>
            </div>

            <div className="hidden md:block h-6 w-[1px] bg-zinc-800 mx-1"></div>

            {/* Desktop Profile Trigger */}
            <div className="hidden md:block relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-2 p-1 pl-2 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all active:scale-95"
              >
                <span className="text-[11px] font-medium text-zinc-400">Account</span>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold border border-zinc-700 shadow-lg">
                  JS
                </div>
                <ChevronDown size={14} className={`text-zinc-500 transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProfileOpen && <ProfileDropdown isMobile={false} />}
            </div>
          </div>
        </div>
      </nav>

      {/* --- MOBILE BOTTOM TAB BAR --- */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#09090b] border-t border-zinc-800 px-2 flex items-center justify-around z-50 pb-safe">
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            to={link.path} 
            className={`flex flex-col items-center gap-1 min-w-[64px] transition-colors ${isActive(link.path) ? 'text-blue-500' : 'text-zinc-500'}`}
          >
            {link.icon}
            <span className="text-[10px] font-semibold">{link.name}</span>
          </Link>
        ))}
        
        <Link 
          to="/activity" 
          className={`flex flex-col items-center gap-1 min-w-[64px] transition-colors ${isActive('/activity') ? 'text-blue-500' : 'text-zinc-500'}`}
        >
          <Heart size={22} />
          <span className="text-[10px] font-semibold">Activity</span>
        </Link>

        {/* MOBILE PROFILE TRIGGER */}
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className={`flex flex-col items-center gap-1 min-w-[64px] transition-colors ${isProfileOpen ? 'text-blue-500' : 'text-zinc-500'}`}
          >
            <div className={`w-6 h-6 rounded-full border-2 transition-all ${isProfileOpen ? 'border-blue-500' : 'border-zinc-700'} overflow-hidden`}>
              <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-[8px] font-bold text-white">JS</div>
            </div>
            <span className="text-[10px] font-semibold">Profile</span>
          </button>
          
          {/* Menu pops UP on mobile */}
          {isProfileOpen && <ProfileDropdown isMobile={true} />}
        </div>
      </div>
    </>
  );
};

const ProfileDropdown = ({ isMobile }) => (
  <div className={`absolute right-0 w-64 bg-[#0c0c0e] border border-zinc-800 rounded-2xl shadow-2xl py-1.5 animate-in fade-in zoom-in-95 duration-200 z-[60] 
    ${isMobile ? 'bottom-full mb-4 -right-4' : 'top-full mt-3'}`}>
    <div className="px-5 py-4 border-b border-zinc-800/50 mb-1">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
          <User size={20} className="text-zinc-400" />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-bold text-white leading-tight">John Smith</p>
          <div className="flex items-center gap-1 text-[11px] text-zinc-500 mt-0.5">
            <Mail size={10} />
            <span className="truncate">john@devpluses.com</span>
          </div>
        </div>
      </div>
    </div>
    <div className="p-1.5 space-y-0.5">
      <MenuItem to="/dashboard" icon={<LayoutDashboard size={17}/>} label="Dashboard" />
      <MenuItem to="/profile" icon={<User size={17}/>} label="Full Profile" />
      <MenuItem to="/settings" icon={<Settings size={17}/>} label="Settings" />``
    </div>
    <div className="mt-1.5 p-1.5 border-t border-zinc-800/50">
      <button className="w-full flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-red-400 hover:bg-red-500/10 rounded-xl transition-colors">
        <LogOut size={17} />
        Sign out
      </button>
    </div>
  </div>
);

const MenuItem = ({ to, icon, label }) => (
  <Link to={to} className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-zinc-400 hover:bg-zinc-800 hover:text-white rounded-xl transition-all group">
    <span className="text-zinc-500 group-hover:text-blue-500 transition-colors">{icon}</span>
    {label}
  </Link>
);

export default Navbar;