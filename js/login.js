function getEntrada() {
    let entrada = {
        email: 'wadson@email.com',
        senha: '123'
    };

    return entrada;
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
        else console.log('Dados de login inválidos');
    })
    .catch((erro) => {
        console.log(`error: ${erro.message}`);
    });
}