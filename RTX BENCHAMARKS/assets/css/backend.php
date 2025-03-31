<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Configurações do e-mail
    $to = "seuemail@exemplo.com"; // Substitua pelo seu e-mail
    $subject = "Nova mensagem de contato do site";
    $body = "Nome: $name\nE-mail: $email\n\nMensagem:\n$message";
    $headers = "From: $email";

    // Envia o e-mail
    if (mail($to, $subject, $body, $headers)) {
        echo "<h1>Mensagem enviada com sucesso!</h1>";
        echo "<p>Obrigado por entrar em contato, $name. Responderemos em breve.</p>";
    } else {
        echo "<h1>Erro ao enviar a mensagem.</h1>";
        echo "<p>Por favor, tente novamente mais tarde.</p>";
    }
} else {
    echo "<h1>Método inválido.</h1>";
}
?>