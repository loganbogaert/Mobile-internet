<?php
// email zender
$email   =  $_GET["email"];
//subject zender
$subject =  $_GET["subject"];
//bericht zender
$message =  $_GET["message"];
// email ontvanger
$to = "staelemans@gmail.com";
// headers toevoegen
$headers = 'From: '.$email . "\r\n" .
    'Reply-To: staelemans@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
// mail sturen
mail($to, $subject, $message, $headers)
// response text
echo "Mail has been sent :";
?>