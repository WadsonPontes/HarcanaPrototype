function getEntrada() {
    let nome_usuario = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#password').value;

    let entrada = {
        nome_usuario: nome_usuario,
        email: email,
        senha: senha
    };

    return entrada;
}

function mensagemDeErro(msg) {
    console.log(msg);
    document.querySelector('#mensagem-de-erro').textContent = msg;
}

function registrar() {
    let dados = new FormData();
    let entrada = getEntrada();
    dados.append('nome_usuario', entrada.nome_usuario);
    dados.append('email', entrada.email);
    dados.append('senha', entrada.senha);

    fetch('php/register.php', { method: 'POST', body: dados })
    .then((raw) => raw.json())
    .then((res) => {
        console.log(res);
        if (res && res.status == 'success') window.location.href = 'index.html';
        else mensagemDeErro('Dados de login inválidos');
    })
    .catch((erro) => {
        console.log(`error: ${erro.message}`);
    });
}