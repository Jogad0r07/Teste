const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "teste-ff843.firebaseapp.com",
  databaseURL: "https://teste-ff843-default-rtdb.firebaseio.com/",
  projectId: "teste-ff843",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();
const auth = firebase.auth();
