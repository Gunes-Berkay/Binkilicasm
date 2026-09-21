// WHO and Turkish Pediatric Growth Percentile Standards (0-36 months)

export const girlsPercentiles = [
  { month: 0, p3_weight: 2.4, p50_weight: 3.2, p97_weight: 4.2, p3_height: 45.4, p50_height: 49.1, p97_height: 52.9, p50_head: 33.9 },
  { month: 1, p3_weight: 3.2, p50_weight: 4.2, p97_weight: 5.5, p3_height: 49.8, p50_height: 53.7, p97_height: 57.6, p50_head: 36.5 },
  { month: 2, p3_weight: 3.9, p50_weight: 5.1, p97_weight: 6.6, p3_height: 53.0, p50_height: 57.1, p97_height: 61.1, p50_head: 38.3 },
  { month: 3, p3_weight: 4.5, p50_weight: 5.8, p97_weight: 7.5, p3_height: 55.6, p50_height: 59.8, p97_height: 64.0, p50_head: 39.5 },
  { month: 4, p3_weight: 5.0, p50_weight: 6.4, p97_weight: 8.2, p3_height: 57.8, p50_height: 62.1, p97_height: 66.4, p50_head: 40.6 },
  { month: 5, p3_weight: 5.4, p50_weight: 6.9, p97_weight: 8.8, p3_height: 59.6, p50_height: 64.0, p97_height: 68.5, p50_head: 41.5 },
  { month: 6, p3_weight: 5.7, p50_weight: 7.3, p97_weight: 9.3, p3_height: 61.2, p50_height: 65.7, p97_height: 70.3, p50_head: 42.2 },
  { month: 9, p3_weight: 6.5, p50_weight: 8.2, p97_weight: 10.5, p3_height: 65.3, p50_height: 70.1, p97_height: 75.0, p50_head: 43.8 },
  { month: 12, p3_weight: 7.0, p50_weight: 8.9, p97_weight: 11.5, p3_height: 68.9, p50_height: 74.0, p97_height: 79.2, p50_head: 44.9 },
  { month: 18, p3_weight: 8.1, p50_weight: 10.2, p97_weight: 13.2, p3_height: 74.9, p50_height: 80.7, p97_height: 86.5, p50_head: 46.2 },
  { month: 24, p3_weight: 9.0, p50_weight: 11.5, p97_weight: 14.8, p3_height: 80.0, p50_height: 86.4, p97_height: 92.9, p50_head: 47.2 },
  { month: 36, p3_weight: 10.8, p50_weight: 13.9, p97_weight: 18.1, p3_height: 88.7, p50_height: 95.1, p97_height: 102.7, p50_head: 48.5 }
];

export const boysPercentiles = [
  { month: 0, p3_weight: 2.5, p50_weight: 3.3, p97_weight: 4.4, p3_height: 46.1, p50_height: 49.9, p97_height: 53.7, p50_head: 34.5 },
  { month: 1, p3_weight: 3.4, p50_weight: 4.5, p97_weight: 5.8, p3_height: 50.8, p50_height: 54.7, p97_height: 58.6, p50_head: 37.3 },
  { month: 2, p3_weight: 4.3, p50_weight: 5.6, p97_weight: 7.1, p3_height: 54.4, p50_height: 58.4, p97_height: 62.4, p50_head: 39.1 },
  { month: 3, p3_weight: 5.0, p50_weight: 6.4, p97_weight: 8.0, p3_height: 57.3, p50_height: 61.4, p97_height: 65.5, p50_head: 40.5 },
  { month: 4, p3_weight: 5.6, p50_weight: 7.0, p97_weight: 8.7, p3_height: 59.7, p50_height: 63.9, p97_height: 68.0, p50_head: 41.6 },
  { month: 5, p3_weight: 6.0, p50_weight: 7.5, p97_weight: 9.3, p3_height: 61.7, p50_height: 65.9, p97_height: 70.1, p50_head: 42.6 },
  { month: 6, p3_weight: 6.4, p50_weight: 7.9, p97_weight: 9.8, p3_height: 63.3, p50_height: 67.6, p97_height: 71.9, p50_head: 43.3 },
  { month: 9, p3_weight: 7.1, p50_weight: 8.9, p97_weight: 11.0, p3_height: 67.5, p50_height: 72.0, p97_height: 76.5, p50_head: 45.0 },
  { month: 12, p3_weight: 7.7, p50_weight: 9.6, p97_weight: 12.0, p3_height: 71.0, p50_height: 75.7, p97_height: 80.5, p50_head: 46.1 },
  { month: 18, p3_weight: 8.8, p50_weight: 10.9, p97_weight: 13.7, p3_height: 76.9, p50_height: 82.3, p97_height: 87.7, p50_head: 47.4 },
  { month: 24, p3_weight: 9.7, p50_weight: 12.2, p97_weight: 15.3, p3_height: 81.7, p50_height: 87.8, p97_height: 93.9, p50_head: 48.3 },
  { month: 36, p3_weight: 11.3, p50_weight: 14.3, p97_weight: 18.3, p3_height: 88.7, p50_height: 96.1, p97_height: 103.5, p50_head: 49.5 }
];

export const activitiesCalorieData = [
  { id: 'walking_slow', name: 'Yavaş Yürüyüş (3 km/saat)', met: 2.5 },
  { id: 'walking_moderate', name: 'Tempolu Yürüyüş (5 km/saat)', met: 3.5 },
  { id: 'jogging', name: 'Hafif Koşu (Jogging)', met: 7.0 },
  { id: 'running', name: 'Koşu (9 km/saat)', met: 9.0 },
  { id: 'cycling_leisure', name: 'Bisiklet Sürme (Hafif)', met: 4.0 },
  { id: 'cycling_fast', name: 'Bisiklet Sürme (Hızlı)', met: 8.0 },
  { id: 'swimming', name: 'Yüzme (Serbest)', met: 6.0 },
  { id: 'housework', name: 'Ev Temizliği & İşleri', met: 3.0 },
  { id: 'gardening', name: 'Bahçe İşleri / Çapa', met: 4.5 },
  { id: 'stretching', name: 'Esneme / Yoga', met: 2.5 },
  { id: 'football', name: 'Futbol / Basketbol', met: 8.0 },
  { id: 'stairs', name: 'Merdiven Çıkma', met: 8.5 }
];
