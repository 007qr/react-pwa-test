importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "pwa-react-deb88.firebaseapp.com",
    projectId: "pwa-react-deb88",
    storageBucket: "pwa-react-deb88.appspot.com",
    messagingSenderId: "1001052109587",
    appId: "1:1001052109587:web:9eb401e62c029500d938e6"
};

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log(
        '[firebase-messaging-sw.js] Received background message ',
        payload
    );
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

