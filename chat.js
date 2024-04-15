var firebaseConfig = {
    apiKey: "AIzaSyCtbNEZ8nithmYqyUjrj3B3Kv-wQNjg2Ak",
    authDomain: "project-11aa5.firebaseapp.com",
    databaseURL: "https://project-11aa5-default-rtdb.firebaseio.com",
    projectId: "project-11aa5",
    storageBucket: "project-11aa5.appspot.com",
    messagingSenderId: "495513248568",
    appId: "1:495513248568:web:5a3799481079f5c84c97cd",
    measurementId: "G-KV2ZEJ9KL8"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}


