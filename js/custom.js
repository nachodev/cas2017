HTMLImports.whenReady(function () {
    menu.appendChild(document.getElementById('link-menu').import.childNodes[0]);
    footer.appendChild(document.getElementById('link-footer').import.childNodes[0]);

    var i18n = window.domI18n({
        selector: '[data-translatable]',
        separator: ' // ',
        languages: ['es', 'en'],
        currentLanguage: 'es',
        defaultLanguage: 'es'
    });

    var changeLanguage = document.getElementById('change-language');
    var language = 'es';
    changeLanguage.onclick = (e) => {
        language = language === 'es' ? 'en' : 'es';
        changeLanguage.textContent = language === 'es' ? 'English web' : 'Web en español';
        i18n.changeLanguage(language);
        window.location.hash = '#' + language;
        e.preventDefault();
    };
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-100345104-1', 'auto');
ga('send', 'pageview');