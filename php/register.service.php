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

    validar_nome_usuario($nome_usuario,$resposta);
    validar_email($email,$resposta);
    validar_senha($senha,$resposta);
}

function validar_nome_usuario($nome_usuario,&$resposta){
    if (!isset($nome_usuario)) {
        $resposta['error']= 'Nome de usuário não informado';
        echo json_encode($resposta);
        exit();
    }

    if (strlen(trim($nome_usuario)) < 3) {
        $resposta['error']= 'Nome de usuário muito curto';
        echo json_encode($resposta);
        exit();
    }

    if (strpos($nome_usuario,' ')) {
        $resposta['error']= 'Nome de usuário contém espaços, por favor retire-os';
        echo json_encode($resposta);
        exit();
    }

    if (existe('jogador', 'nome_usuario', $nome_usuario)){
        $resposta['error']= 'Nome de usuario já cadastrado';
        echo json_encode($resposta);
        exit();
    }
}

function validar_email($email,&$resposta){
    if (!isset($email)) {
        $resposta['error']= 'E-mail não informado';
        echo json_encode($resposta);
        exit();
    }

    if (existe('jogador', 'email', $email)){
        $resposta['error']= 'E-mail já cadastrado';
        echo json_encode($resposta);
        exit();
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        $resposta['error']= 'E-mail inválido';
        echo json_encode($resposta);
        exit();
    }
}

function validar_senha($senha,&$resposta){
    $tem_numero = '/(?=.*\d)/';
    $minuscula = '/(?=.*[a-z])/';
    $maiuscula = '/(?=.*[A-Z])/';
    $caracteres = '/(?=.*[!@#%¨&*()_+=-])/';
    $qtd_caracteres = '/.\S{8,36}$/';

    if (!isset($senha)) {
        $resposta['error']= 'Senha não informada';
        echo json_encode($resposta);
        exit();
    }

    if (preg_match($qtd_caracteres, $senha)) {
        $resposta['error']= 'Senha contêm menos de 8 caracteres ou está maior que 36 caracteres';
        echo json_encode($resposta);
        exit();
    }

    if (!preg_match($tem_numero, $senha)) {
        $resposta['error']= 'Senha deve conter ao menos um número';
        echo json_encode($resposta);
        exit();
    }

    if (!preg_match($minuscula, $senha)) {
        $resposta['error']= 'Senha deve conter ao menos uma letra minúscula';
        echo json_encode($resposta);
        exit();
    }
    
    if (!preg_match($maiuscula, $senha)) {
        $resposta['error']= 'Senha deve conter ao menos uma letra maiúscula';
        echo json_encode($resposta);
        exit();
    }

    if (!preg_match($caracteres, $senha)) {
        $resposta['error']= 'Senha deve conter ao menos um caracter especial';
        echo json_encode($resposta);
        exit();
    }
}
