const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

// Hero slideshow
const slides = [...document.querySelectorAll(".hero-slide")];
const dots = [...document.querySelectorAll(".slide-dot")];
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => slide.classList.toggle("active", i === activeSlide));
  dots.forEach((dot, i) => dot.classList.toggle("active", i === activeSlide));
}

function restartSlideshow() {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => showSlide(activeSlide + 1), 5000);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    restartSlideshow();
  });
});
restartSlideshow();

// Scroll reveal
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ================= TRANSLATIONS =================
const translations = {
  en: {
    nav_home:"Home", nav_about:"About", nav_services:"Services", nav_network:"Our Network", nav_join:"Join Us", nav_contact:"Contact",
    topbar_left:"Farmer-owned. Community-led. Market-connected.",
    hero_eyebrow:"Empowering Farmers", hero_title:"Together we grow. <em>Together we prosper.</em>",
    hero_text:"VIIHA brings farmers together for reliable inputs, modern farm services, transparent procurement and stronger access to markets.",
    hero_btn1:"Become a Member →", hero_btn2:"Explore Our Services",
    trust1_small:"Built for", trust1_strong:"Farmer Ownership", trust2_small:"Focused on", trust2_strong:"Transparent Trade", trust3_small:"Designed for", trust3_strong:"Rural Growth",
    impact1_title:"Farmer-led", impact1_text:"Collective ownership model", impact2_title:"Village-first", impact2_text:"Local service accessibility",
    impact3_title:"End-to-end", impact3_text:"Inputs to market linkage", impact4_title:"Traceable", impact4_text:"Transparent transactions",
    about_title:"Who we are", about_heading:"A farmer-owned platform built around trust and shared value.",
    about_text:"VIIHA Farmer Producer Organization is being developed to help farmers access dependable inputs, cost-effective services, organized procurement and direct market opportunities.",
    about_check1:"Collective input purchase", about_check2:"Quality-focused sourcing", about_check3:"Village service network", about_check4:"Market aggregation",
    about_btn:"Join the Organization",
    services_title:"What we offer", services_heading:"Practical services across the farming cycle.",
    services_text:"A unified service model that supports farmers from crop planning and input purchase to harvesting, aggregation and sale.",
    service_inputs_title:"Quality Agri Inputs", service_inputs_text:"Access to certified seeds, fertilizers, crop nutrition and responsible crop-protection solutions.", service_inputs_btn:"Express interest →",
    service_mech_title:"Farm Mechanization", service_mech_text:"Shared machinery and custom-hiring support designed to reduce individual capital burden.", service_mech_btn:"Request a service →",
    service_drone_title:"Drone Spraying", service_drone_text:"Fast and efficient agricultural spraying services.", service_drone_btn:"Book interest →",
    service_proc_title:"Crop Procurement", service_proc_text:"Organized crop collection, weighing, quality grading, lot creation and payment tracking.", service_proc_btn:"Sell through VIIHA →",
    service_storage_title:"Storage Solutions", service_storage_text:"Better storage and post-harvest support for farmers.", service_storage_btn:"Partner with us →",
    service_market_title:"Market Linkages", service_market_text:"Connecting farmers with better market opportunities.", service_market_btn:"Buyer enquiry →",
    process_title:"How it works", process_heading:"Simple steps. Collective advantage.",
    process_text:"VIIHA is designed to organize farmer demand and supply so services and market transactions can be planned more effectively.",
    process_step1_title:"Register", process_step1_text:"Share basic farmer, village, land and crop details.",
    process_step2_title:"Plan", process_step2_text:"Aggregate village-wise requirements and crop availability.",
    process_step3_title:"Serve", process_step3_text:"Coordinate inputs, spraying, machinery or procurement support.",
    process_step4_title:"Grow", process_step4_text:"Build repeatable, transparent and scalable farmer services.",
    network_eyebrow:"One network, shared progress", network_heading:"Value for every partner in agriculture.",
    network_text:"VIIHA aims to create an organized platform where farmers, buyers and service partners can collaborate with clarity.",
    farmers_title:"For Farmers", farmers_text:"Better access to inputs, services, aggregation and market opportunities through collective action.",
    buyers_title:"For Buyers", buyers_text:"Organized sourcing, crop visibility, quality coordination and farmer-level traceability.",
    partners_title:"For Partners", partners_text:"A local platform for input companies, technology providers, lenders and development institutions.",
    register_title:"Farmer membership enquiry", register_heading:"Start your journey with VIIHA.",
    register_text:"Submit your details and they will be securely sent to the VIIHA registration database.",
    call_us:"Call us", service_area:"Service area", email_label:"Email",
    farmer_name:"Farmer name *", mobile:"Mobile number *", village:"Village *", mandal:"Mandal", acres:"Total acres", crop:"Main crop", aadhaar:"Aadhaar Number *",
    select_crop:"Select crop", crop_paddy:"Paddy", crop_groundnut:"Groundnut", crop_blackgram:"Black Gram", crop_maize:"Maize", crop_other:"Other",
    service_membership:"FPO Membership", service_seeds:"Seeds & Inputs", service_drone:"Drone Spraying", service_machinery:"Machinery", service_procurement:"Crop Procurement", service_market:"Market Linkage",
    placeholder_full_name:"Full name", placeholder_mobile:"10-digit number", placeholder_village:"Village", placeholder_mandal:"Mandal", placeholder_acres:"Acres", placeholder_aadhaar:"12-digit Aadhaar Number",
    form_note:"By submitting, you consent to VIIHA contacting you about membership and farmer services.", submit:"Submit Registration →",
    cta_title:"Looking to source produce or support a farmer network?", cta_btn:"Work with VIIHA →",
    footer_subtitle:"Farmer Producer Organization", footer_tagline:"Building farmer strength through collective services, transparent transactions and market access.",
    footer_explore:"Explore", footer_about:"About VIIHA", footer_services:"Services", footer_network:"Network", footer_join:"Join Us",
    footer_services_title:"Services", footer_agri:"Agri Inputs", footer_drone:"Drone Spraying", footer_procurement:"Procurement", footer_market:"Market Linkage",
    footer_contact:"Contact", footer_address:"Venkatagiri region<br>Andhra Pradesh, India",
    footer_copyright:"© 2026 VIIHA Farmer Producer Organization. All rights reserved.", footer_future:"Farmer-owned. Future-ready."
  },
  te: {
    nav_home:"హోమ్", nav_about:"మా గురించి", nav_services:"సేవలు", nav_network:"మా నెట్‌వర్క్", nav_join:"చేరండి", nav_contact:"సంప్రదించండి",
    topbar_left:"రైతుల యాజమాన్యం. సమాజం ఆధ్వర్యం. మార్కెట్‌తో అనుసంధానం.",
    hero_eyebrow:"రైతులకు సాధికారత కల్పించడం", hero_title:"కలిసి పండిద్దాం. <em>కలిసి అభివృద్ధి చెందుదాం.</em>",
    hero_text:"నాణ్యమైన వ్యవసాయ ఇన్‌పుట్లు, ఆధునిక సేవలు, పారదర్శక కొనుగోలు మరియు మెరుగైన మార్కెట్ అనుసంధానం కోసం VIIHA రైతులను ఒకటిగా తీసుకువస్తుంది.",
    hero_btn1:"సభ్యుడిగా చేరండి →", hero_btn2:"మా సేవలను చూడండి",
    trust1_small:"నిర్మించబడింది", trust1_strong:"రైతుల యాజమాన్యం కోసం", trust2_small:"దృష్టి", trust2_strong:"పారదర్శక వాణిజ్యంపై", trust3_small:"రూపొందించబడింది", trust3_strong:"గ్రామీణ అభివృద్ధి కోసం",
    impact1_title:"రైతుల ఆధ్వర్యం", impact1_text:"సమిష్టి యాజమాన్య నమూనా", impact2_title:"గ్రామ కేంద్రిత", impact2_text:"స్థానిక సేవల అందుబాటు",
    impact3_title:"పూర్తి సేవలు", impact3_text:"ఇన్‌పుట్ల నుంచి మార్కెట్ వరకు", impact4_title:"పారదర్శకత", impact4_text:"ట్రేస్ చేయగల లావాదేవీలు",
    about_title:"మేమెవరం", about_heading:"నమ్మకం మరియు ఉమ్మడి విలువపై నిర్మించిన రైతుల వేదిక.",
    about_text:"VIIHA రైతులకు నమ్మదగిన ఇన్‌పుట్లు, తక్కువ ఖర్చుతో సేవలు, వ్యవస్థీకృత కొనుగోలు మరియు ప్రత్యక్ష మార్కెట్ అవకాశాలను అందించడానికి అభివృద్ధి చేయబడుతోంది.",
    about_check1:"సామూహిక ముడిసరుకుల కొనుగోలు", about_check2:"నాణ్యమైన వనరుల సమీకరణ", about_check3:"గ్రామీణ సేవా జాలం", about_check4:"మార్కెట్ సముచ్ఛయం",
    about_btn:"సంస్థలో చేరండి",
    services_title:"మేము అందించేవి", services_heading:"వ్యవసాయ చక్రం మొత్తం మీద ఉపయోగకరమైన సేవలు.",
    services_text:"పంట ప్రణాళిక మరియు ఇన్‌పుట్ల కొనుగోలు నుండి కోత, సమీకరణ మరియు విక్రయం వరకు రైతులకు మద్దతు ఇచ్చే సమగ్ర సేవా విధానం.",
    service_inputs_title:"నాణ్యమైన వ్యవసాయ ఇన్‌పుట్లు", service_inputs_text:"ధృవీకరించిన విత్తనాలు, ఎరువులు, పంట పోషణ మరియు బాధ్యతాయుతమైన పంట సంరక్షణ పరిష్కారాలు.", service_inputs_btn:"ఆసక్తిని తెలియజేయండి →",
    service_mech_title:"వ్యవసాయ యాంత్రీకరణ", service_mech_text:"వ్యక్తిగత పెట్టుబడి భారాన్ని తగ్గించడానికి భాగస్వామ్య యంత్రాలు మరియు కస్టమ్ అద్దె సేవలు.", service_mech_btn:"సేవను అభ్యర్థించండి →",
    service_drone_title:"డ్రోన్ స్ప్రేయింగ్", service_drone_text:"వేగవంతమైన మరియు సమర్థవంతమైన వ్యవసాయ స్ప్రేయింగ్ సేవలు.", service_drone_btn:"బుకింగ్ ఆసక్తిని తెలియజేయండి →",
    service_proc_title:"పంట కొనుగోలు", service_proc_text:"వ్యవస్థీకృత పంట సేకరణ, తూకం, నాణ్యత తనిఖీ, లాట్ తయారీ మరియు చెల్లింపు నిర్వహణ.", service_proc_btn:"VIIHA ద్వారా విక్రయించండి →",
    service_storage_title:"నిల్వ పరిష్కారాలు", service_storage_text:"రైతులకు మెరుగైన నిల్వ మరియు పంట కోత తర్వాత సహాయం.", service_storage_btn:"మాతో భాగస్వామ్యం అవ్వండి →",
    service_market_title:"మార్కెట్ అనుసంధానం", service_market_text:"రైతులను మెరుగైన మార్కెట్ అవకాశాలతో అనుసంధానించడం.", service_market_btn:"కొనుగోలుదారు విచారణ →",
    process_title:"ఇది ఎలా పనిచేస్తుంది", process_heading:"సులభమైన దశలు. సమిష్టి ప్రయోజనం.",
    process_text:"రైతుల అవసరాలు మరియు సరఫరాను సమన్వయం చేసి సేవలు మరియు మార్కెట్ లావాదేవీలను మరింత సమర్థవంతంగా ప్రణాళిక చేయడానికి VIIHA రూపొందించబడింది.",
    process_step1_title:"నమోదు", process_step1_text:"రైతు, గ్రామం, భూమి మరియు పంట వివరాలను నమోదు చేయండి.",
    process_step2_title:"ప్రణాళిక", process_step2_text:"గ్రామాల వారీగా అవసరాలు మరియు పంట లభ్యతను సమీకరించండి.",
    process_step3_title:"సేవలు", process_step3_text:"ఇన్‌పుట్లు, స్ప్రేయింగ్, యంత్రాలు లేదా కొనుగోలు సేవలను సమన్వయం చేయండి.",
    process_step4_title:"అభివృద్ధి", process_step4_text:"పునరావృతం చేయగల, పారదర్శక మరియు విస్తరించగల రైతు సేవలను నిర్మించండి.",
    network_eyebrow:"ఒక నెట్‌వర్క్, ఉమ్మడి పురోగతి", network_heading:"వ్యవసాయంలోని ప్రతి భాగస్వామికి విలువ.",
    network_text:"రైతులు, కొనుగోలుదారులు మరియు సేవా భాగస్వాములు స్పష్టతతో కలిసి పనిచేయడానికి VIIHA ఒక వ్యవస్థీకృత వేదికను రూపొందిస్తోంది.",
    farmers_title:"రైతుల కోసం", farmers_text:"సమిష్టి చర్య ద్వారా ఇన్‌పుట్లు, సేవలు, సమీకరణ మరియు మార్కెట్ అవకాశాలకు మెరుగైన ప్రాప్యత.",
    buyers_title:"కొనుగోలుదారుల కోసం", buyers_text:"వ్యవస్థీకృత కొనుగోలు, పంట సమాచారం, నాణ్యత సమన్వయం మరియు రైతు స్థాయి ట్రేసబిలిటీ.",
    partners_title:"భాగస్వాముల కోసం", partners_text:"ఇన్‌పుట్ కంపెనీలు, టెక్నాలజీ ప్రొవైడర్లు, రుణదాతలు మరియు అభివృద్ధి సంస్థల కోసం స్థానిక వేదిక.",
    register_title:"రైతు సభ్యత్వ నమోదు", register_heading:"VIIHAతో మీ ప్రయాణాన్ని ప్రారంభించండి.",
    register_text:"మీ వివరాలను సమర్పించండి. అవి సురక్షితంగా VIIHA నమోదు డేటాబేస్‌కు పంపబడతాయి.",
    call_us:"మాకు కాల్ చేయండి", service_area:"సేవా ప్రాంతం", email_label:"ఇమెయిల్",
    farmer_name:"రైతు పేరు *", mobile:"మొబైల్ నంబర్ *", village:"గ్రామం *", mandal:"మండలం", acres:"మొత్తం ఎకరాలు", crop:"ప్రధాన పంట", aadhaar:"ఆధార్ నంబర్ *",
    select_crop:"పంటను ఎంచుకోండి", crop_paddy:"వరి", crop_groundnut:"వేరుశెనగ", crop_blackgram:"మినుములు", crop_maize:"మొక్కజొన్న", crop_other:"ఇతర",
    service_membership:"FPO సభ్యత్వం", service_seeds:"విత్తనాలు మరియు ఇన్‌పుట్లు", service_drone:"డ్రోన్ స్ప్రేయింగ్", service_machinery:"యంత్రాలు", service_procurement:"పంట కొనుగోలు", service_market:"మార్కెట్ అనుసంధానం",
    placeholder_full_name:"పూర్తి పేరు", placeholder_mobile:"10 అంకెల మొబైల్ నంబర్", placeholder_village:"గ్రామం", placeholder_mandal:"మండలం", placeholder_acres:"ఎకరాలు", placeholder_aadhaar:"12 అంకెల ఆధార్ నంబర్",
    form_note:"సమర్పించడం ద్వారా, సభ్యత్వం మరియు రైతు సేవల గురించి VIIHA మిమ్మల్ని సంప్రదించడానికి మీరు అంగీకరిస్తున్నారు.", submit:"నమోదు చేయండి →",
    cta_title:"వ్యవసాయ ఉత్పత్తులను కొనుగోలు చేయాలనుకుంటున్నారా లేదా రైతు నెట్‌వర్క్‌కు మద్దతు ఇవ్వాలనుకుంటున్నారా?", cta_btn:"VIIHAతో పనిచేయండి →",
    footer_subtitle:"రైతు ఉత్పత్తిదారుల సంస్థ", footer_tagline:"సమిష్టి సేవలు, పారదర్శక లావాదేవీలు మరియు మార్కెట్ అనుసంధానం ద్వారా రైతుల అభివృద్ధి.",
    footer_explore:"అన్వేషించండి", footer_about:"VIIHA గురించి", footer_services:"సేవలు", footer_network:"నెట్‌వర్క్", footer_join:"చేరండి",
    footer_services_title:"సేవలు", footer_agri:"వ్యవసాయ ఇన్‌పుట్లు", footer_drone:"డ్రోన్ స్ప్రేయింగ్", footer_procurement:"కొనుగోలు", footer_market:"మార్కెట్ అనుసంధానం",
    footer_contact:"సంప్రదించండి", footer_address:"వెంకటగిరి ప్రాంతం<br>ఆంధ్రప్రదేశ్, భారతదేశం",
    footer_copyright:"© 2026 VIIHA రైతు ఉత్పత్తిదారుల సంస్థ. అన్ని హక్కులు రిజర్వ్.", footer_future:"రైతుల యాజమాన్యం. భవిష్యత్తుకు సిద్ధం."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  const data = translations[lang];
  if (!data) return;

  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.dataset.key;
    if (data[key] !== undefined) el.innerHTML = data[key];
  });

  document.querySelectorAll("[data-placeholder-key]").forEach(el => {
    const key = el.dataset.placeholderKey;
    if (data[key] !== undefined) el.placeholder = data[key];
  });

  document.querySelectorAll("[data-option-key]").forEach(el => {
    const key = el.dataset.optionKey;
    if (data[key] !== undefined) el.textContent = data[key];
  });
}

