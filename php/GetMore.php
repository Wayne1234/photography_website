<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2016/5/26
 * Time: 20:52
 */

$getLoadTimes=$_GET['times'];

$con = mysql_connect('localhost', 'test', '1234');
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("legendpic", $con);

$sql="SELECT * FROM popular WHERE NO>20";

$result = mysql_query($sql);

class Pic{
    public $ID="";
    public $URL="";
    public $NO="";
    public $score="";
}

$count=1;
while(($row = mysql_fetch_array($result))&&$count<5) {
    if((($row['NO']-20)>($getLoadTimes-1)*4)&&(($row['NO']-20)<=($getLoadTimes)*4)) {
        $IDandURL[$count] = new Pic();
        $IDandURL[$count]->ID = $row['ID'];
        $IDandURL[$count]->URL = $row['URL'];
        $IDandURL[$count]->NO=$row['NO'];
        $IDandURL[$count]->score = $row['score'];
        $count = $count + 1;
    }
}

echo json_encode($IDandURL);
?>