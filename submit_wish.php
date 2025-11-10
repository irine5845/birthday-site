<?php
include "db_connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $conn->real_escape_string($_POST['name']);
    $message = $conn->real_escape_string($_POST['message']);

    if (!empty($name) && !empty($message)) {
        $sql = "INSERT INTO wishes (name, message) VALUES ('$name', '$message')";
        if ($conn->query($sql)) {
            echo "success";
        } else {
            echo "error";
        }
    } else {
        echo "empty";
    }
}

$conn->close();
?>
