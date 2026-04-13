# 🗺️ MapNote Clone

Harita üzerinde not oluşturup, yönetebileceğiniz bir web uygulaması. Leaflet kütüphanesi kullanarak OpenStreetMap entegrasyonu sağlanmıştır.

## 📋 Özellikler

- 🌍 **Interaktif Harita** - OpenStreetMap ile gerçek harita gösterimi
- 📍 **Not Oluştur** - Harita üzerinde tıklanılan konumda not ekle
- 🎯 **Konum Takibi** - Kullanıcının mevcut konumunu otomatik olarak haritada göster
- 🏠 **Not Kategorileri** - Ziyaret, Park Yeri, Ev, İş olmak üzere 4 farklı kategori
- 💾 **Yerel Depolama** - Notlar localStorage'da otomatik olarak kaydedilir
- 🗑️ **Not Silme** - Oluşturulan notları silebilme
- 🚀 **Hızlı Erişim** - Not başlığına tıklayarak o konuma yakınlaş

## 🛠️ Teknolojiler

- **HTML5** - Sayfa yapısı
- **CSS3** - Tasarım ve animasyonlar
- **JavaScript (ES6+)** - İşlevsellik
- **Leaflet.js** - Harita kütüphanesi
- **Bootstrap Icons** - İkonlar
- **LocalStorage API** - Veri saklama

## 🎬 Demo

![MapNote Clone Demo](./demo.gif)

> Yukarıdaki GIF'te uygulamanın temel özellikleri gösterilmektedir.

## 📁 Proje Yapısı

```
MapNote_Clone/
├── index.html           # Ana HTML dosyası
├── style.css            # CSS stilleri
├── js/
│   ├── main.js          # Ana uygulama mantığı
│   ├── helpers.js       # Yardımcı fonksiyonlar (icon, format vb.)
│   └── ui.js            # DOM elemanları ve harita ikonları
├── images/              # Harita ikonları
└── README.md
```

## 📋 Dosya Açıklamaları

### main.js
- Harita başlatma ve yapılandırma
- Not ekleme/silme işlemleri
- Form yönetimi
- LocalStorage ile veri senkronizasyonu
- `loadMap()` - Harita yükleme
- `renderNoteCards()` - Notları ekrana bas
- `renderMarker()` - Harita üzerinde marker göster
- `deleteNote()` - Not silme

### helpers.js
- `getNoteIcon()` - Kategori türüne göre ikon seçme
- `formatDate()` - Tarih formatlama (Türkçe)
- `getStatus()` - Kategori durumunu Türkçe metne çevirme

### ui.js
- DOM elemanlarının referansları
- Leaflet harita ikonları tanımlaması

## 🚀 Nasıl Kullanılır

### Gereksinimler
- Modern web tarayıcı (Chrome, Firefox, Safari, Edge)
- İnternet bağlantısı (harita verileri için)

### Kurulum

1. **Projeyi klonlayın:**
```bash
git clone <repository-url>
cd MapNote_Clone
```

2. **Local sunucu başlatın:**

**Python 3 ile:**
```bash
python -m http.server 8000
```

**Node.js ile:**
```bash
npx http-server
```

**VS Code Live Server eklentisi ile:**
- `index.html` → Sağ tıkla → "Open with Live Server"

3. **Tarayıcıda açın:**
```
http://localhost:8000
```

## 📖 Kullanım Adımları

1. **Harita yüklenir** - Mevcut konum otomatik olarak bulunur, haritada gösterilir
2. **Konuma tıklayın** - Harita üzerinde herhangi bir yere tıklayarak not ekle panelini aç
3. **Not detaylarını girin:**
   - 📝 Başlık
   - 📅 Tarih
   - 🏷️ Kategori (Ziyaret/Park Yeri/Ev/İş)
4. **Ekle düğmesine tıklayın** - Not kaydedilir ve harita üzerinde marker oluşturulur
5. **Notları yönetin:**
   - ✈️ Uçak ikonuna tıklayarak o konuma ilerişini göster
   - 🗑️ Çöp kutusu ikonuna tıklayarak notu silin

## 💾 Veri Depolama

Tüm notlar tarayıcının `localStorage` özelliğinde depolanır:
- **Anahtar:** `notes`
- **Format:** JSON dizisi
- **Kapasität:** ~5-10MB (tarayıcıya göre değişir)

Tarayıcıyı temizlediğinizde veya cache silindiğinde veriler kaybolabilir.

## 🎨 Tasarım Özellikleri

- 📱 Responsive dizayn
- 🌙 Modern dark tema
- ⚡ Smooth animasyonlar
- 🎯 Kullanıcı dostu arayüz

## 🐛 Bilinen Sorunlar

- Coğrafi konum izni verilmezse varsayılan konum (İstanbul) kullanılır
- Bazı tarayıcılarda HTTPS gerekebilir (localhost hariç)

## 📝 Lisans

Bu proje eğitim amaçlıdır.

## 👨‍💻 Geliştirici

Veysel Demirel

---

**Son Güncelleme:** April 2026
