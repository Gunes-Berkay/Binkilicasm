from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ASMInfoView, DoctorViewSet, StaffViewSet, MobileHealthServiceViewSet,
    AnnouncementViewSet, ServiceViewSet, HealthGuideViewSet, GalleryItemViewSet,
    DocumentFileViewSet, PatientNotificationCreateView
)

router = DefaultRouter()
router.register(r'doctors', DoctorViewSet, basename='doctor')
router.register(r'staff', StaffViewSet, basename='staff')
router.register(r'mobile-services', MobileHealthServiceViewSet, basename='mobile-service')
router.register(r'announcements', AnnouncementViewSet, basename='announcement')
router.register(r'services', ServiceViewSet, basename='service')
router.register(r'guides', HealthGuideViewSet, basename='guide')
router.register(r'gallery', GalleryItemViewSet, basename='gallery')
router.register(r'documents', DocumentFileViewSet, basename='document')

urlpatterns = [
    path('info/', ASMInfoView.as_view(), name='asm-info'),
    path('contact/', PatientNotificationCreateView.as_view(), name='contact-notification'),
    path('', include(router.urls)),
]
