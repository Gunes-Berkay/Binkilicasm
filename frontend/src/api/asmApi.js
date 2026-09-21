import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fallback static data in case backend is loading or during instant offline preview
const defaultInfo = {
  name: "Binkılıç Aile Sağlığı Merkezi",
  district: "Çatalca",
  city: "İstanbul",
  phone: "0212 789 6334",
  whatsapp: "05461286629",
  email: "binkilicasm@gmail.com",
  address: "Atatürk Mah. İstanbul Cad. No: 2 Semih Sokak Binkılıç, Çatalca / İstanbul",
  map_lat: 41.4107,
  map_lng: 28.1846,
  working_hours: "Hafta içi 08:00 - 17:00 (Esnek Mesai 08:00 - 19:00)",
  lab_hours: "Salı ve Perşembe 08:30 - 10:30",
  building_image: "/images/binkilic_asm.jpg",
  about_text: "Binkılıç Aile Sağlığı Merkezi, Çatalca Binkılıç Mahallesinde modern tıp standartlarında 2 Aile Hekimliği Birimi ve deneyimli sağlık çalışanları ile koruyucu ve tedavi edici birinci basamak sağlık hizmeti sunmaktadır. Ayrıca Hallaçlı, Aydınlar ve Yaylacık köylerimize düzenli gezici sağlık hizmeti ulaştırmaktadır."
};

const defaultDoctors = [
  {
    id: 1,
    name: "Emre İleri",
    title: "Dr.",
    unit_no: "34.09.001",
    room_no: "1 Nolu Poliklinik",
    mobile_villages: "Hallaçlı Köyü",
    bio: "Binkılıç Aile Sağlığı Merkezi 34.09.001 Nolu Birim Aile Hekimidir. Birinci basamak muayene, kronik hastalık takipleri, bağışıklama ve koruyucu sağlık danışmanlığı hizmeti vermektedir. Hallaçlı Köyü gezici sağlık hizmetlerini yürütmektedir.",
    schedule: "Pazartesi, Salı, Çarşamba, Cuma: 08:00 - 17:00 (Binkılıç ASM)\nPerşembe: 09:00 - 12:00 (Hallaçlı Gezici Hizmet) / 13:00 - 17:00 (Binkılıç ASM)",
    avatar_color: "#0284c7",
    slug: "dr-emre-ileri",
    is_active: true
  },
  {
    id: 2,
    name: "Menekşe Yılmaz",
    title: "Dr.",
    unit_no: "34.09.002",
    room_no: "2 Nolu Poliklinik",
    mobile_villages: "Aydınlar Köyü, Yaylacık Köyü",
    bio: "Binkılıç Aile Sağlığı Merkezi 34.09.002 Nolu Birim Aile Hekimidir. Koruyucu hekimlik, gebe-bebek-çocuk izlemleri, kanser erken teşhis taramaları ve poliklinik hizmetleri vermektedir. Aydınlar ve Yaylacık köylerimize düzenli gezici sağlık hizmeti sunmaktadır.",
    schedule: "Pazartesi, Perşembe, Cuma: 08:00 - 17:00 (Binkılıç ASM)\nSalı: 09:00 - 12:00 (Aydınlar Gezici Hizmet)\nÇarşamba: 09:00 - 12:00 (Yaylacık Gezici Hizmet)",
    avatar_color: "#0d9488",
    slug: "dr-menekse-yilmaz",
    is_active: true
  }
];

const defaultStaff = [
  {
    id: 1,
    name: "Elif Alp",
    title: "Hemşire",
    role_type: "nurse",
    assigned_doctor: "Dr. Emre İleri (34.09.001 Nolu Birim)",
    duties: "Aşı takvimi uygulamaları, bebek ve çocuk gelişim izlemleri, gebe izlemleri, enjeksiyon, pansuman ve tansiyon ölçümleri.",
    slug: "hemsire-elif-alp"
  },
  {
    id: 2,
    name: "Elif Öncül",
    title: "Ebe",
    role_type: "midwife",
    assigned_doctor: "Dr. Menekşe Yılmaz (34.09.002 Nolu Birim)",
    duties: "Kadın ve üreme sağlığı danışmanlığı, gebe ve lohusa takipleri, kanser taramaları (HPV/Kanser kitleri), bebek izlemleri ve emzirme eğitimi.",
    slug: "ebe-elif-oncul"
  },
  {
    id: 3,
    name: "Simge Ceryan",
    title: "Hemşire",
    role_type: "nurse",
    assigned_doctor: "Laboratuvar & Poliklinik Destek",
    duties: "Laboratuvar kan alma ve tahlil süreçleri, acil müdahale, hasta triyajı, yetişkin aşılamaları ve enjeksiyon uygulamaları.",
    slug: "hemsire-simge-ceryan"
  },
  {
    id: 4,
    name: "Nuray Demirel",
    title: "Temizlik ve Destek Personeli",
    role_type: "cleaning",
    assigned_doctor: "Tüm Birimler",
    duties: "Merkez içi hijyen ve sterilizasyon standartlarının sağlanması, tıbbi atık yönetimi ve merkez düzeni desteği.",
    slug: "nuray-demirel"
  }
];

