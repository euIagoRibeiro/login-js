
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
  ];
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
      alert(`Bem-vindo, ${username}!`);
      window.location.href = "admin.html";
    } else {
      errorMessage.textContent = "Usuário ou senha inválidos!";
    }
  });
  