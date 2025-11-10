<?php
include "db_connect.php"; // make sure this file defines $conn

// Check if connection is working
if (!$conn) {
    die("Database connection failed.");
}

// Fetch wishes
$sql = "SELECT name, message, created_at FROM wishes ORDER BY created_at DESC";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<div class='wish-bubble' title='" . htmlspecialchars($row['message']) . "'>";
        echo "<strong>" . htmlspecialchars($row['name']) . ":</strong> ";
        echo htmlspecialchars($row['message']);
        echo "</div>";
    }
} else {
    echo "<p>No wishes yet. Be the first! 🎂</p>";
}

$conn->close();
?>
