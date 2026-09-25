/* =========================================================
   SiteEzy — whatsapp.js
   The ONE place the WhatsApp number lives. Every page on the
   whole project (the main site AND all four demos) loads this
   file, so changing the number here updates every button,
   everywhere, automatically.
   ========================================================= */

// Country code + number, no "+", no spaces.
const WHATSAPP_NUMBER = "919744239343";

/**
 * Build a wa.me link that opens WhatsApp with a pre-filled message.
 * @param {string} message - plain text message (line breaks are fine)
 * @param {string} [number] - defaults to WHATSAPP_NUMBER
 */
function buildWhatsAppLink(message, number) {
  const num = number || WHATSAPP_NUMBER;
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

/** Open WhatsApp in a new tab with the given message. */
function openWhatsApp(message, number) {
  window.open(buildWhatsAppLink(message, number), "_blank", "noopener");
}
