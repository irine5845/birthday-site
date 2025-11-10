<?php
$host = "sql311.infinityfree.com";
$user = "if0_40069835";       // default for XAMPP
$pass = "DlKo4ZXgjKjH";           // default is empty password
$dbname = "if0_40069835_jada";

$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
