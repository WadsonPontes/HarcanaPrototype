<?php

define('SERVIDOR', '127.0.0.1');
define('BANCO', 'harcana');
define('USUARIO', 'root');
define('SENHA', '');

function buscarTodos($tabela) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $selecao = $con->prepare("SELECT * FROM $tabela");
    $selecao->execute();

    return $selecao->fetchAll();
}

function buscarPorId($tabela, $id, $valor) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $selecao = $con->prepare("SELECT * FROM $tabela WHERE $id = :$id");
    $selecao->bindValue(":$id", $valor);
    $selecao->execute();

    return $selecao->fetchAll()[0];
}

function buscarTodosPorId($tabela, $id, $valor) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $selecao = $con->prepare("SELECT * FROM $tabela WHERE $id = :$id");
    $selecao->bindValue(":$id", $valor);
    $selecao->execute();

    return $selecao->fetchAll();
}

function existe($tabela, $id, $valor) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $selecao = $con->prepare("SELECT COUNT($id) as qnt FROM $tabela WHERE $id = :$id");
    $selecao->bindValue(":$id", $valor);
    $selecao->execute();

    return $selecao->fetchAll()[0]['qnt'] > 0;
}

function quantidade($tabela, $id, $valor) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $selecao = $con->prepare("SELECT COUNT($id) as qnt FROM $tabela WHERE $id = :$id");
    $selecao->bindValue(":$id", $valor);
    $selecao->execute();

    return $selecao->fetchAll()[0]['qnt'];
}

function inserir($tabela, &$dados) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $sql = "INSERT INTO $tabela (";
    foreach ($dados as $chave => &$valor) {
        $sql .= "$chave, ";
    }
    $sql = rtrim($sql, ", ");
    $sql .= ") VALUES (";
    foreach ($dados as $chave => &$valor) {
        $sql .= ":$chave, ";
    }
    $sql = rtrim($sql, ", ");
    $sql .= ")";
    
    $insercao = $con->prepare($sql);

    foreach ($dados as $chave => &$valor) {
        $insercao->bindValue(":$chave", $valor);
    }

    return $insercao->execute();
}

function atualizar($tabela, &$dados, $id) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $sql = "UPDATE $tabela SET ";
    foreach ($dados as $chave => &$valor) {
        $sql .= "$chave = :$chave, ";
    }
    $sql = rtrim($sql, ", ");
    $sql .= " WHERE $id = :id_$id";

    $atualizacao = $con->prepare($sql);

    foreach ($dados as $chave => &$valor) {
        $atualizacao->bindValue(":$chave", $valor);
    }
    $atualizacao->bindValue(":id_$id", $dados[$id]);

    return $atualizacao->execute();
}

function deletar($tabela, $id, $valor) {
    $con = new PDO(sprintf("mysql:host=%s;dbname=%s;charset=utf8mb4", SERVIDOR, BANCO), USUARIO, SENHA);

    $selecao = $con->prepare("DELETE FROM $tabela WHERE $id = :$id");
    $selecao->bindValue(":$id", $valor);
    
    return $selecao->execute();
}