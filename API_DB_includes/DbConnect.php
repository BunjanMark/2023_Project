<?php

class DbConnect
{
    public $dsn = "mysql:host=localhost;dbname=my_project";

    public $username = "root";
    public $pass = '';
    // connection
    public function connect()
    {
        try {

            $conn = new PDO($this->dsn, $this->username, $this->pass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        } catch (\Exception $e) {
            echo "Database Error: " . $e->getMessage();
        }
    }
}
