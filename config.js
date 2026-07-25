// ================================================================
// CONFIGURATION CENTRALISÉE ARVEXA
// ================================================================

var APP_CONFIG = {

  // 🔗 Lien vers l'admin
  ADMIN_URL: 'https://nexgen-39043.web.app/admin',

  // 📱 Contact WhatsApp
  CONTACT_WHATSAPP: '22798064667',

  // 💰 Seuils financiers
  MIN_DEPOSIT: 3000,
  MAX_DEPOSIT: 1000000,
  MIN_WITHDRAWAL: 1000,
  MAX_WITHDRAWAL: 50000,
  MAX_DEPOSITS_PER_DAY: 2,

  // 🏷️ Informations générales
  APP_NAME: 'ARVEXA',
  APP_VERSION: '1.0.0',

  // ============================================================
  // 🎯 FORUM - Configuration des récompenses
  // ============================================================
  FORUM: {
    LIKES_TARGET: 50,      // Nombre de likes requis
    LIKES_REWARD: 100,     // Montant de la récompense en FCFA
    MAX_TOPICS_DISPLAY: 20,
    MAX_REPLIES_DISPLAY: 50,
    CACHE_DURATION: 5
  },

  // ============================================================
  // 💸 RETRAIT - Configuration
  // ============================================================
  RETRAIT: {
    MIN_AMOUNT: 1000,
    MAX_AMOUNT: 50000,
    // Frais de retrait (en pourcentage)
    FEES: {
      TIER_1: { max: 10000, rate: 0.05 },   // 5% jusqu'à 10 000
      TIER_2: { max: 25000, rate: 0.04 },   // 4% jusqu'à 25 000
      TIER_3: { max: Infinity, rate: 0.03 } // 3% au-delà
    }
  },

  // ============================================================
  // 🏆 DÉFIS - Configuration
  // ============================================================
  DEFIS: {
    TOTAL_REWARD: 300,     // Récompense totale par semaine
    DEFIS: [
      { id: 'lundi', reward: 40, scoreRequis: 7 },
      { id: 'mardi', reward: 50, scoreRequis: 7 },
      { id: 'mercredi', reward: 60, scoreRequis: 8 },
      { id: 'jeudi', reward: 70, scoreRequis: 7 },
      { id: 'vendredi', reward: 80, scoreRequis: 8 }
    ]
  },

  // ============================================================
  // 🛒 BOUTIQUE - Configuration
  // ============================================================
  BOUTIQUE: {
    COMMISSION: 0,         // 0% commission (100% pour le vendeur)
    MIN_PRICE: 100,
    MAX_PRICE: 1000000,
    CATEGORIES: ['formation', 'ebook', 'service', 'template', 'logiciel', 'autre']
  },

  // ============================================================
  // 🔔 NOTIFICATIONS
  // ============================================================
  NOTIFICATIONS: {
    TELEGRAM_ENABLED: false,  // Désactivé par défaut
    WHATSAPP_ENABLED: true
  }
};

// Exporter pour utilisation
if (typeof module !== 'undefined' && module.exports) {
  module.exports = APP_CONFIG;
}
