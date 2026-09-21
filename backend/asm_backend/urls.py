from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include('core.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

admin.site.site_header = "Binkılıç Aile Sağlığı Merkezi Yönetim Paneli"
admin.site.site_title = "Binkılıç ASM Admin"
admin.site.index_title = "Merkez Yönetimi & Bildirim Takip Sistemi"
