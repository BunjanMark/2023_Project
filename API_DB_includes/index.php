<?php

// 		res.setHeader("Access-Control-Allow-Origin", "*");
// res.setHeader("Access-Control-Allow-Credentials", "true");
// res.setHeader("Access-Control-Max-Age", "1800");
// res.setHeader("Access-Control-Allow-Headers", "content-type");
// res.setHeader("Access-Control-Allow-Methods","PUT, POST, GET, DELETE, PATCH, OPTIONS");
// // res.setHeader("Content-Type", "application/json;charset=utf-8"); // Opening this comment will cause problems
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: content-type");

require_once 'DbConnect.php';

$objDb = new DbCOnnect;
$conn = $objDb->connect();

var_dump($conn);

// prints the content we're getting that is being submitted

// print_r(file_get_contents("php://input"));

$user = file_get_contents("php://input");
print_r(file_get_contents("php://input"));
$method = $_SERVER["REQUEST_METHOD"];

// insert
switch ($method) {
    case "POST":
        $user = json_decode(file_get_contents("php://input"));
        $sql = "INSERT INTO register(id, firstname, lastname) 
        VALUES (null, :firstname, :lastname)";


        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':firstname', $user->firstname);
        $stmt->bindParam(':lastname', $user->lastname);
        if ($stmt->execute()) {
            $response = ['status' => 1, 'message' =>
            "record created successfully."];
        } else {
            $response = ["status" => 0, 'message' => "Failed to create record"];
        }
        return json_encode($response);
        break;
}
