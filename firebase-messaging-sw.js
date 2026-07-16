// firebase-messaging-sw.js
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
    vibrate: [200, 100, 200, 100, 200]
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = event.notification.data?.url || '/index.html';
  event.waitUntil(clients.openWindow(url));
});

console.log('✅ Service Worker FCM chargé');
