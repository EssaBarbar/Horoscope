<?php
session_start();
require("./horoscopes.php");

if(isset($_SERVER['REQUEST_METHOD'])) {

    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        if (isset($_SESSION["horoscope"])) {
            echo json_encode(false);
        } else {
            if (isset($_POST["day"]) && isset($_POST["month"]) && $_POST["month"] != 'undefined' && $_POST["day"] != 'undefined') {

                $horoscope = getHoroscope((int)$_POST['day'], (int)$_POST['month']); 
                $_SESSION["horoscope"] = $horoscope;           
    
                echo json_encode(true);
                exit;
            }else {
                echo json_encode("Not valid date");
            }
        }
    } else {
            
        echo json_encode("not a POST method");
        exit;
    }

} else {

    echo json_encode("No valid request");
    exit;
}
?>