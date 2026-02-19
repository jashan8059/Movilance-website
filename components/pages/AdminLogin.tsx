import React, { useEffect, useState } from 'react';
import { 
  Shield, Eye, EyeOff, ArrowLeft, Mail, Lock, Loader2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate('/'); 
  };

  return (
    <div className="min-h-screen flex flex-row font-sans selection:bg-movilance-red selection:text-white">
      
      {/* Left Side - Brand Visual (Red Gradient) */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-movilance-red to-red-900 relative flex-col justify-between p-16 overflow-hidden text-white">
        
        {/* Background Patterns - Curved Lines */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:40px_40px]"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
             <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path d="M0 100 C 20 0 50 0 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" />
               <path d="M0 100 C 20 20 60 20 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" className="opacity-70"/>
               <path d="M0 100 C 30 40 70 40 100 100 Z" fill="none" stroke="white" strokeWidth="0.5" className="opacity-50"/>
               <path d="M-20 120 C 30 50 80 50 120 120 Z" fill="none" stroke="white" strokeWidth="0.5" className="opacity-30"/>
             </svg>
        </div>

        {/* Top Icon */}
        <div className="relative z-10">
           <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mb-8 border border-white/20 shadow-2xl">
             <Shield className="w-10 h-10 text-white" />
           </div>
        </div>

        {/* Main Text */}
        <div className="relative z-10 max-w-lg">
           <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
             Facility <br/> Intelligence.
           </h1>
           <p className="text-lg text-red-100/90 leading-relaxed font-light">
             Centralize your security operations. Automate repetitive tasks, ensure 100% compliance, and gain real-time visibility into every movement across your premises.
           </p>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-sm text-red-200/60 font-medium">
           &copy; 2026 Movilance. All rights reserved.
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center px-12 lg:px-36 py-12 relative">
        
        {/* Top Right Brand Name (Desktop) */}
        <div className="absolute top-8 right-8 lg:top-12 lg:right-12 font-bold text-xl text-slate-900 tracking-tight flex items-center gap-2">
           <span className="lg:hidden bg-movilance-red p-1 rounded"><Shield className="w-4 h-4 text-white"/></span>
           Movilance
        </div>

        {/* Back Button */}
        <div className="absolute top-10 left-10 lg:top-12 lg:left-12">
           <button 
             onClick={() => navigate('/')} 
             className="group flex items-center gap-2 text-sm text-slate-400 hover:text-slate-600 font-medium transition-colors"
           >
             <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
             <span className="hidden sm:inline">Back to Home</span>
           </button>
        </div>

        <div className="w-full max-w-[400px] mx-auto mt-16 lg:mt-0">
          <div className="mb-10 text-center lg:text-left">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Welcome Back!</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Don't have an account? <span className="text-slate-800 font-semibold underline decoration-slate-300 underline-offset-4 cursor-pointer hover:text-movilance-red hover:decoration-movilance-red transition-all">Request access now</span>.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-movilance-red transition-colors" />
                </div>
                <input 
                  type="email" 
                  id="email"
                  required
                  placeholder="john@movilance.com"
                  className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-movilance-red/10 focus:border-movilance-red focus:bg-white transition-all duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <div className="flex items-center justify-between mb-2">
                 <label htmlFor="password" className="block text-sm font-semibold text-slate-700">Password</label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-movilance-red transition-colors" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  id="password"
                  required
                  placeholder="••••••••"
                  className="block w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-movilance-red/10 focus:border-movilance-red focus:bg-white transition-all duration-200"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-movilance-red focus:ring-movilance-red border-slate-300 rounded cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-slate-600 cursor-pointer select-none">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" onClick={(e) => e.preventDefault()} className="font-semibold text-movilance-red hover:text-red-700 transition-colors">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Submit Button - Brand Color */}
            <Button 
              type="submit" 
              fullWidth 
              size="lg" 
              disabled={isLoading}
              className="mt-2 w-full py-3.5 text-base font-semibold shadow-xl shadow-red-600/10 hover:shadow-red-600/20 active:scale-[0.98] transition-all duration-200 bg-movilance-red hover:bg-red-700 text-white border-transparent"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> Authenticating...
                </span>
              ) : 'Login'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
