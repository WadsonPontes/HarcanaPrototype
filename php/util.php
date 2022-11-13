<?php

function validar_cadastro() {
    $resposta = array(
        'status' => 'error',
        'error' => ''
    );

    if (!isset($_POST['nome_usuario']) || !isset($_POST['email']) || !isset($_POST['senha'])) {
        echo json_encode($resposta);
        exit();
    }

    if (strlen(trim($_POST['nome_usuario'])) < 3) {
        echo json_encode($resposta);
        exit();
    }

    if (strlen(trim($_POST['email'])) < 3) {
        echo json_encode($resposta);
        exit();
    }

    if (strlen(trim($_POST['senha'])) < 3) {
        echo json_encode($resposta);
        exit();
    }
}