/**
 * Created by lenovo on 2016/5/27.
 */
var loadtimes=0;
var IDSet=new Array(4);
var URLSet=new Array(4);
var NOSet=new Array(4);

$(document).ready(function () {
    $.getJSON("php/GetPic.php", function (result) {
        $.each(result, function (i, item) {
            //console.log(i);
            console.log(item.ID.toString());
            console.log(item.URL.toString());
            var temp = "pic";
            temp = temp + i.toString();
            document.getElementById(temp).src = item.URL.toString();
            var hrefString = "link";
            hrefString = hrefString + i.toString();
            document.getElementById(hrefString).href = "detail.html?ID=" + item.ID.toString();
        })
    })

    $("button").click(function () {
        loadtimes=loadtimes+1;
        console.log("loadtimes:"+loadtimes);
        if (loadtimes<=15)
        {
            $.getJSON("php/GetMore.php", {times: loadtimes}, function (result) {
                $.each(result, function (i, item) {
                    // console.log(i);
                    console.log(item);
                    IDSet[i-1]=item.ID.toString();
                    URLSet[i-1]=item.URL.toString();
                    NOSet[i-1]=item.NO.toString();
                });
                console.log(IDSet);
                console.log(URLSet);
                console.log(NOSet);
                var PICSet=new Array(4);
                var LINKSet=new Array(4);
                var IMGSet=new Array(4);
                for (var i=0;i<4;i++){
                    PICSet[i]=document.createElement('div');
                    LINKSet[i]= document.createElement('a');
                    IMGSet[i]=document.createElement('img');
                }
                var ROW=document.createElement('div');
                ROW.className="row";
                for (var i=0;i<4;i++){
                    IMGSet[i].className="img-responsive";
                    IMGSet[i].id="pic"+NOSet[i].toString();
                    IMGSet[i].src=URLSet[i].toString();
                    LINKSet[i].id="link"+NOSet[i].toString();
                    LINKSet[i].href="detail.html?ID=" + IDSet[i].toString();
                    PICSet[i].className="col-md-3 portfolio-item";
                    LINKSet[i].appendChild(IMGSet[i]);
                    PICSet[i].appendChild(LINKSet[i]);
                    ROW.appendChild(PICSet[i]);
                }
                document.getElementById("morepic"+loadtimes.toString()).appendChild(ROW);
            });
        }
        else{
            document.getElementById("loadbutton").innerHTML="End";
        }
    });
});
