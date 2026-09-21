from django.contrib import admin
from django.utils.html import format_html
from .models import (
    ASMInfo, Doctor, Staff, MobileHealthService,
    Announcement, Service, HealthGuide, GalleryItem,
    DocumentFile, PatientNotification
)

# Admin Site Header & Titles Customization
admin.site.site_header = "Binkılıç Aile Sağlığı Merkezi Yönetim Paneli"
admin.site.site_title = "Binkılıç ASM Doktor & Personel Paneli"
admin.site.index_title = "ASM Sağlık Yönetim ve İletişim Portalı"

@admin.register(ASMInfo)
class ASMInfoAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone', 'whatsapp', 'email', 'district', 'city')
    fieldsets = (
        ('Kurum Kimlik Bilgileri', {
            'fields': ('name', 'city', 'district', 'town', 'address', 'latitude', 'longitude')
        }),
        ('İletişim Kanalları', {
            'fields': ('phone', 'whatsapp', 'email')
        }),
        ('Mesai Saatleri & Görsel', {
            'fields': ('working_hours_weekday', 'flexible_hours', 'building_image')
        }),
    )

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('unit_no', 'title', 'name', 'room_no', 'mobile_villages', 'is_active', 'order')
    list_editable = ('is_active', 'order')
    search_fields = ('name', 'unit_no', 'mobile_villages')
    fieldsets = (
        ('Hekim Bilgileri', {
            'fields': ('title', 'name', 'slug', 'unit_no', 'room_no', 'avatar_color', 'is_active', 'order')
        }),
        ('Gezici Hizmet & Mesai Çizelgesi', {
            'fields': ('mobile_villages', 'schedule', 'bio')
        }),
    )
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ('title', 'name', 'role_type', 'assigned_doctor', 'is_active', 'order')
    list_filter = ('role_type', 'is_active')
    list_editable = ('is_active', 'order')
    search_fields = ('name', 'title', 'assigned_doctor')
    fieldsets = (
        ('Personel Bilgileri', {
            'fields': ('title', 'name', 'role_type', 'assigned_doctor', 'is_active', 'order')
        }),
        ('Görev Tanımı', {
            'fields': ('duties',)
        }),
    )

@admin.register(MobileHealthService)
class MobileHealthServiceAdmin(admin.ModelAdmin):
    list_display = ('village_name', 'doctor_name', 'days_and_hours', 'service_location', 'order')
    list_editable = ('order',)
    search_fields = ('village_name', 'doctor_name')
    fieldsets = (
        ('Gezici Köy Bilgisi', {
            'fields': ('village_name', 'doctor_name', 'days_and_hours', 'service_location', 'order')
        }),
        ('Açıklama & Hizmetler', {
            'fields': ('description',)
        }),
    )

@admin.register(Announcement)
class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'published_date', 'is_featured', 'is_active')
    list_filter = ('category', 'is_featured', 'is_active')
    list_editable = ('is_featured', 'is_active')
    search_fields = ('title', 'content')
    date_hierarchy = 'published_date'
    fieldsets = (
        ('Duyuru Başlığı ve Kategori', {
            'fields': ('title', 'category', 'is_featured', 'is_active')
        }),
        ('İçerik & Bağlantılar', {
            'fields': ('summary', 'content', 'external_link')
        }),
    )

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'standard_duration', 'category', 'order')
    list_editable = ('order',)
    search_fields = ('title', 'description')

@admin.register(HealthGuide)
class HealthGuideAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'order')
    list_filter = ('category',)
    list_editable = ('order',)
    search_fields = ('title', 'summary', 'content')
    prepopulated_fields = {'slug': ('title',)}

@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'order')
    list_editable = ('order',)
    list_filter = ('category',)

@admin.register(DocumentFile)
class DocumentFileAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'file_size')
    list_filter = ('category',)
    search_fields = ('title', 'description')

@admin.register(PatientNotification)
class PatientNotificationAdmin(admin.ModelAdmin):
    list_display = ('durum_gosterge', 'created_at', 'notification_type_label', 'full_name', 'phone', 'target_doctor', 'is_reviewed')
    list_filter = ('is_reviewed', 'notification_type', 'target_doctor', 'created_at')
    list_editable = ('is_reviewed',)
    search_fields = ('full_name', 'phone', 'tc_no', 'subject', 'message')
    readonly_fields = ('created_at',)
    date_hierarchy = 'created_at'

    fieldsets = (
        ('Başvuru / Bildirim Durumu', {
            'fields': ('is_reviewed', 'created_at')
        }),
        ('Hasta / Başvuran Bilgileri', {
            'fields': ('full_name', 'phone', 'email', 'tc_no')
        }),
        ('Bildirim Türü ve Muhatap Hekim', {
            'fields': ('notification_type', 'target_doctor', 'subject')
        }),
        ('Mesaj / Bildirim İçeriği', {
            'fields': ('message',)
        }),
    )

    actions = ['mark_as_reviewed', 'mark_as_unreviewed']

    @admin.display(description='Durum')
    def durum_gosterge(self, obj):
        if obj.is_reviewed:
            return format_html('<span style="color: #16a34a; font-weight: bold;">✓ İncelendi</span>')
        return format_html('<span style="color: #dc2626; font-weight: bold; background: #fee2e2; padding: 2px 6px; borderRadius: 4px;">● YENİ BEKLEYEN</span>')

    @admin.display(description='Bildirim Türü')
    def notification_type_label(self, obj):
        type_labels = {
            'soru': 'Doktora Soru',
            'gebe': 'Gebe Bildirimi',
            'bebek': 'Bebek/Çocuk Bildirimi',
            'engelli': 'Engelli/Yatağa Bağımlı',
            'obezite': 'Obezite İzlem',
            'genel': 'Genel Bildirim'
        }
        return type_labels.get(obj.notification_type, obj.notification_type)

    @admin.action(description="Seçili başvuruları 'İncelendi' olarak işaretle")
    def mark_as_reviewed(self, request, queryset):
        queryset.update(is_reviewed=True)
        self.message_user(request, f"{queryset.count()} adet bildirim 'İncelendi' olarak işaretlendi.")

    @admin.action(description="Seçili başvuruları 'Bekliyor (Yeni)' olarak işaretle")
    def mark_as_unreviewed(self, request, queryset):
        queryset.update(is_reviewed=False)
        self.message_user(request, f"{queryset.count()} adet bildirim 'Bekliyor' olarak işaretlendi.")