const langSelect = document.getElementById("lang");
langSelect.addEventListener("change", () => setLanguage(langSelect.value));
setLanguage(langSelect.value);

// Registration form
const form = document.getElementById("farmerForm");
const submitBtn = document.getElementById("submitBtn");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", async event => {
  event.preventDefault();
  formMessage.className = "form-message";
  formMessage.textContent = "";
  submitBtn.disabled = true;
  submitBtn.textContent = "Submitting...";

  const formData = new FormData(form);

  const payload = {
  farmerName: String(formData.get("farmerName") || "").trim(),
  mobile: String(formData.get("mobile") || "").trim(),
  village: String(formData.get("village") || "").trim(),
  mandal: String(formData.get("mandal") || "").trim(),
  acres: formData.get("acres") || null,
  crop: String(formData.get("crop") || "").trim(),
  aadhaar: String(formData.get("aadhaar") || "").trim(),
  language: langSelect.value
  };

  if (!/^\d{12}$/.test(payload.aadhaar)) {
  formMessage.className = "form-message error";
  formMessage.textContent = "Please enter a valid 12-digit Aadhaar number.";
  submitBtn.disabled = false;
  submitBtn.textContent = "Submit Registration →";
  return;
}

  try {
  const formBody = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    formBody.append(key, value ?? "");
  });

  await fetch(
    "https://script.google.com/macros/s/AKfycby31thsipEP-ctYSJRpdKLXIYzvkh-anHL-0Z7DGKeSF0-PJJIYlDHLP12zu5ph93N0/exec",
    {
      method: "POST",
      mode: "no-cors",
      body: formBody
    }
  );

  formMessage.className = "form-message success";
  formMessage.textContent =
    "Thank you. Your registration has been submitted.";

  form.reset();

} catch (error) {
  console.error("Registration error:", error);

  formMessage.className = "form-message error";
  formMessage.textContent =
    "Unable to submit the registration. Please try again.";

} finally {
  submitBtn.disabled = false;
  submitBtn.textContent = translations[langSelect.value].submit;
}
});
