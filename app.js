/* =========================================================
   Ahmed Wagdy — portfolio interactions
   - bilingual switch (AR / EN) with RTL support
   - work filters + video lightbox
   - scroll reveal, mobile menu, contact form
   ========================================================= */
(function () {
  "use strict";

  /* ------------------------------------------------------
     1. TRANSLATIONS
     ------------------------------------------------------ */
  const I18N = {
    en: {
      "brand.role": "Video Editor",
      "a11y.skip": "Skip to work",

      "nav.work": "Work",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.process": "Process",
      "nav.contact": "Contact",
      "nav.cta": "Let's talk",

      "hero.badge": "Available for new projects — Cairo / Remote",
      "hero.t1": "I cut stories",
      "hero.t2": "that make people stay.",
      "hero.sub": "Ads, music videos, podcasts and short-form content — edited with rhythm, motion and an obsession with the first three seconds.",
      "hero.cta1": "Watch showreel",
      "hero.cta2": "See the work",

      "stats.projects": "Projects delivered",
      "stats.views": "Views generated",
      "stats.years": "Years editing",
      "stats.clients": "Happy clients",

      "work.eyebrow": "Selected work",
      "work.title": "Cuts that carry the story.",
      "work.sub": "A small selection. Every project below is a placeholder — swap the link and it plays here.",
      "work.filter.all": "All",
      "work.filter.ads": "Real Estate",
      "work.filter.music": "Music videos",
      "work.filter.pod": "Documentary",
      "work.filter.short": "Short form",
      "work.note": "Want the full reel or raw case studies?",
      "work.noteLink": "Request the private playlist",

      "w4.title": "Reels — 01", "w4.cat": "Short form",
      "w5.title": "Reels — 02", "w5.cat": "Short form",
      "w6.title": "Reels — 03", "w6.cat": "Short form",
      "w7.title": "Reels — 04", "w7.cat": "Short form",
      "w8.title": "Reels — 05", "w8.cat": "Short form",
      "w9.title": "Reels — 06", "w9.cat": "Short form",
      "w10.title": "Reels — 07", "w10.cat": "Short form",
      "w11.title": "Reels — 08", "w11.cat": "Short form",
      "w12.title": "Reels — 09", "w12.cat": "Short form",
      "w13.title": "Reels — 10", "w13.cat": "Short form",
      "w14.title": "Reels — 11", "w14.cat": "Short form",
      "w15.title": "Reels — 12", "w15.cat": "Short form",
      "w16.title": "Reels — 13", "w16.cat": "Short form",
      "w17.title": "Reels — 14", "w17.cat": "Short form",
      "w18.title": "Real Estate — 01", "w18.cat": "Real Estate",
      "w19.title": "Real Estate — 02", "w19.cat": "Real Estate",
      "w20.title": "Real Estate — 03", "w20.cat": "Real Estate",
      "w21.title": "Real Estate — 04", "w21.cat": "Real Estate",
      "w22.title": "Real Estate — 05", "w22.cat": "Real Estate",
      "w23.title": "Real Estate — 06", "w23.cat": "Real Estate",
      "w24.title": "Music Video — 01", "w24.cat": "Music video",
      "w25.title": "Music Video — 02", "w25.cat": "Music video",
      "w26.title": "Story / Documentary — 01", "w26.cat": "Documentary",

      "about.eyebrow": "About",
      "about.title": "Editing is rhythm, not just cuts.",
      "about.p1": "I'm Ahmed, a video editor based in Cairo. For the past six years I've been turning raw footage into pieces that hold attention — from 15-second hooks to 20-minute interviews.",
      "about.p2": "My process is simple: understand what the video must achieve, build the story in the timeline, then polish every frame until the edit feels invisible. Fast turnarounds, clear communication, no drama.",
      "about.li1": "Story-first structure, retention-driven pacing",
      "about.li2": "Sound design and color included, not an upsell",
      "about.li3": "Built for every ratio: 16:9, 9:16, 1:1, 4:5",
      "about.cta": "Start a project",
      "about.photo": "Your photo here",

      "services.eyebrow": "Services",
      "services.title": "What I can take off your plate.",
      "services.sub": "From a single reel to a full post-production pipeline.",

      "sv1.title": "Video editing & post",
      "sv1.desc": "Narrative cuts, pacing, transitions and a clean finish for ads, films and YouTube.",
      "sv1.b1": "Story structure & rough cut",
      "sv1.b2": "Titles, subtitles, lower thirds",
      "sv1.b3": "Multi-cam & interview editing",

      "sv2.title": "Short-form & reels",
      "sv2.desc": "Vertical edits built to stop the scroll in the first three seconds and keep it.",
      "sv2.b1": "Hook-first structure",
      "sv2.b2": "Animated captions",
      "sv2.b3": "Batch delivery for monthly content",

      "sv3.title": "Motion graphics & VFX",
      "sv3.desc": "Kinetic typography, logo reveals, tracking and clean-up work in After Effects.",
      "sv3.b1": "Animated titles & infographics",
      "sv3.b2": "Screen replacements",
      "sv3.b3": "Object removal & clean plates",

      "sv4.title": "Color & sound",
      "sv4.desc": "A consistent grade and a mix that sounds right on phone speakers and headphones.",
      "sv4.b1": "Log footage & LUT workflow",
      "sv4.b2": "Noise & echo clean-up",
      "sv4.b3": "Music licensing-friendly mixes",

      "process.eyebrow": "Process",
      "process.title": "From brief to final export.",
      "st1.title": "Brief & footage",
      "st1.desc": "You send the files, references and the goal. I confirm scope, timeline and price in writing.",
      "st2.title": "Assembly cut",
      "st2.desc": "Story first. You get a rough cut to approve before any polish, so we never build on the wrong edit.",
      "st3.title": "Polish & motion",
      "st3.desc": "Grade, sound design, graphics and captions. This is where the video starts to feel expensive.",
      "st4.title": "Delivery",
      "st4.desc": "Final files in every ratio, two revision rounds included, project files archived for a year.",

      "testi.eyebrow": "Kind words",
      "testi.title": "Clients come back. That's the metric.",
      "q1.quote": "“He understood the brief faster than we did. The first cut was already 90% there.”",
      "q1.name": "Mariam H.", "q1.role": "Brand manager, agency",
      "q2.quote": "“Our watch time jumped noticeably after he restructured the first 30 seconds.”",
      "q2.name": "Omar S.", "q2.role": "YouTube creator",
      "q3.quote": "“Clean communication, zero chasing, delivered a day early. Rare combination.”",
      "q3.name": "Nour A.", "q3.role": "Music label",

      "contact.eyebrow": "Contact",
      "contact.title": "Got footage? Let's make it hit.",
      "contact.sub": "Tell me about the project and I'll reply within 24 hours with availability and a clear quote.",
      "contact.copy": "Copy",
      "contact.copied": "Email copied",

      "form.name": "Your name",
      "form.namePh": "Sara Ahmed",
      "form.email": "Email",
      "form.emailPh": "you@company.com",
      "form.type": "Project type",
      "form.type1": "Ad / commercial",
      "form.type2": "Music video",
      "form.type3": "Podcast / long form",
      "form.type4": "Short-form content",
      "form.type5": "Something else",
      "form.msg": "Project details",
      "form.msgPh": "Footage length, deadline, references...",
      "form.send": "Send project brief",
      "form.hint": "Opens your email app with everything filled in.",
      "form.required": "Please fill in the required fields.",
      "form.opening": "Opening your email app…",

      "footer.tag": "Video editor — Cairo, working worldwide.",
      "footer.rights": "All rights reserved.",

      "modal.placeholder": "Video placeholder — add your YouTube, Vimeo or Drive link.",
      "modal.playing": "Now playing",
      "modal.reel": "Showreel 2026 — placeholder"
    },

    ar: {
      "brand.role": "مونتير فيديو",
      "a11y.skip": "تخطَّ إلى الأعمال",

      "nav.work": "أعمالي",
      "nav.about": "عني",
      "nav.services": "الخدمات",
      "nav.process": "طريقة العمل",
      "nav.contact": "تواصل",
      "nav.cta": "يلا نتكلم",

      "hero.badge": "متاح لمشاريع جديدة — القاهرة / عن بُعد",
      "hero.t1": "بصنع من اللقطات",
      "hero.t2": "حكاية مش بتتفلت.",
      "hero.sub": "إعلانات، فيديو كليب، بودكاست ومحتوى قصير — مونتاج بإيقاع وحركة، واهتمام مجنون بأول ٣ ثواني.",
      "hero.cta1": "شوف الريل",
      "hero.cta2": "اتفرج على الشغل",

      "stats.projects": "مشروع منفَّذ",
      "stats.views": "مشاهدة",
      "stats.years": "سنوات مونتاج",
      "stats.clients": "عميل سعيد",

      "work.eyebrow": "مختارات من الشغل",
      "work.title": "مونتاج بيوصّل الحكاية.",
      "work.sub": "شوية شغل مختار. كل مشروع تحت ده Placeholder — بدّل اللينك والفيديو هيشتغل هنا.",
      "work.filter.all": "الكل",
      "work.filter.ads": "عقار",
      "work.filter.music": "فيديو كليب",
      "work.filter.pod": "وثائقي",
      "work.filter.short": "محتوى قصير",
      "work.note": "عايز الريل الكامل أو دراسات الحالة؟",
      "work.noteLink": "اطلب البلاي ليست الخاصة",

      "w4.title": "ريلز — ٠١", "w4.cat": "محتوى قصير",
      "w5.title": "ريلز — ٠٢", "w5.cat": "محتوى قصير",
      "w6.title": "ريلز — ٠٣", "w6.cat": "محتوى قصير",
      "w7.title": "ريلز — ٠٤", "w7.cat": "محتوى قصير",
      "w8.title": "ريلز — ٠٥", "w8.cat": "محتوى قصير",
      "w9.title": "ريلز — ٠٦", "w9.cat": "محتوى قصير",
      "w10.title": "ريلز — ٠٧", "w10.cat": "محتوى قصير",
      "w11.title": "ريلز — ٠٨", "w11.cat": "محتوى قصير",
      "w12.title": "ريلز — ٠٩", "w12.cat": "محتوى قصير",
      "w13.title": "ريلز — ١٠", "w13.cat": "محتوى قصير",
      "w14.title": "ريلز — ١١", "w14.cat": "محتوى قصير",
      "w15.title": "ريلز — ١٢", "w15.cat": "محتوى قصير",
      "w16.title": "ريلز — ١٣", "w16.cat": "محتوى قصير",
      "w17.title": "ريلز — ١٤", "w17.cat": "محتوى قصير",
      "w18.title": "عقار — ٠١", "w18.cat": "عقار",
      "w19.title": "عقار — ٠٢", "w19.cat": "عقار",
      "w20.title": "عقار — ٠٣", "w20.cat": "عقار",
      "w21.title": "عقار — ٠٤", "w21.cat": "عقار",
      "w22.title": "عقار — ٠٥", "w22.cat": "عقار",
      "w23.title": "عقار — ٠٦", "w23.cat": "عقار",
      "w24.title": "فيديو كليب — ٠١", "w24.cat": "فيديو كليب",
      "w25.title": "فيديو كليب — ٠٢", "w25.cat": "فيديو كليب",
      "w26.title": "قصة / وثائقي — ٠١", "w26.cat": "وثائقي",

      "about.eyebrow": "عني",
      "about.title": "المونتاج إيقاع، مش مجرد قطعات.",
      "about.p1": "أنا أحمد، مونتير فيديو من القاهرة. من ٦ سنين بحوّل المادة الخام لحاجة بتخلي الناس تكمّل مشاهدة — من هوك ١٥ ثانية لحد مقابلة ٢٠ دقيقة.",
      "about.p2": "طريقة شغلي بسيطة: أفهم الفيديو لازم يحقق إيه، أبني الحكاية على التايم لاين، وبعدين أظبط كل فريم لحد ما المونتاج يبقى مش باين. تسليم سريع، تواصل واضح، ومن غير وجع دماغ.",
      "about.li1": "بناء يبدأ من الحكاية وإيقاع بيحافظ على المشاهد",
      "about.li2": "الصوت والتلوين داخل الشغل، مش إضافة مدفوعة",
      "about.li3": "تصدير لكل المقاسات: 16:9 و 9:16 و 1:1 و 4:5",
      "about.cta": "ابدأ مشروع",
      "about.photo": "صورتك هنا",

      "services.eyebrow": "الخدمات",
      "services.title": "إيه اللي أقدر أشيله من على كتفك.",
      "services.sub": "من ريل واحد لحد خط إنتاج كامل للمرحلة الأخيرة.",

      "sv1.title": "مونتاج ومرحلة ما بعد الإنتاج",
      "sv1.desc": "قطعات سردية، إيقاع، انتقالات وتشطيب نظيف للإعلانات والأفلام ويوتيوب.",
      "sv1.b1": "بناء الحكاية والقطع المبدئي",
      "sv1.b2": "تايتلات وترجمة ولوَر ثيردز",
      "sv1.b3": "مونتاج مقابلات ومتعدد الكاميرات",

      "sv2.title": "محتوى قصير وريلز",
      "sv2.desc": "مونتاج رأسي مصمم يوقف السكرول في أول ٣ ثواني ويخلّيه يكمل.",
      "sv2.b1": "هوك في أول ثانية",
      "sv2.b2": "كابشن متحرك",
      "sv2.b3": "تسليم بالجملة للمحتوى الشهري",

      "sv3.title": "موشن جرافيك ومؤثرات",
      "sv3.desc": "تايبوجرافي متحركة، لوجو ريفيل، تتبع وتنظيف مشاهد على أفتر إفكتس.",
      "sv3.b1": "تايتلات وإنفوجرافيك متحرك",
      "sv3.b2": "تبديل شاشات الموبايل واللابتوب",
      "sv3.b3": "إزالة عناصر وتنظيف الكادر",

      "sv4.title": "تلوين وصوت",
      "sv4.desc": "جراد موحّد وميكس بيبان كويس على سماعة الموبايل والهيدفون.",
      "sv4.b1": "شغل على اللوج و LUT",
      "sv4.b2": "تنظيف نويز وإيكو",
      "sv4.b3": "ميكس مناسب لترخيص الموسيقى",

      "process.eyebrow": "طريقة العمل",
      "process.title": "من البريف للتسليم النهائي.",
      "st1.title": "البريف والمادة",
      "st1.desc": "تبعت الملفات والمراجع والهدف. أأكد النطاق والوقت والسعر كتابةً.",
      "st2.title": "القطع المبدئي",
      "st2.desc": "الحكاية الأول. تستلم نسخة مبدئية توافق عليها قبل أي تشطيب.",
      "st3.title": "التشطيب والموشن",
      "st3.desc": "تلوين، تصميم صوت، جرافيك وكابشن. هنا الفيديو بيبدأ يبان غالي.",
      "st4.title": "التسليم",
      "st4.desc": "ملفات نهائية بكل المقاسات، جولتين تعديل، وأرشيف للمشروع لمدة سنة.",

      "testi.eyebrow": "كلام العملاء",
      "testi.title": "العملاء بيرجعوا. ده المقياس.",
      "q1.quote": "«فهم البريف أسرع مننا. أول نسخة كانت جاهزة بنسبة ٩٠٪.»",
      "q1.name": "مريم ح.", "q1.role": "مديرة براند في وكالة",
      "q2.quote": "«وقت المشاهدة زاد بشكل واضح بعد ما أعاد بناء أول ٣٠ ثانية.»",
      "q2.name": "عمر س.", "q2.role": "صانع محتوى يوتيوب",
      "q3.quote": "«تواصل محترم، من غير مطاردة، وسلّم قبل الميعاد بيوم. تركيبة نادرة.»",
      "q3.name": "نور أ.", "q3.role": "شركة إنتاج موسيقي",

      "contact.eyebrow": "تواصل",
      "contact.title": "عندك مادة؟ خلّيها تفرق.",
      "contact.sub": "احكيلي عن المشروع وهرد خلال ٢٤ ساعة بالمواعيد والسعر بشكل واضح.",
      "contact.copy": "نسخ",
      "contact.copied": "تم نسخ الإيميل",

      "form.name": "اسمك",
      "form.namePh": "سارة أحمد",
      "form.email": "الإيميل",
      "form.emailPh": "you@company.com",
      "form.type": "نوع المشروع",
      "form.type1": "إعلان / كوميرشال",
      "form.type2": "فيديو كليب",
      "form.type3": "بودكاست / فيديو طويل",
      "form.type4": "محتوى قصير",
      "form.type5": "حاجة تانية",
      "form.msg": "تفاصيل المشروع",
      "form.msgPh": "طول المادة، الموعد النهائي، مراجع...",
      "form.send": "ابعت البريف",
      "form.hint": "هيفتح برنامج الإيميل وكل حاجة متعبّية.",
      "form.required": "من فضلك اكمل الحقول المطلوبة.",
      "form.opening": "بفتح برنامج الإيميل…",

      "footer.tag": "مونتير فيديو — القاهرة، وشغال مع العالم كله.",
      "footer.rights": "جميع الحقوق محفوظة.",

      "modal.placeholder": "مكان الفيديو — ضيف لينك يوتيوب أو فيميو أو درايف.",
      "modal.playing": "بيشغّل الآن",
      "modal.reel": "ريل ٢٠٢٦ — Placeholder"
    }
  };

  const STORAGE_KEY = "aw-lang";
  const MAIL = "hello@ahmedwagdy.com";

  const $ = (sel, scope) => (scope || document).querySelector(sel);
  const $$ = (sel, scope) => Array.from((scope || document).querySelectorAll(sel));

  let lang = "en";

  function applyLang(next, persist) {
    lang = I18N[next] ? next : "en";
    const dict = I18N[lang];

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    $$("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.title = lang === "ar"
      ? "أحمد الكوتب — مونتير فيديو"
      : "Ahmed Elkotb — Video Editor";

    const meta = $('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", lang === "ar"
        ? "بورتفوليو أحمد وجدي — مونتير فيديو. إعلانات، فيديو كليب، بودكاست ومحتوى قصير بمونتاج مدروس."
        : "Portfolio of Ahmed Wagdy — video editor and storyteller. Ads, music videos, podcasts and short-form content edited with rhythm and intention.");
    }

    const toggle = $("#langToggle");
    if (toggle) {
      const label = toggle.querySelector(".lang-toggle__current");
      if (label) label.textContent = lang === "ar" ? "EN" : "AR";
      toggle.setAttribute("aria-label", lang === "ar" ? "Switch to English" : "التبديل للعربية");
    }

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    }

    // keep the open modal consistent (read straight from the DOM: the
    // modal module is initialised further down)
    const openModal = document.getElementById("videoModal");
    if (openModal && openModal.classList.contains("is-open")) {
      const frame = document.querySelector("#modalVideo iframe");
      const placeholderText = document.querySelector("#modalVideo .modal__placeholder p");
      if (placeholderText) placeholderText.textContent = dict["modal.placeholder"];
      if (!frame) {
        const titleEl = document.getElementById("modalTitle");
        if (titleEl) titleEl.textContent = dict["modal.reel"];
      }
    }
  }

  /* ------------------------------------------------------
     2. LANGUAGE SWITCH
     ------------------------------------------------------ */
  const stored = (() => {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  })();
  const prefersArabic = (navigator.language || "").toLowerCase().indexOf("ar") === 0;

  applyLang(stored || (prefersArabic ? "ar" : "en"), false);

  const langToggle = $("#langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      applyLang(lang === "ar" ? "en" : "ar", true);
    });
  }

  /* ------------------------------------------------------
     3. HEADER / MENU
     ------------------------------------------------------ */
  const header = $("#siteHeader");
  const onScroll = () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const menuBtn = $("#menuBtn");
  const siteNav = $("#siteNav");
  const closeMenu = () => {
    if (!menuBtn || !siteNav) return;
    menuBtn.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  };
  if (menuBtn && siteNav) {
    menuBtn.addEventListener("click", () => {
      const open = menuBtn.getAttribute("aria-expanded") === "true";
      menuBtn.setAttribute("aria-expanded", String(!open));
      siteNav.classList.toggle("is-open", !open);
    });
    $$("a", siteNav).forEach((a) => a.addEventListener("click", closeMenu));
  }

  /* ------------------------------------------------------
     4. SCROLL REVEAL
     ------------------------------------------------------ */
  const revealEls = $$("[data-reveal]");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ------------------------------------------------------
     5. WORK FILTERS
     ------------------------------------------------------ */
  const filters = $$(".filter");
  const cards = $$("#workGrid .card");
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.getAttribute("data-filter");
      filters.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });
      cards.forEach((card) => {
        const show = value === "all" || card.getAttribute("data-cat") === value;
        card.classList.toggle("is-hidden", !show);
        if (show) {
          card.classList.remove("is-visible");
          // re-trigger a light fade using requestAnimationFrame
          requestAnimationFrame(() => card.classList.add("is-visible"));
        }
      });
    });
  });

  /* ------------------------------------------------------
     6. VIDEO LIGHTBOX
     ------------------------------------------------------ */
  const modal = $("#videoModal");
  const modalVideo = $("#modalVideo");
  const modalTitle = $("#modalTitle");
  const modalCat = $("#modalCat");
  let activeVideoSrc = "";
  let lastFocused = null;

  function embedUrl(url) {
    if (!url) return "";
    try {
      const u = new URL(url, window.location.href);
      const host = u.hostname.replace(/^www\./, "");

      if (host === "youtu.be") {
        return "https://www.youtube.com/embed/" + u.pathname.slice(1) + "?autoplay=1&rel=0";
      }
      if (host.endsWith("youtube.com")) {
        if (u.pathname.startsWith("/embed/")) return url;
        if (u.pathname.startsWith("/shorts/")) {
          return "https://www.youtube.com/embed/" + u.pathname.split("/")[2] + "?autoplay=1&rel=0";
        }
        const id = u.searchParams.get("v");
        if (id) return "https://www.youtube.com/embed/" + id + "?autoplay=1&rel=0";
      }
      if (host.endsWith("vimeo.com")) {
        const id = u.pathname.split("/").filter(Boolean)[0];
        if (id) return "https://player.vimeo.com/video/" + id + "?autoplay=1";
      }
      if (host.endsWith("drive.google.com")) {
        const fileId = u.pathname.split("/")[3] || u.searchParams.get("id");
        if (fileId) return "https://drive.google.com/file/d/" + fileId + "/preview";
      }
      return url;
    } catch (e) {
      return "";
    }
  }

  function placeholderMarkup() {
    const dict = I18N[lang];
    return (
      '<div class="modal__placeholder">' +
        '<span class="modal__playring" aria-hidden="true">' +
          '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M9 6l9 6-9 6z" fill="currentColor"/></svg>' +
        "</span>" +
        "<p>" + dict["modal.placeholder"] + "</p>" +
        '<code>&lt;button data-video="https://youtu.be/…"&gt;</code>' +
      "</div>"
    );
  }

  function openModal(opts) {
    if (!modal) return;
    lastFocused = document.activeElement;
    activeVideoSrc = opts.src || "";

    if (activeVideoSrc) {
      modalVideo.innerHTML = '<iframe src="' + activeVideoSrc + '" title="' +
        (opts.title || "Video") + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture" allowfullscreen loading="lazy"></iframe>';
    } else {
      modalVideo.innerHTML = placeholderMarkup();
    }

    modalTitle.textContent = opts.title || "";
    modalCat.textContent = opts.cat || "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const closeBtn = $(".modal__close", modal);
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    activeVideoSrc = "";
    // stop playback
    window.setTimeout(() => { modalVideo.innerHTML = placeholderMarkup(); }, 320);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  $$("[data-open-video]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const titleKey = btn.getAttribute("data-title-key");
      const catKey = btn.getAttribute("data-cat-key");
      const dict = I18N[lang];
      openModal({
        src: embedUrl(btn.getAttribute("data-video")),
        title: (titleKey && dict[titleKey]) || btn.getAttribute("data-title") || "",
        cat: (catKey && dict[catKey]) || btn.getAttribute("data-cat-label") || ""
      });
    });
  });

  const reelBtn = $("[data-open-reel]");
  if (reelBtn) {
    reelBtn.addEventListener("click", () => {
      openModal({
        src: "",
        title: I18N[lang]["modal.reel"],
        cat: lang === "ar" ? "2026 · 01:30" : "2026 · 01:30"
      });
    });
  }

  $$("[data-close-modal]").forEach((el) => el.addEventListener("click", closeModal));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("is-open")) closeModal();
  });

  /* ------------------------------------------------------
     7. CONTACT FORM
     ------------------------------------------------------ */
  const form = $("#contactForm");
  const toast = $("#toast");
  let toastTimer = null;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const dict = I18N[lang];
      const name = $("#fName").value.trim();
      const email = $("#fEmail").value.trim();
      const type = $("#fType").value;
      const message = $("#fMsg").value.trim();

      if (!name || !email || !message) {
        showToast(dict["form.required"]);
        const firstEmpty = !name ? $("#fName") : !email ? $("#fEmail") : $("#fMsg");
        firstEmpty.focus();
        return;
      }

      const subject = encodeURIComponent(
        (lang === "ar" ? "مشروع فيديو — " : "Video project — ") + name
      );
      const body = encodeURIComponent(
        (lang === "ar" ? "الاسم: " : "Name: ") + name + "\n" +
        (lang === "ar" ? "الإيميل: " : "Email: ") + email + "\n" +
        (lang === "ar" ? "النوع: " : "Type: ") + type + "\n\n" + message
      );

      showToast(dict["form.opening"]);
      window.location.href = "mailto:" + MAIL + "?subject=" + subject + "&body=" + body;
    });
  }

  /* copy email */
  const copyBtn = $("#copyMail");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const dict = I18N[lang];
      try {
        await navigator.clipboard.writeText(MAIL);
        showToast(dict["contact.copied"]);
      } catch (e) {
        const tmp = document.createElement("textarea");
        tmp.value = MAIL;
        document.body.appendChild(tmp);
        tmp.select();
        try { document.execCommand("copy"); showToast(dict["contact.copied"]); } catch (err) {}
        document.body.removeChild(tmp);
      }
    });
  }

  /* ------------------------------------------------------
     8. CURSOR SPOTLIGHT (pointer devices only)
     ------------------------------------------------------ */
  const spotlight = $("#spotlight");
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (spotlight && finePointer && !reduced) {
    document.body.classList.add("has-pointer");
    window.addEventListener("pointermove", (e) => {
      spotlight.style.setProperty("--mx", e.clientX + "px");
      spotlight.style.setProperty("--my", e.clientY + "px");
    }, { passive: true });
  }

  /* ------------------------------------------------------
     9. SOCIAL LINKS (force new tab)
     ------------------------------------------------------ */
  function forceNewTab() {
    const socialLinks = $$(".socials a");
    socialLinks.forEach((a) => {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
      a.onclick = function(e) {
        const href = this.getAttribute("href");
        if (!href || href === "#" || href.indexOf("javascript") === 0) return true;
        e.preventDefault();
        e.stopPropagation();
        window.open(href, "_blank", "noopener,noreferrer");
        return false;
      };
    });
  }
  forceNewTab();
  setTimeout(forceNewTab, 500);

  /* ------------------------------------------------------
     10. SMALL THINGS
     ------------------------------------------------------ */
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
