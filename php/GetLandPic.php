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

$sql="SELECT * FROM pic750";

$result = mysql_query($sql);

class Pic{
    public $ID="";
    public $URL="";
    public $description="";
    public $picname="";
    public $score="";
}

$count=1;
while(($row = mysql_fetch_array($result))&&$count<10) {
    $IDandURL[$count]=new Pic();
    $IDandURL[$count]->ID=$row['ID'];
    $IDandURL[$count]->URL=$row['URL'];
    $IDandURL[$count]->score=$row['score'];
    $IDandURL[$count]->description=$row['description'];
    $IDandURL[$count]->picname=$row['picname'];
    $count=$count+1;
}

echo json_encode($IDandURL);
?>