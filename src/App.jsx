// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Layout from './components/layout/Layout';

// Import all pages
import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Installation from './pages/Installation'; 
import FrontendOverview from './pages/FrontendOverview';
import ApiReference from './pages/ApiReference';
import About from './pages/About';

function App() {
 // For smooth scrolling to hash links
 useEffect(() => {
   const hash = window.location.hash;
   if (hash) {
     setTimeout(() => {
       const element = document.querySelector(hash);
       if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
       }
     }, 100);
   }
 }, []);

 return (
   <Router>
     <div className="min-h-screen bg-gray-50">
       <Layout>
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <Routes>
             {/* Main Routes */}
             <Route path="/" element={<Home />} />
             <Route path="/introduction" element={<Introduction />} />
             <Route path="/installation" element={<Installation />} />
             <Route path="/frontend" element={<FrontendOverview />} />
             <Route path="/api" element={<ApiReference />} />
             <Route path="/about" element={<About />} />

             {/* Catch all route - redirect to home */}
             <Route path="*" element={<Navigate to="/" replace />} />
           </Routes>
         </div>
       </Layout>
     </div>
   </Router>
 );
}

export default App;