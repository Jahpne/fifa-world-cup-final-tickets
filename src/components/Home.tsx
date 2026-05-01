import { ShieldCheck, ChevronRight, Heart } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeProps {
  onViewListings(): void;
}

export function Home({ onViewListings }: HomeProps) {
  return (
    <div className="pt-20 pb-10">
      {/* Hero Section */}
      <section className="relative h-[250px] bg-black flex flex-col items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center"
        >
          <div className="relative group cursor-pointer mb-4">
            <img 
              src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=600&auto=format&fit=crop" 
              alt="World Cup Final 2026"
              className="w-40 h-40 object-cover rounded-3xl border-4 border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-2 right-2 p-2 bg-white/20 backdrop-blur-md rounded-full shadow-lg">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center font-black">
               <span className="text-xs tracking-widest opacity-80 mb-1">WORLD CUP 2026</span>
               <span className="text-4xl leading-none">FINAL</span>
            </div>
          </div>
          
          <h1 className="text-3xl font-black text-white px-4 text-center mb-2">
            FIFA World Cup Final tickets
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            FIFA World Cup Final World Cup games
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-white" />
            <span className="text-white font-bold text-sm">Every ticket protected</span>
          </div>
        </motion.div>
      </section>

      {/* Game Section */}
      <section className="px-4 py-8 bg-white rounded-t-3xl -mt-6 relative z-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">FIFA World Cup Final games</h2>
        
        <button 
          onClick={onViewListings}
          className="w-full text-left flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl transition-colors"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex flex-col items-center justify-center p-2">
             <div className="w-full h-1 bg-gray-300 rounded-full mb-2"></div>
             <div className="w-full h-1 bg-gray-300 rounded-full mb-2"></div>
             <div className="w-1/2 h-1 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold text-gray-500 uppercase tracking-tighter">FINAL</div>
            <div className="text-xl font-black text-gray-900 leading-tight">Match 104</div>
            <div className="text-gray-600 text-sm">
              Sun, Jul 19 · 3:00pm
            </div>
            <div className="text-gray-600 text-sm">
              From $6,400 · New York / New Jersey ·...
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </section>

      {/* World Cup stages Section */}
      <section className="px-4 py-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">World Cup stages</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'GROUP STAGES' },
            { name: 'ROUND OF 32' },
            { name: 'ROUND OF 16' },
            { name: 'QUARTER FINALS' }
          ].map((stage) => (
            <div key={stage.name} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#eff6ff] shadow-sm border border-blue-100 group cursor-pointer">
               {/* Stadium Blueprint Sketch */}
               <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="w-full h-full border-2 border-dashed border-blue-200/50 rounded-full flex items-center justify-center relative">
                     <div className="w-[60%] h-[40%] border-2 border-blue-200/50 rounded-lg"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[85%] h-[85%] border border-blue-200/30 rounded-full"></div>
                     </div>
                  </div>
               </div>
               
               <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent"></div>
               
               <div className="absolute inset-0 flex flex-col justify-end p-3">
                  <div className="text-[10px] font-black text-blue-900/60 tracking-widest uppercase">{stage.name}</div>
               </div>
               <div className="absolute top-2 right-2 p-1.5 bg-blue-500/10 backdrop-blur-sm rounded-full hover:bg-blue-500/20 transition-colors">
                 <Heart className="w-4 h-4 text-blue-500/60" />
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
