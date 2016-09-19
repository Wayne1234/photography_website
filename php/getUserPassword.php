<?php
/**
 * Created by PhpStorm.
 * User: lenovo
 * Date: 2016/6/5
 * Time: 15:22
 */
$username = $_GET['userName'];
if ($username == "testtest") {
    $url = "../blog.html";
    echo "<script language='javascript'type='text/javascript'>";
    echo "window.location.href='$url'";
    echo "</script>";
} else {
    $url = "../errorlogin.html";
    echo "<script language='javascript'type='text/javascript'>";
    echo "window.location.href='$url'";
    echo "</script>";
}
    
