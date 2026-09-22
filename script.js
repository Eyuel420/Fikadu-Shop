/* =========================================================
   Fikadu Men's Wear and Bags — Main Script
   ========================================================= */

/* =========================================================
   1. CONFIG — change these to your real details
   ========================================================= */
const CONFIG = {
  phone: '+251934727262',      // for tel: links
  whatsapp: '251934727262',    // digits only, no + sign
  telegram: 'tech_tea'
};

/* =========================================================
   2. TRANSLATIONS
   ========================================================= */
const I18N = {
  en: {
    brand:"Fikadu Men's Wear & Bags", brand_sub:"Hawassa Men's Shop",
    nav_home:"Home", nav_items:"Items", nav_location:"Location", nav_contact:"Contact",
    hero_badge:"Located in Hawassa",
    hero_title:"Hawassa's  Men's Wear & Bags Shop",
    hero_sub:"Quality suits, shirts, jeans, leather shoes, bags and accessories — at fair prices. Come visit us today!",
    search_ph:"What are you looking for? (e.g. shirt)",
    search_ph2:"Search items...",
    btn_search:"Search", btn_browse:"Browse Items", btn_visit:"Our Location",
    items_title:"Our Items", items_sub:"Pick what you need — you'll find it right here in Hawassa",
    cat_all:"All", cat_wear:"Clothing", cat_shoes:"Shoes", cat_bags:"Bags",
    no_results:"Nothing found 😕 Try another word.",
    ask:"Ask", currency:"ETB",
    location_title:"Our Location", location_sub:"We are right in the heart of Hawassa city",
    address_label:"Address", address_val:"Hawassa, Ethiopia — Piazza Road, near Mehal Plaza",
    hours_label:"Opening hours", hours_val:"Mon – Sat: 8:30 AM – 8:00 PM · Sun: 9:00 AM – 7:00 PM",
    phone_label:"Phone", open:"We are open now", closed:"We are closed now",
    directions:"Get Directions",
    contact_title:"Contact Us", contact_sub:"Call, message or WhatsApp us — we reply fast!",
    call:"Call us", whatsapp:"WhatsApp", telegram:"Telegram",
    form_name:"Your name", form_name_ph:"e.g. Abebe",
    form_phone:"Phone number", form_phone_ph:"09xx xxx xxx",
    form_msg:"Message", form_msg_ph:"I want to order...",
    form_send:"Send via WhatsApp",
    footer_rights:"All rights reserved",
    footer_addr:"St.gebreal Road, Atnet Building ,Hawaasa Ethiopia 0934727262"
  },
  am: {
    brand:"ፍካዱ የወንዶች ልብስና ቦርሳ", brand_sub:"የሐዋሳ የወንዶች ሱቅ",
    nav_home:"መነሻ", nav_items:"ዕቃዎች", nav_location:"አድራሻ", nav_contact:"አግኙን",
    hero_badge:"በሐዋሳ የሚገኝ",
    hero_title:"የሐዋሳ  የወንዶች ልብስና ቦርሳ ሱቅ",
    hero_sub:"ጥራት ያለው ልብስ፣ ሸሚዝ፣ ጂንስ፣ የቆዳ ጫማ፣ ቦርሳና መለዋወጫ — በተመጣጣኝ ዋጋ። ዛሬ ይጎብኙን!",
    search_ph:"ምን ይፈልጋሉ? (ለምሳሌ፡ ሸሚዝ)",
    search_ph2:"ዕቃዎችን ይፈልጉ...",
    btn_search:"ፈልግ", btn_browse:"ዕቃዎችን ይመልከቱ", btn_visit:"አድራሻችን",
    stat_items:"የዕቃ ዓይነቶች", stat_years:"ዓመት ልምድ", stat_customers:"ደስተኛ ደንበኞች",
    items_title:"የእኛ ዕቃዎች", items_sub:"የሚፈልጉትን ይምረጡ — በሐዋሳ እዚሁ ያገኙታል",
    cat_all:"ሁሉም", cat_wear:"ልብስ", cat_shoes:"ጫማ", cat_bags:"ቦርሳ",
    no_results:"ምንም አልተገኘም 😕 ሌላ ቃል ይሞክሩ።",
    ask:"ጠይቁ", currency:"ብር",
    location_title:"አድራሻችን", location_sub:"በሐዋሳ ከተማ ልብ ውስጥ እንገኛለን",
    address_label:"አድራሻ", address_val:"ሐዋሳ፣ ኢትዮጵያ — ፒያሳ መንገድ፣ ከመሐል ፕላዛ አጠገብ",
    hours_label:"የሥራ ሰዓት", hours_val:"ሰኞ – ቅዳሜ፡ 8:30 – 20:00 · እሁድ፡ 9:00 – 19:00",
    phone_label:"ስልክ", open:"አሁን ክፍት ነን", closed:"አሁን ዝግ ነን",
    directions:"አቅጣጫ ያግኙ",
    contact_title:"አግኙን", contact_sub:"ይደውሉ፣ ይጻፉ ወይም በዋትስአፕ ያግኙን — በፍጥነት እንመልሳለን!",
    call:"ይደውሉልን", whatsapp:"ዋትስአፕ", telegram:"ቴሌግራም",
    form_name:"ስምዎ", form_name_ph:"ለምሳሌ፡ አበበ",
    form_phone:"ስልክ ቁጥር", form_phone_ph:"09xx xxx xxx",
    form_msg:"መልእክት", form_msg_ph:"ማዘዝ እፈልጋለሁ...",
    form_send:"በዋትስአፕ ላክ",
    footer_rights:"መብቱ በህግ የተጠበቀ ነው",
    footer_addr:"ቅዱስ ገብርኤል መንገድ፣ አትነት ህንፃ፣ ሐዋሳ ኢትዮጵያ 0934727262"
  },
  om: {
    brand:"Uffata fi Boorsaa Dhiiraa Fikadu", brand_sub:"Suuqii Dhiiraa Hawassa",
    nav_home:"Fuula Duraa", nav_items:"Oomishaalee", nav_location:"Bakka", nav_contact:"Nu Qunnamaa",
    hero_badge:"Hawassa keessatti argama",
    hero_title:"Suuqii Uffata fi Boorsaa Dhiiraa Hawassaa",
    hero_sub:"Uffata, shaartii, jeansii, kophee gogaa, boorsaa fi meeshaalee qulqullina qaban — gatii madaalawaa. Har'a nu daawwadhaa!",
    search_ph:"Maal barbaadda? (fkn. shaartii)",
    search_ph2:"Oomishaalee barbaadi...",
    btn_search:"Barbaadi", btn_browse:"Oomishaalee Ilaali", btn_visit:"Bakka Keenya",
    stat_items:"Gosoota oomishaa", stat_years:"Waggaa muuxannoo", stat_customers:"Maamila gammadee",
    items_title:"Oomishaalee Keenya", items_sub:"Wanta barbaaddu filadhu — Hawassa keessatti argatta",
    cat_all:"Hunda", cat_wear:"Uffata", cat_shoes:"Kophee", cat_bags:"Boorsaa",
    no_results:"Homtuu hin argamne 😕 Jecha biraa yaali.",
    ask:"Gaafadhu", currency:"ETB",
    location_title:"Bakka Keenya", location_sub:"Giddugala magaalaa Hawassaa keessa jirra",
    address_label:"Teessoo", address_val:"Hawassa, Itoophiyaa — Karaa Piazza, Mehal Plaza bira",
    hours_label:"Sa'aatii hojii", hours_val:"Wiixata – Sanbata: 8:30 – 20:00 · Dilbata: 9:00 – 19:00",
    phone_label:"Bilbila", open:"Amma banaa jira", closed:"Amma cufaa jira",
    directions:"Karaa Argadhu",
    contact_title:"Nu Qunnamaa", contact_sub:"Bilbilli, ergaa ykn WhatsApp nu qunnamaa — saffisaan deebii kennina!",
    call:"Bilbilli nuuf godhi", whatsapp:"WhatsApp", telegram:"Telegram",
    form_name:"Maqaa kee", form_name_ph:"fkn. Abebe",
    form_phone:"Lakkoofsa bilbilaa", form_phone_ph:"09xx xxx xxx",
    form_msg:"Ergaa", form_msg_ph:"Ajajuuf barbaada...",
    form_send:"WhatsApp'n ergi",
    footer_rights:"Mirgi seeraan eegameera",
    footer_addr:"Karaa Qulqulluu Gabreel, Ijaarsa Atnet, Hawaasa Itoophiyaa 0934727262"
  }
};

