<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "account";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $email = $_POST['email']; // Update to match your actual form field name
    $password = $_POST['password'];

    // Use prepared statements to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM info WHERE email = ? AND password = ?");
    $stmt->bind_param("ss", $email, $password);

    $stmt->execute();

    $result = $stmt->get_result();
    $targetUrl = "index.html";
    $linkText = "Visit Example Website";
    if ($result->num_rows > 0) {
        header('Location:index.html');
    } else {
        echo "Invalid email or password";
    }

    $stmt->close();
    $conn->close();
}
?>
