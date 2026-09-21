from django.db import models
from django.utils.text import slugify

class ASMInfo(models.Model):
    name = models.CharField(max_length=255, default="Binkılıç Aile Sağlığı Merkezi", verbose_name="ASM Adı")
    district = models.CharField(max_length=100, default="Çatalca", verbose_name="İlçe")
    city = models.CharField(max_length=100, default="İstanbul", verbose_name="İl")
    phone = models.CharField(max_length=50, default="0212 789 6334", verbose_name="Sabit Telefon")
    whatsapp = models.CharField(max_length=50, default="05461286629", verbose_name="WhatsApp Hattı")
    email = models.EmailField(default="binkilicasm@gmail.com", verbose_name="E-Posta")
    address = models.TextField(default="Atatürk Mah. İstanbul Cad. No: 2 Semih Sokak Binkılıç, Çatalca / İstanbul", verbose_name="Açık Adres")
    building_image = models.ImageField(upload_to="asm/", blank=True, null=True, verbose_name="ASM Binası Görseli")
    map_lat = models.FloatField(default=41.4107, verbose_name="Enlem (Lat)")
    map_lng = models.FloatField(default=28.1846, verbose_name="Boylam (Lng)")
    working_hours = models.CharField(max_length=255, default="Hafta içi 08:00 - 17:00 (Esnek Mesai 08:00 - 19:00)", verbose_name="Çalışma Saatleri")
    lab_hours = models.CharField(max_length=255, default="Hafta içi 08:30 - 10:30", verbose_name="Kan Alma Saatleri")
    about_text = models.TextField(blank=True, default="", verbose_name="Hakkımızda Metni")

    class Meta:
        verbose_name = "ASM Genel Bilgisi"
        verbose_name_plural = "ASM Genel Bilgileri"

    def __str__(self):
        return self.name


class Doctor(models.Model):
    name = models.CharField(max_length=150, verbose_name="Hekim Adı Soyadı")
    title = models.CharField(max_length=100, default="Aile Hekimi", verbose_name="Unvan")
    unit_no = models.CharField(max_length=50, verbose_name="Aile Hekimliği Birim No")
    room_no = models.CharField(max_length=50, default="1", verbose_name="Poliklinik Oda No")
    mobile_villages = models.CharField(max_length=255, blank=True, default="", verbose_name="Gezici Sağlık Köyleri")
    bio = models.TextField(blank=True, default="", verbose_name="Özgeçmiş / Açıklama")
    schedule = models.TextField(blank=True, default="", verbose_name="Mesai & Gezici Hizmet Programı")
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    avatar_color = models.CharField(max_length=50, default="#0284c7", verbose_name="Avatar Tema Rengi")
    order = models.IntegerField(default=0, verbose_name="Sıralama")
    is_active = models.BooleanField(default=True, verbose_name="Aktif mi?")

    class Meta:
        verbose_name = "Aile Hekimi"
        verbose_name_plural = "Aile Hekimlerimiz"
        ordering = ['order', 'unit_no']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name.replace('ı', 'i').replace('İ', 'i'))
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} {self.name} ({self.unit_no})"


class Staff(models.Model):
    ROLE_CHOICES = (
        ('nurse', 'Hemşire / Ebe (Aile Sağlığı Çalışanı)'),
        ('midwife', 'Ebe'),
        ('support', 'Yardımcı & Destek Personeli'),
        ('cleaning', 'Temizlik Personeli'),
    )
    name = models.CharField(max_length=150, verbose_name="Personel Adı Soyadı")
    title = models.CharField(max_length=100, verbose_name="Unvanı (örn: Hemşire, Ebe, Destek Personeli)")
    role_type = models.CharField(max_length=50, choices=ROLE_CHOICES, default='nurse', verbose_name="Personel Rolü")
    assigned_doctor = models.CharField(max_length=150, blank=True, default="", verbose_name="Bağlı Olduğu Hekim / Birim")
    duties = models.TextField(blank=True, default="", verbose_name="Görev ve Sorumlulukları")
    slug = models.SlugField(max_length=150, unique=True, blank=True)
    order = models.IntegerField(default=0, verbose_name="Sıralama")
    is_active = models.BooleanField(default=True, verbose_name="Aktif mi?")

    class Meta:
        verbose_name = "Aile Sağlığı Çalışanı / Personel"
        verbose_name_plural = "Sağlık Çalışanlarımız ve Personel"
        ordering = ['order', 'name']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name.replace('ı', 'i').replace('İ', 'i'))
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.title} {self.name}"


class MobileHealthService(models.Model):
    village_name = models.CharField(max_length=100, verbose_name="Köy / Mahalle Adı")
    doctor_name = models.CharField(max_length=150, verbose_name="Sorumlu Aile Hekimi")
    days_and_hours = models.CharField(max_length=200, verbose_name="Ziyaret Gün ve Saatleri")
    service_location = models.CharField(max_length=200, verbose_name="Hizmet Verilen Yer (örn. Köy Sağlık Evi)")
    services = models.TextField(verbose_name="Verilen Sağlık Hizmetleri (Muayene, Aşı, Reçete, Kan Alımı)")
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Gezici Sağlık Hizmeti"
        verbose_name_plural = "Gezici Sağlık Hizmetleri"
        ordering = ['order']

    def __str__(self):
        return f"{self.village_name} ({self.doctor_name})"


