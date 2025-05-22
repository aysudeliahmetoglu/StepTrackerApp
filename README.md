# StepTrackerApp

Adım sayar ve kalori hesaplayıcı özelliklerine sahip bir mobil uygulama. Kullanıcının attığı adımları, yakılan kaloriyi takip eder ve profil bilgilerini yönetmesine imkân tanır. Expo Router ile modern bir navigasyon sistemi kullanılmıştır.

## ✨ Özellikler

- 👣 Günlük adım sayısı takibi
- 🔥 Yakılan kalorinin hesaplanması
- 📈 İstatistiksel grafik gösterimleri
- 🧑 Profil oluşturma ve düzenleme
- 🔐 Kullanıcı girişi ve kaydı
- ⚛️ React Native + Expo Router mimarisi

## 📂 Proje Yapısı

```bash
app/
│
├── _layout.tsx              # Uygulama ana düzeni (Slot)
├── index.tsx                # Giriş yönlendirme veya welcome
├── login.tsx                # Kullanıcı girişi
├── register.tsx             # Yeni kullanıcı kaydı
│
├── (tabs)/                  # Sekmeli (tab) gezinti
│   ├── _layout.tsx          # Tabs düzeni
│   ├── home.tsx             # Adım sayar ekranı
│   ├── stats.tsx            # İstatistik ekranı
│   ├── profile.tsx          # Kullanıcı profili
│   ├── calories.tsx         # Kalori hesaplayıcı
│
├── components/
│   └── StepCounter.tsx      # Adım sayacı bileşeni
│
├── utils/
│   └── calculateCalories.ts # Kalori hesaplama yardımcı fonksiyonu

