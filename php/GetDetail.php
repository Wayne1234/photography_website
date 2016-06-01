<?php

/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2016/5/26
 * Time: 20:52
 */

$getID=$_GET['ID'];

$con = mysql_connect('localhost', 'test', '1234');
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("legendpic", $con);

$sql="SELECT * FROM pic WHERE ID=";
$sql=$sql.$getID;

$result = mysql_query($sql);

class Pic{
    public $ID="";
    public $URL="";
    public $score="";
    public $type="";
    public $picnamae="";
    public $author="";
    public $description="";
    public $time="";
    public $picsize="";
}

$count=1;
while($row = mysql_fetch_array($result)) {
    $picInfo[$count]=new Pic();
    $picInfo[$count]->ID=$row['ID'];
    $picInfo[$count]->URL=$row['URL'];
    $picInfo[$count]->score=$row['score'];
    $picInfo[$count]->type=$row['type'];
    $picInfo[$count]->picname=$row['picname'];
    $picInfo[$count]->author=$row['author'];
    $picInfo[$count]->description=$row['description'];
    $picInfo[$count]->time=$row['time'];
    $picInfo[$count]->picsize=$row['picsize'];
    $count=$count+1;
}

echo json_encode($picInfo);
?>