class Announcement(models.Model):
    CATEGORY_CHOICES = (
        ('asm', 'Binkılıç ASM Duyurusu'),
        ('ministry', 'T.C. Sağlık Bakanlığı Haberi'),
        ('campaign', 'Aşı / Tarama Kampanyası'),
    )
    title = models.CharField(max_length=255, verbose_name="Duyuru Başlığı")
    summary = models.TextField(blank=True, default="", verbose_name="Kısa Özet")
    content = models.TextField(verbose_name="Detaylı İçerik")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='asm', verbose_name="Kategori")
    image_url = models.CharField(max_length=255, blank=True, default="", verbose_name="Görsel Yolu")
    external_link = models.URLField(blank=True, null=True, verbose_name="Dış Haber Bağlantısı")
    published_date = models.DateField(auto_now_add=True, verbose_name="Yayın Tarihi")
    is_featured = models.BooleanField(default=False, verbose_name="Öne Çıkarılsın mı?")
    is_active = models.BooleanField(default=True, verbose_name="Aktif mi?")

    class Meta:
        verbose_name = "Duyuru ve Haber"
        verbose_name_plural = "Duyurular ve Haberler"
        ordering = ['-published_date', '-id']

    def __str__(self):
        return self.title


class Service(models.Model):
    title = models.CharField(max_length=150, verbose_name="Hizmet Adı")
    description = models.TextField(verbose_name="Hizmet Açıklaması")
    icon = models.CharField(max_length=50, default="Activity", verbose_name="İkon Adı")
    standard_duration = models.CharField(max_length=50, default="15 Dakika", verbose_name="Standart Hizmet Süresi")
    category = models.CharField(max_length=100, default="Genel", verbose_name="Kategori")
    order = models.IntegerField(default=0, verbose_name="Sıralama")

    class Meta:
        verbose_name = "Sağlık Hizmeti"
        verbose_name_plural = "Sağlık Hizmetlerimiz"
        ordering = ['order']

    def __str__(self):
        return self.title


class HealthGuide(models.Model):
    CATEGORY_CHOICES = (
        ('asm_guide', 'ASM Rehberi'),
        ('health_info', 'Sağlık Bilgilendirme'),
        ('pregnancy', 'Gebelik Dönemi'),
        ('newborn', 'Yenidoğan Rehberi'),
    )
    title = models.CharField(max_length=200, verbose_name="Rehber Başlığı")
    slug = models.SlugField(max_length=200, unique=True)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='asm_guide', verbose_name="Kategori")
    summary = models.TextField(verbose_name="Özet Bilgi")
    content = models.TextField(verbose_name="Tam Makale / Kılavuz Metni")
    icon = models.CharField(max_length=50, default="BookOpen", verbose_name="İkon")
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Sağlık / ASM Rehberi"
        verbose_name_plural = "Sağlık ve ASM Rehberleri"
        ordering = ['order']

    def __str__(self):
        return self.title


class GalleryItem(models.Model):
    title = models.CharField(max_length=150, verbose_name="Görsel Başlığı")
    category = models.CharField(max_length=50, default="Merkezimiz", verbose_name="Kategori")
    image_url = models.CharField(max_length=255, verbose_name="Görsel Yolu")
    order = models.IntegerField(default=0)

    class Meta:
        verbose_name = "Foto Galeri Ögesi"
        verbose_name_plural = "Foto Galeri"
        ordering = ['order']

    def __str__(self):
        return self.title


class DocumentFile(models.Model):
    CATEGORY_CHOICES = (
        ('talimatlar', 'ASM Talimatları'),
        ('ilk_yardim', 'İlk Yardım Kılavuzları'),
        ('sigara', 'Sigaranın Zararları & Bırakma'),
        ('faydali', 'Faydalı Dosyalar ve Formlar'),
    )
    title = models.CharField(max_length=200, verbose_name="Dosya Başlığı")
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='faydali', verbose_name="Kategori")
    description = models.TextField(blank=True, default="", verbose_name="Açıklama")
    file_path = models.CharField(max_length=255, verbose_name="Dosya Yolu (PDF / Doküman)")
    file_size = models.CharField(max_length=50, default="PDF", verbose_name="Dosya Türü / Boyutu")

    class Meta:
        verbose_name = "İndirilebilir Doküman"
        verbose_name_plural = "İndirilebilir Dokümanlar"

    def __str__(self):
        return self.title


class PatientNotification(models.Model):
    NOTIFICATION_TYPES = (
        ('gebe', 'Gebe Bildirimi'),
        ('bebek', 'Bebek / Çocuk Bildirimi'),
        ('engelli', 'Engelli Hasta Bildirimi'),
        ('obezite', 'Obezite İzlem Bildirimi'),
        ('soru', 'Doktora Soru / Danışma'),
        ('genel', 'Genel İletişim / İstek / Şikayet'),
    )
    notification_type = models.CharField(max_length=50, choices=NOTIFICATION_TYPES, default='genel', verbose_name="Bildirim Türü")
    full_name = models.CharField(max_length=150, verbose_name="Adı Soyadı")
    tc_no = models.CharField(max_length=11, blank=True, default="", verbose_name="T.C. Kimlik No (Opsiyonel)")
    phone = models.CharField(max_length=50, blank=True, default="", verbose_name="Telefon Numarası (Opsiyonel)")
    email = models.EmailField(blank=True, default="", verbose_name="E-Posta Adresi")
    target_doctor = models.CharField(max_length=150, blank=True, default="Fark Etmez", verbose_name="İlgili Hekim")
    subject = models.CharField(max_length=200, blank=True, default="", verbose_name="Konu")
    message = models.TextField(verbose_name="Mesaj / Bildirim Detayı")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Gönderilme Tarihi")
    is_reviewed = models.BooleanField(default=False, verbose_name="İncelendi mi?")

    class Meta:
        verbose_name = "Hasta Bildirimi & İletişim Formu"
        verbose_name_plural = "Hasta Bildirimleri ve İletişim Formları"
        ordering = ['-created_at']

    def __str__(self):
        return f"[{self.get_notification_type_display()}] {self.full_name} - {self.subject}"
