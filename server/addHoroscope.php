<?php
session_start();
require("./horoscopes.php");

if(isset($_SERVER['REQUEST_METHOD'])) {

    // Checking if request-method is POST.
    if($_SERVER['REQUEST_METHOD'] === 'POST') {

        // Checking if key 'date' has been set in the request-body.
        if (isset($_SESSION["horoscope"])) {
            echo json_encode(false);
        } else {
            if(isset($_POST['day']) && isset($_POST['month'])) {

                $horoscope = getHoroscope((int)$_POST['day'], (int)$_POST['month']); 
                $_SESSION["horoscope"] = $horoscope;           
    
                // Sending the saved value back to the client.
                echo json_encode(true);
                exit;
            }else {
                echo json_encode("Not valid date");
            }
        }
    } else {
            
        // Sending a fault message explaining that the request-method is not POST.
        echo json_encode("not a POST method");
        exit;
    }

} else {

    // Sending a fault message explaining that this not is a valid request.
    echo json_encode("No valid request");
    exit;
}
?>