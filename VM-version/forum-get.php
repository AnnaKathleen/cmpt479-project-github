<?php

$servername = "localhost";
$username = "root";
$password = "seedubuntu";
$dbname = "forum_data";


$db= new mysqli('localhost', $username, $password, $dbname);

$query = "select message from posts order by id desc limit 1";

$result = $db->query($query);
$results = [];

foreach($result as $row) {
    //this prevents html from running in the client browser
   // echo(htmlspecialchars($row['message'], ENT_QUOTES, 'UTF-8'));  
 
    //this allows html to run in client browser
    echo($row['message']);  
       
}

?>
