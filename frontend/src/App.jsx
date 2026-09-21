import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppFloatingButton from './components/layout/WhatsAppFloatingButton';

import Home from './pages/Home';
import About from './pages/About';
import MobileHealthPage from './pages/MobileHealthPage';
import ServiceStandards from './pages/ServiceStandards';
import WorkingHours from './pages/WorkingHours';
import PriorityPatients from './pages/PriorityPatients';
import HealthPolicy from './pages/HealthPolicy';
import StaffAllPage from './pages/StaffAllPage';
import DoctorsPage from './pages/DoctorsPage';
import StaffPage from './pages/StaffPage';
import SupportStaffPage from './pages/SupportStaffPage';
import StaffDetailPage from './pages/StaffDetailPage';
import HealthGuideDetailPage from './pages/HealthGuideDetailPage';
import CalculatorsPage from './pages/CalculatorsPage';
import DocumentsPage from './pages/DocumentsPage';
import GalleryPage from './pages/GalleryPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ContactPage from './pages/ContactPage';

import { asmApi } from './api/asmApi';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    async function loadInfo() {
      const data = await asmApi.getInfo();
      setInfo(data);
    }
    loadInfo();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TopBar info={info} />
        <Navbar info={info} />
        
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home info={info} />} />
            <Route path="/kurumsal/hakkimizda" element={<About info={info} />} />
            <Route path="/kurumsal/gezici-hizmetlerimiz" element={<MobileHealthPage />} />
            <Route path="/kurumsal/hizmet-standartlari" element={<ServiceStandards />} />
            <Route path="/kurumsal/calisma-saatlerimiz" element={<WorkingHours />} />
            <Route path="/kurumsal/oncelikli-hastalar" element={<PriorityPatients />} />
            <Route path="/kurumsal/hizmet-politikamiz" element={<HealthPolicy />} />

            {/* Single Unified Kadromuz Page */}
            <Route path="/kadromuz" element={<StaffAllPage />} />
            <Route path="/kadromuz/aile-hekimlerimiz" element={<StaffAllPage />} />
            <Route path="/kadromuz/aile-sagligi-elemanlarimiz" element={<StaffAllPage />} />
            <Route path="/kadromuz/yardimci-personellerimiz" element={<StaffAllPage />} />
            <Route path="/kadro/:slug" element={<StaffAllPage />} />

            <Route path="/asm-rehberi/:slug" element={<HealthGuideDetailPage />} />
            <Route path="/saglik-rehberi/:slug" element={<HealthGuideDetailPage />} />

            {/* Health Calculators */}
            <Route path="/saglik-hesaplamalari" element={<CalculatorsPage defaultTab="kalori" />} />
            <Route path="/saglik-hesaplamalari/kalori" element={<CalculatorsPage defaultTab="kalori" />} />
            <Route path="/saglik-hesaplamalari/su" element={<CalculatorsPage defaultTab="su" />} />
            <Route path="/saglik-hesaplamalari/yetiskin-vki" element={<CalculatorsPage defaultTab="yetiskin-vki" />} />
            <Route path="/saglik-hesaplamalari/cocuk-vki" element={<CalculatorsPage defaultTab="cocuk-vki" />} />
            <Route path="/saglik-hesaplamalari/bmr" element={<CalculatorsPage defaultTab="bmr" />} />
            <Route path="/saglik-hesaplamalari/bel-cevresi" element={<CalculatorsPage defaultTab="bel-cevresi" />} />
            <Route path="/saglik-hesaplamalari/diyabet-riski" element={<CalculatorsPage defaultTab="diyabet-riski" />} />
            <Route path="/saglik-hesaplamalari/gebelik" element={<CalculatorsPage defaultTab="gebelik" />} />
            <Route path="/saglik-hesaplamalari/asi-takvimi" element={<CalculatorsPage defaultTab="asi-takvimi" />} />
            <Route path="/saglik-hesaplamalari/persentil" element={<CalculatorsPage defaultTab="persentil" />} />
            <Route path="/saglik-hesaplamalari/sigara" element={<CalculatorsPage defaultTab="sigara" />} />

            <Route path="/duyurular" element={<AnnouncementsPage />} />
            <Route path="/dosyalar" element={<DocumentsPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/iletisim" element={<ContactPage info={info} />} />
          </Routes>
        </main>

        <Footer info={info} />
        <WhatsAppFloatingButton phone={info?.whatsapp || "05461286629"} />
      </div>
    </Router>
  );
}
