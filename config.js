// ================================================================
// CONFIGURATION CENTRALISÉE ARVEXA
// ================================================================

var APP_CONFIG = {
  // 🔗 URL de base du site (à modifier quand tu auras l'URL définitive)
  SITE_URL: 'https://gagneavecia-ui.github.io/Webtest',
  
  // 🔗 Lien vers l'admin
  ADMIN_URL: 'https://gagneavecia-ui.github.io/Webtest/admin',
  
  // 🔗 Lien vers le service worker Firebase (pour les notifications)
  FCM_SW_URL: 'https://gagneavecia-ui.github.io/Webtest/firebase-messaging-sw.js',
  
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

// Afficher dans la console que la config est chargée
console.log('✅ config.js chargé');
console.log('🔗 SITE_URL:', APP_CONFIG.SITE_URL);
console.log('🔗 ADMIN_URL:', APP_CONFIG.ADMIN_URL);