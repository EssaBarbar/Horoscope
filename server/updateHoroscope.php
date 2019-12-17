<?php
session_start();
require ("horoscopes.php");


if(isset($_SERVER['REQUEST_METHOD'])) {

    
    // Checking if request-method is POST.
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        if (isset($_SESSION["horoscope"])) {

            // Checking if key 'date' has been set in the request-body.
            if(isset($_POST['day']) && isset($_POST['month'])) {

                // Saving the value of the key 'date' from the request into the key 'personName' in $_SESSION.
                $horoscope = getHoroscope((int)$_POST['day'], (int)$_POST['month']); 
                $_SESSION["horoscope"] = $horoscope;           
                // Sending the saved value back to the client

                // Sending the saved value back to the client.
                echo json_encode(true);
            } else {
                
                // Sending a fault message explaining that the date is not set.
                echo json_encode("date is not set in body");
            }

        } else {
                
            // Sending a fault message explaining that the request-method is not POST.
            echo json_encode(false);
        }
    } else {
        echo json_encode("not a POST method");
    }


} else {

    // Sending a fault message explaining that this not is a valid request.
    echo json_encode("No valid request");
}
?>