


<!DOCTYPE html>
<html>
<body>

<?php
$file = fopen("abc.txt","r") or die("do not open");
$txt="this is my computer";
fwrite($file,$txt);

$txt="this is my computer off";
fwrite($file,$txt);


echo fgets($file);
fclose($file);
?>

</body>
</html>