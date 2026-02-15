importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAjVspRosUMVQnEDCNbFpRxMfP_2HJ4qwg",
  authDomain: "wamco-online.firebaseapp.com",
  projectId: "wamco-online",
  storageBucket: "wamco-online.firebasestorage.app",
  messagingSenderId: "606429723400",
  appId: "1:606429723400:web:c4214d7af3a638d5c8cabd"
});

const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || 'WAMCO Online';
  const options = {
    body: payload.notification?.body,
    icon: '/icons/Icon-192.png'
  };
  self.registration.showNotification(title, options);
});
