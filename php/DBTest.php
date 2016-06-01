<?php
$con = mysql_connect("localhost","picdemo","1234");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("pic", $con);

$result = mysql_query("SELECT * FROM pic");

while($row = mysql_fetch_array($result))
{
    echo $row['ID'] . " " . $row['URL'];
    echo "<br />";
}

mysql_close($con);
?>