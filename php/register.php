<?php

require_once('register.service.php');

validar_cadastro();

$dados = array(
    'nome_usuario' => $_POST['nome_usuario'],
    'email' => $_POST['email'],
    'senha' => password_hash($_POST['senha'], PASSWORD_DEFAULT)
);

$resposta = array(
    'status' => 'success'
);

inserir('jogador', $dados);

echo json_encode($resposta);