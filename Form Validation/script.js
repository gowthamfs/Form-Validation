
function nameCheck() {
let userName = document.getElementById('user-name').value;
    if (userName.length<3){
        document.getElementById('user-error').innerText = "*Enter valid name*"
    } else {
        document.getElementById('user-error').innerText = '';
    }
}

function emailCheck(){
    let email = document.getElementById('user-email').value;
    if(email.length<3){
        document.getElementById('email-error').innerText = "*Enter valid Email*"
    } else
     document.getElementById('email-error').innerText = '';
}

function passError(){
    let pass = document.getElementById('user-pass').value;
    let conPass = document.getElementById('user-conPass').value;
    if (pass != conPass ){
        document.getElementById('pass-error').innerText = "*Password should be same*"
    } else 
    document.getElementById('pass-error').innerText ='';
}

function forgotPage(){ 
    document.getElementById('signUpForm').style.display = "none"; 
    document.getElementById('forgotPassword').style.display = "block";
}

function loginPage(){
    document.getElementById('signUpForm').style.display = "none"; 
    document.getElementById('loginform').style.display = "block";
}