/* =========================================================
   3. PRODUCT DATA
   ========================================================= */
const PRODUCTS = [
  {cat:'wear',  emoji:'🤵',img:'trouser.jpg', price:5500, en:'Classic Two-Piece Suit',      am:'ክላሲክ ሙሉ ልብስ (ሱት)',        om:'Suutii Guutuu'},
  {cat:'wear',  emoji:'👔',img:'t-shirt 1.webp', price:2500,  en:'Formal Shirt',                am:'ሸሚዝ',                     om:'Shaartii'},
  {cat:'wear',  emoji:'👖',img:'t-shirt 2.avif', price:1200, en:'Slim-Fit Jeans',              am:'ጂንስ ሱሪ',                  om:'Jeansii'},
  {cat:'wear',  emoji:'👕',img:'jacket 1.jpg', price:450,  en:'Cotton T-Shirt',              am:'ቲሸርት',                    om:'T-Shaartii'},
  {cat:'wear',  emoji:'🧥',img:'jacket 2.webp ', price:3500, en:'Leather Jacket',              am:'የቆዳ ጃኬት',                 om:'Jaakeetii Gogaa'},
  {cat:'wear',  emoji:'🧵',img:'jacket 3.jpg', price:2800, en:'Ethiopian Traditional Wear',  am:'ባህላዊ ልብስ',               om:'Uffata Aadaa'},
  {cat:'shoes', emoji:'👟',img:'dursen shoe.jpg', price:1500, en:'Sneakers',                    am:'ስኒከርስ',                   om:'Sniikersii'},
  {cat:'shoes', emoji:'🩴',img:'dursen 2.avif', price:600,  en:'Sandals',                     am:'ሰንደል ጫማ',                 om:'Kophee Sandalii'},
  {cat:'bags',  emoji:'🎒',img:'cat backpack.jpg', price:1400, en:'Laptop Bag',                  am:'የላፕቶፕ ቦርሳ',               om:'Boorsaa Laaptooppii'},
  {cat:'bags',  emoji:'🧳',img:'lenovo.jpg', price:1800, en:'Travel Backpack',             am:'የጉዞ ቦርሳ',                 om:'Boorsaa Imalaa'},
  {cat:'bags',  emoji:'💼',img:'lenovo 2.jpg', price:2200, en:'Office Briefcase',            am:'የቢሮ ቦርሳ',                 om:'Boorsaa Waajjiraa'},
  {cat:'acc',   emoji:'👛',img:'timberland.jpg', price:700,  en:'Leather Wallet',              am:'የኪስ ቦርሳ',                 om:'Boorsaa Maallaqaa'},

];

