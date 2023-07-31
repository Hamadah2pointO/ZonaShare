<?php

class scan {
  function scFile($dir)
  {
    $sortedData = array();
    foreach (scandir($dir) as $file) {
      if (is_file($dir . '/' . $file))
        array_push($sortedData, $file);
        
    }
    // menghilangkan titik
    $sortedData = array_diff($sortedData, [".", ".."]);  
    return $sortedData;
  }
  function scDir($dir)
  {
    $sortedData = array();
    foreach (scandir($dir) as $file) {
      if (is_dir($dir . '/' . $file))
        array_push($sortedData, $file);
        
    }
    // menghilangkan titik
    $sortedData = array_diff($sortedData, [".", ".."]);  
    return $sortedData;
  }
}

function size_format($bytes, $decimals = 2){
  $size = array('B','kB','MB','GB','TB','PB','EB','ZB','YB');
  $factor = floor((strlen($bytes) - 1) / 3);
  return sprintf("%.{$decimals}f", $bytes / pow(1024, $factor))." $size[$factor]";
}

$user_limit = 5000000;
$perusahaan = "TI";
?>