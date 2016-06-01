<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2016/5/29
 * Time: 20:44
 */

$getID=$_GET['ID'];

$con = mysql_connect('localhost', 'test', '1234');
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}

mysql_select_db("legendpic", $con);

$sql="SELECT * FROM pic750 WHERE ID>".($getID-9999)." AND ID<".($getID+9999);

$result = mysql_query($sql);

class Pic{
    public $ID="";
    public $URL="";
    public $debugInfo="";
}


$count=1;
$length=mysql_num_rows($result);
while($row = mysql_fetch_array($result)) {
    if($row['ID']!=$getID) {
        $TEMP[$count] = new Pic();
        $TEMP[$count]->ID = $row['ID'];
        $TEMP[$count]->URL = $row['URL'];
        $TEMP[$count]->debugInfo = $length;
        $count = $count + 1;
    }
}

for ($i=1;$i<5;$i++){
    $IDandURL[$i]=$TEMP[mt_rand(1,$length)];
}

echo json_encode($IDandURL);
?>