class LivHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Determine root path handling for both local server and file protocol
        const isArticlePage = window.location.pathname.includes('/articulos/');
        const rootPath = isArticlePage ? '../' : '';

        this.innerHTML = `
    <nav class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel border-b-0">
        <div class="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
            <button onclick="toggleMobileMenu()"
                class="md:hidden text-[#535353] p-2 hover:bg-black/5 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="menu" class="lucide lucide-menu w-5 h-5">
                    <path d="M4 5h16"></path>
                    <path d="M4 12h16"></path>
                    <path d="M4 19h16"></path>
                </svg>
            </button>

            <!-- Logo -->
            <div class="flex-1 md:flex-none text-center md:text-left">
                <a href="${rootPath}index-v3.html" class="inline-block hover:opacity-80 transition-opacity">
                    <img src="${rootPath}assets/logo.svg" alt="LIV Migration Logo" class="h-8 w-auto object-contain">
                </a>
            </div>

            <div class="hidden md:flex items-center gap-6 pl-8">
                <!-- Language Selector -->
                <div class="flex items-center gap-4 text-[10px] font-medium tracking-widest text-[#535353]/60">
                    <button class="flex items-center gap-2 opacity-100 hover:opacity-70 transition-all group"
                        aria-label="Cambiar a Español">
                        <img src="https://flagcdn.com/w40/es.png" alt="Bandera de España"
                            class="h-3 w-5 object-cover rounded-[2px] shadow-sm opacity-90 group-hover:opacity-100 transition-opacity">
                        <span class="text-[#535353]">ES</span>
                    </button>
                    <div class="h-3 w-px bg-[#535353]/10"></div>
                    <button class="flex items-center gap-2 opacity-40 hover:opacity-100 transition-all group"
                        aria-label="Switch to English">
                        <img src="https://flagcdn.com/w40/gb.png" alt="UK Flag"
                            class="h-3 w-5 object-cover rounded-[2px] shadow-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        <span>EN</span>
                    </button>
                </div>

                <a href="https://calendly.com/veronica-liv-consulting/45min" target="_blank"
                    class="bg-[#535353] hover:bg-[#3d3d3d] text-white text-xs font-medium px-6 py-3 rounded-full shadow-lg shadow-gray-200 transition-all transform hover:scale-[1.02]">
                    Conversar con nosotras
                </a>
            </div>

            <button class="md:hidden text-[#535353] p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    data-lucide="calendar" class="lucide lucide-calendar w-5 h-5">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu"
            class="fixed inset-0 bg-white z-50 transform -translate-x-full transition-transform duration-500 md:hidden flex flex-col h-screen">
            <!-- Mobile Menu Header -->
            <div class="flex items-center justify-between px-6 h-20 shrink-0 border-b border-[#535353]/5">
                <div class="w-10"></div> <!-- Spacer for aesthetic centering -->
                <img src="${rootPath}assets/logo.svg" alt="LIV Migration Logo" class="h-8 w-auto object-contain">
                <button onclick="toggleMobileMenu()" class="p-2 text-[#535353]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        data-lucide="x" class="lucide lucide-x w-6 h-6">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
            </div>
            
            <!-- Mobile Menu Content -->
            <div class="flex-1 flex flex-col items-center justify-center space-y-8 pb-20">
                <div class="flex flex-col space-y-6 text-2xl font-light text-[#535353] text-center">
                    <a href="${rootPath}index-v3.html" class="text-center font-medium hover:text-[#C6AB88] transition-colors">Home</a>
                    <a href="${rootPath}servicios.html" class="text-center hover:text-[#C6AB88] transition-colors">Servicios</a>
                    <a href="${rootPath}nosotras.html" class="text-center hover:text-[#C6AB88] transition-colors">Nosotras</a>
                    <a href="${rootPath}recursos.html" class="text-center hover:text-[#C6AB88] transition-colors">Info</a>
                </div>
                <div class="pt-8 border-t border-[#535353]/10 w-64">
                    <a href="https://calendly.com/veronica-liv-consulting/45min" target="_blank"
                        class="w-full bg-[#535353] hover:bg-[#3d3d3d] text-white py-4 rounded-full font-medium block text-center transition-colors">Conversar con
                        nosotras</a>
                </div>
            </div>
        </div>
    </nav>
        `;

        // Highlight active link
        const currentPath = window.location.pathname.split('/').pop() || 'index-v3.html';
        const links = this.querySelectorAll('nav a');

        links.forEach(link => {
            const href = link.getAttribute('href');
            // Check if matches or if it's the root link and we're on root
            // Since we added rootPath, href will include it. We need to strip it to compare, or compare smarter.
            // Actually, we just want to know if the filename matches.

            // Simple check: does the href end with the current filename?
            if (href && href.endsWith(currentPath)) {
                link.classList.add('font-medium');
                link.classList.remove('font-light');
            } else {
                link.classList.remove('font-medium');
            }
        });

        // Define toggle function globally if not exists
        if (!window.toggleMobileMenu) {
            window.toggleMobileMenu = function () {
                const menu = document.getElementById('mobile-menu');
                if (menu) {
                    if (menu.classList.contains('-translate-x-full')) {
                        menu.classList.remove('-translate-x-full');
                    } else {
                        menu.classList.add('-translate-x-full');
                    }
                }
            };
        }

        // Initialize icons
        if (window.lucide) {
            window.lucide.createIcons();
        }
    }
}

customElements.define('liv-header', LivHeader);
