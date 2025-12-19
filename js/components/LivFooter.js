class LivFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Determine root path handling for both local server and file protocol
        const isArticlePage = window.location.pathname.includes('/articulos/');
        const rootPath = isArticlePage ? '../' : '';

        this.innerHTML = `
    <footer class="bg-white border-t border-[#E9E9E9] pt-20 pb-10 px-6">
        <div class="max-w-7xl mx-auto">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="md:col-span-1">
                    <img src="${rootPath}assets/isologo.svg" alt="LIV Logo" class="h-8 mb-6 block">
                    <p class="text-sm text-[#535353]/75 font-light leading-relaxed max-w-xs mb-3">
                        Acompañamiento honesto para tu proceso migratorio y educativo en Australia.
                    </p>
                    <p class="text-xs text-[#535353]/70 font-light italic max-w-xs">
                        No te vendemos Australia. Te ayudamos a pensar tu camino.
                    </p>
                </div>

                <div class="">
                    <h4 class="font-medium text-[#535353] mb-6 text-xs uppercase tracking-wider">Explorar</h4>
                    <ul class="space-y-3 text-sm text-[#535353]/75 font-light">
                        <li><a href="${rootPath}index-v3.html" class="hover:text-[#C6AB88] transition-colors">Home</a></li>
                        <li><a href="${rootPath}servicios.html" class="hover:text-[#C6AB88] transition-colors">Servicios</a></li>
                        <li><a href="${rootPath}nosotras.html" class="hover:text-[#C6AB88] transition-colors">Nosotras</a></li>
                        <li><a href="${rootPath}recursos.html" class="hover:text-[#C6AB88] transition-colors">Info</a></li>
                    </ul>
                </div>

                <div class="">
                    <h4 class="font-medium text-[#535353] mb-6 text-xs uppercase tracking-wider">Contacto</h4>
                    <ul class="space-y-3 text-sm text-[#535353]/75 font-light">
                        <li class="">hello@livmigration.com.au</li>
                        <li class="">Sydney 2026, NSW, Australia</li>
                        <li class="flex items-center gap-4 pt-2">
                            <a href="https://www.instagram.com/livmigration/" target="_blank" class="text-[#535353] hover:text-[#C6AB88] transition-colors"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="instagram"
                                    class="lucide lucide-instagram w-5 h-5">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                                </svg></a>
                            <a href="#" class="text-[#535353] hover:text-[#C6AB88] transition-colors"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" data-lucide="linkedin"
                                    class="lucide lucide-linkedin w-5 h-5">
                                    <path
                                        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z">
                                    </path>
                                    <rect width="4" height="12" x="2" y="9"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg></a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-medium text-[#535353] mb-6 text-xs uppercase tracking-wider">Legal</h4>
                    <ul class="space-y-3 text-sm text-[#535353]/80 font-light">
                        <li><a href="#" class="hover:text-[#C6AB88]">Política de Privacidad</a></li>
                        <li><a href="#" class="hover:text-[#C6AB88]">Code of Conduct (OMARA)</a></li>
                        <li><a href="#" class="hover:text-[#C6AB88]">Consumer Guide</a></li>
                    </ul>
                </div>
            </div>

            <div
                class="border-t border-[#F9F7F4] pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#535353]/70 font-light uppercase tracking-wide">
                <p>© ${new Date().getFullYear()} LIV Consulting. All rights reserved.</p>
                <p class="mt-2 md:mt-0"><a href="https://doopux.com" target="_blank" class="hover:text-[#C6AB88] transition-colors">Designed with purpose in Australia.</a></p>
            </div>
        </div>
    </footer>
        `;

        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

customElements.define('liv-footer', LivFooter);
