var firebaseConfig = {
    apiKey: "AIzaSyDRlIiirUJLqQp4k1irGN4PJzHEOl_nDBs",
    authDomain: "test1-20792.firebaseapp.com",
    databaseURL: "https://test1-20792.firebaseio.com",
    projectId: "test1-20792",
    storageBucket: "test1-20792.appspot.com",
    messagingSenderId: "1035492128944",
    appId: "1:1035492128944:web:6e83297db003d1bee96375",
    measurementId: "G-BJ4DE5JC9B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  function writeData() {

    
      
    firebase.database().ref("User").set({
      username: document.getElementById("namefield").value,
      password: document.getElementById("password").value
    });
  }

 