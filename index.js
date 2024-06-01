function sign() {
    // event.preventDefault();
    // var inputContainer = document.getElementById('inputs');
    // var actionButton = document.getElementById('login');
    var email = document.getElementById('item').value.trim();
    var password = document.getElementById('item2').value.trim();
    var usernameInput = document.getElementById('username').value.trim();

    if (!usernameInput) {
        // usernameInput = document.createElement('input');
        // usernameInput.id = 'username';
        // usernameInput.className = 'item my-3 py-2 bg-transparent form-control';
        // usernameInput.type = 'text';
        // usernameInput.placeholder = 'Enter your username';
        // inputContainer.insertBefore(usernameInput, inputContainer.firstChild);
    } else {
        // usernameInput.style.display = 'block';
    }
    var email = document.getElementById('item').value.trim();
    var password = document.getElementById('item2').value.trim();
    var username = document.getElementById('username').value.trim();
    var errorMessage = document.getElementById('error-message');

    if (email === '' || password === '' || username === '') {
        errorMessage.textContent = 'All inputs are required';
        errorMessage.className = 'text-danger';
    } else {
        var savedCredentials = JSON.parse(localStorage.getItem('savedCredentials')) || [];

        // var emailExists = savedCredentials.some(function(cred) {
        //     return cred.email === email;
        // });
        var emailExists = false;
for (var i = 0; i < savedCredentials.length; i++) {
    if (savedCredentials[i].email === email) {
        emailExists = true;
        break;
    }
}


        if (emailExists) {
            errorMessage.textContent = 'Email already exists';
            errorMessage.className = 'text-danger';
        } else {
            savedCredentials.push({ email: email, password: password, username: username });

            localStorage.setItem('savedCredentials', JSON.stringify(savedCredentials));

            errorMessage.textContent = 'Success';
            errorMessage.className = 'text-success fs-5';
        }
    }
    // actionButton.textContent = 'Sign Up';
    // actionButton.removeEventListener('click', loginUser);
  
};
var log=document.querySelector('button');
function loginUser() {
    var email = document.getElementById('item').value.trim();
    var password = document.getElementById('item2').value.trim();
    var username = document.getElementById('username')?.value.trim();
    
    var errorMessage = document.getElementById('error-message');
    
    if (email === '' || password === '') {
        errorMessage.textContent = 'All inputs are required';
        errorMessage.className = 'text-danger';
    }var savedCredentials = JSON.parse(localStorage.getItem('savedCredentials'));

    if (savedCredentials === null) {
        errorMessage.textContent = 'No account exists. Please sign up.';
        errorMessage.className = 'text-danger';
        return;
    }

    var found = savedCredentials.find(function(cred) {
        return cred.email === email && cred.password === password;
    });

    if (found) {
        // var username = localStorage.getItem('savedCredentials');
        localStorage.setItem('username', found.username);
      var g=  window.location.href = 'index2.html';console.log(g);
      g;
      
    //   var found = savedCredentials.find(function(cred) {
        
        

        // return cred.username;
    // });
    //   for ( i = 0; i < savedCredentials.length; i++) {
  
          
        // document.getElementById('usernameSpan').textContent = savedCredentials[i].username;
    //     }
     


      errorMessage.textContent = 'Success';
        errorMessage.className = 'text-success fs-5';
    } 
    else if(email.length == 0||password.length==0) {
        errorMessage.textContent = 'All inputs are required';
        errorMessage.className = 'text-danger';
    }
    else  {
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.className = 'text-danger';
    }

}
// localStorage.setItem("name", userObjectString); 

// if (obj && obj.name) document.querySelector("h1").textContent += obj.name;
// async function logout() {
//     console.log(     window.location.href);
    
//    var g= window.location.href = 'index.html';
//    console.log(g);
//     await g;
// }

function username(i){
var username2=document.getElementById('username');
var username = JSON.parse(localStorage.getItem('savedCredentials'))
// var emailExists = savedCredentials.some(function(cred) {
//     return cred.email === email;
// });
for ( i = 0; i < username.length; i++) {
//   if(username[i]==)
    // if (savedCredentials[i].email === email && savedCredentials[i].password === password) {
    //     found = true;
    //     break;
    // }
    
    username==username2
    for(i=0;i<username.length;i++){
// console.log(username[i].username)

    return i
};}}
username();


function signUpUser() {
    var email = document.getElementById('item').value.trim();
    var password = document.getElementById('item2').value.trim();
    var username = document.getElementById('username').value.trim();
    var errorMessage = document.getElementById('error-message');

    if (email === '' || password === '' || username === '') {
        errorMessage.textContent = 'All inputs are required';
        errorMessage.className = 'text-danger';
    } else {
        var savedCredentials = JSON.parse(localStorage.getItem('savedCredentials')) || [];

        var emailExists = savedCredentials.some(function(cred) {
            return cred.email === email;
        });

        if (emailExists) {
            errorMessage.textContent = 'Email already exists';
            errorMessage.className = 'text-danger';
        } else {
            savedCredentials.push({ email: email, password: password, username: username });

            localStorage.setItem('savedCredentials', JSON.stringify(savedCredentials));

            errorMessage.textContent = 'Success';
            errorMessage.className = 'text-success fs-5';
        }
    }
}
