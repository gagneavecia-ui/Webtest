// ============================================================
// 📋 CONFIG.TEMPLATE.JS
// ⚠️ Copiez ce fichier en config.js pour le développement local
// ⚠️ NE JAMAIS COMMITTER config.js
// ============================================================

const APP_CONFIG = {
  // ============================================================
  // 🔥 FIREBASE CONFIGURATION
  // ============================================================
  FIREBASE: {
    apiKey: 'VOTRE_API_KEY',
    authDomain: 'VOTRE_AUTH_DOMAIN',
    projectId: 'VOTRE_PROJECT_ID',
    storageBucket: 'VOTRE_STORAGE_BUCKET',
    messagingSenderId: 'VOTRE_MESSAGING_SENDER_ID',
    appId: 'VOTRE_APP_ID',
    measurementId: 'VOTRE_MEASUREMENT_ID'
  },

  // ============================================================
  // 📱 CONTACTS
  // ============================================================
  CONTACT_WHATSAPP: '227XXXXXXXX',
  ADMIN_EMAIL: 'admin@arvexa.com',

  // ============================================================
  // 💰 SEUILS FINANCIERS
  // ============================================================
  MIN_DEPOSIT: 3000,
  MAX_DEPOSIT: 1000000,
  MIN_WITHDRAWAL: 1000,
  MAX_WITHDRAWAL: 50000,

  // ============================================================
  // 🛒 BOUTIQUE
  // ============================================================
  BOUTIQUE: {
    COMMISSION: 0,
    MIN_PRICE: 100,
    MAX_PRICE: 1000000,
    CATEGORIES: ['formation', 'ebook', 'service', 'template', 'logiciel', 'autre']
  },

  // ============================================================
  // 🔔 NOTIFICATIONS
  // ============================================================
  NOTIFICATIONS: {
    TELEGRAM_ENABLED: false,
    WHATSAPP_ENABLED: true
  },

  // ============================================================
  // 📊 ANALYTICS
  // ============================================================
  ANALYTICS_ENABLED: false,

  // ============================================================
  // 🧪 DEBUG
  // ============================================================
  DEBUG: false
};

// Export pour Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_CONFIG;
}

// Export pour le navigateur
if (typeof window !== 'undefined') {
  window.APP_CONFIG = APP_CONFIG;
}

export default APP_CONFIG;