$(function () {
    $(".navNewF").hide();
    $(".navNewC").hide();
    $(".navNewG").hide();
    $(".navNewMi").hide();
    $(".nav1").css({
        "position":"fixed",
        "width":"100%"
    });
    $(".nav1").hide();

});
setInterval(navSet,100);
function navSet() {
    if(scrollY>0){
        $(".nav1").slideDown(200);
        $(".nav2").hide();
    }else {
        $(".nav1").hide();
        $(".nav2").slideDown(200);
    }
}

function nav_order1() {
    $(".navNewF").slideDown(200);
}
function nav_order2() {
    $(".navNewF").slideUp(200);
}



function nav_order3() {
    $(".navNewC").slideDown(200);
}
function nav_order4() {
    $(".navNewC").slideUp(200);
}


function nav_order5() {
    $(".navNewG").slideDown(200);
}
function nav_order6() {
    $(".navNewG").slideUp(200);
}


// $(".navNew>div>ul>li").mouseenter(function (obj) {
//    $(".navNew>div>ul>li>a>i") .css("width","4rem");
//    console.log(obj);
// });
$(".navNew>div>ul>li").mouseleave(function () {
   $(".navNew>div>ul>li>a>i") .css("width","0");
});
function nav_M() {
    $(".navNewMi").slideToggle();
}
function nav_enter(obj) {
  $(obj).children("a").children().css("width","4.6rem");
}
// setInterval(function () {
//     if(scrollY>0){
//         $(".navNew").css("position","fixed");
//         $(".navNew").slideDown();
//     }else {
//         $(".navNew").css("position","");
//     }
// },100);

