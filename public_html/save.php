<?php

$recepient = "730209@mail.ru";
$sitename = "Рай сауна";

$name = $_POST["name"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$msg = $_POST["msg"];

$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение: $msg";

$pagetitle = "Новый отзыв с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>