const defaultMobileServices = [
  {
    id: 1,
    village_name: "Hallaçlı Köyü",
    doctor_name: "Dr. Emre İleri",
    days_and_hours: "Her Perşembe 09:00 - 12:00",
    service_location: "Hallaçlı Köy Konağı / Sağlık Evi",
    services: "Poliklinik muayenesi, reçete düzenleme, tansiyon/şeker takibi, kronik hastalık izlemi ve aşı uygulaması."
  },
  {
    id: 2,
    village_name: "Aydınlar Köyü",
    doctor_name: "Dr. Menekşe Yılmaz",
    days_and_hours: "Her Salı 09:00 - 12:00",
    service_location: "Aydınlar Köy Sağlık Evi",
    services: "Genel muayene, gebe-bebek izlemi, kan alımı yönlendirmesi, kanser tarama kitleri teslimi ve ilaç takibi."
  },
  {
    id: 3,
    village_name: "Yaylacık Köyü",
    doctor_name: "Dr. Menekşe Yılmaz",
    days_and_hours: "Her Çarşamba 09:00 - 12:00",
    service_location: "Yaylacık Köy Muhtarlığı Sağlık Odası",
    services: "Poliklinik muayenesi, yatağa bağımlı ve yaşlı hasta kontrolü, pansuman ve enjeksiyon uygulamaları."
  }
];

