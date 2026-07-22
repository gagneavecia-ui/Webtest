// ================================================================
// CONFIGURATION CENTRALISÉE ARVEXA
// ================================================================

var APP_CONFIG = {

  SITE_URL: 'https://gagneavecia-ui.github.io/Webtest',

  // 🔗 Lien vers l'admin
  ADMIN_URL: 'https://gagneavecia-ui.github.io/Webtest/admin',

  // 📱 Contact WhatsApp
  CONTACT_WHATSAPP: '22798064667',

  // 💰 Seuils financiers
  MIN_DEPOSIT: 3000,
  MAX_DEPOSIT: 1000000,
  MIN_WITHDRAWAL: 5000,
  MAX_WITHDRAWAL: 50000,

  // 🏷️ Informations générales
  APP_NAME: 'ARVEXA',
  APP_VERSION: '1.0.0'
};

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_CONFIG;
}
