user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyBsE30C889I_wMYCJt7LTzAZ-ZadJLyWoE",
      authDomain: "kwitter-cb6f6.firebaseapp.com",
      projectId: "kwitter-cb6f6",
      storageBucket: "kwitter-cb6f6.appspot.com",
      messagingSenderId: "780027830539",
      appId: "1:780027830539:web:b4c979da785d92d3c1020e",
      measurementId: "G-4C1T220S5X"
    };
// Initialize Firebase
const app = initializeApp(firebaseConfig);   

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_namest + "onclick='redirectToRoomName (this.id)' >#"+ Room_names +"</div><hr>"; 
     document.getElementById("output").innerHTML += row;
     //End code
     });});}
  getData();
  

function redirectToRoomName(name){
console.log(name);
 localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
function logout() {
 localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}