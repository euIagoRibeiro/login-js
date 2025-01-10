# Sistema Simples de Login e Cadastro de Usuários

Este é um sistema básico de **login**, **cadastro** de usuários, **exclusão** de usuários e **logout**, desenvolvido com HTML, CSS e JavaScript. Ele usa o `localStorage` para armazenar os dados de usuários, permitindo que as informações persistam mesmo após o fechamento do navegador.

## Funcionalidades

1. **Cadastro de Usuário**: Permite ao administrador cadastrar novos usuários.
2. **Login**: Usuários podem fazer login utilizando o nome de usuário e senha.
3. **Exclusão de Usuário**: O administrador pode excluir usuários da lista.
4. **Logout**: O administrador pode se desconectar, retornando para a página de login.
5. **Persistência de Dados**: Os dados dos usuários são armazenados no `localStorage` do navegador, garantindo persistência entre sessões.

## Tecnologias Utilizadas

- **HTML**: Para a estrutura da página.
- **CSS**: Para o estilo da página.
- **JavaScript**: Para a lógica de login, cadastro, exclusão e logout.
- **localStorage**: Para armazenar e recuperar os dados de usuários no navegador.

---

## Estrutura de Arquivos

```plaintext
- index.html        # Página de login
- admin.html        # Página de administração (cadastrar/excluir usuários)
- login.js          # Lógica do login
- admin.js          # Lógica da administração (cadastrar/excluir/logout)
- styles.css        # Estilos da página
```

## Como Usar

### 1. Página de Login (`index.html`)

A página de login permite que um usuário faça login utilizando um nome de usuário e senha. O login é verificado com os dados armazenados no `localStorage`. Se as credenciais estiverem corretas, o usuário é redirecionado para a página de administração.

#### Passos:
1. Abra a página `index.html`.
2. Insira um **nome de usuário** e **senha**.
   - Usuários preexistentes: `admin / admin123` ou `user / user123`.
3. Clique no botão **Entrar** para acessar a página de administração.

### 2. Página de Administração (`admin.html`)

Na página de administração, o administrador pode:

- **Cadastrar um novo usuário** fornecendo um nome de usuário e senha.
- **Exibir a lista de usuários** cadastrados.
- **Excluir usuários** clicando no botão "Excluir" ao lado de cada nome.
- **Logout**: Ao clicar no botão de logout, o usuário é redirecionado para a página de login.

#### Passos:
1. Após fazer login, você será redirecionado para a página de administração (`admin.html`).
2. Para cadastrar um novo usuário:
   - Preencha o **nome de usuário** e **senha** no formulário.
   - Clique em **Cadastrar**.
3. Para excluir um usuário:
   - Na lista de usuários cadastrados, clique em **Excluir** ao lado do usuário.
4. Para deslogar, clique no botão **Logout** e você será redirecionado para a página de login.

## Funcionalidades Detalhadas

### 1. Cadastro de Usuário

Quando o administrador cadastra um novo usuário, os dados (nome de usuário e senha) são armazenados no `localStorage`. Caso o nome de usuário já exista, o sistema mostra uma mensagem de erro. O sistema também atualiza a lista de usuários imediatamente após o cadastro.

### 2. Login

O login é feito ao comparar as credenciais inseridas pelo usuário com os dados armazenados no `localStorage`. Se as credenciais forem válidas, o usuário é redirecionado para a página de administração. Caso contrário, uma mensagem de erro é exibida.

### 3. Exclusão de Usuário

O administrador pode excluir usuários clicando no botão "Excluir" ao lado do nome do usuário na lista. Quando um usuário é excluído, os dados são removidos do `localStorage`, e a lista é atualizada automaticamente.

### 4. Logout

O administrador pode deslogar a qualquer momento clicando no botão **Logout**. Isso redireciona o usuário para a página de login. Não há necessidade de limpar manualmente os dados de sessão, já que estamos apenas utilizando o `localStorage` e não implementando uma sessão real.

### 5. Persistência de Dados

Os dados dos usuários são armazenados de forma persistente no `localStorage`, permitindo que os usuários cadastrados e as modificações permaneçam disponíveis entre as sessões. Mesmo que o navegador seja fechado e reaberto, os dados persistem.

# Conclusão

Este sistema simples de login e administração permite que o usuário faça login, adicione novos usuários, exclua usuários existentes e faça logout. Ele usa o `localStorage` para persistência de dados entre as sessões. Embora seja uma solução simples e não muito segura para produção, é um ótimo exercício para aprender os conceitos básicos de manipulação de DOM e armazenamento no navegador.






