/* =====================================================================
   SHOP CONTENT — edit ONLY this object to reuse the site for another shop.
   Everything visible on the page (both languages) comes from here.
   hours: index 0 = Sunday … 6 = Saturday, ["HH:MM", "HH:MM"] in Dubai time, or null if closed.
   hoursGroups: how days are grouped in the hours table. See README.md.
   ===================================================================== */
const SHOP = {
  "name": "Impression Ladies Salon",
  "siteUrl": "https://tanish0212.github.io/impression-salon-demo/",
  "schemaType": "BeautySalon",
  "phoneDisplay": "+971 50 585 4972",
  "phoneHref": "tel:+971505854972",
  "phoneIntl": "+971505854972",
  "whatsappNumber": "971505854972",
  "directionsUrl": "https://www.google.com/maps/search/?api=1&query=Impression+Ladies+Salon+Wasl+Properties+Building+Al+Karama+Dubai",
  "reviewsUrl": "https://www.google.com/maps/search/?api=1&query=Impression+Ladies+Salon+Wasl+Properties+Building+Al+Karama+Dubai",
  "mapEmbedUrl": "https://maps.google.com/maps?q=Impression%20Ladies%20Salon%2C%20R444%20Wasl%20Properties%20Building%2C%20Al%20Karama%2C%20Dubai&output=embed",
  "address": {
    "street": "Shop 3, R444 Wasl Properties Building, Al Karama",
    "city": "Dubai",
    "country": "AE"
  },
  "timeZone": "Asia/Dubai",
  "hours": [
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ],
    [
      "10:00",
      "22:00"
    ]
  ],
  "hoursGroups": [
    {
      "days": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "key": "daily"
    }
  ],
  "rating": {
    "value": "4.9",
    "count": 290
  },
  "showDemoBanner": true,
  "credit": "Tanish",
  "images": {
    "hero": {
      "src": "images/spa.svg",
      "en": "Line illustration of eucalyptus in a vase with rolled towels and massage stones",
      "ar": "رسم خطي لأغصان أوكالبتوس في مزهرية مع مناشف ملفوفة وأحجار مساج"
    }
  },
  "stepIcons": [
    "i-wa",
    "i-door",
    "i-leaf"
  ],
  "services": [
    {
      "image": "images/haircut.svg",
      "en": {
        "name": "Haircuts",
        "desc": "Haircuts for the style you have in mind.",
        "alt": "Line illustration of a hair dryer with a eucalyptus sprig",
        "ask": "a haircut"
      },
      "ar": {
        "name": "قص الشعر",
        "desc": "قصّات شعر وفق الستايل الذي تريدينه.",
        "alt": "رسم خطي لمجفف شعر مع غصن أوكالبتوس",
        "ask": "قص الشعر"
      }
    },
    {
      "image": "images/colour.svg",
      "en": {
        "name": "Hair colour & roots",
        "desc": "Full hair colour, or root colour to refresh your shade.",
        "alt": "Line illustration of a fan of hair colour swatches and a brush",
        "ask": "hair colour or root colour"
      },
      "ar": {
        "name": "صبغ الشعر والجذور",
        "desc": "صبغ كامل للشعر، أو صبغ الجذور لتجديد لونك.",
        "alt": "رسم خطي لمروحة عينات ألوان الشعر وفرشاة",
        "ask": "صبغ الشعر أو الجذور"
      }
    },
    {
      "image": "images/threading.svg",
      "en": {
        "name": "Threading",
        "desc": "Threading, done neatly and gently.",
        "alt": "Line illustration of a spool of thread and a brow line",
        "ask": "threading"
      },
      "ar": {
        "name": "الخيط",
        "desc": "إزالة الشعر بالخيط بدقة ولطف.",
        "alt": "رسم خطي لبكرة خيط وخط حاجب",
        "ask": "الخيط"
      }
    },
    {
      "image": "images/facial.svg",
      "en": {
        "name": "Facials",
        "desc": "Facials that leave your skin feeling fresh, clean and glowing.",
        "alt": "Line illustration of a cream jar with cucumber slices and leaves",
        "ask": "facials"
      },
      "ar": {
        "name": "تنظيف البشرة",
        "desc": "جلسات عناية بالبشرة تمنحها انتعاشًا ونقاءً وإشراقة.",
        "alt": "رسم خطي لعلبة كريم مع شرائح خيار وأوراق",
        "ask": "جلسات تنظيف البشرة"
      }
    },
    {
      "image": "images/massage.svg",
      "en": {
        "name": "Massage",
        "desc": "Massage to help you relax and unwind.",
        "alt": "Line illustration of stacked massage stones and an oil bottle",
        "ask": "massage"
      },
      "ar": {
        "name": "المساج",
        "desc": "جلسات مساج تساعدك على الاسترخاء.",
        "alt": "رسم خطي لأحجار مساج مكدسة وزجاجة زيت",
        "ask": "المساج"
      }
    },
    {
      "image": "images/mani-pedi.svg",
      "en": {
        "name": "Manicure & pedicure",
        "desc": "Manicures and pedicures for hands and feet.",
        "alt": "Line illustration of a nail polish bottle, a nail file and a pedicure bowl",
        "ask": "a manicure or pedicure"
      },
      "ar": {
        "name": "مانيكير وباديكير",
        "desc": "عناية بأظافر اليدين والقدمين.",
        "alt": "رسم خطي لزجاجة طلاء أظافر ومبرد ووعاء باديكير",
        "ask": "المانيكير أو الباديكير"
      }
    }
  ],
  "reviews": [
    "The staff are extremely friendly, kind, and professional.",
    "She was professional, attentive, and made sure everything turned out beautifully.",
    "My skin felt so fresh, clean, and glowing after the facial."
  ],
  "text": {
    "en": {
      "skip": "Skip to content",
      "navLabel": "Main",
      "navServices": "Services",
      "navHow": "How it works",
      "navReviews": "Reviews",
      "navVisit": "Visit",
      "langLabel": "Language",
      "waCta": "Message on WhatsApp",
      "waShort": "WhatsApp",
      "callCta": "Call the salon",
      "directions": "Get Directions",
      "newTab": "(opens in a new tab)",
      "ratingLine": "{rating} on Google · {count} reviews",
      "statusOpen": "Open now · until {time}",
      "statusOpensToday": "Closed now · opens today at {time}",
      "statusOpensTomorrow": "Closed now · opens tomorrow at {time}",
      "statusOpensLater": "Closed now · opens {day} at {time}",
      "am": "AM",
      "pm": "PM",
      "days": [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "today": "Today",
      "stripAria": "Quick facts",
      "stripServicesLabel": "Services",
      "stripHoursLabel": "Hours",
      "stripRatingLabel": "Google rating",
      "stripRating": "{rating} / 5 · {count} reviews",
      "servicesKicker": "Services",
      "quoteCta": "Ask on WhatsApp",
      "quoteNote": "Prices aren't listed online. Message us on WhatsApp for prices.",
      "howKicker": "How it works",
      "reviewsKicker": "Reviews",
      "basedOn": "{count} reviews on Google",
      "reviewLabel": "Google review",
      "readMore": "Read more on Google",
      "visitKicker": "Visit",
      "addressLabel": "Address",
      "hoursLabel": "Opening hours",
      "phoneLabel": "Phone & WhatsApp",
      "footerContact": "Contact",
      "credit": "Website by {credit}",
      "pageTitle": "Impression Ladies Salon · Hair, facials, threading and massage in Al Karama, Dubai",
      "metaDescription": "Ladies salon in Al Karama, Dubai: haircuts, hair colour and root colour, threading, facials, massage, manicure and pedicure. Rated 4.9 on Google. Message on WhatsApp.",
      "demoBanner": "Demo preview – made for Impression Ladies Salon. Not the official website yet.",
      "brandName": "Impression",
      "brandSub": "Ladies Salon · Al Karama",
      "waMessage": "Hello Impression, I found you on your website and I'd like to ask about your services.",
      "waMessageAbout": "Hello Impression, I found you on your website and I'd like to ask about {service}.",
      "waAria": "Message Impression Ladies Salon on WhatsApp",
      "heroEyebrow": "Impression · Ladies salon",
      "heroTitle": [
        "Gentle care,",
        "a fresh glow."
      ],
      "heroSub": "A ladies salon in Al Karama for haircuts and colour, threading, facials, massage, and manicure and pedicure.",
      "heroPlace": "Wasl Properties Building, Al Karama",
      "heroCaption": "Shop 3 · R444 Wasl Properties",
      "stripServices": "Hair · Colour · Threading · Facials · Massage · Mani & pedi",
      "groups": {
        "daily": "Every day"
      },
      "groupsShort": {
        "daily": "Daily"
      },
      "servicesTitle": "Treatments to help you feel your best.",
      "servicesIntro": "Hair, face, hands and feet. Tap any service to ask us about it on WhatsApp.",
      "howTitle": "A calm visit, start to finish.",
      "steps": [
        {
          "title": "Message us on WhatsApp",
          "text": "Tell us which treatment you'd like and ask about prices."
        },
        {
          "title": "Visit the salon",
          "text": "Come to Shop 3 in the R444 Wasl Properties building, Al Karama."
        },
        {
          "title": "Relax and refresh",
          "text": "Sit back while our friendly team takes care of you."
        }
      ],
      "reviewsTitle": "Kind words from our clients.",
      "visitTitle": "Visit the salon.",
      "addressLines": [
        "Shop 3, R444 Wasl Properties Building",
        "Al Karama, Dubai"
      ],
      "mapTitle": "Map showing Impression Ladies Salon in Al Karama, Dubai",
      "ctaTitle": "Time for a little care?",
      "ctaSub": "Send us a message on WhatsApp, or call the salon.",
      "footerName": "Impression Ladies Salon",
      "footerTag": "Ladies salon in Al Karama, Dubai."
    },
    "ar": {
      "skip": "انتقل إلى المحتوى",
      "navLabel": "القائمة الرئيسية",
      "navServices": "الخدمات",
      "navHow": "كيف نعمل",
      "navReviews": "التقييمات",
      "navVisit": "الموقع",
      "langLabel": "اللغة",
      "waCta": "راسلينا عبر واتساب",
      "waShort": "واتساب",
      "callCta": "اتصلي بالصالون",
      "directions": "احصل على الاتجاهات",
      "newTab": "(يفتح في نافذة جديدة)",
      "ratingLine": "{rating} على جوجل · {count} تقييمًا",
      "statusOpen": "مفتوح الآن · حتى {time}",
      "statusOpensToday": "مغلق الآن · يفتح اليوم الساعة {time}",
      "statusOpensTomorrow": "مغلق الآن · يفتح غدًا الساعة {time}",
      "statusOpensLater": "مغلق الآن · يفتح يوم {day} الساعة {time}",
      "am": "صباحًا",
      "pm": "مساءً",
      "days": [
        "الأحد",
        "الاثنين",
        "الثلاثاء",
        "الأربعاء",
        "الخميس",
        "الجمعة",
        "السبت"
      ],
      "today": "اليوم",
      "stripAria": "معلومات سريعة",
      "stripServicesLabel": "الخدمات",
      "stripHoursLabel": "ساعات العمل",
      "stripRatingLabel": "التقييم على جوجل",
      "stripRating": "{rating} من 5 · {count} تقييمًا",
      "servicesKicker": "الخدمات",
      "quoteCta": "اسألي عبر واتساب",
      "quoteNote": "الأسعار غير معروضة على الموقع. راسلينا عبر واتساب لمعرفة الأسعار.",
      "howKicker": "كيف نعمل",
      "reviewsKicker": "التقييمات",
      "basedOn": "{count} تقييمًا على جوجل",
      "reviewLabel": "تقييم من جوجل",
      "readMore": "اقرأ المزيد على جوجل",
      "visitKicker": "زورونا",
      "addressLabel": "العنوان",
      "hoursLabel": "ساعات العمل",
      "phoneLabel": "الهاتف وواتساب",
      "footerContact": "تواصل معنا",
      "credit": "تصميم الموقع: {credit}",
      "pageTitle": "صالون إمبريشن للسيدات · الشعر وتنظيف البشرة والخيط والمساج في الكرامة، دبي",
      "metaDescription": "صالون للسيدات في الكرامة، دبي: قص الشعر، صبغ الشعر والجذور، الخيط، تنظيف البشرة، المساج، المانيكير والباديكير. تقييم 4.9 على جوجل. راسلينا عبر واتساب.",
      "demoBanner": "نسخة تجريبية – صُممت خصيصًا لصالون إمبريشن للسيدات. ليست الموقع الرسمي بعد.",
      "brandName": "إمبريشن",
      "brandSub": "صالون للسيدات · الكرامة",
      "waMessage": "مرحبًا إمبريشن، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن خدماتكم.",
      "waMessageAbout": "مرحبًا إمبريشن، وجدتكم عبر موقعكم الإلكتروني وأودّ الاستفسار عن {service}.",
      "waAria": "راسلي صالون إمبريشن للسيدات عبر واتساب",
      "heroEyebrow": "إمبريشن · صالون للسيدات",
      "heroTitle": [
        "عناية لطيفة،",
        "وإشراقة منعشة."
      ],
      "heroSub": "صالون للسيدات في الكرامة لقص الشعر وصبغه، والخيط، وتنظيف البشرة، والمساج، والمانيكير والباديكير.",
      "heroPlace": "بناية وصل العقارية، الكرامة",
      "heroCaption": "محل 3 · وصل العقارية R444",
      "stripServices": "الشعر · الصبغ · الخيط · تنظيف البشرة · المساج · مانيكير وباديكير",
      "groups": {
        "daily": "كل يوم"
      },
      "groupsShort": {
        "daily": "يوميًا"
      },
      "servicesTitle": "عناية تمنحك أفضل إحساس.",
      "servicesIntro": "الشعر والبشرة واليدان والقدمان. اضغطي على أي خدمة لتسألينا عنها عبر واتساب.",
      "howTitle": "زيارة هادئة من البداية إلى النهاية.",
      "steps": [
        {
          "title": "راسلينا عبر واتساب",
          "text": "أخبرينا بالخدمة التي تريدينها واسألي عن الأسعار."
        },
        {
          "title": "زوري الصالون",
          "text": "تفضّلي إلى المحل رقم 3 في بناية وصل العقارية R444، الكرامة."
        },
        {
          "title": "استرخي وتجدّدي",
          "text": "استرخي بينما يعتني بك فريقنا الودود."
        }
      ],
      "reviewsTitle": "كلمات لطيفة من عميلاتنا.",
      "visitTitle": "زوري الصالون.",
      "addressLines": [
        "محل 3، بناية وصل العقارية R444",
        "الكرامة، دبي"
      ],
      "mapTitle": "خريطة توضح موقع صالون إمبريشن للسيدات في الكرامة، دبي",
      "ctaTitle": "حان وقت القليل من العناية؟",
      "ctaSub": "أرسلي لنا رسالة عبر واتساب، أو اتصلي بالصالون.",
      "footerName": "صالون إمبريشن للسيدات",
      "footerTag": "صالون للسيدات في الكرامة، دبي."
    }
  }
};

