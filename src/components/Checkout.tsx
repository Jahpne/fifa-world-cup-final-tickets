import { ChevronLeft, ShieldCheck, Plus, Info } from 'lucide-react';
import { motion } from 'motion/react';
import { TicketListing } from '../types';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

interface CheckoutProps {
  ticket: TicketListing;
  onBack(): void;
}

export function Checkout({ ticket, onBack }: CheckoutProps) {
  const subtotal = ticket.pricePerTicket;
  const fees = ticket.feesPerTicket;
  const total = subtotal + fees;

  const handlePay = () => {
    const message = `Hey, I want to get a ticket! 🎫⚽

📌 Match: FIFA World Cup Final (Match 104) · Sun Jul 19, 3:00PM
🎟️ Section ${ticket.section} · Row ${ticket.row}
💰 Final price (incl. fees & promo): $${total.toLocaleString()}.00
🏟️ MetLife Stadium

Thanks!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-xl mx-auto px-4 pb-10">
        <button onClick={onBack} className="flex items-center gap-1 py-4 text-gray-900 font-bold hover:bg-gray-50 -ml-2 px-2 rounded-lg transition-colors">
          <ChevronLeft className="w-5 h-5" />
          Add new card
        </button>

        <div className="mt-6 border-b border-gray-200 pb-8">
           <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black">Price breakdown</h2>
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full border border-gray-200">
                 <span className="bg-[#417505] text-white w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-bold">7</span>
                 <span className="text-[#417505] text-xs font-black">Great Deal</span>
              </div>
           </div>

           <div className="space-y-4 mb-4">
              <div className="flex justify-between items-center">
                 <div className="text-gray-600 font-medium">Tickets</div>
                 <div className="text-gray-900 font-medium">${subtotal.toLocaleString()}.00 x 1</div>
              </div>
              <div className="flex justify-between items-center">
                 <div className="text-gray-600 font-medium">Fees</div>
                 <div className="text-gray-900 font-medium">${fees.toLocaleString()}.00 x 1</div>
              </div>
           </div>

           <div className="flex justify-between items-baseline pt-4 border-t border-gray-100">
              <span className="text-xl font-black">Total</span>
              <span className="text-2xl font-black">${total.toLocaleString()}.00</span>
           </div>
        </div>

        <div className="py-8 space-y-6">
          <button 
            onClick={handlePay}
            className="w-full bg-[#136B4F] hover:bg-[#0E523C] text-white py-4 rounded-xl font-black text-lg flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/10 transition-all active:scale-[0.98]"
          >
            <ShieldCheck className="w-6 h-6" />
            Pay now
          </button>

          <div className="flex items-center justify-center pt-4">
             <div className="flex items-center gap-2 text-gray-900">
               <ShieldCheck className="w-5 h-5" />
               <span className="font-bold">Every ticket protected</span>
             </div>
          </div>
        </div>

        {/* Footer Mockup */}
        <footer className="mt-12 pt-8 border-t border-gray-100 space-y-6">
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-600">
                 <img src="https://flagcdn.com/w20/us.png" className="w-4 h-3" alt="US" referrerPolicy="no-referrer" />
                 USD
              </div>
           </div>
           <p className="text-xs text-gray-400">© 2026</p>
        </footer>
      </div>
    </div>
  );
}
