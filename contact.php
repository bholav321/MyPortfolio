<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email format
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "error"; // Invalid email format
        exit();
    }   

    // Email configuration
    $to = 'bholavishwkarma933@gmail.com'; // Replace with your email address
    $headers = "From: $name <$email>\r\n"; // Email sender information

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "success"; // Return success response
    } else {
        echo "error"; // Return error response
    }
} else {
    echo "error"; // If the request method is not POST
}
?>
