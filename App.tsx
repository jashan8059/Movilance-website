import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { LandingPage } from './components/LandingPage';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

// Import Pages
import { PrivacyPolicy } from './components/pages/PrivacyPolicy';
import { TermsOfService } from './components/pages/TermsOfService';
import { AboutUs } from './components/pages/AboutUs';
import { SecurityStandards } from './components/pages/SecurityStandards';
import { Careers } from './components/pages/Careers';
import { VisitorMovement } from './components/pages/VisitorMovement';
import { VehicleEntryExit } from './components/pages/VehicleEntryExit';
import { MaterialMovement } from './components/pages/MaterialMovement';
import { CourierManagement } from './components/pages/CourierManagement';
import { AssetTracking } from './components/pages/AssetTracking';
import { CashPurchase } from './components/pages/CashPurchase';
import { IncidentReporting } from './components/pages/IncidentReporting';
import { LockersAndKeys } from './components/pages/LockersAndKeys';
import { CentralDirectories } from './components/pages/CentralDirectories';
import { ComplianceAndAudit } from './components/pages/ComplianceAndAudit';
import { ERPIntegration } from './components/pages/ERPIntegration';
import { VarianceControl } from './components/pages/VarianceControl';
import { TrainingChecksheet } from './components/pages/TrainingChecksheet';
import { Login } from './components/pages/Login';
import { AdminLogin } from './components/pages/AdminLogin';

// Helper component to conditionally render Header and Footer
const Layout: React.FC<{ 
  children: React.ReactNode, 
  onOpenDemo: () => void, 
  onContact: () => void 
}> = ({ children, onOpenDemo, onContact }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/admin';

  return (
    <>
      {!isAuthPage && <Header onOpenDemo={onOpenDemo} />}
      <main className="flex-grow">
        {children}
      </main>
      {!isAuthPage && <Footer onOpenDemo={onOpenDemo} onContactTeam={onContact} />}
    </>
  );
};

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'demo' | 'contact'>('demo');

  const handleOpenDemo = () => {
    setModalMode('demo');
    setIsModalOpen(true);
  };

  const handleOpenContact = () => {
    setModalMode('contact');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-movilance-red selection:text-white flex flex-col">
          <Layout onOpenDemo={handleOpenDemo} onContact={handleOpenContact}>
            <Routes>
              <Route path="/" element={<LandingPage onOpenDemo={handleOpenDemo} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<AdminLogin />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/security-standards" element={<SecurityStandards />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/solutions/visitor-movement" element={<VisitorMovement onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/vehicle-entry-exit" element={<VehicleEntryExit onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/material-movement" element={<MaterialMovement onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/courier-management" element={<CourierManagement onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/asset-tracking" element={<AssetTracking onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/cash-purchase" element={<CashPurchase onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/incident-reporting" element={<IncidentReporting onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/lockers-and-keys" element={<LockersAndKeys onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/central-directories" element={<CentralDirectories onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/compliance-and-audit" element={<ComplianceAndAudit onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/erp-integration" element={<ERPIntegration onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/solutions/variance-control" element={<VarianceControl onOpenDemo={handleOpenDemo} onContact={handleOpenContact} />} />
              <Route path="/training-checksheet" element={<TrainingChecksheet />} />
            </Routes>
          </Layout>
          
          <BookDemoModal 
            isOpen={isModalOpen} 
            mode={modalMode}
            onClose={handleCloseModal} 
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;