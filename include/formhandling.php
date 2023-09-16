<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstname = $_POST['first_name'];
    $lastname = $_POST['lastname'];
    try {
        require_once "config.php";

        $query = "INSERT INTO register(firstname, lastname) VALUES
    (?,?)";

        $stmt = $pdo->prepare($query);

        $stmt->execute([$firstname, $lastname]);
    } catch (PDOException $e) {
        // terminate all connection
        die("Query fails: " . $e->getMessage());
    }
} else {
    header("Location: ../src/pages/Register/Register.jsx");
}
