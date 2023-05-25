

importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

var firebaseConfig = {
  apiKey: "AIzaSyA39fDromgN4IykvK1NQw-0RPS5dGQAxn8",
  authDomain: "gsc-control-panel.firebaseapp.com",
  projectId: "gsc-control-panel",
  storageBucket: "gsc-control-panel.appspot.com",
  messagingSenderId: "964545284233",
  appId: "1:964545284233:web:229a0fc95c4b5082ac9e58",
  measurementId: "G-BVQ54Y5F5C",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );


  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
