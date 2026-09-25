/* =========================================================
   SiteEzy — main.js
   Homepage interactions only: mobile nav, scroll-reveal
   animations, and the "Tell Us About Your Business" enquiry
   form. Load order on the page: whatsapp.js → language.js →
   main.js (this file uses functions from both).
   ========================================================= */

function initMobileNav() {
  const toggle = document.getElementById("navToggle");
  const panel = document.getElementById("mobileNav");
  if (!toggle || !panel) return;
  toggle.addEventListener("click", () => {
    panel.classList.toggle("open");
  });
  panel.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => panel.classList.remove("open"));
  });
}

function initFadeUp() {
  const els = document.querySelectorAll(".fade-up");
  if (!("IntersectionObserver" in window) || els.length === 0) {
    els.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => io.observe(el));
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove("show"), 2600);
}

function initHeroWhatsapp() {
  const links = document.querySelectorAll("[data-wa-generic]");
  links.forEach((a) => {
    a.href = buildWhatsAppLink("Hi SiteEzy, I'd like to know more about your website packages and which one would suit my business.");
  });
}

/* Package-specific "Ask about this package" links on each package card.
   Keeps the WhatsApp message pre-filled with the exact package the visitor
   was actually looking at, instead of a generic message. */
const PACKAGE_WA_INFO = {
  mini: "the ₹5,000 MINI package",
  business: "the ₹10,000 BUSINESS package",
  catalogue: "the ₹15,000 CATALOGUE package",
  flagship: "the ₹18,000 FLAGSHIP package",
};
function initPackageWhatsapp() {
  document.querySelectorAll("[data-pkg-wa]").forEach((a) => {
    const pkg = a.getAttribute("data-pkg-wa");
    const label = PACKAGE_WA_INFO[pkg] || "your website packages";
    a.href = buildWhatsAppLink(`Hi SiteEzy, I'm interested in ${label}. Could you tell me more about what's included?`);
  });
}

function initEnquiryForm() {
  const form = document.getElementById("enquiryForm");
  if (!form) return;
  const check = document.getElementById("enqDisclaimerCheck");
  const submitBtn = document.getElementById("enquiryWhatsappBtn");

  check.addEventListener("change", () => {
    submitBtn.disabled = !check.checked;
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("enqName").value.trim();
    const business = document.getElementById("enqBusiness").value.trim();
    const pkgSelect = document.getElementById("enqPackage");
    const pkgLabel = pkgSelect.options[pkgSelect.selectedIndex].text;
    const message = document.getElementById("enqMessage").value.trim();

    if (!name || !business) {
      showToast("Please fill in your name and business type.");
      return;
    }
    if (!check.checked) {
      showToast("Please confirm you've read the disclaimer.");
      return;
    }

    let text = `Hi SiteEzy, I'd like to know more about your website packages.\nMy name is ${name}.\nI run a ${business}.\nI'm interested in the ${pkgLabel} package and would like to discuss which package would be suitable for my business.`;
    if (message) text += `\nAdditional details: ${message}`;
    text += `\nI have read the SiteEzy Website Services Disclaimer & Terms.`;

    openWhatsApp(text);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initMobileNav();
  initFadeUp();
  initHeroWhatsapp();
  initPackageWhatsapp();
  initEnquiryForm();
});
