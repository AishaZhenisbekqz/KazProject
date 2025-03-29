document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('.language-btn');
    const translatableElements = document.querySelectorAll('[data-text-kk]');
    const mapImage = document.querySelector('.map-image');

    function switchLanguage(lang) {
        translatableElements.forEach(el => {
            el.textContent = el.getAttribute(`data-text-${lang}`);
        });

        // Суретті ауыстыру
        if (mapImage) {
            mapImage.src = mapImage.getAttribute(`data-img-${lang}`);
        }

        // Таңдалған тілді жергілікті жадқа сақтау
        localStorage.setItem('selectedLanguage', lang);
    }

    // Сақталған немесе браузер тілін алу
    const savedLanguage = localStorage.getItem('selectedLanguage') || navigator.language.slice(0, 2);
    const supportedLanguages = ['kk', 'ru', 'en'];

    switchLanguage(supportedLanguages.includes(savedLanguage) ? savedLanguage : 'ru');

    // Тіл батырмаларын басқанда ауыстыру
    languageButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
});
