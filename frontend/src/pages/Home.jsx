import React, { useState, useEffect } from 'react';
import HeroBanner from '../components/home/HeroBanner';
import QuickAccessCards from '../components/home/QuickAccessCards';
import HealthTipsCarousel from '../components/home/HealthTipsCarousel';
import DoctorCardsSection from '../components/home/DoctorCardsSection';
import MobileHealthSection from '../components/home/MobileHealthSection';
import ServicesSection from '../components/home/ServicesSection';
import AnnouncementsSection from '../components/home/AnnouncementsSection';
import { asmApi } from '../api/asmApi';

export default function Home({ info }) {
  const [doctors, setDoctors] = useState([]);
  const [mobileServices, setMobileServices] = useState([]);
  const [services, setServices] = useState([]);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function loadData() {
      const [docs, mob, srv, ann] = await Promise.all([
        asmApi.getDoctors(),
        asmApi.getMobileServices(),
        asmApi.getServices(),
        asmApi.getAnnouncements()
      ]);
      setDoctors(docs);
      setMobileServices(mob);
      setServices(srv);
      setAnnouncements(ann);
    }
    loadData();
  }, []);

  return (
    <div>
      <HeroBanner info={info} />
      <QuickAccessCards />
      <HealthTipsCarousel />
      <DoctorCardsSection doctors={doctors} />
      <MobileHealthSection mobileServices={mobileServices} />
      <ServicesSection services={services} />
      <AnnouncementsSection announcements={announcements} />
    </div>
  );
}
