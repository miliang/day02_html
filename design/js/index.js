// $(document).ready(function () {
//  var off=true;
//  var i=2;
//  var st=setInterval(change,5000);
//  function change() {
//      if(i===1){
//          $("#li1").trigger("click");
//      }
//      else if(i===2){
//          $("#li2").trigger("click");
//      }
//      else if(i===3){
//          $("#li3").trigger("click");
//      }
//      else if(i===4){
//          $("#li4").trigger("click");
//      }
//      else if(i===5){
//          $("#li5").trigger("click");
//      }
//      else if(i===6){
//          $("#li6").trigger("click");
//      }
//      else if(i===7){
//          $("#li7").trigger("click");
//      }
//      if(i>7){
//          i=1;
//      }
//  }
//  //绑定点击事件
//  function myClick() {
//      if(off===true){
//          off=false;
//          var index=$(this).i;
//          if(index===0){
//             $("#li1").get(0).style.className="activeli"
//          }
//          else if(index===1){
//              $("#li2").get(0).style.className="activeli";
//              $("#li1").style().removeClass("activeli");
//          }
//          else if(index===2){
//              $("#li3").get(0).style.className="activeli";
//              $("#li2").style().removeClass("activeli");
//          }
//          else if(index===3){
//              $("#li4").get(0).style.className="activeli";
//              $("#li3").style().removeClass("activeli");
//          }
//          else if(index===4){
//              $("#li5").get(0).style.className="activeli";
//              $("#li4").style().removeClass("activeli");
//          }
//          else if(index===5){
//              $("#li6").get(0).style.className="activeli";
//              $("#li5").style().removeClass("activeli");
//          }
//          else if(index===6){
//              $("#li7").get(0).style.className="activeli";
//              $("#li6").style().removeClass("activeli");
//          }
//          // $(this).css("background-image","url('images/ic_spr_"+(index+7)+".png')");
//          // $(".ic").css("border-bottom","solid 3px #bfbfbf");
//          // $(this).css("border-bottom","solid 3px #ffffff");
//          //    $("header").css("background-image","url('../images/banner_"+(index+1)+".png')");
//          $("header").css("background-image","url(../images/banner_"+(index+1)+".png");
//          // $(".txt").css("opacity","0");
//          // $(".ctx"+(index+1)+"").delay(500).animate({
//          //     "opacity":"1"
//          // });
//          i=index+2;
//          setTimeout(function () {
//              off=true;
//          },800);
//         }
//
//     }
//     $(".li").bind("click",myClick);
//     //定时器
//     $(".li").mouseover(function () {
//         clearInterval(st);
//     });
//     $(".li").mouseout(function () {
//         st=setInterval(change,5000);
//     });
// });
$(document).ready(function () {
    var off=true;
    var i=2;
    var st=setInterval(change,5000);
    function change() {
        if(i===1){
            $(".i1").trigger("click");
        }
        else if(i===2){
            $(".i2").trigger("click");
        }
        else if(i===3){
            $(".i3").trigger("click");
        }
        else if(i===4){
            $(".i4").trigger("click");
        }
        else if(i===5){
            $(".i5").trigger("click");
        }
        if(i>5){
            i=1;
        }
    }
    //绑定点击事件
    function myClick() {
        if(off===true){
            off=false;
            var index=$(this).index();
            var a1="20px -15px";
            var a2="5px -15px";
            var a3="10px -17px";
            var a4="10px -15px";
            var s1="20px 0";
            var s2="5px 0";
            var s5="10px 0";
            if(index===0){
                $(this).css("background-position",a1);
                $(".i2").css("background-image","url('images/ic_spr_02.png')");
                $(".i3").css("background-image","url('images/ic_spr_03.png')");
                $(".i4").css("background-image","url('images/ic_spr_04.png')");
                $(".i5").css("background-image","url('images/ic_spr_05.png')");
                $(".i2").css("background-position",s2);
                $(".i3").css("background-position",s5);
                $(".i4").css("background-position",s5);
                $(".i5").css("background-position",s5);
            }
            else if(index===1){
                $(this).css("background-position",a2);
                $(".i1").css("background-image","url('images/ic_spr_01.png')");
                $(".i3").css("background-image","url('images/ic_spr_03.png')");
                $(".i4").css("background-image","url('images/ic_spr_04.png')");
                $(".i5").css("background-image","url('images/ic_spr_05.png')");
                $(".i1").css("background-position",s1);
                $(".i3").css("background-position",s5);
                $(".i4").css("background-position",s5);
                $(".i5").css("background-position",s5);
            }
            else if(index===2){
                $(this).css("background-position",a3);
                $(".i2").css("background-image","url('images/ic_spr_02.png')");
                $(".i1").css("background-image","url('images/ic_spr_01.png')");
                $(".i4").css("background-image","url('images/ic_spr_04.png')");
                $(".i5").css("background-image","url('images/ic_spr_05.png')");
                $(".i1").css("background-position",s1);
                $(".i2").css("background-position",s2);
                $(".i4").css("background-position",s5);
                $(".i5").css("background-position",s5);
            }
            else if(index===3){
                $(this).css("background-position",a4);
                $(".i2").css("background-image","url('images/ic_spr_02.png')");
                $(".i3").css("background-image","url('images/ic_spr_03.png')");
                $(".i1").css("background-image","url('images/ic_spr_01.png')");
                $(".i5").css("background-image","url('images/ic_spr_05.png')");
                $(".i1").css("background-position",s1);
                $(".i2").css("background-position",s2);
                $(".i3").css("background-position",s5);
                $(".i5").css("background-position",s5);
            }
            else if(index===4){
                $(this).css("background-position",a4);
                $(".i2").css("background-image","url('images/ic_spr_02.png')");
                $(".i3").css("background-image","url('images/ic_spr_03.png')");
                $(".i4").css("background-image","url('images/ic_spr_04.png')");
                $(".i1").css("background-image","url('images/ic_spr_01.png')");
                $(".i1").css("background-position",s1);
                $(".i2").css("background-position",s2);
                $(".i3").css("background-position",s5);
                $(".i4").css("background-position",s5);
            }
            $(this).css("background-image","url('images/ic_spr_"+(index+7)+".png')");
            $(".ic").css("border-bottom","solid 3px #bfbfbf");
            $(this).css("border-bottom","solid 3px #ffffff");
            $("section").css("background-image","url('../images/banner_"+(index+1)+".png')");
            $(".txt").css("opacity","0");
            $(".ctx"+(index+1)+"").delay(500).animate({
                "opacity":"1"
            });
            i=index+2;
            setTimeout(function () {
                off=true;
            },800);
        }

    }
    $(".ic").bind("click",myClick);
    //定时器
    $(".ic").mouseover(function () {
        clearInterval(st);
    });
    $(".ic").mouseout(function () {
        st=setInterval(change,5000);
    });
});



