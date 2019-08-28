var showImg=document.getElementById("showImg");
console.log(showImg);
var smallImg=document.getElementsByClassName("small");
console.log(smallImg);
var img=smallImg[0].getElementsByTagName("img");
console.log(img);
for(var i=0;i<img.length;i++){
    var small=img[i];
    small.onclick=function (obj) {
        var a=this.src;
        console.log(a);
        var ss=a.split("/");
        console.log(ss[ss.length-1]);
        showImg.innerHTML='<img class="img-responsive" src="../images/'+ss[ss.length-1]+'"/>';
    }
}

$('a[data-toggle="tab"]').on('shown.bs.tab',function (e) {
    e.target  //newly activated tab
    e.relatedTarget //previous active tab
});

/*购买数量*/

// console.log(reduce);
// console.log(insert);
var reduce=document.getElementsByClassName("reduce");
var insert=document.getElementsByClassName("plus");
var val=document.getElementsByClassName("value")[0];
// console.log(value);
var value=val.innerHTML;
function reduceNum() {
if(value!=0){
    value--;
    val.innerHTML=value;
}else {
    val.innerHTML=1;
}
}
function insertNum() {
   value++;
   val.innerHTML=value;
}



