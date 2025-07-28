// Translation data
        const translations = {
            en: {
                nav: {
                    destinations: "Destinations",
                    services: "Services", 
                    gallery: "Gallery",
                    about: "About",
                    contact: "Contact",
                    book: "Book Now →"
                },
                hero: {
                    title: "Travel Like You",
                    titleAccent: "Mean It",
                    subtitle: "Discover breathtaking destinations, create unforgettable memories, and embark on adventures that will change your perspective forever.",
                    explore: "Explore Destinations",
                    learn: "Learn More",
                    cards: {
                        mountain: "Mountain Adventure",
                        beach: "Beach Paradise",
                        city: "City Explorer"
                    }
                },
                features: {
                    title: "Why Choose TREVO?",
                    subtitle: "We provide exceptional travel experiences with personalized service and attention to detail",
                    planning: {
                        title: "Expert Planning",
                        desc: "Our travel experts craft personalized itineraries tailored to your preferences and budget."
                    },
                    network: {
                        title: "Global Network", 
                        desc: "Access to exclusive destinations and local experiences around the world."
                    },
                    support: {
                        title: "24/7 Support",
                        desc: "Round-the-clock assistance to ensure your journey is smooth and worry-free."
                    }
                },
                destinations: {
                    title: "Popular Destinations",
                    subtitle: "Handpicked destinations for unforgettable experiences",
                    swiss: {
                        title: "Swiss Alps Adventure",
                        location: "📍 Switzerland",
                        desc: "Experience breathtaking mountain views and thrilling outdoor activities in the heart of the Alps.",
                        price: "From $2,499"
                    },
                    maldives: {
                        title: "Maldives Paradise", 
                        location: "📍 Maldives",
                        desc: "Relax in overwater bungalows and dive into crystal-clear waters of the Indian Ocean.",
                        price: "From $3,299"
                    },
                    rome: {
                        title: "Ancient Rome Explorer",
                        location: "📍 Italy", 
                        desc: "Walk through history and discover the timeless beauty of the Eternal City.",
                        price: "From $1,899"
                    }
                },
                gallery: {
                    title: "Travel Gallery",
                    subtitle: "Moments captured from our travelers' incredible journeys",
                    adventure: "🧗‍♂️ Adventure Sports",
                    sunrise: "🌅 Sunrise Views",
                    camping: "🏕️ Camping",
                    ocean: "⛵ Ocean Safari",
                    cultural: "🎨 Cultural Tours"
                },
                footer: {
                    description: "Your trusted travel partner for creating unforgettable adventures and meaningful connections around the world.",
                    quickLinks: "Quick Links",
                    services: "Services", 
                    contact: "Contact Info",
                    customTours: "Custom Tours",
                    groupTravel: "Group Travel",
                    adventurePackages: "Adventure Packages", 
                    luxuryTravel: "Luxury Travel",
                    travelInsurance: "Travel Insurance",
                    copyright: "© 2025 TREVO. All rights reserved. | Privacy Policy | Terms of Service"
                }
            },
            id: {
                nav: {
                    destinations: "Destinasi",
                    services: "Layanan",
                    gallery: "Galeri", 
                    about: "Tentang",
                    contact: "Kontak",
                    book: "Pesan Sekarang →"
                },
                hero: {
                    title: "Berwisata Seperti Yang",
                    titleAccent: "Anda Inginkan", 
                    subtitle: "Temukan destinasi menakjubkan, ciptakan kenangan tak terlupakan, dan mulai petualangan yang akan mengubah perspektif Anda selamanya.",
                    explore: "Jelajahi Destinasi",
                    learn: "Pelajari Lebih Lanjut",
                    cards: {
                        mountain: "Petualangan Gunung",
                        beach: "Surga Pantai",
                        city: "Penjelajah Kota"
                    }
                },
                features: {
                    title: "Mengapa Memilih TREVO?",
                    subtitle: "Kami menyediakan pengalaman perjalanan luar biasa dengan layanan personal dan perhatian terhadap detail",
                    planning: {
                        title: "Perencanaan Ahli",
                        desc: "Para ahli perjalanan kami menyusun itinerary personal yang disesuaikan dengan preferensi dan anggaran Anda."
                    },
                    network: {
                        title: "Jaringan Global",
                        desc: "Akses ke destinasi eksklusif dan pengalaman lokal di seluruh dunia."
                    },
                    support: {
                        title: "Dukungan 24/7",
                        desc: "Bantuan sepanjang waktu untuk memastikan perjalanan Anda lancar dan bebas khawatir."
                    }
                },
                destinations: {
                    title: "Destinasi Populer", 
                    subtitle: "Destinasi pilihan untuk pengalaman tak terlupakan",
                    swiss: {
                        title: "Petualangan Alps Swiss",
                        location: "📍 Swiss",
                        desc: "Rasakan pemandangan gunung yang menakjubkan dan aktivitas luar ruang yang mendebarkan di jantung Alps.",
                        price: "Mulai dari $2,499"
                    },
                    maldives: {
                        title: "Surga Maldives",
                        location: "📍 Maldives", 
                        desc: "Bersantai di bungalo di atas air dan menyelam di perairan jernih Samudra Hindia.",
                        price: "Mulai dari $3,299"
                    },
                    rome: {
                        title: "Penjelajah Roma Kuno",
                        location: "📍 Italia",
                        desc: "Berjalan melalui sejarah dan temukan keindahan abadi Kota Abadi.", 
                        price: "Mulai dari $1,899"
                    }
                },
                gallery: {
                    title: "Galeri Perjalanan",
                    subtitle: "Momen yang diabadikan dari perjalanan luar biasa para wisatawan kami",
                    adventure: "🧗‍♂️ Olahraga Petualangan",
                    sunrise: "🌅 Pemandangan Matahari Terbit",
                    camping: "🏕️ Berkemah",
                    ocean: "⛵ Safari Laut",
                    cultural: "🎨 Tur Budaya"
                },
                footer: {
                    description: "Partner perjalanan terpercaya Anda untuk menciptakan petualangan tak terlupakan dan koneksi bermakna di seluruh dunia.",
                    quickLinks: "Tautan Cepat",
                    services: "Layanan",
                    contact: "Info Kontak", 
                    customTours: "Tur Kustom",
                    groupTravel: "Perjalanan Grup",
                    adventurePackages: "Paket Petualangan",
                    luxuryTravel: "Perjalanan Mewah", 
                    travelInsurance: "Asuransi Perjalanan",
                    copyright: "© 2025 TREVO. Semua hak dilindungi. | Kebijakan Privasi | Syarat Layanan"
                }
            }
        };

        // Theme management
        class ThemeManager {
            constructor() {
                this.theme = this.getStoredTheme() || 'light';
                this.initTheme();
                this.initToggle();
            }

            getStoredTheme() {
                try {
                    return localStorage.getItem('trevo-theme');
                } catch (e) {
                    return null;
                }
            }

            setStoredTheme(theme) {
                try {
                    localStorage.setItem('trevo-theme', theme);
                } catch (e) {
                    console.warn('Unable to save theme preference');
                }
            }

            initTheme() {
                document.documentElement.setAttribute('data-theme', this.theme);
                this.updateToggleIcon();
            }

            initToggle() {
                const toggle = document.getElementById('themeToggle');
                if (toggle) {
                    toggle.addEventListener('click', () => this.toggleTheme());
                }
            }

            toggleTheme() {
                this.theme = this.theme === 'light' ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', this.theme);
                this.setStoredTheme(this.theme);
                this.updateToggleIcon();
            }

            updateToggleIcon() {
                const slider = document.getElementById('themeSlider');
                if (slider) {
                    slider.textContent = this.theme === 'light' ? '🌙' : '☀️';
                }
            }
        }

        // Language management
        class LanguageManager {
            constructor() {
                this.currentLang = this.getStoredLanguage() || 'en';
                this.initLanguage();
                this.initSelector();
            }

            getStoredLanguage() {
                try {
                    return localStorage.getItem('trevo-language');
                } catch (e) {
                    return null;
                }
            }

            setStoredLanguage(lang) {
                try {
                    localStorage.setItem('trevo-language', lang);
                } catch (e) {
                    console.warn('Unable to save language preference');
                }
            }

            initLanguage() {
                this.updateLanguage();
                this.updateSelector();
            }

            initSelector() {
                const btn = document.getElementById('languageBtn');
                const dropdown = document.getElementById('languageDropdown');
                const options = document.querySelectorAll('.language-option');

                if (btn && dropdown) {
                    btn.addEventListener('click', (e) => {
                        e.stopPropagation();
                        dropdown.classList.toggle('active');
                    });

                    options.forEach(option => {
                        option.addEventListener('click', () => {
                            const lang = option.dataset.lang;
                            this.setLanguage(lang);
                            dropdown.classList.remove('active');
                        });
                    });

                    // Close dropdown when clicking outside
                    document.addEventListener('click', () => {
                        dropdown.classList.remove('active');
                    });
                }
            }

            setLanguage(lang) {
                this.currentLang = lang;
                this.setStoredLanguage(lang);
                this.updateLanguage();
                this.updateSelector();
            }

            updateLanguage() {
                const elements = document.querySelectorAll('[data-translate]');
                elements.forEach(element => {
                    const key = element.dataset.translate;
                    const translation = this.getNestedTranslation(key);
                    if (translation) {
                        element.textContent = translation;
                    }
                });
            }

            updateSelector() {
                const currentLangBtn = document.getElementById('currentLang');
                const options = document.querySelectorAll('.language-option');
                
                if (currentLangBtn) {
                    // Update button text
                    const langText = this.currentLang === 'en' ? '🇺🇸 EN' : '🇮🇩 ID';
                    currentLangBtn.textContent = langText;
                }

                // Update active option
                options.forEach(option => {
                    option.classList.toggle('active', option.dataset.lang === this.currentLang);
                });
            }

            getNestedTranslation(key) {
                const keys = key.split('.');
                let translation = translations[this.currentLang];
                
                for (const k of keys) {
                    if (translation && translation[k]) {
                        translation = translation[k];
                    } else {
                        return null;
                    }
                }
                
                return translation;
            }
        }

        // Mobile menu management
        class MobileMenuManager {
            constructor() {
                this.initMobileMenu();
            }

            initMobileMenu() {
                const mobileBtn = document.getElementById('mobileMenuBtn');
                const navMenu = document.getElementById('navMenu');

                if (mobileBtn && navMenu) {
                    mobileBtn.addEventListener('click', () => {
                        navMenu.classList.toggle('active');
                        mobileBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
                    });

                    // Close mobile menu when clicking on a link
                    const navLinks = navMenu.querySelectorAll('.nav-link');
                    navLinks.forEach(link => {
                        link.addEventListener('click', () => {
                            navMenu.classList.remove('active');
                            mobileBtn.textContent = '☰';
                        });
                    });
                }
            }
        }

        // Initialize managers
        const themeManager = new ThemeManager();
        const languageManager = new LanguageManager();
        const mobileMenuManager = new MobileMenuManager();

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.feature-card, .destination-card, .gallery-item');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        });

        // Parallax effect for hero cards
        let ticking = false;
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const travelCards = document.querySelectorAll('.travel-card');
            
            travelCards.forEach((card, index) => {
                const speed = (index + 1) * 0.05;
                card.style.transform = `translateY(${scrolled * speed}px)`;
            });
            ticking = false;
        }

        window.addEventListener('scroll', function() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        // Add hover effects to cards
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.feature-card, .destination-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
        });

        // Loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.5s ease';
        });

        // Keyboard navigation support
        document.addEventListener('keydown', function(e) {
            // Escape key closes dropdowns
            if (e.key === 'Escape') {
                const activeDropdown = document.querySelector('.language-dropdown.active');
                if (activeDropdown) {
                    activeDropdown.classList.remove('active');
                }
                
                const activeMobileMenu = document.querySelector('.nav-menu.active');
                if (activeMobileMenu) {
                    activeMobileMenu.classList.remove('active');
                    const mobileBtn = document.getElementById('mobileMenuBtn');
                    if (mobileBtn) mobileBtn.textContent = '☰';
                }
            }
        });

        // Accessibility improvements
        document.addEventListener('DOMContentLoaded', function() {
            // Add ARIA labels
            const themeToggle = document.getElementById('themeToggle');
            if (themeToggle) {
                themeToggle.setAttribute('aria-label', 'Toggle dark mode');
                themeToggle.setAttribute('role', 'button');
                themeToggle.setAttribute('tabindex', '0');
                
                // Keyboard support for theme toggle
                themeToggle.addEventListener('keydown', function(e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        themeManager.toggleTheme();
                    }
                });
            }

            const languageBtn = document.getElementById('languageBtn');
            if (languageBtn) {
                languageBtn.setAttribute('aria-label', 'Select language');
                languageBtn.setAttribute('aria-expanded', 'false');
                
                // Update aria-expanded when dropdown toggles
                const dropdown = document.getElementById('languageDropdown');
                const observer = new MutationObserver(function(mutations) {
                    mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                            const isActive = dropdown.classList.contains('active');
                            languageBtn.setAttribute('aria-expanded', isActive);
                        }
                    });
                });
                
                if (dropdown) {
                    observer.observe(dropdown, { attributes: true });
                }
            }
        });

        // Error handling for missing elements
        function safeQuerySelector(selector) {
            try {
                return document.querySelector(selector);
            } catch (e) {
                console.warn(`Element not found: ${selector}`);
                return null;
            }
        }

        // Debounce function for performance
        function debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        }

        // Resize handler with debounce
        const handleResize = debounce(function() {
            // Handle any resize-specific logic here
            const navMenu = document.getElementById('navMenu');
            const mobileBtn = document.getElementById('mobileMenuBtn');
            
            if (window.innerWidth >= 768 && navMenu && mobileBtn) {
                navMenu.classList.remove('active');
                mobileBtn.textContent = '☰';
            }
        }, 250);

        window.addEventListener('resize', handleResize);