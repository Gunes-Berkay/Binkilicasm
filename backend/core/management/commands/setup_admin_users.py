from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Binkılıç ASM Hekim ve Yönetici Kullanıcı Hesaplarını Oluşturur / Günceller'

    def handle(self, *args, **options):
        accounts = [
            {
                'username': 'admin',
                'email': 'binkilicasm@gmail.com',
                'first_name': 'Yönetici',
                'last_name': 'Admin',
                'is_superuser': True,
                'is_staff': True,
                'password': 'Binkilic2026!'
            },
            {
                'username': 'doktor',
                'email': 'binkilicasm@gmail.com',
                'first_name': 'Binkılıç',
                'last_name': 'Doktor & Sağlık Ekibi',
                'is_superuser': True,
                'is_staff': True,
                'password': 'Binkilic2026!'
            },
            {
                'username': 'dr_emre',
                'email': 'binkilicasm@gmail.com',
                'first_name': 'Dr. Emre',
                'last_name': 'İleri',
                'is_superuser': True,
                'is_staff': True,
                'password': 'Binkilic2026!'
            },
            {
                'username': 'dr_menekse',
                'email': 'binkilicasm@gmail.com',
                'first_name': 'Dr. Menekşe',
                'last_name': 'Yılmaz',
                'is_superuser': True,
                'is_staff': True,
                'password': 'Binkilic2026!'
            }
        ]

        for acc in accounts:
            user, created = User.objects.get_or_create(username=acc['username'])
            user.email = acc['email']
            user.first_name = acc['first_name']
            user.last_name = acc['last_name']
            user.is_superuser = acc['is_superuser']
            user.is_staff = acc['is_staff']
            user.set_password(acc['password'])
            user.save()
            action_text = "Olusturuldu" if created else "Guncellendi"
            self.stdout.write(self.style.SUCCESS(f"[OK] Kullanici: {acc['username']} ({action_text})"))
