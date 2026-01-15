
const ADMIN={username:'olawale abdul-ganiyu',password:'admin123'};

document.getElementById('loginForm').onsubmit=e=>{
 e.preventDefault();
 const u=username.value.toLowerCase().trim();
 const p=password.value;
 if(u===ADMIN.username && p===ADMIN.password){
   login();
 } else alert('Invalid login');
}

function login(){
 localStorage.setItem('login','1');
 currentUser.textContent=ADMIN.username;
 loginPage(false);
}

function logout(){
 localStorage.clear();
 loginPage(true);
}

function loginPage(show){
 document.getElementById('login-page').style.display=show?'flex':'none';
 document.getElementById('dashboard').style.display=show?'none':'block';
}

if(localStorage.getItem('login')) login(); else loginPage(true);
