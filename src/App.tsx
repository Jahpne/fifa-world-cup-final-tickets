/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Listings } from './components/Listings';
import { Checkout } from './components/Checkout';
import { Page, TicketListing } from './types';
import { AnimatePresence, motion } from 'motion/react';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTicket, setSelectedTicket] = useState<TicketListing | null>(null);

  // Sync state with some "virtual" sub-pages for back button support within the path
  const currentPage = location.hash === '#listings' ? 'listings' : 
                      location.hash === '#checkout' ? 'checkout' : 'home';

  const navigateTo = (page: Page) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (page === 'home') navigate('/fifa-world-cup-final-tickets');
    else navigate(`/fifa-world-cup-final-tickets#${page}`);
  };

  const handleSelectTicket = (ticket: TicketListing) => {
    setSelectedTicket(ticket);
    navigateTo('checkout');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Header onHome={() => navigateTo('home')} />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Home onViewListings={() => navigateTo('listings')} />
            </motion.div>
          )}

          {currentPage === 'listings' && (
            <motion.div
              key="listings"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Listings 
                onBack={() => navigateTo('home')} 
                onSelect={handleSelectTicket} 
              />
            </motion.div>
          )}

          {currentPage === 'checkout' && selectedTicket && (
            <motion.div
              key="checkout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Checkout 
                ticket={selectedTicket} 
                onBack={() => navigateTo('listings')} 
              />
            </motion.div>
          )}

          {currentPage === 'checkout' && !selectedTicket && (
             <Navigate to="/fifa-world-cup-final-tickets#listings" replace />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/fifa-world-cup-final-tickets" element={<AppContent />} />
        <Route path="/" element={<Navigate to="/fifa-world-cup-final-tickets" replace />} />
        <Route path="*" element={<Navigate to="/fifa-world-cup-final-tickets" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