/* =====================================================================
   SITE LOGIC — no need to edit below this line.
   ===================================================================== */
(function () {
  "use strict";

  const LANG_KEY = "site-lang";
  const root = document.documentElement;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";

  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "en" || saved === "ar") lang = saved;
  } catch (e) { /* storage unavailable — default to English */ }

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const t = () => SHOP.text[lang];

  function fmt(str, extra) {
    let out = String(str)
      .replace(/\{rating\}/g, SHOP.rating.value)
      .replace(/\{count\}/g, SHOP.rating.count)
      .replace(/\{credit\}/g, SHOP.credit)
      .replace(/\{name\}/g, SHOP.name);
    if (extra) for (const [k, v] of Object.entries(extra)) out = out.split("{" + k + "}").join(v);
    return out;
  }

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v === null || v === undefined || v === false) continue;
        if (k === "class") node.className = v;
        else if (k === "text") node.textContent = v;
        else node.setAttribute(k, v === true ? "" : v);
      }
    }
    (children || []).forEach((c) => node.append(c));
    return node;
  }

  function useIcon(id, size) {
    const s = size || 20;
    const span = el("span", { class: "icon", "aria-hidden": "true" });
    span.innerHTML = '<svg viewBox="0 0 24 24" width="' + s + '" height="' + s + '"><use href="#' + id + '"/></svg>';
    return span;
  }

  function stars(value) {
    const wrap = el("span", { class: "stars", "aria-hidden": "true" });
    const full = Math.round(parseFloat(value));
    for (let i = 0; i < 5; i++) {
      wrap.insertAdjacentHTML("beforeend",
        '<svg viewBox="0 0 20 20" width="16" height="16"><path d="M10 1.8l2.5 5.3 5.8.7-4.3 4 1.1 5.7L10 14.7l-5.1 2.8L6 11.8 1.7 7.8l5.8-.7Z" ' +
        (i < full ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="1.3"') + "/></svg>");
    }
    return wrap;
  }

  const ltr = (text) => el("span", { dir: "ltr", class: "ltr num", text });

  /* ---------- WhatsApp links ---------- */
  function waUrl(service) {
    const tx = t();
    const msg = service ? fmt(tx.waMessageAbout, { service }) : tx.waMessage;
    return "https://wa.me/" + SHOP.whatsappNumber + "?text=" + encodeURIComponent(msg);
  }

  /* ---------- Hours + open / closed badge (shop time zone) ---------- */
  const toMin = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };

  function timeLabel(hhmm) {
    const tx = t();
    const [h, m] = hhmm.split(":").map(Number);
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return h12 + (m ? ":" + String(m).padStart(2, "0") : "") + " " + (h < 12 ? tx.am : tx.pm);
  }

  function nowInShopTZ() {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: SHOP.timeZone, weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23",
    }).formatToParts(new Date());
    const get = (type) => parts.find((p) => p.type === type).value;
    const day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
    return { day, min: Number(get("hour")) * 60 + Number(get("minute")) };
  }

  function shopStatus() {
    const now = nowInShopTZ();
    const today = SHOP.hours[now.day];
    if (today && now.min >= toMin(today[0]) && now.min < toMin(today[1])) {
      return { open: true, key: "statusOpen", time: today[1], day: now.day };
    }
    if (today && now.min < toMin(today[0])) {
      return { open: false, key: "statusOpensToday", time: today[0], day: now.day };
    }
    for (let i = 1; i <= 7; i++) {
      const d = (now.day + i) % 7;
      if (SHOP.hours[d]) {
        return { open: false, key: i === 1 ? "statusOpensTomorrow" : "statusOpensLater", time: SHOP.hours[d][0], day: d };
      }
    }
    return { open: false, key: "statusOpensToday", time: "00:00", day: now.day };
  }

  function rangeLabel(day) {
    const h = SHOP.hours[day];
    return timeLabel(h[0]) + " – " + timeLabel(h[1]);
  }

  function renderStatus() {
    const tx = t();
    const s = shopStatus();
    const text = fmt(tx[s.key], { time: timeLabel(s.time), day: tx.days[s.day] });
    $$(".js-status").forEach((node) => {
      node.dataset.state = s.open ? "open" : "closed";
      $(".status-text", node).textContent = text;
    });
    const today = nowInShopTZ().day;
    $$(".js-hours tr").forEach((row) => {
      const isToday = row.dataset.days.split(",").map(Number).includes(today);
      row.classList.toggle("is-today", isToday);
      const flag = $(".today-flag", row);
      if (flag) flag.hidden = !isToday;
    });
  }

  const ltrIfEn = (text) => (lang === "ar" ? document.createTextNode(text) : ltr(text));

  function renderHours() {
    const tx = t();
    $(".js-hours").replaceChildren(el("tbody", null, SHOP.hoursGroups.map((g) => el("tr", { "data-days": g.days.join(",") }, [
      el("th", { scope: "row" }, [
        document.createTextNode(tx.groups[g.key] + " "),
        el("span", { class: "today-flag", text: tx.today, hidden: true }),
      ]),
      el("td", null, [ltrIfEn(rangeLabel(g.days[0]))]),
    ]))));
    $(".js-strip-hours").replaceChildren(...SHOP.hoursGroups.map((g) =>
      el("span", { class: "strip-line" }, [document.createTextNode(tx.groupsShort[g.key] + " "), ltrIfEn(rangeLabel(g.days[0]))])));
  }

  /* ---------- Render ---------- */
  function renderText() {
    const tx = t();
    $$("[data-t]").forEach((node) => { if (tx[node.dataset.t] !== undefined) node.textContent = fmt(tx[node.dataset.t]); });
    $$("[data-shop]").forEach((node) => { node.textContent = SHOP[node.dataset.shop]; });
    $$("[data-t-aria]").forEach((node) => { node.setAttribute("aria-label", fmt(tx[node.dataset.tAria])); });

    $$(".js-tel").forEach((a) => { a.href = SHOP.phoneHref; });
    $$(".js-wa").forEach((a) => { a.href = waUrl(); a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-dir").forEach((a) => { a.href = SHOP.directionsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-reviews").forEach((a) => { a.href = SHOP.reviewsUrl; a.target = "_blank"; a.rel = "noopener"; });
    $$(".js-newtab").forEach((n) => { n.textContent = " " + tx.newTab; });
    $$(".js-phone").forEach((n) => { n.replaceChildren(ltr(SHOP.phoneDisplay)); });

    document.title = tx.pageTitle;
    const md = $('meta[name="description"]');
    if (md) md.setAttribute("content", tx.metaDescription);

    const banner = $(".demo-banner");
    if (banner) banner.hidden = !SHOP.showDemoBanner;

    // Hero headline: one line per entry, last line in the accent style.
    const h1 = $(".js-hero-title");
    h1.replaceChildren(...tx.heroTitle.map((line, i) =>
      el("span", { class: "line" + (i === tx.heroTitle.length - 1 ? " accent" : ""), style: "--i:" + i, text: line + " " })));

    // Rating
    $$(".js-rating").forEach((a) => {
      a.replaceChildren(stars(SHOP.rating.value), el("span", { text: fmt(tx.ratingLine) }), el("span", { class: "visually-hidden js-newtab", text: " " + tx.newTab }));
    });
    $$(".js-stars").forEach((n) => n.replaceChildren(stars(SHOP.rating.value)));
    $$(".js-score").forEach((n) => { n.textContent = SHOP.rating.value; });

    // Image slots
    $$(".js-img").forEach((img) => {
      const slot = SHOP.images[img.dataset.img];
      if (img.getAttribute("src") !== slot.src) img.src = slot.src;
      img.alt = slot[lang];
    });

    // Services
    const other = lang === "ar" ? "en" : "ar";
    $(".js-services").replaceChildren(...SHOP.services.map((s, i) => el("li", { class: "service reveal", style: "--d:" + (i % 3) * 80 + "ms" }, [
      el("div", { class: "service-media" }, [
        el("img", { src: s.image, alt: s[lang].alt, width: 480, height: 600, loading: "lazy", decoding: "async" }),
      ]),
      el("div", { class: "service-body" }, [
        el("span", { class: "service-num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
        el("h3", { class: "service-name", text: s[lang].name }),
        el("p", { class: "service-alt", lang: other, dir: other === "ar" ? "rtl" : "ltr", text: s[other].name }),
        el("p", { class: "service-desc", text: s[lang].desc }),
        el("a", { class: "service-link", href: waUrl(s[lang].ask), target: "_blank", rel: "noopener" }, [
          el("span", { text: tx.quoteCta }),
          el("span", { class: "visually-hidden", text: " – " + s[lang].name + " " + tx.newTab }),
          useIcon("i-arrow", 18),
        ]),
      ]),
    ])));

    // Steps
    $(".js-steps").replaceChildren(...tx.steps.map((s, i) => el("li", { class: "step reveal", style: "--d:" + i * 90 + "ms" }, [
      el("div", { class: "step-mark" }, [el("span", { class: "step-num", text: String(i + 1) }), stepIcon(SHOP.stepIcons[i])]),
      el("h3", { text: s.title }),
      el("p", { text: s.text }),
    ])));

    // Reviews (kept in English — real quotes)
    $(".js-reviews-list").replaceChildren(...SHOP.reviews.map((r, i) => el("li", { class: "review reveal", style: "--d:" + i * 90 + "ms" }, [
      el("figure", null, [
        quoteMark(),
        el("blockquote", { lang: "en", dir: "ltr" }, [el("p", { text: r })]),
        el("figcaption", { text: tx.reviewLabel }),
      ]),
    ])));

    $$(".js-address").forEach((n) => n.replaceChildren(...tx.addressLines.map((l) => el("span", { text: l }))));
    renderHours();

    const map = $(".js-map");
    if (!map.getAttribute("src")) map.setAttribute("src", SHOP.mapEmbedUrl);
    map.title = tx.mapTitle;

    $(".js-year").textContent = new Date().getFullYear();
    $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

    renderStatus();
    observeReveals();
  }

  function stepIcon(id) {
    const s = el("span", { class: "step-icon", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><use href="#' + id + '"/></svg>';
    return s;
  }

  function quoteMark() {
    const s = el("span", { class: "quote-mark", "aria-hidden": "true" });
    s.innerHTML = '<svg viewBox="0 0 48 36" width="36" height="27"><path fill="currentColor" d="M0 36V22.4C0 9.6 6.2 2.2 18.6 0l2 4.6C13.8 6.6 10.6 10.4 10.2 16H19v20Zm27 0V22.4C27 9.6 33.2 2.2 45.6 0l2 4.6C40.8 6.6 37.6 10.4 37.2 16H46v20Z"/></svg>';
    return s;
  }

  function applyLang(next, persist) {
    lang = next;
    root.lang = next;
    root.dir = next === "ar" ? "rtl" : "ltr";
    renderText();
    if (persist) { try { localStorage.setItem(LANG_KEY, next); } catch (e) { /* ignore */ } }
  }

  /* ---------- Structured data (built from SHOP) ---------- */
  function addJsonLd() {
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const data = {
      "@context": "https://schema.org",
      "@type": SHOP.schemaType,
      name: SHOP.name,
      url: SHOP.siteUrl,
      image: SHOP.siteUrl + "images/og-image.jpg",
      logo: SHOP.siteUrl + "images/logo.svg",
      telephone: SHOP.phoneIntl,
      address: {
        "@type": "PostalAddress",
        streetAddress: SHOP.address.street,
        addressLocality: SHOP.address.city,
        addressCountry: SHOP.address.country,
      },
      hasMap: SHOP.directionsUrl,
      openingHoursSpecification: SHOP.hoursGroups.map((g) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: g.days.map((d) => dayNames[d]),
        opens: SHOP.hours[g.days[0]][0],
        closes: SHOP.hours[g.days[0]][1],
      })),
      aggregateRating: { "@type": "AggregateRating", ratingValue: SHOP.rating.value, bestRating: "5", reviewCount: String(SHOP.rating.count) },
      makesOffer: SHOP.services.map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.en.name } })),
    };
    document.head.append(el("script", { type: "application/ld+json", text: JSON.stringify(data) }));
  }

  /* ---------- Motion: reveal on scroll ---------- */
  let io = null;
  function observeReveals() {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      $$(".reveal").forEach((n) => n.classList.add("is-in"));
      return;
    }
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    }
    $$(".reveal:not(.is-in)").forEach((n) => io.observe(n));
  }

  /* ---------- Sticky header compacts on scroll ---------- */
  const header = $(".site-header");
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => { header.classList.toggle("is-compact", window.scrollY > 24); ticking = false; });
  }

  /* ---------- Init ---------- */
  if (!reduceMotion) root.classList.add("motion");
  applyLang(lang, false);
  addJsonLd();
  $$("[data-lang]").forEach((b) => b.addEventListener("click", () => { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, true); }));
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  setInterval(renderStatus, 60 * 1000);
})();
