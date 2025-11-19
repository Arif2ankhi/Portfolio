// DOM Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const themeToggleMobileBtn = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// 1. Dark Mode Logic
function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// Check Local Storage on Load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    htmlElement.classList.remove('dark');
} else {
    // Default to dark mode as per prompt
    htmlElement.classList.add('dark');
}

// Event Listeners for Theme
if(themeToggleBtn) themeToggleBtn.addEventListener('click', toggleTheme);
if(themeToggleMobileBtn) themeToggleMobileBtn.addEventListener('click', toggleTheme);

// 2. Mobile Menu Logic
if(mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// 3. Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});