<?php

require_once('api.php');

$dados = array(
    'email' => $_POST['email'],
    'senha' => $_POST['senha']
);

$resposta = array(
    'status' => 'success',
    'error' => ''
);

if (existe('jogador', 'email', $dados['email'])) {
    $conta = buscarPorId('jogador', 'email', $dados['email']);

    if (password_verify($dados['senha'], $conta['senha'])) {
        echo json_encode($resposta);
    }
    else {
        $resposta['status'] = 'error';
        $resposta['error'] = 'Dados de login inválidos';
        echo json_encode($resposta);
    }
}
else {
    $resposta['status'] = 'error';
    $resposta['error'] = 'Dados de login inválidos';
    echo json_encode($resposta);
}