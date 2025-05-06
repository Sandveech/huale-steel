// Language Dropdown
function toggleDropdown() {
    const dropdown = document.querySelector('.language-dropdown');
    dropdown.classList.toggle('active');
}

window.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.language-dropdown');
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
    }
});

document.querySelectorAll('.dropdown-options div').forEach(option => {
    option.addEventListener('click', () => {
        const lang = option.dataset.lang;
        var prev_lang = (document.querySelector('.selected').textContent); 
        document.querySelector('.selected').textContent = option.textContent;

        option.textContent = prev_lang;

        var data_prev_lang = document.querySelector('.selected').getAttribute("data-lang");
        document.querySelector('.selected').setAttribute("data-lang", option.getAttribute("data-lang"));
        option.setAttribute("data-lang", data_prev_lang);

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            el.innerHTML = translations[lang][key];
        });
    });
});

// Languages
const translations = {
    en : {
        tagline : "Together We Develop,<br>Togther We Prosper",
        explore_products : "Explore Our Products",
        contact_us : "CONTACT US",
        contacts : "CONTACTS",
        home_header : "HOME",
        home_footer : "Home",
        subsidiaries_and_partners_header : "SUBSIDIARIES & PARTNERS",
        subsidiaries_and_partners_footer : "Subsidiaries & Partners",
        products_and_services_header : "PRODUCTS & SERVICES",
        products_and_services_footer : "Products & Services",
        about_us_header : "ABOUT US",
        about_us_footer : "About Us",
        quick_links : "QUICK LINKS",
        cambodia_tel : "+855 60 801 999 (CAMBODIA)",
        australia_tel : "+61 432 168 168 (AUSTRALIA)"
    },
    kh : {
        tagline : "យើងរួមគ្នាអភិវឌ្ឍ<br>យើងរួមគ្នារីកចម្រើន",
        explore_products : "រុករកផលិតផលរបស់យើង",
        contact_us : "ទំនាក់ទំនងយើងខ្ញុំ",
        contacts : "ទំនាក់ទំនង",
        home_header : "ទំព័រដើម",
        home_footer : "ទំព័រដើម",
        subsidiaries_and_partners_header : "ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ និងដៃគូ",
        subsidiaries_and_partners_footer : "ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ និងដៃគូ",
        products_and_services_header : "ផលិតផល និងសេវាកម្ម",
        products_and_services_footer : "ផលិតផល និងសេវាកម្ម",
        about_us_header : "អំពីយើងខ្ញុំ",
        about_us_footer : "អំពីយើងខ្ញុំ",
        quick_links : "តំណភ្ជាប់រហ័ស",
        cambodia_tel : "+855 60 801 999 (កម្ពុជា)",
        australia_tel : "+61 432 168 168 (អូស្ត្រាលី)"
    },
    zh : {
        tagline : "共同发展, 共同繁荣",
        explore_products : "探索我们的产品",
        contact_us : "联系我们",
        contacts : "联系人",
        home_header : "主页",
        home_footer : "主页",
        subsidiaries_and_partners_header : "子公司及合作伙伴",
        subsidiaries_and_partners_footer : "子公司及合作伙伴",
        products_and_services_header : "产品与服务",
        products_and_services_footer : "产品与服务",
        about_us_header : "关于我们",
        about_us_footer : "关于我们",
        quick_links : "快速链接",
        cambodia_tel : "+855 60 801 999 (柬埔寨)",
        australia_tel : "+61 432 168 168 (澳大利亚)"
    }
};