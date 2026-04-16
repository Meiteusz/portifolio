document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggleBtn = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.className = 'ph ph-sun';
        } else {
            themeIcon.className = 'ph ph-moon';
        }
    }


    // --- Language Switcher ---
    const langToggleBtn = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'en';
    langToggleBtn.textContent = currentLang === 'en' ? 'PT' : 'EN';
    
    // Initial translation apply
    applyTranslations(currentLang);

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'pt' : 'en';
        langToggleBtn.textContent = currentLang === 'en' ? 'PT' : 'EN';
        localStorage.setItem('lang', currentLang);
        
        // Add a slight fade effect while translating
        body.style.opacity = '0.9';
        setTimeout(() => {
            applyTranslations(currentLang);
            body.style.opacity = '1';
        }, 150);
    });

    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        
        // Update document title dynamically
        document.title = lang === 'en' ? 'Matheus Teixeira | Fullstack Developer' : 'Matheus Teixeira | Desenvolvedor Fullstack';
    }


    // --- Scroll Animations ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

});
