/**
 * Created by wangy on 2016/6/2.
 */
$(document).ready(function () {
    document.getElementById("bck").src="IndexResource/bck.jpg";
    document.getElementById("intropic").src="IndexResource/1-intro.jpg";
    document.getElementById("intro-leaf").src="IndexResource/1-leaf.png";
    document.getElementById("landscape").src="IndexResource/2-landscape.jpg";
    document.getElementById("portrait-pic").src="IndexResource/3-portrait.jpg";
    document.getElementById("portrait-text").src="IndexResource/3-portrait-logo.png";
    document.getElementById("architecture-pic").src="IndexResource/4-architecture.jpg";
    document.getElementById("frame1").src="IndexResource/4-frame.png";
    document.getElementById("frame2").src="IndexResource/4-frame2.png";
    document.getElementById("still-life-pic").src="IndexResource/5-still-life.jpg";
    document.getElementById("still-life-fly").src="IndexResource/5-fly.png";
    document.getElementById("more-pic").src="IndexResource/6-final.jpg";
    document.getElementById("more-pic-color3").src="IndexResource/6-color3.png";
    document.getElementById("more-pic-color4").src="IndexResource/6-color4.png";
    document.getElementById("more-pic-color").src="IndexResource/6-color.png";
    document.getElementById("more-pic-color2").src="IndexResource/6-color2.png";
    function reurl(){
        url = location.href; //把当前页面的地址赋给变量 url
        var times = url.split("?"); //分切变量 url 分隔符号为 "?"
        if(times[1] != 1){ //如果?后的值不等于1表示没有刷新
            url += "?1"; //把变量 url 的值加入 ?1
            self.location.reload(); //刷新页面
        }
    }
    onload=reurl;
})
