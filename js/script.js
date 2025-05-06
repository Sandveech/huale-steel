// Apply saved language on page load
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || "en";
    const selected = document.querySelector('.selected');
    const dropdownOptions = document.querySelectorAll('.dropdown-options div');

    // Set dropdown text and data-lang
    dropdownOptions.forEach(option => {
        if (option.dataset.lang === savedLang) {
            // Swap values visually
            const prev_lang = selected.textContent;
            selected.textContent = option.textContent;
            option.textContent = prev_lang;

            const data_prev_lang = selected.getAttribute("data-lang");
            selected.setAttribute("data-lang", option.getAttribute("data-lang"));
            option.setAttribute("data-lang", data_prev_lang);
        }
    });

    // Apply translations
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.innerHTML = translations[savedLang][key];
    });

    document.documentElement.classList.remove("lang-loading");
});

// Dropdown click handler with localStorage support
document.querySelectorAll('.dropdown-options div').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        const selected = document.querySelector('.selected');
        const prev_lang = selected.textContent;

        // Swap visual text
        selected.textContent = option.textContent;
        option.textContent = prev_lang;

        // Swap data attributes
        const data_prev_lang = selected.getAttribute("data-lang");
        selected.setAttribute("data-lang", option.getAttribute("data-lang"));
        option.setAttribute("data-lang", data_prev_lang);

        // Save selected language
        localStorage.setItem("lang", lang);

        // Apply translations
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.innerHTML = translations[lang][key];
        });

        document.documentElement.classList.remove("lang-loading");
    });
});

// Translations
const translations = {
    // English
    en : {
        tagline : "Together We Develop,<br>Togther We Prosper",
        explore_products : "Explore Our Products",
        contact_us_header : "CONTACT US",
        contact_us_footer : "Contact Us",
        contacts : "CONTACTS",
        contact_information : "CONTACT INFORMATION",
        home_header : "HOME",
        home_footer : "Home",
        subsidiaries_and_partners_header : "SUBSIDIARIES & PARTNERS",
        subsidiaries_and_partners_footer : "Subsidiaries & Partners",
        products_and_services_header : "PRODUCTS & SERVICES",
        products_and_services_footer : "Products & Services",
        about_us_header : "ABOUT US",
        about_us_footer : "About Us",
        quick_links : "QUICK LINKS",
        cambodia_tel : "<i class='fa-solid fa-phone' style='color : black'></i>&nbsp;(+855) 60 801 999 (CAMBODIA)",
        australia_tel : "<i class='fa-solid fa-phone' style='color : black'></i>&nbsp;(+61) 432 168 168 (AUSTRALIA)",
        social_media : "SOCIAL MEDIA",
        contact_form : "EMAIL US",
    },

    // Khmer
    kh : {
        tagline : "យើងរួមគ្នាអភិវឌ្ឍ<br>យើងរួមគ្នារីកចម្រើន",
        explore_products : "រុករកផលិតផលរបស់យើង",
        contact_us_header : "ទំនាក់ទំនងយើងខ្ញុំ",
        contact_us_footer : "ទំនាក់ទំនងយើងខ្ញុំ",
        contacts : "ទំនាក់ទំនង",
        contact_information : "ព័ត៌មានទំនាក់ទំនង",
        home_header : "ទំព័រដើម",
        home_footer : "ទំព័រដើម",
        subsidiaries_and_partners_header : "ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ និងដៃគូ",
        subsidiaries_and_partners_footer : "ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ និងដៃគូ",
        products_and_services_header : "ផលិតផល និងសេវាកម្ម",
        products_and_services_footer : "ផលិតផល និងសេវាកម្ម",
        about_us_header : "អំពីយើងខ្ញុំ",
        about_us_footer : "អំពីយើងខ្ញុំ",
        quick_links : "តំណភ្ជាប់រហ័ស",
        cambodia_tel : "<i class='fa-solid fa-phone' style='color : black'></i>&nbsp;(+855) 60 801 999 (កម្ពុជា)",
        australia_tel : "<i class='fa-solid fa-phone' style='color : black'></i>&nbsp;(+61) 432 168 168 (អូស្ត្រាលី)",
        social_media : "ប្រព័ន្ធផ្សព្វផ្សាយសង្គម",
        contact_form : "អ៊ីមែលមកយើង"
    },

    // Chinese (Simplified)
    zh : {
        tagline : "共同发展, 共同繁荣",
        explore_products : "探索我们的产品",
        contact_us_header : "联系我们",
        contact_us_footer : "联系我们",
        contacts : "联系人",
        contact_information : "联系信息",
        home_header : "主页",
        home_footer : "主页",
        subsidiaries_and_partners_header : "子公司及合作伙伴",
        subsidiaries_and_partners_footer : "子公司及合作伙伴",
        products_and_services_header : "产品与服务",
        products_and_services_footer : "产品与服务",
        about_us_header : "关于我们",
        about_us_footer : "关于我们",
        quick_links : "快速链接",
        cambodia_tel : "<i class='fa-solid fa-phone' style='color : black'></i>&nbsp;(+855) 60 801 999 (柬埔寨)",
        australia_tel : "<i class='fa-solid fa-phone' style='color : black'></i>&nbsp;(+61) 432 168 168 (澳大利亚)",
        social_media : "社交媒体",
        contact_form : "给我们发电子邮件"
    }
};