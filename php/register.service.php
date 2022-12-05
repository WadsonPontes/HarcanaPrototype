<?php

require_once('api.php');

function validar_cadastro() {

    $email = $_POST['email'];
    $senha = $_POST['senha'];
    $nome_usuario = $_POST['nome_usuario'];

    $resposta = array(
        'status' => 'error',
        'error' => ''
    );

    if (!isset($nome_usuario) || !isset($email) || !isset($senha)) {
        echo json_encode($resposta);
        exit();
    }

    if (strlen(trim($nome_usuario)) < 3) {
        echo json_encode($resposta);
        exit();
    }

    if (strlen(trim($email)) < 3) {
        echo json_encode($resposta);
        exit();
    }

    if (strlen(trim($senha)) < 3) {
        echo json_encode($resposta);
        exit();
    }

    if (existe('jogador', 'email', $email)){
        $resposta['error']= 'E-mail já cadastrado';
        echo json_encode($resposta);
        exit();
    }
}