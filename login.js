// //Validtion Code For Inputs

// var username = document.forms['form']['username'];
// var password = document.forms['form']['password'];
    
// var user_error = document.getElementById('username_error');
// var pass_error = document.getElementById('pass_error');
    
// username.addEventListener('textInput', username_Verify);
// password.addEventListener('textInput', pass_Verify);
    
// function validated(){
//     if (username.value.length < 5) {
//         username.style.border = "1px solid red";
//         username_error.style.display = "block";
//         username.focus();
//         return false;
//     }
//     if (password.value.length < 5) {
//         password.style.border = "1px solid red";
//         pass_error.style.display = "block";
//         password.focus();
//         return false;
//     }
// }

// function username_Verify(){
//     if (username.value.length >= 6) {
//         username.style.border = "1px solid silver";
//         username_error.style.display = "none";
//         return true;
//     }
// }
// function pass_Verify(){
//     if (password.value.length >= 6) {
//         password.style.border = "1px solid silver";
//         pass_error.style.display = "none";
//         return true;
//     }
// }


function signup(){
    event.preventDefault();


    var name = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var result = document.getElementById('result')

    var user = {
        username: name,
        password: pass,
        email: email,
    };

    var json = JSON.stringify(user);
    localStorage.setItem(name, json);
    console.log('user added');
    result.innerHTML = 'Account Created';
}

function loginFunc(){
    event.preventDefault();

    var username = document.forms['form']['username'];
    
    var name = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    var result = document.getElementById('result')

    var user = localStorage.getItem(name);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        result.innerHTML = 'Wrong username';
    } 
    else if(name == data.username && pass == data.password){
        result.innerHTML = 'login verified';
        window.location.href='home.html';
    }
    else{
        result.innerHTML = 'Wrong password'
    }
}
    