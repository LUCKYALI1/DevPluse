import React, { useState } from 'react';
import { Mail, Lock, Chrome, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center p-4 selection:bg-blue-500/30">
      <div className="w-full max-w-md animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 italic">Welcome back</h1>
          <p className="text-zinc-400 text-sm">Enter your credentials to access DevPluses</p>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-1 gap-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 bg-white text-black h-11 rounded-xl font-semibold hover:bg-zinc-200 transition-all active:scale-[0.98]">
            <Chrome size={20} />
            Continue with Google
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-800"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-[#09090b] px-2 text-zinc-500">Or use username</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-zinc-300 ml-1">Username or Email</label>
            <div className="relative group">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="text" 
                required
                placeholder="ali_dev"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center ml-1">
              <label className="text-sm font-medium text-zinc-300">Password</label>
              <Link to="/reset-password" size="sm" className="text-xs text-blue-500 hover:underline">Forgot password?</Link>
            </div>
            <div className="relative group">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-blue-500 transition-colors" size={18} />
              <input 
                type="password" 
                required
                placeholder="••••••••"
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl py-2.5 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 ml-1">
            <div 
              onClick={() => setRememberMe(!rememberMe)}
              className={`w-4 h-4 rounded border flex items-center justify-center cursor-pointer transition-colors ${rememberMe ? 'bg-blue-600 border-blue-600' : 'border-zinc-700 bg-zinc-900'}`}
            >
              {rememberMe && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
            </div>
            <label className="text-sm text-zinc-400 cursor-pointer select-none">Remember me</label>
          </div>

          <button className="w-full bg-blue-600 text-white h-11 rounded-xl font-semibold hover:bg-blue-500 transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
            Login to Dashboard
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-zinc-500">
          Don't have an account? <Link to="/signup" className="text-white font-medium hover:underline">Create account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;