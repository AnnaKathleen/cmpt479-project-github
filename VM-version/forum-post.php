<?php

$servername = "localhost";
$username = "root";
$password = "seedubuntu";
$dbname = "forum_data";

try {
 
    $conn = new mysqli($servername, $username, $password, $dbname);
    // prepare and bind
    $stmt = $conn->prepare("INSERT INTO posts (message) VALUES (?)");
    $stmt->bind_param("s", $message);
    $message = $_POST['message'];
    $stmt->execute();

    $stmt->close();
    $conn->close();

}
    catch(PDOException $e)
{
    echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
?>
