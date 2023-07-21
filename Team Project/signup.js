const firebaseConfig = {
  apiKey: "AIzaSyDvti6CLVTt9mJaalekCw9VMd_xBHzRnEo",
  authDomain: "signuppage-81545.firebaseapp.com",
  databaseURL: "https://signuppage-81545-default-rtdb.firebaseio.com",
  projectId: "signuppage-81545",
  storageBucket: "signuppage-81545.appspot.com",
  messagingSenderId: "599202607687",
  appId: "1:599202607687:web:f94a099ad830efa9eef762",
  measurementId: "G-7KLB5VP2QY"
};

firebase.initializeApp(firebaseConfig);
var loginformDB = firebase.database().ref("signupform");


document.getElementById("Signup").addEventListener("submit", submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    var username = getElementVal("username");
    var email = getElementVal("email");
    var password = getElementVal("password");
    var confirmpassword = getElementVal("confirmpassword");

    saveMessages(username, email, password, confirmpassword);
}

const saveMessages = (username, email, password, confirmpassword) => {
    var newContactForm = loginformDB.push();

    newContactForm.set({
        username : username,
        email : email,
        password : password,
        confirmpassword : confirmpassword,
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}
