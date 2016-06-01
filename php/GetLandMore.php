
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

$sql="SELECT * FROM pic750 WHERE NO>9";

$result = mysql_query($sql);

class Pic{
    public $ID="";
    public $URL="";
    public $description="";
    public $picname="";
    public $score="";
    public $NO="";
}

$count=1;
while(($row = mysql_fetch_array($result))&&$count<5) {
    if((($row['NO']-9)>($getLoadTimes-1)*3)&&(($row['NO']-9)<=($getLoadTimes)*3)) {
        $IDandURL[$count]=new Pic();
        $IDandURL[$count]->ID=$row['ID'];
        $IDandURL[$count]->URL=$row['URL'];
        $IDandURL[$count]->score=$row['score'];
        $IDandURL[$count]->description=$row['description'];
        $IDandURL[$count]->picname=$row['picname'];
        $IDandURL[$count]->NO=$row['NO'];
        $count=$count+1;
    }
}

echo json_encode($IDandURL);
?>