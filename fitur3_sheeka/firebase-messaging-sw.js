// firebase-messaging-sw.js
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js");

// OneSignal Service Worker
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

// Konfigurasi Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDCCy9lVrewr3EraM_Sua7h8LXvJBr8Xhc",
  authDomain: "astha-project-8048f.firebaseapp.com",
  databaseURL: "https://astha-project-8048f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "astha-project-8048f",
  storageBucket: "astha-project-8048f.appspot.com",
  messagingSenderId: "801380674010",
  appId: "1:801380674010:web:7891588156219fb21078e3"
});

// Dapatkan instance Firebase Messaging
const messaging = firebase.messaging();

// Tambahkan listener untuk pesan background
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/img/astha_logo.JPG'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
