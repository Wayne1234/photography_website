/**
 * Created by lenovo on 2016/5/29.
 */
$(document).ready(function () {
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    Request = GetRequest();
    console.log("get id "+Request['ID']);
    parm1=Request['ID'];
    $.getJSON("php/GetDetail.php",{ID:parm1},function (result) {
        $.each(result, function(i, item){
            // console.log(i);
            // console.log(item.ID.toString());
            // console.log(item.URL.toString());
            // console.log(item.author.toString());
            // console.log(item.picname.toString());
            // console.log(item.picsize);
            document.getElementById("photo").innerHTML=item.picname.toString();
            document.getElementById("author").innerHTML=item.author.toString();
            document.getElementById("mainimg").src=item.URL.toString();
            document.getElementById("popup").href=item.URL.toString();
            document.getElementById("content").innerHTML=item.description.toString();
            document.getElementById("thesize").innerHTML=item.picsize.toString();
            document.getElementById("thetime").innerHTML="时间："+item.time.toString();
        })
    })

    $.getJSON("php/GetRelated.php",{ID:parm1},function (result) {
        $.each(result, function(i, item){
            console.log(i);
            console.log(item);
            // console.log(item.ID.toString());
            // console.log(item.URL.toString());
            // console.log(item.author.toString());
            // console.log(item.picname.toString());
            document.getElementById("relink"+i.toString()).href="detail.html?ID="+item.ID.toString();
            document.getElementById("resrc"+i.toString()).src=item.URL.toString();
        })
    })
})