(() => {
    const path = window.location.pathname;
    const file = path.split('/').pop() || 'index.html';
    const isEnglishPath = path.includes('/en/');
    const isHome = file === '' || file === 'index.html';

    if (!isHome || isEnglishPath) {
        return;
    }

    const languages = navigator.languages && navigator.languages.length
        ? navigator.languages
        : [navigator.language || ''];
    const prefersSpanish = languages.some((language) => language.toLowerCase().startsWith('es'));

    if (!prefersSpanish) {
        const basePath = path.endsWith('/') ? path : path.replace(/index\.html$/, '');
        window.location.replace(`${basePath}en/index.html${window.location.search}${window.location.hash}`);
    }
})();
