import os
import shutil
from pathlib import Path
from django.core.management.base import BaseCommand
from django.conf import settings
from core.models import (
    ASMInfo, Doctor, Staff, MobileHealthService,
    Announcement, Service, HealthGuide, GalleryItem,
    DocumentFile
)

class Command(BaseCommand):
    help = 'Seeds Binkılıç Aile Sağlığı Merkezi default and customized data'

    def handle(self, *args, **options):
        self.stdout.write(self.style.NOTICE("Binkılıç ASM verileri yükleniyor..."))

        # 1. Ensure Media Directory and Copy Image
        media_asm_dir = Path(settings.MEDIA_ROOT) / 'asm'
        media_asm_dir.mkdir(parents=True, exist_ok=True)
        
        src_img = Path("scratch/binkilic_asm.jpg")
        dst_img = media_asm_dir / "binkilic_asm.jpg"
        if src_img.exists():
            shutil.copy(src_img, dst_img)
            self.stdout.write(self.style.SUCCESS(f"Resmi bina fotoğrafı kopyalandı: {dst_img}"))

        # 2. ASM Info
        info, _ = ASMInfo.objects.get_or_create(id=1)
        info.name = "Binkılıç Aile Sağlığı Merkezi"
        info.district = "Çatalca"
        info.city = "İstanbul"
        info.phone = "0212 789 6334"
        info.whatsapp = "05461286629"
        info.email = "binkilicasm@gmail.com"
        info.address = "Atatürk Mah. İstanbul Cad. No: 2 Semih Sokak Binkılıç, Çatalca / İstanbul"
        info.map_lat = 41.4107
        info.map_lng = 28.1846
        info.working_hours = "Hafta içi 08:00 - 17:00 (Esnek Mesai 08:00 - 19:00)"
        info.lab_hours = "Salı ve Perşembe 08:30 - 10:30"
        info.building_image = "asm/binkilic_asm.jpg"
        info.about_text = (
            "Binkılıç Aile Sağlığı Merkezi, İstanbul ili Çatalca ilçesi Binkılıç Mahallesinde "
            "modern tıp standartlarında 2 Aile Hekimliği Birimi ve deneyimli sağlık çalışanları ile "
            "koruyucu ve tedavi edici birinci basamak sağlık hizmeti sunmaktadır. Merkezimiz Binkılıç merkez "
            "halkının yanı sıra Hallaçlı, Aydınlar ve Yaylacık köylerimize düzenli gezici (mobil) sağlık "
            "hizmeti ulaştırmaktadır."
        )
        info.save()

        # 3. Doctors
        Doctor.objects.all().delete()
        doc1 = Doctor.objects.create(
            name="Emre İleri",
            title="Dr.",
            unit_no="34.09.001",
            room_no="1 Nolu Poliklinik",
            mobile_villages="Hallaçlı Köyü",
            bio="Binkılıç Aile Sağlığı Merkezi 34.09.001 Nolu Birim Aile Hekimidir. Birinci basamak muayene, kronik hastalık takipleri, bağışıklama ve koruyucu sağlık danışmanlığı hizmeti vermektedir. Hallaçlı Köyü gezici sağlık hizmetlerini yürütmektedir.",
            schedule="Pazartesi, Salı, Çarşamba, Cuma: 08:00 - 17:00 (Binkılıç ASM)\nPerşembe: 09:00 - 12:00 (Hallaçlı Gezici Hizmet) / 13:00 - 17:00 (Binkılıç ASM)",
            avatar_color="#0284c7",
            order=1
        )
        doc2 = Doctor.objects.create(
            name="Menekşe Yılmaz",
            title="Dr.",
            unit_no="34.09.002",
            room_no="2 Nolu Poliklinik",
            mobile_villages="Aydınlar Köyü, Yaylacık Köyü",
            bio="Binkılıç Aile Sağlığı Merkezi 34.09.002 Nolu Birim Aile Hekimidir. Koruyucu hekimlik, gebe-bebek-çocuk izlemleri, kanser erken teşhis taramaları ve poliklinik hizmetleri vermektedir. Aydınlar ve Yaylacık köylerimize düzenli gezici sağlık hizmeti sunmaktadır.",
            schedule="Pazartesi, Perşembe, Cuma: 08:00 - 17:00 (Binkılıç ASM)\nSalı: 09:00 - 12:00 (Aydınlar Gezici Hizmet)\nÇarşamba: 09:00 - 12:00 (Yaylacık Gezici Hizmet)",
            avatar_color="#0d9488",
            order=2
        )

        # 4. Staff
        Staff.objects.all().delete()
        Staff.objects.create(
            name="Elif Alp",
            title="Hemşire",
            role_type="nurse",
            assigned_doctor="Dr. Emre İleri (34.09.001 Nolu Birim)",
            duties="Aşı takvimi uygulamaları, bebek ve çocuk gelişim izlemleri, gebe izlemleri, enjeksiyon, pansuman ve tansiyon ölçümleri.",
            order=1
        )
        Staff.objects.create(
            name="Elif Öncül",
            title="Ebe",
            role_type="midwife",
            assigned_doctor="Dr. Menekşe Yılmaz (34.09.002 Nolu Birim)",
            duties="Kadın ve üreme sağlığı danışmanlığı, gebe ve lohusa takipleri, kanser taramaları (HPV/Kanser kitleri), bebek izlemleri ve emzirme eğitimi.",
            order=2
        )
        Staff.objects.create(
            name="Simge Ceryan",
            title="Hemşire",
            role_type="nurse",
            assigned_doctor="Laboratuvar & Poliklinik Destek",
            duties="Laboratuvar kan alma ve tahlil süreçleri, acil müdahale, hasta triyajı, yetişkin aşılamaları ve enjeksiyon uygulamaları.",
            order=3
        )
        Staff.objects.create(
            name="Nuray Demirel",
            title="Temizlik ve Destek Personeli",
            role_type="cleaning",
            assigned_doctor="Tüm Birimler",
            duties="Merkez içi hijyen ve sterilizasyon standartlarının sağlanması, tıbbi atık yönetimi ve merkez düzeni desteği.",
            order=4
        )

        # 5. Mobile Health Services
        MobileHealthService.objects.all().delete()
        MobileHealthService.objects.create(
            village_name="Hallaçlı Köyü",
            doctor_name="Dr. Emre İleri",
            days_and_hours="Her Perşembe 09:00 - 12:00",
            service_location="Hallaçlı Köy Konağı / Sağlık Evi",
            services="Poliklinik muayenesi, reçete düzenleme, tansiyon/şeker takibi, kronik hastalık izlemi ve aşı uygulaması.",
            order=1
        )
        MobileHealthService.objects.create(
            village_name="Aydınlar Köyü",
            doctor_name="Dr. Menekşe Yılmaz",
            days_and_hours="Her Salı 09:00 - 12:00",
            service_location="Aydınlar Köy Sağlık Evi",
            services="Genel muayene, gebe-bebek izlemi, kan alımı yönlendirmesi, kanser tarama kitleri teslimi ve ilaç takibi.",
            order=2
        )
        MobileHealthService.objects.create(
            village_name="Yaylacık Köyü",
            doctor_name="Dr. Menekşe Yılmaz",
            days_and_hours="Her Çarşamba 09:00 - 12:00",
            service_location="Yaylacık Köy Muhtarlığı Sağlık Odası",
            services="Poliklinik muayenesi, yatağa bağımlı ve yaşlı hasta kontrolü, pansuman ve enjeksiyon uygulamaları.",
            order=3
        )

        # 6. Services & Standards
        Service.objects.all().delete()
        services_data = [
            ("Poliklinik Muayenesi", "Hekimlerimizce teşhis, tedavi ve reçetelendirme işlemleri.", "Stethoscope", "15 Dakika", 1),
            ("Bebek ve Çocuk İzlemleri", "Büyüme, gelişme, kilo, boy ve baş çevresi takibi.", "Baby", "20 Dakika", 2),
            ("Bağışıklama (Aşı) Hizmetleri", "Bebek, çocuk ve yetişkin rutin aşılarının uygulanması.", "Syringe", "10 Dakika", 3),
            ("Gebe ve Lohusa İzlemleri", "Gebelikte tansiyon, kilo, bebek kalp sesi ve risk taraması.", "HeartPulse", "20 Dakika", 4),
            ("Laboratuvar Tetkikleri", "Kan ve idrar tetkiklerinin alınması ve laboratuvara iletimi.", "FlaskConical", "10 Dakika", 5),
            ("Aile Planlaması Danışmanlığı", "Üreme sağlığı, korunma yöntemleri bilgilendirmesi.", "ShieldAlert", "15 Dakika", 6),
            ("Kanser Taramaları", "Kolorektal kanser (GGK) ve Rahim ağzı (HPV) taramaları.", "Activity", "15 Dakika", 7),
            ("Enjeksiyon ve Pansuman", "Reçeteli ilaç enjeksiyonları ve yara pansumanı.", "Bandage", "10 Dakika", 8),
            ("Kronik Hastalık Yönetimi", "Diyabet ve hipertansiyon düzenli hasta izlemleri.", "LineChart", "15 Dakika", 9),
        ]
        for title, desc, icon, duration, order in services_data:
            Service.objects.create(
                title=title,
                description=desc,
                icon=icon,
                standard_duration=duration,
                order=order
            )

        # 7. Health Guides & Articles
        HealthGuide.objects.all().delete()
        guides_data = [
            (
                "Tetkik ve Tahlil İşlemleri",
                "tetkik-islemleri",
                "asm_guide",
                "ASM'mizde kan ve idrar tahlili günleri, açlık kuralları ve sonuç öğrenme süreçleri.",
                """### Binkılıç ASM Laboratuvar Hizmetleri

Merkezimizde kan ve idrar tetkik numuneleri **Salı ve Perşembe günleri 08:30 - 10:30** saatleri arasında alınmaktadır. Numuneler aynı gün Halk Sağlığı Merkez Laboratuvarına ulaştırılmaktadır.

#### Tahlil Öncesi Dikkat Edilmesi Gerekenler:
1. Kan vermeye gelmeden önce en az **10-12 saat aç** kalınmalıdır.
2. Su tüketimi serbesttir; ancak çay, kahve, meyve suyu ve sigara tüketilmemelidir.
3. Düzenli kullanılan tansiyon veya kalp ilaçları az bir suyla içilebilir; diyabet (şeker) ilaçları kan verildikten sonra alınmalıdır.

#### Sonuçların Öğrenilmesi:
* Laboratuvar sonuçlarınızı ertesi gün aile hekiminizden veya **e-Nabız** sistemi üzerinden (e-Devlet şifreniz ile) online olarak görüntüleyebilirsiniz.""",
                "FlaskConical",
                1
            ),
            (
                "Muayene ve Randevu İşlemleri",
                "muayene-islemleri",
                "asm_guide",
                "Randevu alma yöntemleri, poliklinik akışı ve sıra alma kuralları.",
                """### Muayene Kabul ve Randevu Esasları

Merkezimizde hastalarımızın bekleme sürelerini en aza indirmek ve düzenli hizmet sunabilmek için **MHRS (Merkezi Hekim Randevu Sistemi)** uygulanmaktadır.

#### Randevu Nasıl Alınır?
* **ALO 182** çağrı merkezini arayarak,
* **www.mhrs.gov.tr** internet adresi üzerinden,
* **MHRS Mobil** uygulamasını akıllı telefonunuza indirerek bağlı olduğunuz aile hekiminden randevu oluşturabilirsiniz.

#### Acil Durumlar ve Randevusuz Başvurular:
Acil vakalar, gebeler, 65 yaş üstü vatandaşlarımız, şehit/gazi yakınları ve engelli hastalarımız öncelikli olarak muayeneye kabul edilmektedir.""",
                "CalendarCheck",
                2
            ),
            (
                "Hasta Hakları ve Sorumlulukları",
                "hasta-haklari",
                "asm_guide",
                "Sağlık hizmeti alırken sahip olduğunuz haklar ve uymanız gereken kurallar.",
                """### Hasta Hakları ve Sorumlulukları

#### Başlıca Hasta Hakları:
* **Hizmetten Genel Olarak Faydalanma:** Adalet ve hakkaniyet ilkeleri çerçevesinde hizmet alma hakkı.
* **Bilgilendirilme ve Onay:** Sağlık durumu, uygulanacak tetkik ve tedaviler hakkında açık bilgi alma hakkı.
* **Mahremiyet ve Gizlilik:** Tıbbi müdahalelerin gizlilik içinde yürütülmesi hakkı.
* **Hekimi Seçme ve Değiştirme:** Aile hekimini serbestçe seçme ve mevzuat çerçevesinde değiştirme hakkı.

#### Hasta Sorumlulukları:
* Hekime sağlık durumuyla ilgili eksiksiz ve doğru bilgi vermek.
* Randevu saatine riayet etmek veya gelemeyeceği randevuyu iptal etmek.
* Sağlık personeline ve diğer hastalara saygılı davranmak.""",
                "ShieldCheck",
                3
            ),
            (
                "Akılcı İlaç ve Antibiyotik Kullanımı",
                "akilci-ilac-kullanimi",
                "health_info",
                "Gereksiz antibiyotik kullanımının tehlikeleri ve doğru ilaç kullanım rehberi.",
                """### Akılcı İlaç Kullanımı

İlaçlar doğru zamanda, doğru dozda ve hekim önerisi doğrultusunda kullanılmadığında yarar yerine ciddi zararlar verebilir.

#### Antibiyotikler Hakkında Önemli Bilgiler:
* **Antibiyotikler virüslere etki etmez:** Nezle, grip, soğuk algınlığı gibi viral enfeksiyonlarda antibiyotik tamamen etkisizdir.
* **Antibiyotik ağrı kesici veya ateş düşürücü değildir.**
* Hekim reçete etmedikçe komşu veya tanıdık tavsiyesiyle antibiyotik kullanılmamalıdır.
* Reçete edilen antibiyotik, şikayetler geçse bile hekimin belirttiği süre boyunca bitene kadar kullanılmalıdır.""",
                "Pill",
                4
            ),
            (
                "Bağırsak (Kolorektal) Kanseri Taraması",
                "bagirsak-kanseri-taramasi",
                "health_info",
                "Erken teşhis hayat kurtarır. Merkezimizde yapılan ücretsiz kanser taramaları.",
                """### Kolorektal Kanser Taraması

Kolorektal (bağırsak) kanserleri erken evrede teşhis edildiğinde tamamen tedavi edilebilen kanser türlerindendir.

#### Kimler Taranmalı?
* **50 - 70 yaş** arasındaki tüm kadın ve erkek vatandaşlarımızın **2 yılda bir** Gaitada Gizli Kan (GGK) testi yaptırması önerilmektedir.

#### Test Nasıl Yapılır?
* Aile Sağlığı Merkezimizden temin edeceğiniz pratik test kiti ile evinizde kolayca uygulayabilirsiniz.
* Test tamamen **ücretsizdir**.""",
                "HeartPulse",
                5
            ),
            (
                "Hafta Hafta Gebelik Dönemi Rehberi",
                "gebelik-donemi",
                "pregnancy",
                "Gebelikte beslenme, aşılar, trimester dönemleri ve rutin izlem takvimi.",
                """### Gebelik Dönemi İzlem ve Bakım Rehberi

Gebelik süresince anne adayının ve bebeğin sağlığını korumak için merkezimizde en az 4 defa ayrıntılı gebe izlemi yapılmaktadır.

#### Gebe İzlem Takvimi:
1. **İlk İzlem (0 - 14. Hafta):** Gebeliğin tespiti, tansiyon, kilo, tam kan sayımı, kan grubu ve vitamin takviyesi.
2. **İkinci İzlem (18 - 24. Hafta):** Bebek kalp sesleri, tetanoz aşısı 1. dozu, kan şekeri taraması.
3. **Üçüncü İzlem (28 - 32. Hafta):** Tetanoz aşısı 2. dozu, demir desteği ve tansiyon kontrolü.
4. **Dördüncü İzlem (36 - 38. Hafta):** Doğum planlaması ve emzirme eğitimi.""",
                "Baby",
                6
            ),
            (
                "Yenidoğan Bebek Bakımı ve Gelişimi",
                "yenidogan-bakimi",
                "newborn",
                "Yenidoğan tarama testleri, anne sütü, göbek bakımı ve aşılar.",
                """### Yenidoğan Bebek Rehberi

Bebeğinizin sağlıklı büyümesi için doğumdan hemen sonra aile hekiminize başvurarak kayıt açtırmanız büyük önem taşır.

#### İlk Günlerde Yapılan İşlemler:
* **Topuk Kanı Taraması (Guthrie Testi):** Fenilketonüri, Konjenital Hipotiroidi, Biyotinidaz eksikliği ve Kistik Fibrozis taraması için doğumdan sonraki ilk hafta içinde alınır.
* **İşitme Taraması ve Görme Taraması**
* **Hepatit B Aşı Takibi:** Doğumda ve 1. ayda uygulanan Hepatit B aşıları.""",
                "Smile",
                7
            )
        ]

        for title, slug, cat, summary, content, icon, order in guides_data:
            HealthGuide.objects.create(
                title=title,
                slug=slug,
                category=cat,
                summary=summary,
                content=content,
                icon=icon,
                order=order
            )

        # 8. Announcements
        Announcement.objects.all().delete()
        Announcement.objects.create(
            title="Binkılıç ASM Gezici Sağlık Hizmetleri Ziyaret Takvimi",
            summary="Hallaçlı, Aydınlar ve Yaylacık köylerimize yönelik haftalık hekim ziyaret günleri ve saatleri ilan edilmiştir.",
            content="Binkılıç Aile Sağlığı Merkezi hekimlerimiz Dr. Emre İleri ve Dr. Menekşe Yılmaz tarafından yürütülen gezici sağlık hizmetleri kapsamında: Her Salı Aydınlar Köyü, her Çarşamba Yaylacık Köyü ve her Perşembe Hallaçlı Köyü sağlık evlerinde yerinde muayene, aşı ve reçete hizmeti verilmektedir.",
            category="asm",
            is_featured=True
        )
        Announcement.objects.create(
            title="Kanser Erken Teşhis Taramaları Merkezimizde Ücretsiz Yapılmaktadır",
            summary="50-70 yaş arası GGK ve 30-65 yaş arası HPV rahim ağzı kanser tarama kitlerinizi merkezimizden temin edebilirsiniz.",
            content="Sağlık Bakanlığımızın kanserle mücadele programı kapsamında merkezimizde Kolorektal kanser ve Rahim Ağzı kanseri erken teşhis taramaları tamamen ücretsiz olarak uygulanmaktadır.",
            category="campaign",
            is_featured=True
        )
        Announcement.objects.create(
            title="T.C. Sağlık Bakanlığı: Akılcı İlaç ve Antibiyotik Kullanımı Duyurusu",
            summary="Bilinçsiz antibiyotik kullanımı bakteriyel direnci artırıyor. Lütfen hekim önerisi olmadan antibiyotik kullanmayınız.",
            content="Grip ve nezle gibi viral hastalıklarda antibiyotikler iyileşme sağlamaz. Aile hekiminizin reçete etmediği hiçbir ilacı kullanmayınız.",
            category="ministry",
            external_link="https://covid19.saglik.gov.tr/",
            is_featured=False
        )

        # 9. Document Files
        DocumentFile.objects.all().delete()
        docs = [
            ("ASM Çalışma ve Muayene Talimatı", "talimatlar", "Aile Sağlığı Merkezimiz içi genel kurallar ve hasta hakları bildirgesi.", "/depo/files/basarili.pdf", "PDF (1.2 MB)"),
            ("Anne Sütü ve Emzirme Kılavuzu", "faydali", "Doğru emzirme pozisyonları ve anne sütünün faydaları rehberi.", "/depo/files/emzirme.pdf", "PDF (850 KB)"),
            ("Gebelikte Beslenme ve Bakım Rehberi", "faydali", "Gebelikte sağlıklı yaşam ve vitamin gereksinimleri rehberi.", "/depo/files/gebelik.pdf", "PDF (1.5 MB)"),
            ("Temel İlk Yardım Uygulamaları", "ilk_yardim", "Evde ve sokakta karşılaşılan acil durumlarda ilk yardım müdahaleleri.", "/depo/files/emzirme_tek.pdf", "PDF (920 KB)"),
            ("Sigarayı Bırakma Yolları ve Sağlık Kılavuzu", "sigara", "T.C. Sağlık Bakanlığı Sigarayı Bırakma Danışmanlık Rehberi (ALO 171).", "/depo/files/basarili.pdf", "PDF (640 KB)"),
        ]
        for title, cat, desc, path, size in docs:
            DocumentFile.objects.create(
                title=title,
                category=cat,
                description=desc,
                file_path=path,
                file_size=size
            )

        # 10. Gallery Items
        GalleryItem.objects.all().delete()
        for i in range(1, 13):
            GalleryItem.objects.create(
                title=f"Binkılıç ASM Görsel {i}",
                category="Merkezimiz" if i % 2 == 0 else "Hizmetlerimiz",
                image_url=f"images/uploads/{i}.jfif" if i <= 6 else "images/binkilic_asm.jpg",
                order=i
            )

        self.stdout.write(self.style.SUCCESS("Tüm Binkılıç ASM veritabanı kayıtları başarıyla oluşturuldu!"))
