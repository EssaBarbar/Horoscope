<?php

function getHoroscope($day, $month) {
    $Horoskops = array(
    "Vattumannen" => "01:20:02:18",
    "Fiskarna" => "02:19:03:20",
    "Väduren" => "03:21:04:19",
    "Oxen" => "04:20:05:20",
    "Tvillingarnan" => "05:21:06:21",
    "Kräftan" => "06:22:07:22",
    "Lejonet" => "07:23:08:22",
    "Jungfrun" => "08:23:09:22",
    "Vågen" => "09:23:10:22",
    "Skorpionen" => "10:23:11:21",
    "Skytten" => "11:22:12:21",
    "Stenbocken" => "12:22:01:19",
    );

    foreach ($Horoskops as $horoscope => $datestring) {

        $rangeDates = explode(":", $datestring);

        $startMonth = (int)$rangeDates[0];
        $endMonth = (int)$rangeDates[2];
        $startDay = (int)$rangeDates[1];
        $endDay = (int)$rangeDates[3];

        if ($month == $startMonth) {

            if ($day >= $startDay) {
                return $horoscope;
            }

        }

        if ($month == $endMonth) {
            
            if ($day <= $endDay) {
                return $horoscope;
            }

        }
    }

}


?>