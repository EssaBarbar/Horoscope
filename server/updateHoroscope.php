<?php
session_start();
require ("horoscopes.php");


if(isset($_SERVER['REQUEST_METHOD'])) {

    
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        if (isset($_SESSION["horoscope"])) {

            if(isset($_POST['day']) && isset($_POST['month'])) {

                $horoscope = getHoroscope((int)$_POST['day'], (int)$_POST['month']); 
                $_SESSION["horoscope"] = $horoscope;           

                echo json_encode(true);
            } else {
                
                echo json_encode("date is not set in body");
            }

        } else {
                
            echo json_encode(false);
        }
    } else {
        echo json_encode("not a POST method");
    }


} else {

    echo json_encode("No valid request");
}
?>