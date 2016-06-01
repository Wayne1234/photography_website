/**
 * Created by lenovo on 2016/5/27.
 */
var loadtimes=0;
var IDSet=new Array(3);
var URLSet=new Array(3);
var NAMESet=new Array(3);
var CONTENTSet=new Array(3);
var NOSet=new Array(3);

$(document).ready(function () {
    $.getJSON("php/GetLandPic.php", function (result) {
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
            var namestring="name";
            namestring=namestring+i.toString();
            document.getElementById(namestring).innerHTML=item.picname.toString();
            document.getElementById(namestring).href="detail.html?ID=" + item.ID.toString();
            var contentstring="content";
            contentstring=contentstring+i.toString();
            document.getElementById(contentstring).innerHTML=item.description.toString();
            // var l="link";
            // l=l+i.toString();
            //console.log(temp);
            // idString="#"+l;
            // document.getElementById(l).href="https://www.baidu.com/";
        })
    })

    $("button").click(function () {
        loadtimes=loadtimes+1;
        console.log("loadtimes:"+loadtimes);
        if (loadtimes<=20)
        {
            $.getJSON("php/GetLandMore.php", {times: loadtimes}, function (result) {
                $.each(result, function (i, item) {
                    console.log(i);
                    console.log(item);
                    IDSet[i-1]=item.ID.toString();
                    URLSet[i-1]=item.URL.toString();
                    NOSet[i-1]=item.NO.toString();
                    NAMESet[i-1]=item.picname.toString();
                    CONTENTSet[i-1]=item.description.toString();
                });
                console.log(IDSet);
                console.log(URLSet);
                console.log(NAMESet);
                var PICSet=new Array(3);
                var LINKSet=new Array(3);
                var IMGSet=new Array(3);
                var H3Set=new Array(3);
                var H3LinkSet=new Array(3);
                var PSet=new Array(3);
                for (var i=0;i<3;i++){
                    PICSet[i]=document.createElement('div');
                    LINKSet[i]= document.createElement('a');
                    IMGSet[i]=document.createElement('img');
                    H3Set[i]=document.createElement('h3');
                    PSet[i]=document.createElement('p');
                    H3LinkSet[i]=document.createElement('a');
                }
                var ROW=document.createElement('div');
                ROW.className="row";
                for (var i=0;i<3;i++){
                    IMGSet[i].className="img-responsive";
                    IMGSet[i].id="pic"+NOSet[i].toString();
                    IMGSet[i].src=URLSet[i].toString();
                    LINKSet[i].id="link"+NOSet[i].toString();
                    LINKSet[i].href="detail.html?ID=" + IDSet[i].toString();
                    PICSet[i].className="col-md-4 portfolio-item";
                    H3LinkSet[i].id="name"+NOSet[i].toString();
                    H3LinkSet[i].href="detail.html?ID=" + IDSet[i].toString();
                    H3LinkSet[i].innerHTML=NAMESet[i].toString();
                    PSet[i].id="content"+NOSet[i].toString();
                    PSet[i].innerHTML=CONTENTSet[i].toString();
                    LINKSet[i].appendChild(IMGSet[i]);
                    H3Set[i].appendChild(H3LinkSet[i]);
                    PICSet[i].appendChild(LINKSet[i]);
                    PICSet[i].appendChild(H3Set[i]);
                    PICSet[i].appendChild(PSet[i]);
                    ROW.appendChild(PICSet[i]);
                }
                document.getElementById("morepic"+loadtimes.toString()).appendChild(ROW);
                //document.getElementById("pic_set").appendChild(ROW);
            });
        }
        else{
            document.getElementById("loadbutton").innerHTML="End";
        }
    });
});

