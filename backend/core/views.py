from rest_framework import viewsets, status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.throttling import AnonRateThrottle
from .models import (
    ASMInfo, Doctor, Staff, MobileHealthService,
    Announcement, Service, HealthGuide, GalleryItem,
    DocumentFile, PatientNotification
)
from .serializers import (
    ASMInfoSerializer, DoctorSerializer, StaffSerializer,
    MobileHealthServiceSerializer, AnnouncementSerializer,
    ServiceSerializer, HealthGuideSerializer, GalleryItemSerializer,
    DocumentFileSerializer, PatientNotificationSerializer
)

class ContactFormRateThrottle(AnonRateThrottle):
    rate = '15/hour'

class ASMInfoView(APIView):
    def get(self, request):
        info = ASMInfo.objects.first()
        if not info:
            info = ASMInfo.objects.create()
        serializer = ASMInfoSerializer(info)
        return Response(serializer.data)

class DoctorViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Doctor.objects.filter(is_active=True)
    serializer_class = DoctorSerializer
    lookup_field = 'slug'

class StaffViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Staff.objects.filter(is_active=True)
    serializer_class = StaffSerializer
    lookup_field = 'slug'

class MobileHealthServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MobileHealthService.objects.all()
    serializer_class = MobileHealthServiceSerializer

class AnnouncementViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Announcement.objects.filter(is_active=True)
    serializer_class = AnnouncementSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class HealthGuideViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = HealthGuide.objects.all()
    serializer_class = HealthGuideSerializer
    lookup_field = 'slug'

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs

class GalleryItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer

class DocumentFileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = DocumentFile.objects.all()
    serializer_class = DocumentFileSerializer

class PatientNotificationCreateView(generics.CreateAPIView):
    queryset = PatientNotification.objects.all()
    serializer_class = PatientNotificationSerializer
    throttle_classes = [ContactFormRateThrottle]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({
                "status": "success",
                "message": "Bildiriminiz ve mesajınız başarıyla Aile Sağlığı Merkezimize iletildi. En kısa sürede değerlendirilecektir."
            }, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