export const asmApi = {
  getInfo: async () => {
    try {
      const res = await apiClient.get('/info/');
      return res.data;
    } catch {
      return defaultInfo;
    }
  },

  getDoctors: async () => {
    try {
      const res = await apiClient.get('/doctors/');
      return res.data;
    } catch {
      return defaultDoctors;
    }
  },

  getDoctor: async (slug) => {
    try {
      const res = await apiClient.get(`/doctors/${slug}/`);
      return res.data;
    } catch {
      return defaultDoctors.find(d => d.slug === slug) || defaultDoctors[0];
    }
  },

  getStaff: async () => {
    try {
      const res = await apiClient.get('/staff/');
      return res.data;
    } catch {
      return defaultStaff;
    }
  },

  getMobileServices: async () => {
    try {
      const res = await apiClient.get('/mobile-services/');
      return res.data;
    } catch {
      return defaultMobileServices;
    }
  },

  getAnnouncements: async (category = null) => {
    try {
      const url = category ? `/announcements/?category=${category}` : '/announcements/';
      const res = await apiClient.get(url);
      return res.data;
    } catch {
      return [
        {
          id: 1,
          title: "Binkılıç ASM Gezici Sağlık Hizmetleri Ziyaret Takvimi",
          summary: "Hallaçlı, Aydınlar ve Yaylacık köylerimize yönelik haftalık hekim ziyaret günleri ve saatleri ilan edilmiştir.",
          content: "Her Salı Aydınlar Köyü, her Çarşamba Yaylacık Köyü ve her Perşembe Hallaçlı Köyü sağlık evlerinde yerinde muayene, aşı ve reçete hizmeti verilmektedir.",
          category: "asm",
          published_date: "2026-09-19",
          is_featured: true
        },
        {
          id: 2,
          title: "Kanser Erken Teşhis Taramaları Merkezimizde Ücretsiz Yapılmaktadır",
          summary: "50-70 yaş arası GGK ve 30-65 yaş arası HPV rahim ağzı kanser tarama kitlerinizi merkezimizden temin edebilirsiniz.",
          content: "Sağlık Bakanlığımızın kanserle mücadele programı kapsamında merkezimizde Kolorektal kanser ve Rahim Ağzı kanseri erken teşhis taramaları tamamen ücretsiz olarak uygulanmaktadır.",
          category: "campaign",
          published_date: "2026-09-15",
          is_featured: true
        }
      ];
    }
  },

  getServices: async () => {
    try {
      const res = await apiClient.get('/services/');
      return res.data;
    } catch {
      return [
        { id: 1, title: "Poliklinik Muayenesi", description: "Hekimlerimizce teşhis, tedavi ve reçetelendirme işlemleri.", icon: "Stethoscope", standard_duration: "15 Dakika" },
        { id: 2, title: "Bebek ve Çocuk İzlemleri", description: "Büyüme, gelişme, kilo, boy ve baş çevresi takibi.", icon: "Baby", standard_duration: "20 Dakika" },
        { id: 3, title: "Bağışıklama (Aşı) Hizmetleri", description: "Bebek, çocuk ve yetişkin rutin aşılarının uygulanması.", icon: "Syringe", standard_duration: "10 Dakika" },
        { id: 4, title: "Gebe ve Lohusa İzlemleri", description: "Gebelikte tansiyon, kilo, bebek kalp sesi ve risk taraması.", icon: "HeartPulse", standard_duration: "20 Dakika" },
        { id: 5, title: "Laboratuvar Tetkikleri", description: "Kan ve idrar tetkiklerinin alınması ve laboratuvara iletimi.", icon: "FlaskConical", standard_duration: "10 Dakika" },
        { id: 6, title: "Aile Planlaması Danışmanlığı", description: "Üreme sağlığı, korunma yöntemleri bilgilendirmesi.", icon: "ShieldAlert", standard_duration: "15 Dakika" }
      ];
    }
  },

  getGuides: async (category = null) => {
    try {
      const url = category ? `/guides/?category=${category}` : '/guides/';
      const res = await apiClient.get(url);
      return res.data;
    } catch {
      return [
        { id: 1, title: "Tetkik ve Tahlil İşlemleri", slug: "tetkik-islemleri", category: "asm_guide", summary: "ASM'mizde kan ve idrar tahlili günleri, açlık kuralları ve sonuç öğrenme süreçleri.", icon: "FlaskConical" },
        { id: 2, title: "Muayene ve Randevu İşlemleri", slug: "muayene-islemleri", category: "asm_guide", summary: "Randevu alma yöntemleri, poliklinik akışı ve sıra alma kuralları.", icon: "CalendarCheck" },
        { id: 3, title: "Hasta Hakları ve Sorumlulukları", slug: "hasta-haklari", category: "asm_guide", summary: "Sağlık hizmeti alırken sahip olduğunuz haklar ve uymanız gereken kurallar.", icon: "ShieldCheck" },
        { id: 4, title: "Akılcı İlaç ve Antibiyotik Kullanımı", slug: "akilci-ilac-kullanimi", category: "health_info", summary: "Gereksiz antibiyotik kullanımının tehlikeleri ve doğru ilaç kullanım rehberi.", icon: "Pill" },
        { id: 5, title: "Hafta Hafta Gebelik Dönemi", slug: "gebelik-donemi", category: "pregnancy", summary: "Gebelikte beslenme, aşılar, trimester dönemleri ve rutin izlem takvimi.", icon: "Baby" },
        { id: 6, title: "Yenidoğan Bebek Bakımı", slug: "yenidogan-bakimi", category: "newborn", summary: "Yenidoğan tarama testleri, anne sütü, göbek bakımı ve aşılar.", icon: "Smile" }
      ];
    }
  },

  getGuide: async (slug) => {
    try {
      const res = await apiClient.get(`/guides/${slug}/`);
      return res.data;
    } catch {
      return null;
    }
  },

  getDocuments: async () => {
    try {
      const res = await apiClient.get('/documents/');
      return res.data;
    } catch {
      return [
        { id: 1, title: "ASM Çalışma ve Muayene Talimatı", category: "talimatlar", description: "Merkezimiz içi kurallar ve hasta hakları bildirgesi.", file_path: "/depo/files/basarili.pdf", file_size: "PDF (1.2 MB)" },
        { id: 2, title: "Anne Sütü ve Emzirme Kılavuzu", category: "faydali", description: "Doğru emzirme pozisyonları ve anne sütünün faydaları rehberi.", file_path: "/depo/files/emzirme.pdf", file_size: "PDF (850 KB)" },
        { id: 3, title: "Gebelikte Beslenme ve Bakım Rehberi", category: "faydali", description: "Gebelikte sağlıklı yaşam ve vitamin gereksinimleri rehberi.", file_path: "/depo/files/gebelik.pdf", file_size: "PDF (1.5 MB)" },
        { id: 4, title: "Temel İlk Yardım Uygulamaları", category: "ilk_yardim", description: "Acil durumlarda ilk yardım müdahaleleri.", file_path: "/depo/files/emzirme_tek.pdf", file_size: "PDF (920 KB)" },
      ];
    }
  },

  getGallery: async () => {
    try {
      const res = await apiClient.get('/gallery/');
      return res.data;
    } catch {
      return Array.from({ length: 8 }, (_, i) => ({
        id: i + 1,
        title: `Binkılıç ASM Görsel ${i + 1}`,
        category: i % 2 === 0 ? "Merkezimiz" : "Hizmetlerimiz",
        image_url: "/images/binkilic_asm.jpg"
      }));
    }
  },

  sendNotification: async (data) => {
    const res = await apiClient.post('/contact/', data);
    return res.data;
  }
};
