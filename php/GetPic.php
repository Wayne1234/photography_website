<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2016/5/26
 * Time: 20:52
 */

$con = mysql_connect('localhost', 'test', '1234');
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("legendpic", $con);

$sql="SELECT * FROM popular";

$result = mysql_query($sql);

class Pic{
    public $ID="";
    public $URL="";
    public $score="";
}

$count=1;
while(($row = mysql_fetch_array($result))&&$count<21) {
    $IDandURL[$count]=new Pic();
    $IDandURL[$count]->ID=$row['ID'];
    $IDandURL[$count]->URL=$row['URL'];
    $IDandURL[$count]->score=$row['score'];
    $count=$count+1;
}

echo json_encode($IDandURL);
?>