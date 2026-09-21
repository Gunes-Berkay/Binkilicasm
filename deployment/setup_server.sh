#!/usr/bin/env bash
# ==============================================================================
# BİNKILIÇ AİLE SAĞLIĞI MERKEZİ - 1-CLICK UBUNTU SERVER KURULUM & HARDENING SCRIPTI
# ==============================================================================

set -e

echo "=== 1. Sistem Paketleri Güncelleniyor ==="
sudo apt-get update && sudo apt-get upgrade -y

echo "=== 2. Gerekli Bağımlılıklar Kuruluyor (Python, Nginx, UFW, Git, Node.js, Certbot, Fail2ban) ==="
sudo apt-get install -y python3 python3-pip python3-venv nginx ufw git curl certbot python3-certbot-nginx fail2ban libpq-dev libjpeg-dev zlib1g-dev

# Node.js 20 LTS Kurulumu
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

echo "=== 3. Güvenlik Duvarı (UFW) ve Fail2Ban Yapılandırılıyor ==="
# SSH, HTTP, HTTPS portları hariç tüm dış bağlantıları kapat
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw --force enable

# Fail2ban (Brute-Force SSH Saldırı Engelleyici) Başlatılıyor
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

echo "=== 4. Proje Dizin İzinleri Ayarlanıyor ==="
sudo mkdir -p /var/www/binkilicasm
sudo chown -R $USER:www-data /var/www/binkilicasm

echo "=== KURULUM TAMAMLANDI ==="
echo "Şimdi projenizi /var/www/binkilicasm dizinine yükleyip deployment rehberindeki adımları izleyebilirsiniz."
