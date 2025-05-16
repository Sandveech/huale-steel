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

const hamburger = getElementId("burger-menu-button");
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
        home: "Home",
        about_us : "About Us",
        subsidiaries_and_partners : "Subsidiaries & Partners",
        products_and_services : "Products & Services",
        contact_us : "Contact Us",

        // Body
        tagline : "TOGETHER WE DEVELOP,<br>TOGETHER WE PROSPER",
        explore_our_products : "Explore Our Products",
        short_summary : "&quot;From a foundation of international steel trade by strong Cambodia-China relations, Huale Steel was established to harness Cambodia's strategic position.&quot;",
        read_more : "Read More &nbsp;<i class='fa-solid fa-angle-right'></i>",
        established : "<i class='fa-solid fa-calendar'></i><br> ESTABLISHED:<br>2024",
        capacity : "<i class='fa-solid fa-weight-hanging'></i><br>CAPACITY:<br>600 TONS/DAY",
        locations : "<i class='fa-solid fa-location-dot'></i><br>LOCATIONS:<br>CAMBODIA & CHINA",
        about_us_alt : "ABOUT US",
        story_1 : "We started from the steel trading business, exporting and importing steel between Cambodia and China.",
        story_2 : "Cambodia's geographical and economic potential were eye catchers for our boaord of directors to consider investing in the heart of the economic zone of this small country.",
        story_3 : "In addition with the strong relationship between the governments of the two countries, thus we decided to establish &quot;Huale Steel&quot;",
        mission : "MISSION",
        mission_info : "Our objective is to manufacture and offer the highest quality products to our clients while using sustainable techniques that adhere to the highest worldwide environmental control requirements. We believe that profoundly skilled and driven workers are the key to achieving our goals, and we will continue to provide excellent training and investment in their growth.",
        vision : "VISION",
        vision_info : "Our plan of action is to continually participate in extending our generation limits and increasing our production capabilities with the explicit goal of meeting the epidemically growing global demand and therefore maintaining our position at the leading edge of the steel industry.",
        products_and_services_alt : "PRODUCTS & SERVICES",
        slitting_hot_rolled_sheet : "SLITTING HOT<br>ROLLED SHEET",
        slitting_hot_rolled_sheet_desc : "Raw materials imported form China with high grade Q235 & Q355.",
        slitting_hot_rolled_sheet_info_1 : "1500X6000MM",
        slitting_hot_rolled_sheet_info_2 : "2000X12000MM",
        slitting_hot_rolled_sheet_info_3 : "CUSTOMIZABLE SIZES",
        pre_painted_hot_dipped_galvanized_coil : "PRE-PAINTED HOT<br>DIPPED GALVANZIED<br>COIL",
        coming_soon : "COMING<br>MAY 2025",
        ind_app_served : "INDUSTRIES/APPLICATIONS<br>SERVED",
        military : "MILITARY",
        military_blurb : "Armor Plating & Vehicle Components",
        machinery : "MACHINERY",
        machinery_blurb : "Machine Base, Press Plate, etc.",
        construction : "CONSTRUCTION",
        construction_blurb : "Building Beams, Columms, Floor, Structural Reinforcement, etc.",
        shipbuilding : "SHIPBUILDING",
        shipbuilding_blurb : "Hull Plates, Bulkhead, Desks, etc.",
        automotive : "AUTOMOTIVE",
        automotive_blurb : "Automotive Parts",
        contact_us_alt : "CONTACT US",
        contact_info : "CONTACT INFO",
        reach_out : "Reach out to us!",
        cambodia_tel : "<i class='fa-solid fa-phone'></i>&nbsp;(+855) 60 801 999 (CAMBODIA)",
        australia_tel : "<i class='fa-solid fa-phone'></i>&nbsp;(+61) 432 168 168 (AUSTRALIA)",
        email_us : "EMAIL US",
        full_name : "Full Name",
        email_address : "Email Address",
        subject : "Subject",
        message : "Message",
        submit : "Submit &nbsp;<i class='fa-solid fa-angle-right'>",

        // Footer
        quick_links : "QUICK LINKS",
        social_media : "SOCIAL MEDIA",
        facebook : "<i class='fa-brands fa-facebook'>&nbsp;</i> Facebook",
        telegram : "<i class='fa-brands fa-telegram'>&nbsp;</i> Telegram",
    },
    kh : {
        // Header
        home : "ទំព័រដើម",
        about_us : "អំពីយើងខ្ញុំ",
        subsidiaries_and_partners: "ក្រុមហ៊ុនបុត្រសម្ព័ន្ធ និងដៃគូ",
        products_and_services : "ផលិតផល និងសេវាកម្ម",
        contact_us : "ទំនាក់ទំនងយើងខ្ញុំ",

        // Body
        tagline : "យើងអភិវឌ្ឍ<br>យើងរីកចម្រើន",
        explore_our_products : "រុករកផលិតផលរបស់យើង",
        short_summary : "&quot;ពីមូលដ្ឋានគ្រឹះនៃពាណិជ្ជកម្មដែកថែបអន្តរជាតិដោយទំនាក់ទំនងកម្ពុជា-ចិនដ៏រឹងមាំ ក្រុមហ៊ុន ហួល ស្ទីល ត្រូវបានបង្កើតឡើងដើម្បីទាញយកតួនាទីជាយុទ្ធសាស្ត្ររបស់កម្ពុជា។&quot;",
        read_more : "អានបន្ថែម &nbsp;<i class='fa-solid fa-angle-right'></i>",
        established : "<i class='fa-solid fa-calendar'></i><br> បានបង្កើតឡើង:<br>2024",
        capacity : "<i class='fa-solid fa-weight-hanging'></i><br>សមត្ថភាព:<br>600 តោន/ថ្ងៃ",
        locations : "<i class='fa-solid fa-location-dot'></i><br>ទីតាំង:<br>កម្ពុជា និងចិន",
        about_us_alt : "អំពីយើងខ្ញុំ",
        story_1 : "យើង​ចាប់​ផ្តើម​ពី​អាជីវកម្ម​ពាណិជ្ជកម្ម​ដែក ការ​នាំ​ចេញ និង​នាំ​ចូល​ដែក​រវាង​កម្ពុជា និង​ចិន។",
        story_2 : "សក្ដានុពលភូមិសាស្រ្ត និងសេដ្ឋកិច្ចរបស់ប្រទេសកម្ពុជា គឺជាអ្នកចាប់អារម្មណ៍សម្រាប់ក្រុមប្រឹក្សាភិបាលរបស់យើងក្នុងការពិចារណាលើការវិនិយោគនៅក្នុងបេះដូងនៃតំបន់សេដ្ឋកិច្ចនៃប្រទេសតូចមួយនេះ។",
        story_3 : "បន្ថែមពីលើទំនាក់ទំនងដ៏រឹងមាំរវាងរដ្ឋាភិបាលនៃប្រទេសទាំងពីរ ដូច្នេះហើយទើបយើងសម្រេចចិត្តបង្កើត &quot;Huale Steel&quot;។",
        mission : "បេសកកម្ម",
        mission_info : "គោលបំណងរបស់យើងគឺផលិត និងផ្តល់ជូននូវផលិតផលគុណភាពខ្ពស់បំផុតដល់អតិថិជនរបស់យើង ខណៈពេលដែលប្រើប្រាស់បច្ចេកទេសប្រកបដោយនិរន្តរភាព ដែលប្រកាន់ខ្ជាប់នូវតម្រូវការត្រួតពិនិត្យបរិស្ថានខ្ពស់បំផុតនៅទូទាំងពិភពលោក។ យើងជឿជាក់ថា កម្មករដែលមានជំនាញ និងជំរុញយ៉ាងជ្រាលជ្រៅ គឺជាគន្លឹះក្នុងការសម្រេចបាននូវគោលដៅរបស់យើង ហើយយើងនឹងបន្តផ្តល់នូវការបណ្តុះបណ្តាល និងការវិនិយោគដ៏ល្អឥតខ្ចោះក្នុងការរីកចម្រើនរបស់ពួកគេ។",
        vision : "ចក្ខុវិស័យ",
        vision_info : "ផែនការសកម្មភាពរបស់យើងគឺដើម្បីចូលរួមបន្តក្នុងការពង្រីកដែនកំណត់ជំនាន់របស់យើង និងបង្កើនសមត្ថភាពផលិតកម្មរបស់យើងជាមួយនឹងគោលដៅច្បាស់លាស់ក្នុងការបំពេញតម្រូវការសកលដែលកំពុងរីករាលដាល ហើយដូច្នេះរក្សាជំហររបស់យើងនៅគែមឈានមុខគេនៃឧស្សាហកម្មដែក។",
        products_and_services_alt : "ផលិតផល និងសេវាកម្ម",
        slitting_hot_rolled_sheet : "SLITTING HOT<br>ROLLED SHEET",
        slitting_hot_rolled_sheet_desc : "វត្ថុធាតុដើមដែលនាំចូលពីប្រទេសចិនជាមួយនឹង Q235 & Q355 កម្រិតខ្ពស់។",
        slitting_hot_rolled_sheet_info_1 : "1500X6000MM",
        slitting_hot_rolled_sheet_info_2 : "2000X12000MM",
        slitting_hot_rolled_sheet_info_3 : "ទំហំដែលអាចប្ដូរតាមបំណង។",
        pre_painted_hot_dipped_galvanized_coil : "PRE-PAINTED HOT<br>DIPPED GALVANZIED<br>COIL",
        coming_soon : "នឹងមកនូវ<br>ឧសភា 2025",
        ind_app_served : "ឧស្សាហកម្ម/កម្មវិធី<br>ត្រូវបានបម្រើ",
        military : "យោធា",
        military_blurb : "គ្រឿងសឹក និងគ្រឿងបន្លាស់រថយន្ត",
        machinery : "គ្រឿងម៉ាស៊ីន",
        machinery_blurb : "មូលដ្ឋានម៉ាស៊ីន ចានចុច ជាដើម។",
        construction : "សំណង់",
        construction_blurb : "ធ្នឹមអាគារ, ជួរឈរ, ជាន់, ការពង្រឹងរចនាសម្ព័ន្ធជាដើម។",
        shipbuilding : "កសាងនាវា",
        shipbuilding_blurb : "ចានរាងសំប៉ែត ក្បាលទូ តុ ជាដើម។",
        automotive : "រថយន្ត",
        automotive_blurb : "គ្រឿងបន្លាស់រថយន្ត",
        contact_us_alt : "ទំនាក់ទំនងយើងខ្ញុំ",
        contact_info : "ព័ត៌មានទំនាក់ទំនង",
        reach_out : "ទាក់ទងមកយើងខ្ញុំ!",
        cambodia_tel : "<i class='fa-solid fa-phone'></i> (+855) 60 801 999 (កម្ពុជា)",
        australia_tel : "<i class='fa-solid fa-phone'></i> (+61) 432 168 168 (អូស្រ្តាលី)",
        email_us : "អ៊ីមែលមកយើងខ្ញុំ",
        full_name : "ឈ្មោះពេញ",
        email_address : "អាសយដ្ឋានអ៊ីមែល",
        subject : "ប្រធានបទ",
        message : "សារ",
        submit : "ដាក់ស្នើ &nbsp;<i class='fa-solid fa-angle-right'>",

        // Footer
        quick_links : "តំណភ្ជាប់រហ័ស",
        social_media : "ប្រព័ន្ធផ្សព្វផ្សាយសង្គម",
        facebook : "<i class='fa-brands fa-facebook'>&nbsp;</i> ហ្វេសប៊ុក",
        telegram : "<i class='fa-brands fa-telegram'>&nbsp;</i> តេឡេក្រាម",
    },
    zh : {
        // Header
        home : "主页",
        about_us : "关于我们",
        subsidiaries_and_partners : "子公司及合作伙伴",
        products_and_services : "产品与服务",
        contact_us : "联系我们",

        // Body
        tagline : "共同发展,<br>共同繁荣",
        explore_our_products : "探索我们的产品",
        short_summary : "&quot;华乐钢铁以柬中两国牢固的国际钢铁贸易关系为基础，成立华乐钢铁，以发挥柬埔寨的战略地位。&quot;",
        read_more : "阅读更多 &nbsp;<i class='fa-solid fa-angle-right'></i>",
        established : "<i class='fa-solid fa-calendar'></i><br> 已确立的:<br>2024",
        capacity : "<i class='fa-solid fa-weight-hanging'></i><br>容量:<br>600 吨/天",
        locations : "<i class='fa-solid fa-location-dot'></i><br>地点:<br>柬埔寨和中国",
        about_us_alt : "关于我们",
        story_1 : "我们从钢铁贸易业务起步，在柬埔寨和中国之间出口和进口钢铁。",
        story_2 : "柬埔寨的地理和经济潜力吸引了我们董事会的眼球，促使我们考虑投资这个小国经济区的中心。",
        story_3 : "此外，由于两国政府关系密切，我们决定建立 &quot;华乐钢铁&quot;",
        mission : "使命",
        mission_info : "我们的目标是采用符合全球最高环境控制要求的可持续技术，为客户生产并提供最高品质的产品。我们相信，技术精湛、积极进取的员工是实现目标的关键，我们将继续提供卓越的培训，并投资于他们的成长。",
        vision : "想象",
        vision_info : "我们的行动计划是不断参与扩大我们的发电极限并提高我们的生产能力，明确目标是满足日益增长的全球需求，从而保持我们在钢铁行业的领先地位。",
        products_and_services_alt : "产品与服务",
        slitting_hot_rolled_sheet : "热轧板纵剪",
        slitting_hot_rolled_sheet_desc : "原材料从中国进口，采用优质 Q235 和 Q355。",
        slitting_hot_rolled_sheet_info_1 : "1500X6000MM",
        slitting_hot_rolled_sheet_info_2 : "2000X12000MM",
        slitting_hot_rolled_sheet_info_3 : "可定制尺寸",
        pre_painted_hot_dipped_galvanized_coil : "预涂热镀锌卷板",
        coming_soon : "2025年5月上市",
        ind_app_served : "服务行业/应用",
        military : "军队",
        military_blurb : "装甲板和车辆部件",
        machinery : "机械",
        machinery_blurb : "机座、压板等",
        construction : "建造",
        construction_blurb : "建筑梁、柱、楼板、结构加固等。",
        shipbuilding : "造船",
        shipbuilding_blurb : "船体板、舱壁、桌子等",
        automotive : "汽车",
        automotive_blurb : "汽车零部件",
        contact_us_alt : "联系我们",
        contact_info : "联系方式",
        reach_out : "联系我们！",
        cambodia_tel : "<i class='fa-solid fa-phone'></i> (+855) 60 801 999 (柬埔寨)",
        australia_tel : "<i class='fa-solid fa-phone'></i> (+61) 432 168 168 (澳大利亚)",
        email_us : "给我们发电子邮件",
        full_name : "姓名",
        email_address : "电子邮件",
        subject : "主题",
        message : "信息",
        submit : "提交 &nbsp;<i class='fa-solid fa-angle-right'>",

        // Footer
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
        document.documentElement.lang = lang;
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