/* =========================================================
   4. STATE + HELPERS
   ========================================================= */
const state = { lang:'en', cat:'all', q:'' };
const $  = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];

const t = key => (I18N[state.lang] && I18N[state.lang][key]) || I18N.en[key] || key;
const tgLink = () => `https://t.me/${CONFIG.telegram}`;

/* ---- Ethiopia (EAT, UTC+3) current time ---- */
function eatNow(){
  const n = new Date();
  return new Date(n.getTime() + n.getTimezoneOffset()*60000 + 3*3600000);
}
function isOpenNow(){
  const d = eatNow(), day = d.getDay(), h = d.getHours() + d.getMinutes()/60;
  if (day === 0) return h >= 9 && h < 19;        // Sunday
  return h >= 8.5 && h < 20;                      // Mon–Sat
}

/* =========================================================
   5. RENDER PRODUCTS
   ========================================================= */
function renderProducts(){
  const grid = $('#grid');
  const list = PRODUCTS.filter(p => state.cat === 'all' || p.cat === state.cat);

  if (!list.length){
    grid.innerHTML = `<p class="empty">${t('no_results')}</p>`;
    return;
  }

  grid.innerHTML = list.map((p, i) => {
    const visual = p.img
      ? `<img src="${p.img}" alt="" onerror="this.parentElement.innerHTML='${p.emoji}'" loading="lazy">`
      : p.emoji;

    return `
      <article class="card" style="animation-delay:${i*35}ms" data-link="${tgLink()}">
        <div class="thumb">
          ${visual}
          <button class="ask" aria-label="Order on Telegram">🛍️</button>
        </div>
      </article>
    `;
  }).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      window.open(card.dataset.link, '_blank');
    });
  });
}
/* =========================================================
   6. APPLY LANGUAGE
   ========================================================= */
