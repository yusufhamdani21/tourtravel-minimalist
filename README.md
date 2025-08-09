# **Travel Tour Landing Page** ✈️

### **Project Overview**  
Sebuah landing page untuk agen travel/tour yang menampilkan destinasi populer, paket perjalanan, dan fitur menarik. Dibangun dengan **HTML5, CSS3, dan JavaScript** untuk interaktivitas seperti carousel, responsive navigation, dan animasi.

---

## **📌 Fitur Utama**  
✅ **Responsive Design** – Tampilan optimal di desktop, tablet, & mobile  
✅ **Interactive Carousel** – Slide destinasi dengan auto-play & swipe support  
✅ **Modern UI** – Animasi, shadow, dan gradient untuk pengalaman visual menarik  
✅ **Mobile-Friendly Navigation** – Navbar yang berubah menjadi hamburger menu di mobile  
✅ **Destination Tags** – Kategori destinasi dengan hover effect  
✅ **WhatsApp Float Button** – CTA langsung ke WhatsApp untuk pemesanan  

---

## **🛠️ Teknologi Digunakan**  
- **HTML5** – Struktur dasar website  
- **CSS3** – Styling dengan custom properties (variables)  
- **JavaScript** – Interaksi carousel, navbar mobile, dll.  
- **Flexbox & Grid** – Layout modern  
- **Media Queries** – Responsive breakpoints  

---

## **🚀 Cara Menjalankan Project**  
1. **Clone repo**  
   ```bash
   git clone https://git@github.com:yusufhamdani21/tourtravel-minimalist.git
   ```
2. **Buka file `index.html`** di browser favorit Anda.  

Atau **akses langsung** via GitHub Pages (jika di-deploy):  
🔗 [https://username.github.io/travel-tour-landing-page](https://username.github.io/travel-tour-landing-page)  

---

## **📂 Struktur File**  
```
📦 travel-tour-landing-page/
├── 📂 img/               # Gambar untuk carousel & assets
├── 📜 index.html         # Halaman utama
├── 📜 style.css          # Stylesheet utama
├── 📜 script.js          # JavaScript untuk interaksi
└── 📜 README.md          # Dokumentasi ini
```

---

## **🎨 Color Palette (CSS Variables)**  
```css
:root {
           --primary-color: #2F8E9C;
            --secondary-color: #2C3E50;
            --accent-color: #F0A70F;
            --text-dark: #1A202C;
            --text-light: #64748B;
            --bg-light: #F8FAFC;
            --bg-section: #F1F5F9;
            --white: #FFFFFF;
            --border-light: #E2E8F0;
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            --shadow-md: 0 10px 25px -3px rgba(0, 0, 0, 0.1);
            --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            --border-radius: 12px;
            --spacing-xs: 0.5rem;
            --spacing-sm: 1rem;
            --spacing-md: 1.5rem;
            --spacing-lg: 2rem;
            --spacing-xl: 3rem;
        }

        /* Dark Mode Variables */
        [data-theme="dark"] {
            --text-dark: #F7FAFC;
            --text-light: #A0AEC0;
            --bg-light: #1A202C;
            --bg-section: #2D3748;
            --white: #2D3748;
            --border-light: #4A5568;
            --shadow-sm: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
            --shadow-md: 0 10px 25px -3px rgba(0, 0, 0, 0.3);
            --shadow-lg: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
```

---

## **🔧 Komponen Penting**  
### **1. Hero Carousel (Auto-Slide + Touch Support)**  
```javascript
class HeroCarousel {
  constructor() {
    this.currentSlide = 0;
    this.slidesContainer = document.getElementById("carouselSlides");
    this.init();
  }
  // Method untuk next/prev slide, touch support, dll.
}
```

### **2. Mobile Navigation**  
```javascript
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

mobileMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
```

### **3. WhatsApp Floating Button**  
```html
<div class="whatsapp-float">
  <a href="https://wa.me/628123456789" class="whatsapp-button">
    <i class="fab fa-whatsapp"></i>
  </a>
  <span class="whatsapp-tooltip">Hubungi Kami!</span>
</div>
```

---

## **📱 Responsive Breakpoints**  
| Device          | Breakpoint  | Fitur Khusus                     |
|----------------|------------|----------------------------------|
| Mobile         | `≤ 768px`  | Hamburger menu, carousel swipe   |
| Tablet         | `769-1024px` | Adjusted padding & font sizes    |
| Desktop        | `≥ 1025px`  | Full navigation, hover effects   |

---

## **🔮 Fitur yang Akan Datang (TODO)**  
- [ ] Integrasi dengan API destinasi  
- [ ] Form booking langsung  
- [ ] Dark mode toggle  

---

## **📜 License**  
MIT © 2023 [Yusuf Hamdani]  

---

**✨ Happy Traveling!**  
Dibuat dengan ❤️ untuk para traveler.  

---

### **Preview Tampilan**  
![Travel Tour Landing Page Preview](img/preview.png)   

---

**💡 Tips:**  
- Gunakan **Google Fonts** untuk typography yang lebih menarik.  
- Optimasi gambar dengan **compression** untuk loading lebih cepat.  
- Deploy gratis via **GitHub Pages** atau **Netlify**.  

🚀 **Siap digunakan!**
