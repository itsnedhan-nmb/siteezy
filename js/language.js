/* =========================================================
   SiteEzy — language.js
   All English + Malayalam text for the MAIN SiteEzy website
   lives here as one flat key → text object per language.
   The four demo websites are written directly in their own
   index.html files in English (see README, section 9) since
   translating fictional demo businesses would make them feel
   less like real, natural websites.

   To edit text: find the key below (e.g. "hero.lede") and
   change the value in quotes. Do not change the key itself —
   the page uses it to find the text.
   ========================================================= */

const translations = {
  en: {
    "nav.packages": "Packages",
    "nav.demos": "Demos",
    "nav.howitworks": "How It Works",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.whatsapp": "WhatsApp Us",

    "hero.badge": "Websites Made Easy",
    "hero.titleLine1": "Websites",
    "hero.titleLine2": "Made Easy",
    "hero.lede": "Professional websites for local businesses, without unnecessary complexity.",
    "hero.lede2": "Choose a package. Explore the demo. See exactly what you get.",
    "hero.ctaExplore": "Explore Packages",
    "hero.ctaWhatsapp": "WhatsApp Us",
    "hero.phoneLabel": "Call or WhatsApp",
    "hero.stat1Num": "4",
    "hero.stat1Label": "Website Packages",
    "hero.stat2Num": "2",
    "hero.stat2Label": "Languages Supported",
    "hero.stat3Num": "100%",
    "hero.stat3Label": "Mobile Friendly",
    "hero.floatTitle": "Live Demos",
    "hero.floatSub": "Explore before you decide",

    "trust.item1": "No Hidden Backend Costs",
    "trust.item2": "You Own Your Website",
    "trust.item3": "WhatsApp-Based Support",
    "trust.item4": "Clear, Written Disclaimer",

    "packages.eyebrow": "Packages",
    "packages.title": "Four packages. Four clear outcomes.",
    "packages.lead": "Pick the package that matches where your business is today — not a template that guesses for you.",

    "pkg.mini.tag": "Get Online",
    "pkg.mini.for": "For businesses that simply need a professional online presence.",
    "pkg.mini.f1": "Single-page website with your business info",
    "pkg.mini.f2": "Mobile-friendly, fast-loading design",
    "pkg.mini.f3": "Direct WhatsApp contact button",
    "pkg.mini.f4": "English + Malayalam ready",

    "pkg.business.tag": "Look Professional",
    "pkg.business.for": "For businesses that want a more complete website.",
    "pkg.business.f1": "Multi-section professional website",
    "pkg.business.f2": "About, services & project gallery",
    "pkg.business.f3": "Smooth scroll animations",
    "pkg.business.f4": "Google Maps location embed",

    "pkg.catalogue.tag": "Show & Sell",
    "pkg.catalogue.for": "For businesses with products that want catalogue + WhatsApp ordering.",
    "pkg.catalogue.f1": "Full product catalogue with categories",
    "pkg.catalogue.f2": "Working cart with quantity controls",
    "pkg.catalogue.f3": "One-tap WhatsApp ordering",
    "pkg.catalogue.f4": "Everything in the ₹10,000 package",

    "pkg.flagship.tag": "Go Further",
    "pkg.flagship.for": "For businesses wanting the most complete SiteEzy website package.",
    "pkg.flagship.f1": "Our most complete, polished build",
    "pkg.flagship.f2": "Advanced layout & scroll storytelling",
    "pkg.flagship.f3": "Rich photo galleries & sections",
    "pkg.flagship.f4": "Everything in the ₹15,000 package",

    "common.viewDemo": "View Demo",
    "common.mostPopular": "Most Complete",

    "progression.eyebrow": "The Difference",
    "progression.title": "It's not just more animation. It's more website.",
    "progression.lead": "Every step up adds real structure and functionality — not just visual flourish.",
    "progression.item1": "A clean, simple online presence — the essentials, done properly.",
    "progression.item2": "A complete multi-section business website with a project/photo gallery.",
    "progression.item3": "Adds a real product catalogue with a working cart and WhatsApp checkout.",
    "progression.item4": "SiteEzy's most complete package — the fullest presentation we build.",

    "compare.eyebrow": "Compare",
    "compare.title": "See the differences at a glance",
    "compare.lead": "Every package includes a WhatsApp contact button and bilingual support.",
    "compare.feature": "Feature",
    "compare.f.pages": "Website type",
    "compare.f.pages.mini": "Single page",
    "compare.f.pages.business": "Multi-section",
    "compare.f.pages.catalogue": "Multi-section + catalogue",
    "compare.f.pages.flagship": "Most complete build",
    "compare.f.gallery": "Photo / project gallery",
    "compare.f.catalogue": "Product catalogue",
    "compare.f.cart": "Working cart + WhatsApp order",
    "compare.f.maps": "Google Maps embed",
    "compare.f.animation": "Scroll animations",
    "compare.f.whatsapp": "WhatsApp contact button",
    "compare.f.bilingual": "English + Malayalam",

    "demoPreview.eyebrow": "Live Demos",
    "demoPreview.title": "Don't just read about it. Explore it.",
    "demoPreview.lead": "Each demo is a complete, independent example website — enter it, scroll through it, and come back whenever you like.",
    "demoPreview.card1Tag": "₹5,000 · MINI",
    "demoPreview.card1Title": "Pepper Leaf Café",
    "demoPreview.card2Tag": "₹10,000 · BUSINESS",
    "demoPreview.card2Title": "Arora Interiors",
    "demoPreview.card3Tag": "₹15,000 · CATALOGUE",
    "demoPreview.card3Title": "Urban Threads",
    "demoPreview.card4Tag": "₹18,000 · FLAGSHIP",
    "demoPreview.card4Title": "Nova Fitness Studio",

    "how.eyebrow": "How It Works",
    "how.title": "From enquiry to live website",
    "how.lead": "A simple, transparent process — no confusing tech jargon.",
    "how.step1.t": "Choose a package",
    "how.step1.d": "Compare the four packages and explore their live demos above.",
    "how.step2.t": "Message us on WhatsApp",
    "how.step2.d": "Tell us about your business using the form below — it opens WhatsApp for you.",
    "how.step3.t": "Share your content",
    "how.step3.d": "Send your business details, photos and text so we can build your site.",
    "how.step4.t": "Go live",
    "how.step4.d": "We build your website and hand it over, ready for your domain.",

    "faq.eyebrow": "FAQ",
    "faq.title": "Frequently asked questions",
    "faq.q1": "Do I need a domain?",
    "faq.a1": "A domain name (like yourbusiness.in) makes your website easier to find and share, so we recommend one — but it isn't included in the package price and is registered/renewed separately by you.",
    "faq.q2": "Can I use my own domain?",
    "faq.a2": "Yes. If you already own a domain, we can connect it to your new website. If not, we can guide you through registering one.",
    "faq.q3": "Can I use WhatsApp?",
    "faq.a3": "Yes — every SiteEzy package includes a WhatsApp contact button so customers can reach you directly, with no extra software needed.",
    "faq.q4": "Can I sell products?",
    "faq.a4": "With the ₹15,000 and ₹18,000 packages, yes — customers can browse a catalogue, add items to a cart, and send you their order over WhatsApp.",
    "faq.q5": "Is the catalogue a full e-commerce website?",
    "faq.a5": "No. It's a product catalogue with WhatsApp ordering, not a full online store — there's no online payment gateway or automated order/inventory system built in.",
    "faq.q6": "Do you guarantee Google rankings?",
    "faq.a6": "No one honestly can. We follow basic SEO good practice, but rankings, traffic and sales depend on many factors outside a website's control.",
    "faq.q7": "Can I request changes later?",
    "faq.a7": "Yes. Small agreed revisions are part of the delivery process; larger changes or new features after delivery may involve an additional cost, discussed upfront.",
    "faq.q8": "Can you build custom software?",
    "faq.a8": "SiteEzy's packages are static websites, not custom software or backend systems. If you need something beyond a website, we can discuss it separately with its own quotation.",
    "faq.q9": "How does hosting work?",
    "faq.a9": "Your website is built to run on simple, low-cost static hosting (such as GitHub Pages). We'll explain the options in plain language when we deliver your site.",
    "faq.q10": "Can I see a demo?",
    "faq.a10": "Yes — scroll up and open any of the four live demos above. That's exactly the kind of website you'd get with that package.",

    "disclaimer.eyebrow": "Please Read",
    "disclaimer.title": "Website Services Disclaimer & Terms",
    "disclaimer.lead": "Written in plain language, on purpose. Please read this before enquiring.",
    "disclaimer.p1": "Package pricing covers only the features listed for that package — nothing more, nothing hidden.",
    "disclaimer.p2": "Domain name registration and yearly renewal are separate costs, paid by you to the domain registrar.",
    "disclaimer.p3": "You provide your business content — text, photos, prices, and any material needed to build your site.",
    "disclaimer.p4": "Only the number of revisions agreed upon before starting are included in the package price.",
    "disclaimer.p5": "Additional revisions or extra functionality beyond what was agreed may cost extra, discussed in advance.",
    "disclaimer.p6": "Basic on-page SEO is good practice, not a guarantee — it does not guarantee search rankings, traffic, leads or sales.",
    "disclaimer.p7": "Third-party services (domains, hosting, WhatsApp, Google Maps, etc.) have their own policies, pricing and availability, which SiteEzy does not control.",
    "disclaimer.p8": "Delivery timelines depend on receiving your content and approvals on time.",
    "disclaimer.p9": "Changes requested after final delivery that fall outside the originally agreed scope may involve an additional cost.",
    "disclaimer.p10": "Advanced systems — bookings, logins, payments, custom software — are not automatically included in any package.",
    "disclaimer.p11": "The ₹15,000 / ₹18,000 catalogue + cart + WhatsApp ordering feature is not a full e-commerce platform.",
    "disclaimer.p12": "Payment gateways are not included unless specifically discussed and agreed separately.",
    "disclaimer.p13": "Any photos, logos or content you provide remain your property at all times.",
    "disclaimer.p14": "You should review your website carefully before giving final approval for it to go live.",
    "disclaimer.p15": "Requirements outside a standard package (custom features, integrations, etc.) require their own separate quotation.",

    "contact.eyebrow": "Get Started",
    "contact.title": "Tell Us About Your Business",
    "contact.lead": "Tell us what business you run and which package you're interested in — we'll reply on WhatsApp.",
    "contact.labelName": "Name",
    "contact.placeholderName": "Your name",
    "contact.labelBusiness": "What business do you run?",
    "contact.placeholderBusiness": "Restaurant, clothing shop, salon, workshop, etc.",
    "contact.labelPackage": "Package",
    "contact.optMini": "₹5,000 MINI",
    "contact.optBusiness": "₹10,000 BUSINESS",
    "contact.optCatalogue": "₹15,000 CATALOGUE",
    "contact.optFlagship": "₹18,000 FLAGSHIP",
    "contact.optNotSure": "Not sure yet",
    "contact.labelMessage": "Message (optional)",
    "contact.placeholderMessage": "Anything else you'd like us to know",
    "contact.disclaimerPre": "I have read and understood the",
    "contact.disclaimerLink": "SiteEzy Website Services Disclaimer & Terms",
    "contact.submitBtn": "Continue to WhatsApp",

    "finalcta.title": "Ready to get online the easy way?",
    "finalcta.lead": "No confusing tech talk — just a professional website for your business, explained simply.",
    "finalcta.btn1": "WhatsApp Us Now",
    "finalcta.btn2": "See the Packages Again",

    "footer.tagline": "Websites Made Easy — professional websites for local & small businesses.",
    "footer.company": "Explore",
    "footer.linkPackages": "Packages",
    "footer.linkDemos": "Demos",
    "footer.linkFaq": "FAQ",
    "footer.linkContact": "Contact",
    "footer.contact": "Contact",
    "footer.rights": "© 2026 SiteEzy. All rights reserved.",
    "footer.note": "Website packages are custom web development services. Domain & third-party costs are separate — see our disclaimer."
  },

  ml: {
    "nav.packages": "പാക്കേജുകൾ",
    "nav.demos": "ഡെമോകൾ",
    "nav.howitworks": "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    "nav.faq": "പതിവ് ചോദ്യങ്ങൾ",
    "nav.contact": "ബന്ധപ്പെടുക",
    "nav.whatsapp": "WhatsApp ചെയ്യൂ",

    "hero.badge": "വെബ്സൈറ്റുകൾ എളുപ്പമാക്കി",
    "hero.titleLine1": "വെബ്സൈറ്റുകൾ",
    "hero.titleLine2": "എളുപ്പമാക്കി",
    "hero.lede": "അനാവശ്യ സങ്കീർണത ഇല്ലാതെ, പ്രാദേശിക ബിസിനസുകൾക്കായുള്ള പ്രൊഫഷണൽ വെബ്സൈറ്റുകൾ.",
    "hero.lede2": "ഒരു പാക്കേജ് തിരഞ്ഞെടുക്കുക. ഡെമോ പര്യവേക്ഷണം ചെയ്യുക. നിങ്ങൾക്ക് കൃത്യമായി എന്ത് കിട്ടുമെന്ന് കാണുക.",
    "hero.ctaExplore": "പാക്കേജുകൾ കാണുക",
    "hero.ctaWhatsapp": "WhatsApp ചെയ്യൂ",
    "hero.phoneLabel": "വിളിക്കുക അല്ലെങ്കിൽ WhatsApp ചെയ്യുക",
    "hero.stat1Num": "4",
    "hero.stat1Label": "വെബ്സൈറ്റ് പാക്കേജുകൾ",
    "hero.stat2Num": "2",
    "hero.stat2Label": "ഭാഷകൾ ലഭ്യമാണ്",
    "hero.stat3Num": "100%",
    "hero.stat3Label": "മൊബൈൽ സൗഹൃദം",
    "hero.floatTitle": "തത്സമയ ഡെമോകൾ",
    "hero.floatSub": "തീരുമാനിക്കുന്നതിന് മുൻപ് പര്യവേക്ഷണം ചെയ്യൂ",

    "trust.item1": "മറഞ്ഞിരിക്കുന്ന ബാക്കെൻഡ് ചെലവുകൾ ഇല്ല",
    "trust.item2": "നിങ്ങളുടെ വെബ്സൈറ്റ് നിങ്ങളുടേതാണ്",
    "trust.item3": "WhatsApp വഴിയുള്ള പിന്തുണ",
    "trust.item4": "വ്യക്തമായ, രേഖാമൂലമുള്ള നിരാകരണം",

    "packages.eyebrow": "പാക്കേജുകൾ",
    "packages.title": "നാല് പാക്കേജുകൾ. നാല് വ്യക്തമായ ഫലങ്ങൾ.",
    "packages.lead": "നിങ്ങളുടെ ബിസിനസ് ഇന്ന് എവിടെയാണോ അതിന് അനുയോജ്യമായ പാക്കേജ് തിരഞ്ഞെടുക്കുക — ഊഹിച്ചെടുക്കുന്ന ഒരു ടെംപ്ലേറ്റ് അല്ല.",

    "pkg.mini.tag": "ഓൺലൈനിൽ വരൂ",
    "pkg.mini.for": "ലളിതമായ ഒരു പ്രൊഫഷണൽ ഓൺലൈൻ സാന്നിധ്യം മാത്രം ആവശ്യമുള്ള ബിസിനസുകൾക്ക്.",
    "pkg.mini.f1": "നിങ്ങളുടെ ബിസിനസ് വിവരങ്ങളുള്ള ഒറ്റ പേജ് വെബ്സൈറ്റ്",
    "pkg.mini.f2": "മൊബൈൽ സൗഹൃദവും വേഗതയേറിയതുമായ ഡിസൈൻ",
    "pkg.mini.f3": "നേരിട്ടുള്ള WhatsApp ബന്ധപ്പെടൽ ബട്ടൺ",
    "pkg.mini.f4": "ഇംഗ്ലീഷ് + മലയാളം തയ്യാർ",

    "pkg.business.tag": "പ്രൊഫഷണലായി കാണിക്കൂ",
    "pkg.business.for": "കൂടുതൽ സമ്പൂർണ്ണമായ ഒരു വെബ്സൈറ്റ് ആഗ്രഹിക്കുന്ന ബിസിനസുകൾക്ക്.",
    "pkg.business.f1": "ബഹു-വിഭാഗ പ്രൊഫഷണൽ വെബ്സൈറ്റ്",
    "pkg.business.f2": "കുറിച്ച്, സേവനങ്ങൾ & പ്രോജക്ട് ഗാലറി",
    "pkg.business.f3": "സുഗമമായ സ്ക്രോൾ ആനിമേഷനുകൾ",
    "pkg.business.f4": "Google Maps ലൊക്കേഷൻ",

    "pkg.catalogue.tag": "കാണിക്കൂ & വിൽക്കൂ",
    "pkg.catalogue.for": "കാറ്റലോഗും WhatsApp ഓർഡറിംഗും ആഗ്രഹിക്കുന്ന ഉൽപ്പന്നങ്ങളുള്ള ബിസിനസുകൾക്ക്.",
    "pkg.catalogue.f1": "വിഭാഗങ്ങളുള്ള പൂർണ്ണ ഉൽപ്പന്ന കാറ്റലോഗ്",
    "pkg.catalogue.f2": "ക്വാണ്ടിറ്റി നിയന്ത്രണങ്ങളുള്ള പ്രവർത്തിക്കുന്ന കാർട്ട്",
    "pkg.catalogue.f3": "ഒറ്റ ടാപ്പ് WhatsApp ഓർഡറിംഗ്",
    "pkg.catalogue.f4": "₹10,000 പാക്കേജിലെ എല്ലാം",

    "pkg.flagship.tag": "കൂടുതൽ മുന്നോട്ട്",
    "pkg.flagship.for": "ഏറ്റവും സമ്പൂർണ്ണമായ SiteEzy വെബ്സൈറ്റ് പാക്കേജ് ആഗ്രഹിക്കുന്ന ബിസിനസുകൾക്ക്.",
    "pkg.flagship.f1": "ഞങ്ങളുടെ ഏറ്റവും സമ്പൂർണ്ണവും മിനുക്കിയതുമായ നിർമ്മാണം",
    "pkg.flagship.f2": "വിപുലമായ ലേഔട്ടും സ്ക്രോൾ അവതരണവും",
    "pkg.flagship.f3": "സമ്പന്നമായ ഫോട്ടോ ഗാലറികളും വിഭാഗങ്ങളും",
    "pkg.flagship.f4": "₹15,000 പാക്കേജിലെ എല്ലാം",

    "common.viewDemo": "ഡെമോ കാണുക",
    "common.mostPopular": "ഏറ്റവും സമ്പൂർണ്ണം",

    "progression.eyebrow": "വ്യത്യാസം",
    "progression.title": "ഇത് കൂടുതൽ ആനിമേഷൻ മാത്രമല്ല. കൂടുതൽ വെബ്സൈറ്റ് ആണ്.",
    "progression.lead": "ഓരോ പടിയും യഥാർത്ഥ ഘടനയും പ്രവർത്തനക്ഷമതയും ചേർക്കുന്നു — വെറും കാഴ്ചാഭംഗി അല്ല.",
    "progression.item1": "വൃത്തിയുള്ള, ലളിതമായ ഒരു ഓൺലൈൻ സാന്നിധ്യം — അടിസ്ഥാനകാര്യങ്ങൾ, കൃത്യമായി ചെയ്തത്.",
    "progression.item2": "പ്രോജക്ട്/ഫോട്ടോ ഗാലറിയുള്ള ഒരു സമ്പൂർണ്ണ ബഹു-വിഭാഗ ബിസിനസ് വെബ്സൈറ്റ്.",
    "progression.item3": "പ്രവർത്തിക്കുന്ന കാർട്ടും WhatsApp ചെക്ക്ഔട്ടും ഉള്ള ഒരു യഥാർത്ഥ ഉൽപ്പന്ന കാറ്റലോഗ് ചേർക്കുന്നു.",
    "progression.item4": "SiteEzy യുടെ ഏറ്റവും സമ്പൂർണ്ണമായ പാക്കേജ് — ഞങ്ങൾ നിർമ്മിക്കുന്ന ഏറ്റവും പൂർണ്ണമായ അവതരണം.",

    "compare.eyebrow": "താരതമ്യം ചെയ്യൂ",
    "compare.title": "വ്യത്യാസങ്ങൾ ഒറ്റനോട്ടത്തിൽ കാണുക",
    "compare.lead": "എല്ലാ പാക്കേജിലും ഒരു WhatsApp ബന്ധപ്പെടൽ ബട്ടണും ദ്വിഭാഷാ പിന്തുണയും ഉൾപ്പെടുന്നു.",
    "compare.feature": "സവിശേഷത",
    "compare.f.pages": "വെബ്സൈറ്റ് തരം",
    "compare.f.pages.mini": "ഒറ്റ പേജ്",
    "compare.f.pages.business": "ബഹു-വിഭാഗം",
    "compare.f.pages.catalogue": "ബഹു-വിഭാഗം + കാറ്റലോഗ്",
    "compare.f.pages.flagship": "ഏറ്റവും സമ്പൂർണ്ണ നിർമ്മാണം",
    "compare.f.gallery": "ഫോട്ടോ / പ്രോജക്ട് ഗാലറി",
    "compare.f.catalogue": "ഉൽപ്പന്ന കാറ്റലോഗ്",
    "compare.f.cart": "പ്രവർത്തിക്കുന്ന കാർട്ട് + WhatsApp ഓർഡർ",
    "compare.f.maps": "Google Maps",
    "compare.f.animation": "സ്ക്രോൾ ആനിമേഷനുകൾ",
    "compare.f.whatsapp": "WhatsApp ബന്ധപ്പെടൽ ബട്ടൺ",
    "compare.f.bilingual": "ഇംഗ്ലീഷ് + മലയാളം",

    "demoPreview.eyebrow": "തത്സമയ ഡെമോകൾ",
    "demoPreview.title": "വെറുതെ വായിക്കാതെ, പര്യവേക്ഷണം ചെയ്യൂ.",
    "demoPreview.lead": "ഓരോ ഡെമോയും ഒരു സമ്പൂർണ്ണ, സ്വതന്ത്ര ഉദാഹരണ വെബ്സൈറ്റാണ് — അതിൽ കയറൂ, സ്ക്രോൾ ചെയ്യൂ, തിരികെ വരൂ.",
    "demoPreview.card1Tag": "₹5,000 · MINI",
    "demoPreview.card1Title": "Pepper Leaf Café",
    "demoPreview.card2Tag": "₹10,000 · BUSINESS",
    "demoPreview.card2Title": "Arora Interiors",
    "demoPreview.card3Tag": "₹15,000 · CATALOGUE",
    "demoPreview.card3Title": "Urban Threads",
    "demoPreview.card4Tag": "₹18,000 · FLAGSHIP",
    "demoPreview.card4Title": "Nova Fitness Studio",

    "how.eyebrow": "എങ്ങനെ പ്രവർത്തിക്കുന്നു",
    "how.title": "അന്വേഷണം മുതൽ ലൈവ് വെബ്സൈറ്റ് വരെ",
    "how.lead": "ലളിതവും സുതാര്യവുമായ പ്രക്രിയ — ആശയക്കുഴപ്പമുണ്ടാക്കുന്ന സാങ്കേതിക പദങ്ങളില്ല.",
    "how.step1.t": "ഒരു പാക്കേജ് തിരഞ്ഞെടുക്കുക",
    "how.step1.d": "നാല് പാക്കേജുകൾ താരതമ്യം ചെയ്ത് മുകളിലുള്ള അവയുടെ തത്സമയ ഡെമോകൾ പര്യവേക്ഷണം ചെയ്യുക.",
    "how.step2.t": "WhatsApp ൽ ഞങ്ങൾക്ക് സന്ദേശം അയക്കുക",
    "how.step2.d": "താഴെയുള്ള ഫോം ഉപയോഗിച്ച് നിങ്ങളുടെ ബിസിനസിനെക്കുറിച്ച് പറയുക — ഇത് WhatsApp തുറക്കും.",
    "how.step3.t": "നിങ്ങളുടെ കണ്ടന്റ് പങ്കിടുക",
    "how.step3.d": "ഞങ്ങൾക്ക് നിങ്ങളുടെ സൈറ്റ് നിർമ്മിക്കാൻ ബിസിനസ് വിവരങ്ങൾ, ഫോട്ടോകൾ, ടെക്സ്റ്റ് എന്നിവ അയക്കുക.",
    "how.step4.t": "ലൈവ് ആകൂ",
    "how.step4.d": "ഞങ്ങൾ നിങ്ങളുടെ വെബ്സൈറ്റ് നിർമ്മിച്ച് ഡൊമെയ്‌നിന് തയ്യാറായി കൈമാറും.",

    "faq.eyebrow": "പതിവ് ചോദ്യങ്ങൾ",
    "faq.title": "പതിവായി ചോദിക്കുന്ന ചോദ്യങ്ങൾ",
    "faq.q1": "എനിക്ക് ഒരു ഡൊമെയ്ൻ വേണോ?",
    "faq.a1": "ഒരു ഡൊമെയ്ൻ നാമം (yourbusiness.in പോലെ) നിങ്ങളുടെ വെബ്സൈറ്റ് കണ്ടെത്താനും പങ്കിടാനും എളുപ്പമാക്കുന്നു, അതിനാൽ ഞങ്ങൾ അത് ശുപാർശ ചെയ്യുന്നു — എന്നാൽ ഇത് പാക്കേജ് വിലയിൽ ഉൾപ്പെടുന്നില്ല, നിങ്ങൾ പ്രത്യേകം രജിസ്റ്റർ ചെയ്ത് പുതുക്കണം.",
    "faq.q2": "എനിക്ക് എന്റെ സ്വന്തം ഡൊമെയ്ൻ ഉപയോഗിക്കാമോ?",
    "faq.a2": "അതെ. നിങ്ങൾക്ക് ഇതിനകം ഒരു ഡൊമെയ്ൻ ഉണ്ടെങ്കിൽ, ഞങ്ങൾക്ക് അത് നിങ്ങളുടെ പുതിയ വെബ്സൈറ്റുമായി ബന്ധിപ്പിക്കാം. ഇല്ലെങ്കിൽ, ഒന്ന് രജിസ്റ്റർ ചെയ്യാൻ ഞങ്ങൾ നിങ്ങളെ സഹായിക്കാം.",
    "faq.q3": "എനിക്ക് WhatsApp ഉപയോഗിക്കാമോ?",
    "faq.a3": "അതെ — എല്ലാ SiteEzy പാക്കേജിലും ഒരു WhatsApp ബന്ധപ്പെടൽ ബട്ടൺ ഉൾപ്പെടുന്നു, അധിക സോഫ്റ്റ്‌വെയർ ഒന്നും ആവശ്യമില്ലാതെ ഉപഭോക്താക്കൾക്ക് നിങ്ങളെ നേരിട്ട് ബന്ധപ്പെടാം.",
    "faq.q4": "എനിക്ക് ഉൽപ്പന്നങ്ങൾ വിൽക്കാമോ?",
    "faq.a4": "₹15,000, ₹18,000 പാക്കേജുകളിൽ, അതെ — ഉപഭോക്താക്കൾക്ക് ഒരു കാറ്റലോഗ് ബ്രൗസ് ചെയ്യാം, കാർട്ടിലേക്ക് ഇനങ്ങൾ ചേർക്കാം, WhatsApp വഴി ഓർഡർ അയക്കാം.",
    "faq.q5": "കാറ്റലോഗ് ഒരു സമ്പൂർണ്ണ ഇ-കൊമേഴ്‌സ് വെബ്സൈറ്റ് ആണോ?",
    "faq.a5": "അല്ല. ഇത് WhatsApp ഓർഡറിംഗ് ഉള്ള ഒരു ഉൽപ്പന്ന കാറ്റലോഗ് ആണ്, ഒരു സമ്പൂർണ്ണ ഓൺലൈൻ സ്റ്റോർ അല്ല — ഓൺലൈൻ പേയ്‌മെന്റ് ഗേറ്റ്‌വേയോ ഓട്ടോമേറ്റഡ് ഓർഡർ/ഇൻവെന്ററി സിസ്റ്റമോ ഇതിൽ ഇല്ല.",
    "faq.q6": "നിങ്ങൾ Google റാങ്കിംഗ് ഉറപ്പുനൽകുമോ?",
    "faq.a6": "ആർക്കും സത്യസന്ധമായി അത് ചെയ്യാൻ കഴിയില്ല. ഞങ്ങൾ അടിസ്ഥാന SEO നല്ല രീതികൾ പിന്തുടരുന്നു, എന്നാൽ റാങ്കിംഗ്, ട്രാഫിക്, വിൽപ്പന എന്നിവ വെബ്സൈറ്റിന്റെ നിയന്ത്രണത്തിന് പുറത്തുള്ള പല ഘടകങ്ങളെ ആശ്രയിച്ചിരിക്കുന്നു.",
    "faq.q7": "എനിക്ക് പിന്നീട് മാറ്റങ്ങൾ ആവശ്യപ്പെടാമോ?",
    "faq.a7": "അതെ. ചെറിയ അംഗീകൃത തിരുത്തലുകൾ ഡെലിവറി പ്രക്രിയയുടെ ഭാഗമാണ്; ഡെലിവറിക്ക് ശേഷമുള്ള വലിയ മാറ്റങ്ങൾക്കോ പുതിയ ഫീച്ചറുകൾക്കോ മുൻകൂട്ടി ചർച്ച ചെയ്യുന്ന അധിക ചെലവ് വന്നേക്കാം.",
    "faq.q8": "നിങ്ങൾക്ക് കസ്റ്റം സോഫ്റ്റ്‌വെയർ നിർമ്മിക്കാമോ?",
    "faq.a8": "SiteEzy യുടെ പാക്കേജുകൾ സ്റ്റാറ്റിക് വെബ്സൈറ്റുകളാണ്, കസ്റ്റം സോഫ്റ്റ്‌വെയറോ ബാക്കെൻഡ് സിസ്റ്റങ്ങളോ അല്ല. ഒരു വെബ്സൈറ്റിനപ്പുറം എന്തെങ്കിലും വേണമെങ്കിൽ, അത് പ്രത്യേക ക്വട്ടേഷനുമായി ഞങ്ങൾക്ക് ചർച്ച ചെയ്യാം.",
    "faq.q9": "ഹോസ്റ്റിംഗ് എങ്ങനെ പ്രവർത്തിക്കുന്നു?",
    "faq.a9": "നിങ്ങളുടെ വെബ്സൈറ്റ് ലളിതവും കുറഞ്ഞ ചെലവുള്ളതുമായ സ്റ്റാറ്റിക് ഹോസ്റ്റിംഗിൽ (GitHub Pages പോലുള്ളവ) പ്രവർത്തിക്കാൻ നിർമ്മിച്ചതാണ്. ഞങ്ങൾ നിങ്ങളുടെ സൈറ്റ് കൈമാറുമ്പോൾ ഓപ്ഷനുകൾ ലളിതമായി വിശദീകരിക്കും.",
    "faq.q10": "എനിക്ക് ഒരു ഡെമോ കാണാമോ?",
    "faq.a10": "അതെ — മുകളിലേക്ക് സ്ക്രോൾ ചെയ്ത് മുകളിലുള്ള നാല് തത്സമയ ഡെമോകളിൽ ഏതെങ്കിലും തുറക്കുക. അതാണ് ആ പാക്കേജ് ഉപയോഗിച്ച് നിങ്ങൾക്ക് ലഭിക്കുന്ന വെബ്സൈറ്റ്.",

    "disclaimer.eyebrow": "ദയവായി വായിക്കുക",
    "disclaimer.title": "വെബ്സൈറ്റ് സേവന നിരാകരണവും നിബന്ധനകളും",
    "disclaimer.lead": "മന:പൂർവം ലളിതമായ ഭാഷയിൽ എഴുതിയത്. അന്വേഷിക്കുന്നതിന് മുൻപ് ദയവായി ഇത് വായിക്കുക.",
    "disclaimer.p1": "പാക്കേജ് വില ആ പാക്കേജിൽ പട്ടികപ്പെടുത്തിയ സവിശേഷതകൾ മാത്രം ഉൾക്കൊള്ളുന്നു — അതിൽ കൂടുതൽ ഒന്നും, മറഞ്ഞിരിക്കുന്ന ഒന്നും ഇല്ല.",
    "disclaimer.p2": "ഡൊമെയ്ൻ നാമം രജിസ്ട്രേഷനും വാർഷിക പുതുക്കലും പ്രത്യേക ചെലവുകളാണ്, ഡൊമെയ്ൻ രജിസ്ട്രാർക്ക് നിങ്ങൾ നൽകേണ്ടത്.",
    "disclaimer.p3": "നിങ്ങളുടെ സൈറ്റ് നിർമ്മിക്കാൻ ആവശ്യമായ ടെക്സ്റ്റ്, ഫോട്ടോകൾ, വിലകൾ, മറ്റ് വസ്തുക്കൾ എന്നിവ നിങ്ങൾ നൽകുന്നു.",
    "disclaimer.p4": "തുടങ്ങുന്നതിന് മുൻപ് സമ്മതിച്ച തിരുത്തലുകളുടെ എണ്ണം മാത്രമേ പാക്കേജ് വിലയിൽ ഉൾപ്പെടുന്നുള്ളൂ.",
    "disclaimer.p5": "സമ്മതിച്ചതിനപ്പുറമുള്ള അധിക തിരുത്തലുകൾക്കോ പ്രവർത്തനങ്ങൾക്കോ മുൻകൂട്ടി ചർച്ച ചെയ്യുന്ന അധിക ചെലവ് വന്നേക്കാം.",
    "disclaimer.p6": "അടിസ്ഥാന ഓൺ-പേജ് SEO ഒരു നല്ല രീതിയാണ്, ഒരു ഉറപ്പല്ല — ഇത് സെർച്ച് റാങ്കിംഗ്, ട്രാഫിക്, ലീഡുകൾ അല്ലെങ്കിൽ വിൽപ്പന ഉറപ്പുനൽകുന്നില്ല.",
    "disclaimer.p7": "മൂന്നാം കക്ഷി സേവനങ്ങൾക്ക് (ഡൊമെയ്നുകൾ, ഹോസ്റ്റിംഗ്, WhatsApp, Google Maps മുതലായവ) അവരുടേതായ നയങ്ങളും വിലയും ലഭ്യതയും ഉണ്ട്, ഇത് SiteEzy നിയന്ത്രിക്കുന്നില്ല.",
    "disclaimer.p8": "ഡെലിവറി സമയക്രമം നിങ്ങളുടെ കണ്ടന്റും അംഗീകാരങ്ങളും കൃത്യസമയത്ത് ലഭിക്കുന്നതിനെ ആശ്രയിച്ചിരിക്കുന്നു.",
    "disclaimer.p9": "അന്തിമ ഡെലിവറിക്ക് ശേഷം യഥാർത്ഥത്തിൽ സമ്മതിച്ച പരിധിക്ക് പുറത്തുള്ള മാറ്റങ്ങൾ ആവശ്യപ്പെട്ടാൽ അധിക ചെലവ് വന്നേക്കാം.",
    "disclaimer.p10": "വിപുലമായ സംവിധാനങ്ങൾ — ബുക്കിംഗുകൾ, ലോഗിനുകൾ, പേയ്‌മെന്റുകൾ, കസ്റ്റം സോഫ്റ്റ്‌വെയർ — ഏതെങ്കിലും പാക്കേജിൽ സ്വയമേവ ഉൾപ്പെടുന്നില്ല.",
    "disclaimer.p11": "₹15,000 / ₹18,000 കാറ്റലോഗ് + കാർട്ട് + WhatsApp ഓർഡറിംഗ് ഫീച്ചർ ഒരു സമ്പൂർണ്ണ ഇ-കൊമേഴ്‌സ് പ്ലാറ്റ്‌ഫോം അല്ല.",
    "disclaimer.p12": "പ്രത്യേകം ചർച്ച ചെയ്ത് സമ്മതിക്കാത്ത പക്ഷം പേയ്‌മെന്റ് ഗേറ്റ്‌വേകൾ ഉൾപ്പെടുന്നില്ല.",
    "disclaimer.p13": "നിങ്ങൾ നൽകുന്ന ഏതൊരു ഫോട്ടോകളും ലോഗോകളും കണ്ടന്റും എല്ലായ്‌പ്പോഴും നിങ്ങളുടെ സ്വത്തായി തുടരും.",
    "disclaimer.p14": "ലൈവ് ആകുന്നതിന് അന്തിമ അംഗീകാരം നൽകുന്നതിന് മുൻപ് നിങ്ങളുടെ വെബ്സൈറ്റ് ശ്രദ്ധാപൂർവം പരിശോധിക്കണം.",
    "disclaimer.p15": "ഒരു സാധാരണ പാക്കേജിന് പുറത്തുള്ള ആവശ്യകതകൾക്ക് (കസ്റ്റം ഫീച്ചറുകൾ, ഇന്റഗ്രേഷനുകൾ മുതലായവ) അവരുടേതായ പ്രത്യേക ക്വട്ടേഷൻ ആവശ്യമാണ്.",

    "contact.eyebrow": "ആരംഭിക്കൂ",
    "contact.title": "നിങ്ങളുടെ ബിസിനസിനെക്കുറിച്ച് ഞങ്ങളോട് പറയൂ",
    "contact.lead": "നിങ്ങൾ നടത്തുന്ന ബിസിനസും താൽപ്പര്യമുള്ള പാക്കേജും ഞങ്ങളോട് പറയൂ — ഞങ്ങൾ WhatsApp ൽ മറുപടി നൽകും.",
    "contact.labelName": "പേര്",
    "contact.placeholderName": "നിങ്ങളുടെ പേര്",
    "contact.labelBusiness": "നിങ്ങൾ ഏത് ബിസിനസ് ആണ് നടത്തുന്നത്?",
    "contact.placeholderBusiness": "റെസ്റ്റോറന്റ്, വസ്ത്ര കട, സലൂൺ, വർക്ക്ഷോപ്പ് മുതലായവ.",
    "contact.labelPackage": "പാക്കേജ്",
    "contact.optMini": "₹5,000 MINI",
    "contact.optBusiness": "₹10,000 BUSINESS",
    "contact.optCatalogue": "₹15,000 CATALOGUE",
    "contact.optFlagship": "₹18,000 FLAGSHIP",
    "contact.optNotSure": "ഇതുവരെ ഉറപ്പില്ല",
    "contact.labelMessage": "സന്ദേശം (ഓപ്ഷണൽ)",
    "contact.placeholderMessage": "ഞങ്ങൾ അറിഞ്ഞിരിക്കേണ്ട മറ്റെന്തെങ്കിലും",
    "contact.disclaimerPre": "ഞാൻ വായിക്കുകയും മനസ്സിലാക്കുകയും ചെയ്തു",
    "contact.disclaimerLink": "SiteEzy വെബ്സൈറ്റ് സേവന നിരാകരണവും നിബന്ധനകളും",
    "contact.submitBtn": "WhatsApp ലേക്ക് തുടരുക",

    "finalcta.title": "എളുപ്പ വഴിയിൽ ഓൺലൈനിൽ വരാൻ തയ്യാറാണോ?",
    "finalcta.lead": "ആശയക്കുഴപ്പമുണ്ടാക്കുന്ന സാങ്കേതിക സംസാരമില്ല — ലളിതമായി വിശദീകരിച്ച, നിങ്ങളുടെ ബിസിനസിനായുള്ള ഒരു പ്രൊഫഷണൽ വെബ്സൈറ്റ്.",
    "finalcta.btn1": "ഇപ്പോൾ WhatsApp ചെയ്യൂ",
    "finalcta.btn2": "പാക്കേജുകൾ വീണ്ടും കാണുക",

    "footer.tagline": "വെബ്സൈറ്റുകൾ എളുപ്പമാക്കി — പ്രാദേശിക & ചെറുകിട ബിസിനസുകൾക്കായുള്ള പ്രൊഫഷണൽ വെബ്സൈറ്റുകൾ.",
    "footer.company": "പര്യവേക്ഷണം ചെയ്യൂ",
    "footer.linkPackages": "പാക്കേജുകൾ",
    "footer.linkDemos": "ഡെമോകൾ",
    "footer.linkFaq": "പതിവ് ചോദ്യങ്ങൾ",
    "footer.linkContact": "ബന്ധപ്പെടുക",
    "footer.contact": "ബന്ധപ്പെടുക",
    "footer.rights": "© 2026 SiteEzy. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
    "footer.note": "വെബ്സൈറ്റ് പാക്കേജുകൾ കസ്റ്റം വെബ് ഡെവലപ്‌മെന്റ് സേവനങ്ങളാണ്. ഡൊമെയ്‌നും മൂന്നാം കക്ഷി ചെലവുകളും പ്രത്യേകമാണ് — ഞങ്ങളുടെ നിരാകരണം കാണുക."
  }
};

const LANG_KEY = "siteezy_lang";

function getSavedLang() {
  try { return localStorage.getItem(LANG_KEY) || "en"; } catch (e) { return "en"; }
}
function saveLang(lang) {
  try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* ignore */ }
}

/** Walk the DOM applying translations for the given language. */
function applyTranslations(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

function initLanguage() {
  const lang = getSavedLang();
  applyTranslations(lang);
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosen = btn.getAttribute("data-lang");
      saveLang(chosen);
      applyTranslations(chosen);
    });
  });
}
