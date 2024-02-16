<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recolha os dados do formulário
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $telefone = $_POST["telefone"];
    $mensagem = $_POST["message"];

    // Endereço de e-mail para receber as mensagens
    $destinatario_email = "bruno-martinslife@hotmail.com";

    // Assunto do e-mail
    $assunto = "Nova mensagem do formulário de contato";

    // Monta o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "E-mail: $email\n";
    $corpo_email .= "Telefone: $telefone\n\n";
    $corpo_email .= "Mensagem:\n$mensagem";

    // Cabeçalhos para enviar e-mail em formato HTML
    $cabecalhos = "MIME-Version: 1.0" . "\r\n";
    $cabecalhos .= "Content-type:text/plain;charset=UTF-8" . "\r\n";
    $cabecalhos .= "From: $email" . "\r\n";

    // Envia o e-mail
    mail($destinatario_email, $assunto, $corpo_email, $cabecalhos);

    // Redireciona para uma página de confirmação (opcional)
    header("Location: obrigado.html");
    exit();
}
?>
