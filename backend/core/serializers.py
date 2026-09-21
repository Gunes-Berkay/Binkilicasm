from rest_framework import serializers
from django.utils.html import strip_tags
import re
from .models import (
    ASMInfo, Doctor, Staff, MobileHealthService,
    Announcement, Service, HealthGuide, GalleryItem,
    DocumentFile, PatientNotification
)

class ASMInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ASMInfo
        fields = '__all__'

class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doctor
        fields = '__all__'

class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'

class MobileHealthServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = MobileHealthService
        fields = '__all__'

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class HealthGuideSerializer(serializers.ModelSerializer):
    class Meta:
        model = HealthGuide
        fields = '__all__'

class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = '__all__'

class DocumentFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = DocumentFile
        fields = '__all__'

class PatientNotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientNotification
        fields = '__all__'

    def validate_full_name(self, value):
        cleaned = strip_tags(value).strip()
        if len(cleaned) < 2:
            raise serializers.ValidationError("Lütfen geçerli bir ad soyad giriniz.")
        return cleaned

    def validate_subject(self, value):
        if value:
            return strip_tags(value).strip()
        return value

    def validate_message(self, value):
        cleaned = strip_tags(value).strip()
        if len(cleaned) < 5:
            raise serializers.ValidationError("Mesajınız en az 5 karakter olmalıdır.")
        return cleaned

    def validate_phone(self, value):
        if value:
            cleaned = strip_tags(value).strip()
            if not re.match(r'^[0-9+\s\-()]{7,20}$', cleaned):
                raise serializers.ValidationError("Lütfen geçerli bir telefon numarası giriniz.")
            return cleaned
        return value

