import { ArrowRight, Activity, Apple, Moon, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const features = [
    { icon: Activity, label: "Fitness Tracker" },
    { icon: Apple, label: "Smart Nutrition" },
    { icon: Moon, label: "Sleep Analysis" },
    { icon: Target, label: "Daily Discipline" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Background Grid Pattern (Optional subtle texture) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto w-full">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-8 backdrop-blur-md animate-fade-in-up">
          <Sparkles className="w-4 h-4" />
          <span>Meet your new AI Personal Assistant</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
          Optimize Your Life with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
            LifeSync AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          The all-in-one intelligence engine that seamlessly tracks your fitness, nutrition, sleep, and daily habits to unlock your peak potential.
        </p>

        {/* Feature Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-zinc-300 bg-zinc-900/60 border border-zinc-800 px-5 py-3 rounded-2xl backdrop-blur-md hover:border-green-500/50 hover:bg-zinc-800/80 transition-all duration-300 cursor-default group"
            >
              <feature.icon className="w-5 h-5 text-green-500 group-hover:scale-110 transition-transform" />
              <span className="font-medium text-sm md:text-base">{feature.label}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/dashboard" 
            className="w-full sm:w-auto px-8 py-4 bg-green-500 hover:bg-green-400 text-zinc-950 font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transform hover:-translate-y-1"
          >
            Start Tracking Free <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/login" 
            className="w-full sm:w-auto px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full border border-zinc-800 transition-all duration-300 flex items-center justify-center"
          >
            Sign In to Account
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Home;