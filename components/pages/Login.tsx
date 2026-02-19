import React, { useEffect, useState } from 'react';
import { 
  Shield, Mail, Lock, ArrowRight, Loader2, ArrowLeft,
  Users, Car, Truck, Mail as MailIcon, Laptop, Banknote, AlertTriangle, 
  Key, BookOpen, FileCheck, Network, Scale, BadgeCheck, Briefcase,
  Eye, EyeOff, Check, X as XIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../Button';

export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginType, setLoginType] = useState<'staff' | 'security'>('staff');

  // New Password Flow State
  const [step, setStep] = useState<'login' | 'new-password'>('login');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    
    if (loginType === 'staff') {
      // For demo: Assume staff always needs password reset on first login
      setStep('new-password');
    } else {
      navigate('/');
    }
  };

  const handlePasswordReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    navigate('/');
  };

  const requirements = [
    { label: "Minimum 8 characters", valid: newPassword.length >= 8 },
    { label: "At least uppercase letter (A-Z)", valid: /[A-Z]/.test(newPassword) },
    { label: "At least lowercase letter (a-z)", valid: /[a-z]/.test(newPassword) },
    { label: "At least number (0-9)", valid: /[0-9]/.test(newPassword) },
    { label: "At least special character (@, #, $, %)", valid: /[@#$%]/.test(newPassword) },
  ];

  const features = [
    { title: "Visitor Movement", icon: Users, desc: "Seamless check-ins & badges." },
    { title: "Vehicle Control", icon: Car, desc: "ANPR & parking management." },
    { title: "Material In/Out", icon: Truck, desc: "Gate passes & RGP tracking." },
    { title: "Smart Mailroom", icon: MailIcon, desc: "Parcel tracking & delivery." },
    { title: "Asset Custody", icon: Laptop, desc: "Secure asset movement logs." },
    { title: "Cash & Expense", icon: Banknote, desc: "Petty cash digital approval." },
    { title: "Incident Logs", icon: AlertTriangle, desc: "Breach reporting & audit." },
    { title: "Key Management", icon: Key, desc: "Digital locker & key custody." },
    { title: "Directories", icon: BookOpen, desc: "Unified staff & vendor db." },
    { title: "Compliance", icon: FileCheck, desc: "ISO/SOC2 audit readiness." },
    { title: "ERP Sync", icon: Network, desc: "SAP/Oracle integration." },
    { title: "Variance", icon: Scale, desc: "Weight & qty discrepancy." },
  ];

  return (
    <div className="min-h-screen bg-white flex font-sans overflow-hidden">
      {/* Left Side - Form Section */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center relative z-20 bg-white shadow-[20px_0_40px_-10px_rgba(0,0,0,0.05)] border-r border-slate-100">
        
        {/* Top Nav */}
        <div className="absolute top-8 left-8">
           <button 
            onClick={() => step === 'new-password' ? setStep('login') : navigate('/')} 
            className="group flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-movilance-navy transition-colors px-3 py-2 rounded-lg hover:bg-slate-50"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            {step === 'new-password' ? 'Back to Login' : 'Back to Home'}
          </button>
        </div>

        <div className="w-full max-w-[420px] mx-auto px-6 py-12 lg:py-0">
          
          {/* Brand Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="bg-gradient-to-br from-movilance-red to-red-600 p-2.5 rounded-xl shadow-lg shadow-red-200">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900">
                Movilance
              </span>
            </div>

            {step === 'login' ? (
              <>
                {/* Login Type Tabs */}
                <div className="grid grid-cols-2 gap-1 p-1.5 bg-slate-50 border border-slate-100 rounded-xl mb-8">
                    <button
                        type="button"
                        onClick={() => setLoginType('staff')}
                        className={`flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                            loginType === 'staff'
                            ? 'bg-white text-movilance-navy shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] ring-1 ring-black/5'
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                        }`}
                    >
                        <Briefcase className="w-4 h-4" />
                        Staff
                    </button>
                    <button
                        type="button"
                        onClick={() => setLoginType('security')}
                        className={`flex items-center justify-center gap-2 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${
                            loginType === 'security'
                            ? 'bg-white text-movilance-navy shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] ring-1 ring-black/5'
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100/50'
                        }`}
                    >
                        <BadgeCheck className="w-4 h-4" />
                        Security
                    </button>
                </div>

                <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
                    {loginType === 'staff' ? 'Staff Portal' : 'Security Access'}
                </h1>
                <p className="text-slate-500 text-base">
                    {loginType === 'staff' 
                        ? 'Enter your credentials to access the workspace.' 
                        : 'Secure login for guards and field supervisors.'}
                </p>
              </>
            ) : (
              <>
                 <h1 className="text-3xl font-bold text-slate-900 tracking-tight mb-3">
                    Create new password
                </h1>
                <p className="text-slate-500 text-base">
                    Your new password must be different from previous used password.
                </p>
              </>
            )}
          </div>

          {/* Forms */}
          {step === 'login' ? (
            <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                   {loginType === 'staff' ? 'Work Email' : 'Guard ID / Phone'}
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-movilance-red transition-colors" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type={loginType === 'staff' ? "email" : "text"}
                    autoComplete={loginType === 'staff' ? "email" : "username"}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-movilance-red/10 focus:border-movilance-red focus:bg-white transition-all duration-200"
                    placeholder={loginType === 'staff' ? "name@company.com" : "G-101 or Mobile Number"}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                    <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                      {loginType === 'staff' ? 'Password' : 'PIN / Password'}
                    </label>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-slate-400 group-focus-within:text-movilance-red transition-colors" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-movilance-red/10 focus:border-movilance-red focus:bg-white transition-all duration-200"
                    placeholder={loginType === 'staff' ? "••••••••" : "••••"}
                  />
                </div>
              </div>
            </div>

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
                <a href="#" className="font-semibold text-movilance-red hover:text-red-700 transition-colors" onClick={(e) => e.preventDefault()}>
                  Forgot password?
                </a>
              </div>
            </div>

            <Button 
              type="submit" 
              fullWidth 
              size="lg"
              disabled={isLoading}
              className="mt-4 w-full py-3.5 text-base font-semibold shadow-xl shadow-red-600/10 hover:shadow-red-600/20 active:scale-[0.98] transition-all duration-200"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-5 h-5 animate-spin" /> Verifying...
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2">
                  {loginType === 'staff' ? 'Sign In' : 'Start Shift'} <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </Button>
            </form>
          ) : (
            <form onSubmit={handlePasswordReset} className="space-y-5 animate-in slide-in-from-right-4 fade-in duration-300">
               {/* New Password */}
               <div>
                <label htmlFor="new-password" className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
                <div className="relative group">
                  <input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="block w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-movilance-red/10 focus:border-movilance-red focus:bg-white transition-all duration-200"
                    placeholder="Enter password"
                  />
                   <button 
                      type="button"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                      {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>
                <p className="text-xs text-slate-400 mt-1.5">Must be at least 8 characters.</p>
              </div>

               {/* Confirm Password */}
               <div>
                <label htmlFor="confirm-password" className="block text-sm font-semibold text-slate-700 mb-2">Confirm Password</label>
                <div className="relative group">
                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-movilance-red/10 focus:border-movilance-red focus:bg-white transition-all duration-200"
                    placeholder="Confirm password"
                  />
                   <button 
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                </div>
              </div>

              {/* Requirements Checklist */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                 <h4 className="text-sm font-semibold text-slate-700 mb-3">Password must contain:</h4>
                 <ul className="space-y-2">
                    {requirements.map((req, i) => (
                        <li key={i} className={`flex items-center gap-2 text-xs font-medium transition-colors duration-200 ${req.valid ? 'text-emerald-600' : 'text-slate-400'}`}>
                            {req.valid ? (
                                <Check className="w-3.5 h-3.5" />
                            ) : (
                                <XIcon className="w-3.5 h-3.5 text-red-400" />
                            )}
                            <span className={req.valid ? 'text-emerald-700' : req.valid === false ? 'text-red-400' : 'text-slate-500'}>
                                {req.label}
                            </span>
                        </li>
                    ))}
                 </ul>
              </div>

               <Button 
                type="submit" 
                fullWidth 
                size="lg"
                disabled={isLoading || !requirements.every(r => r.valid) || !newPassword || newPassword !== confirmPassword}
                className="mt-4 w-full py-3.5 text-base font-semibold bg-movilance-red hover:bg-red-700 text-white disabled:bg-slate-200 disabled:text-slate-400 disabled:shadow-none shadow-xl shadow-red-600/10"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" /> Updating...
                  </span>
                ) : (
                  'Reset Password'
                )}
              </Button>
            </form>
          )}
          
           {step === 'login' && (
             <div className="mt-10 text-center">
                <p className="text-slate-500 text-sm">
                  Don't have an account?{' '}
                  <button onClick={() => navigate('/')} className="font-bold text-movilance-navy hover:text-movilance-red transition-colors ml-1">
                    Book a demo
                  </button>
                </p>
             </div>
           )}
           
           <div className="mt-10 border-t border-slate-100 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
             <span>&copy; 2026 Movilance Inc.</span>
             <button onClick={() => navigate('/admin')} className="text-slate-500 hover:text-movilance-red font-semibold transition-colors">
                Admin Login
             </button>
           </div>
        </div>
      </div>

      {/* Right Side - Visual Showcase (60%) - Same as before */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[60%] bg-slate-50 relative flex-col items-center justify-center h-screen overflow-hidden">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] opacity-50"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-4xl h-full flex flex-col justify-center p-12">
            
            <div className="mb-10 text-center">
               <span className="inline-block py-1 px-3 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-widest text-movilance-red shadow-sm mb-4">
                 Unified Facility Intelligence
               </span>
               <h3 className="text-3xl font-bold text-slate-900">Security at Scale</h3>
               <p className="text-slate-500 mt-3 max-w-lg mx-auto">
                 Manage visitors, vehicles, assets, and compliance from a single, audit-ready platform.
               </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar pb-10">
               {features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-red-100 transition-all duration-300 group cursor-default"
                  >
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-movilance-red group-hover:border-movilance-red transition-all duration-300">
                            <feature.icon className="w-5 h-5 text-slate-500 group-hover:text-white transition-colors" />
                        </div>
                        {idx < 3 && (
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        )}
                      </div>
                      <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-movilance-navy transition-colors">{feature.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
               ))}
            </div>
            
            {/* Fade at bottom of list */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
};
