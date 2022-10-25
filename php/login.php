<?php

require_once('api.php');

$dados = array(
    'email' => $_POST['email'],
    'senha' => $_POST['senha']
);

$resposta = array(
    'status' => 'success'
);

if (existe('jogador', 'email', $dados['email'])) {
    $conta = buscarPorId('jogador', 'email', $dados['email']);

    if (password_verify($dados['senha'], $conta['senha'])) {
        echo json_encode($resposta);
    }
    else {
        $resposta['status'] = 'error';
        echo json_encode($resposta);
    }
}
else {
    $resposta['status'] = 'error';
    echo json_encode($resposta);
}