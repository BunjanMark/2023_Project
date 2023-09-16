<?php

$dsn = "mysql:host=localhost;dbname=my_project";
$username = "root";
$dbpassword = "";


try {
    $pdo = new PDO($dsn, $username, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {

    echo "connection failed" . $e->getMessage();
    //throw $th;
}
