
function setUsername() {
    var username = localStorage.getItem('username');
    
        document.getElementById('usernameSpan').textContent = username;
 
}

window.onload = setUsername;

function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';}
    var button=document.querySelector('button');
button.addEventListener('click',logout);