function applyLang(){
  document.documentElement.lang = state.lang;

  $$('[data-i18n]').forEach(el => {
    const k = el.dataset.i18n;
    const val = t(k);
    if (val) el.textContent = val;
  });
  $$('[data-i18n-ph]').forEach(el => {
    const val = t(el.dataset.i18nPh);
    if (val) el.placeholder = val;
  });

  // dynamic bits
  const st = $('#status');
  const openNow = isOpenNow();
  st.className = 'status ' + (openNow ? 'open' : 'closed');
  st.querySelector('span:last-child').textContent = t(openNow ? 'open' : 'closed');

  renderProducts();
  localStorage.setItem('fm_lang', state.lang);
}

/* =========================================================
   7. INIT EVERYTHING
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {

  /* --- Theme --- */
  const savedTheme = localStorage.getItem('fm_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  $('#themeBtn').textContent = theme === 'dark' ? '☀️' : '🌙';

  $('#themeBtn').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    $('#themeBtn').textContent = next === 'dark' ? '☀️' : '🌙';
    localStorage.setItem('fm_theme', next);
  });

  /* --- Language --- */
  const savedLang = localStorage.getItem('fm_lang') || 'en';
  state.lang = I18N[savedLang] ? savedLang : 'en';
  $('#lang').value = state.lang;
  applyLang();

  $('#lang').addEventListener('change', e => {
    state.lang = e.target.value;
    applyLang();
  });

  /* --- Filters --- */
  $$('#filters .chip').forEach(chip => {
    chip.addEventListener('click', () => {
      $$('#filters .chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.cat = chip.dataset.cat;
      renderProducts();
    });
  });



  /* --- Contact form → WhatsApp --- */
  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name  = $('#fName').value.trim();
    const phone = $('#fPhone').value.trim();
    const msg   = $('#fMsg').value.trim();
    const text  = `${t('brand')}\n\n${t('form_name')}: ${name}\n${t('form_phone')}: ${phone}\n${t('form_msg')}: ${msg}`;
    $('#contactForm').addEventListener('submit', e => {
  e.preventDefault();
  window.open(tgLink(), '_blank');
});
  });

  /* --- Static contact links --- */
$('#fab').href    = `https://t.me/${CONFIG.telegram}`;

  /* --- Footer year --- */
  $('#year').textContent = new Date().getFullYear();

  /* --- Refresh open/closed every minute --- */
  setInterval(() => {
    const st = $('#status');
    if (!st) return;
    const openNow = isOpenNow();
    st.className = 'status ' + (openNow ? 'open' : 'closed');
    st.querySelector('span:last-child').textContent = t(openNow ? 'open' : 'closed');
  }, 60000);
});
/* --- Back to top button --- */
const toTop = $('#toTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400){
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});
toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});