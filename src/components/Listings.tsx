import { ChevronLeft, SlidersHorizontal, ArrowUpDown, Flame, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { MOCK_TICKETS } from '../constants';
import { TicketListing } from '../types';

interface ListingsProps {
  onBack(): void;
  onSelect(ticket: TicketListing): void;
}

export function Listings({ onBack, onSelect }: ListingsProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Search/Filter Bar */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-[#151619] text-white p-4">
        <div className="flex items-center justify-between">
          <button onClick={onBack} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 ml-4 overflow-hidden">
             <div className="text-sm font-bold truncate">World Cup Final - Match 104</div>
             <div className="text-xs text-gray-400 truncate">Sun, Jul 19 at 3:00pm · MetLife Stadiu...</div>
          </div>
          <button className="p-2">
             <RotateCcw className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Main Content (Split Screen) */}
      <div className="pt-48 flex flex-col lg:flex-row h-screen overflow-hidden">
        {/* Map Area */}
        <div className="lg:w-1/2 h-[45vh] lg:h-full bg-gray-50 flex items-center justify-center p-4">
           {/* Dynamic-ish Map Mockup */}
          <div className="relative w-full max-w-md aspect-square rounded-full border-4 border-gray-200 bg-white/50 animate-in fade-in zoom-in duration-700 overflow-hidden">
             <img 
               src="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800" 
               className="w-full h-full object-cover rounded-full opacity-20 blur-[2px]"
               alt="Stadium Aerial View"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[80%] h-[60%] border-4 border-gray-300 rounded-[50%] flex items-center justify-center">
                   <div className="w-[40%] h-[70%] bg-emerald-500/10 border-2 border-emerald-500/30 rounded-xl"></div>
                </div>
             </div>

             {/* Price Bubbles */}
             {MOCK_TICKETS.slice(0, 8).map((t, idx) => (
                <motion.div
                  key={t.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  className="absolute p-0.5 bg-white rounded-full shadow-lg border border-gray-300 cursor-pointer hover:border-emerald-500 transition-colors z-10"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`
                  }}
                  onClick={() => onSelect(t)}
                >
                  <div className="px-2 py-0.5 bg-gray-100 rounded-full flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                    <span className="text-[10px] font-black text-gray-900">${t.pricePerTicket.toLocaleString()}</span>
                  </div>
                </motion.div>
             ))}
           </div>
        </div>

        {/* Listings Sidebar */}
        <div className="lg:w-1/2 h-full overflow-y-auto bg-white border-l border-gray-200 pb-20 no-scrollbar">
          <div className="p-4 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-10">
            <h3 className="text-lg font-black">{MOCK_TICKETS.length} listings</h3>
          </div>

          <div className="divide-y divide-gray-100">
            {MOCK_TICKETS.map((ticket) => {
              const stadiumImage = "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=400";
              
              return (
                <button 
                  key={ticket.id}
                  onClick={() => onSelect(ticket)}
                  className="w-full p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors group text-left"
                >
                  <div className="w-24 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img 
                      src={stadiumImage} 
                      alt={`Section ${ticket.section} view`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                       {ticket.isBestDeal && (
                         <div className="flex items-center gap-1 text-xs font-bold text-orange-600">
                           <Flame className="w-3 h-3 fill-current" />
                           Best deal
                         </div>
                       )}
                    </div>
                    <h4 className="text-xl font-black text-gray-900">Section {ticket.section}</h4>
                    <p className="text-gray-500 text-sm mb-2">
                      Row {ticket.row}, {ticket.quantity} tickets
                      <span className="ml-2 inline-block">
                         <RotateCcw className="w-3 h-3 inline mr-1" />
                      </span>
                    </p>
                    <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                      ticket.rating >= 9 ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
                    }`}>
                      <span className="bg-emerald-600 text-white w-4 h-4 rounded-sm flex items-center justify-center mr-1 text-[8px]">
                        {ticket.rating}
                      </span>
                      {ticket.ratingLabel}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-900">${(ticket.pricePerTicket + ticket.feesPerTicket).toLocaleString()}</div>
                    <div className="text-gray-500 text-xs">incl. fees</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
