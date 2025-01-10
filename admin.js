
let users = JSON.parse(localStorage.getItem('users')) || [
    { username: 'admin', password: 'admin123' },
    { username: 'user', password: 'user123' }
  ];
  

  document.getElementById('logoutButton').addEventListener('click', function() {

    alert('Você foi desconectado.');
    window.location.href = 'index.html'; 
  });
  

  document.getElementById('adminForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const errorMessage = document.getElementById('admin-error-message');
    

    if (users.find(u => u.username === newUsername)) {
      errorMessage.textContent = "Nome de usuário já está em uso!";
    } else {

      users.push({ username: newUsername, password: newPassword });
      

      localStorage.setItem('users', JSON.stringify(users));
      

      document.getElementById('newUsername').value = '';
      document.getElementById('newPassword').value = '';
      
      errorMessage.textContent = "";
      alert(`Usuário ${newUsername} cadastrado com sucesso!`);
      

      updateUserList();
    }
  });
  

  function updateUserList() {
    const userList = document.getElementById('userList');
    userList.classList.add('user-list')
    userList.innerHTML = ''; 
  

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    
    storedUsers.forEach((user, index) => {
      const li = document.createElement('li');
      li.textContent = `Usuário: ${user.username}`;
      
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('button-users')
      deleteButton.textContent = 'Excluir';
      deleteButton.style.marginLeft = '10px';
      deleteButton.addEventListener('click', () => deleteUser(index));
  
      li.appendChild(deleteButton);
      userList.appendChild(li);
    });
  }
  

  function deleteUser(index) {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {

      users.splice(index, 1);
      
      localStorage.setItem('users', JSON.stringify(users));
      
      updateUserList();
    }
  }
  

  updateUserList();
  