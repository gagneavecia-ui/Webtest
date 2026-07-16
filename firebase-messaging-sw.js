// firebase-messaging-sw.js
// ⚠️ Ce fichier DOIT être à la racine du site
// Exemple: https://votre-site.com/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/12.12.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.12.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBEbYuuUlNCLMBUHClv4UnyownNHw2q3_g",
  authDomain: "nexgen-39043.firebaseapp.com",
  projectId: "nexgen-39043",
  storageBucket: "nexgen-39043.firebasestorage.app",
  messagingSenderId: "619390144325",
  appId: "1:619390144325:web:35d96b125501e4e8b1782c"
});

const messaging = firebase.messaging();

// Messages en arrière-plan
messaging.onBackgroundMessage((payload) => {
  console.log('[SW] Message reçu:', payload);
  
  const title = payload.notification?.title || payload.data?.title || 'ARVEXA';
  const body = payload.notification?.body || payload.data?.body || '';
  const url = payload.data?.url || '/index.html';
  
  return self.registration.showNotification(title, {
    body: body,
    icon: '/favicon.ico',
    badge: '/badge-icon.png',
    data: { url: url },
    requireInteraction: true,
    vibrate: [200, 100, 200, 100, 200],
    actions: [
      { action: 'open', title: '📖 Ouvrir' },
      { action: 'close', title: '✕ Fermer' }
    ]
  });
});

// Clic sur la notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  const url = event.notification.data?.url || '/index.html';
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
      for (const client of clients) {
        if (client.url.includes(url) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(url);
      }
    })
  );
});

console.log('✅ Service Worker FCM chargé');
