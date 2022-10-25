function getEntrada() {
    let email = document.querySelector('#email').value;
    let senha = document.querySelector('#password').value;

    let entrada = {
        email: email,
        senha: senha
    };
    
    return entrada;
}

function mensagemDeErro(msg) {
    console.log(msg);
    document.querySelector('#mensagem-de-erro').textContent = msg;
}

function logar() {
    let dados = new FormData();
    let entrada = getEntrada();
    dados.append('email', entrada.email);
    dados.append('senha', entrada.senha);

    fetch('php/login.php', { method: 'POST', body: dados })
    .then((raw) => raw.json())
    .then((res) => {
        console.log(res);
        if (res && res.status == 'success') window.location.href = 'map.html';
        else mensagemDeErro('Dados de login inválidos');
    })
    .catch((erro) => {
        console.log(`error: ${erro.message}`);
    });
}