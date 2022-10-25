function getEntrada() {
    let entrada = {
        nome_usuario: 'Wadson',
        email: 'wadson@email.com',
        senha: '123'
    };

    return entrada;
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
        else console.log('Dados de cadastro inválidos');
    })
    .catch((erro) => {
        console.log(`error: ${erro.message}`);
    });
}