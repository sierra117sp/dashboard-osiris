

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Login from './pages/Login';
import Register from './pages/Register';
import Categories from './pages/Categories';
import DashboardAdvanced from './modules/dashboardAdvanced';
import BankingIntegration from './modules/bankingIntegration';
import Automation from './modules/automation';
import MultiCurrency from './modules/multicurrency';
import SecurityAdvanced from './modules/security';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 bg-gray-100 flex flex-col min-h-screen">
            <Header />
            <div className="flex-1 max-w-4xl mx-auto mt-8 w-full">
              <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard-advanced" element={<DashboardAdvanced />} />
            <Route path="/banking-integration" element={<BankingIntegration />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/multi-currency" element={<MultiCurrency />} />
            <Route path="/security" element={<SecurityAdvanced />} />
              </Routes>
            </div>
            <Footer />
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
