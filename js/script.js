// Utility Functions

function getElementId(id) {
    return document.getElementById(id);
}

// Transitions

window.addEventListener("load", () => {
    const overlay = document.getElementById("transition-overlay");
    overlay.classList.remove("show");
});

document.querySelectorAll("a, button").forEach(el => {
    el.addEventListener("click", e => {
    const overlay = document.getElementById("transition-overlay");

        if (el.tagName.toLowerCase() === "a") {
            const href = el.getAttribute("href");
            if (href && !href.startsWith("#") && !href.startsWith("javascript:")) {
                e.preventDefault();
                overlay.classList.add("show");
                setTimeout(() => window.location.href = href, 500);
            }
        }
        else if (el.tagName.toLowerCase() === "button" && el.dataset.href) {
            e.preventDefault();
            overlay.classList.add("show");
            setTimeout(() => window.location.href = el.dataset.href, 500);
        }
    });
});

// Sidebar

const hamburger = getElementId("hamburger");
const sidebar = getElementId("sidebar");
const close_sidebar = getElementId("close-sidebar");


hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})
close_sidebar.addEventListener("click", () => {
    sidebar.classList.toggle("active");
})

// Localization

const languages = {
    en : "EN",
    kh : "ខ្មែរ",
    zh : "中文",
}

const translations = {
    en : {
        // Header
        home : "HOME",
        about_us : "ABOUT US",
        subsidiaries_n_partners : "SUBSIDIARIES & PARTNERS",
        products_n_services : "PRODUCTS & SERVICES",
        contact_us : "CONTACT US",

        // Body
        tagline : "TOGETHER WE DEVELOP,<br>TOGETHER WE PROSPER",
        explore_our_products : "Explore Our Products<i class='fa-solid fa-arrow-right explore-arrow'></i>",

        // Footer
        home_alt : "Home",
        about_us_alt : "About Us",
        subsidiaries_n_partners_alt : "Subsidiaries & Partners",
        products_n_services_alt : "Products & Services",
        contact_us_alt : "Contact Us",
        quick_links : "QUICK LINKS",
        social_media : "SOCIAL MEDIA",
        facebook : "<i class='fa-brands fa-facebook'>&nbsp;</i> Facebook",
        telegram : "<i class='fa-brands fa-telegram'>&nbsp;</i> Telegram",
    },
    kh : {
        // Header
        home : "ទំព័រដើម",
        about_us : "អំពីយើងខ្ញុំ",
        subsidiaries_n_partners : "ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ និងដៃគូ",
        products_n_services : "ផលិតផល និងសេវាកម្ម",
        contact_us : "ទំនាក់ទំនងយើងខ្ញុំ",

        // Body
        tagline : "យើងអភិវឌ្ឍ<br>យើងរីកចម្រើន",
        explore_our_products : "រុករកផលិតផលរបស់យើង<i class='fa-solid fa-arrow-right explore-arrow'></i>",

        // Footer
        home_alt : "ទំព័រដើម",
        about_us_alt : "អំពីយើងខ្ញុំ",
        subsidiaries_n_partners_alt : "ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ និងដៃគូ",
        products_n_services_alt : "ផលិតផល និងសេវាកម្ម",
        contact_us_alt : "ទំនាក់ទំនងយើងខ្ញុំ",
        quick_links : "តំណភ្ជាប់រហ័ស",
        social_media : "ប្រព័ន្ធផ្សព្វផ្សាយសង្គម",
        facebook : "<i class='fa-brands fa-facebook'>&nbsp;</i> ហ្វេសប៊ុក",
        telegram : "<i class='fa-brands fa-telegram'>&nbsp;</i> តេឡេក្រាម",
    },
    zh : {
        // Header
        home : "主页",
        about_us : "关于我们",
        subsidiaries_n_partners : "子公司及合作伙伴",
        products_n_services : "产品与服务",
        contact_us : "联系我们",

        // Body
        tagline : "共同发展,<br>共同繁荣",
        explore_our_products : "探索我们的产品<i class='fa-solid fa-arrow-right explore-arrow'></i>",

        // Footer
        home_alt : "主页",
        about_us_alt : "关于我们",
        subsidiaries_n_partners_alt : "子公司及合作伙伴",
        products_n_services_alt : "产品与服务",
        contact_us_alt : "联系我们",
        quick_links : "快速链接",
        social_media : "社交媒体",
        facebook : "<i class='fa-brands fa-facebook'>&nbsp;</i> Facebook",
        telegram : "<i class='fa-brands fa-telegram'>&nbsp;</i> Telegram",
    }
}

let currentLang = localStorage.getItem("preferredLanguage") || "en";

function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[lang][key] || key;
    });

    document.querySelector("#lang-label span").textContent = languages[lang];

    localStorage.setItem("preferredLanguage", lang);
    currentLang = lang;
}

function updateLanguageDropdown() {
    const optionsContainer = document.getElementById("lang-options");

    optionsContainer.innerHTML = "";

    Object.entries(languages).forEach(([code, name]) => {
        if (code !== currentLang) {
            const option = document.createElement("a");
            option.href = "#";
            option.textContent = name;

            option.addEventListener("click", (e) => {
                const overlay = document.getElementById('transition-overlay');
                overlay.classList.add("show");
                setTimeout(() => { 
                    overlay.classList.remove("show");
                    e.preventDefault();
                    applyLanguage(code);
                    updateLanguageDropdown();
                }, 500);
            });

            optionsContainer.appendChild(option);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('transition-overlay');
    overlay.classList.add("show");
    setTimeout(() => { overlay.classList.remove("show"); }, 500);

    // Language
    const savedLang = localStorage.getItem("preferredLanguage") || "en";
    applyLanguage(savedLang);
    updateLanguageDropdown();

    // Navigation Link Highlight
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll(".nav-link").forEach(link => {
        if (link.getAttribute("href") === currentPage) { link.classList.add("active"); }
    })
});