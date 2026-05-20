import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, Mail, Lock, Eye, EyeOff, UserPlus, ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";
function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSignup = async(e)=>{

e.preventDefault();

setIsLoading(true);

try{

await axios.post(

"http://localhost:5000/api/auth/signup",

{
name,
email,
password
}

);

setIsLoading(false);

navigate("/login");

}

catch(error){

console.log(error);

setIsLoading(false);

}

};

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-zinc-950 px-4 overflow-hidden pt-20 pb-12">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Signup Card */}
      <div className="relative z-10 w-full max-w-md">
        
        {/* Header Area */}
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="bg-zinc-900/50 p-3 rounded-2xl border border-zinc-800 mb-4 shadow-lg backdrop-blur-sm">
            <UserPlus className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-zinc-400 mt-2">
            Join LifeSync AI to optimize your daily routine.
          </p>
        </div>

        {/* Form Container */}
        <form
          onSubmit={handleSignup}
          className="bg-zinc-900/60 backdrop-blur-xl p-8 rounded-3xl border border-zinc-800 shadow-2xl"
        >
          {/* Full Name Input */}
          <div className="mb-5 space-y-1.5">
            <label className="text-sm font-medium text-zinc-300 ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-green-400 transition-colors" />
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-5 space-y-1.5">
            <label className="text-sm font-medium text-zinc-300 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-green-400 transition-colors" />
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-8 space-y-1.5">
            <label className="text-sm font-medium text-zinc-300 ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500 group-focus-within:text-green-400 transition-colors" />
              <input
                type={showPassword ? "text" : "password"}
                required
                placeholder="Create a strong password"
                className="w-full pl-11 pr-12 py-3.5 rounded-xl bg-zinc-950/50 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50 transition-all"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-400 text-zinc-950 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_15px_rgba(34,197,94,0.2)] hover:shadow-[0_0_25px_rgba(34,197,94,0.4)] transform hover:-translate-y-0.5 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Creating Account...
              </>
            ) : (
              <>
                Create Account <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center mt-8 text-zinc-400 text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-400 hover:text-green-300 font-semibold transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;