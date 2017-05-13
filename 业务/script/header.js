/**
 * Created by Administrator on 2016/9/4.
 */
//顶部蓝色line
    $(function(){
        //改变透明度start
        $(window).scroll(function () {
            if($(window).scrollTop() >= $(".header").height()){
                $(".headerBox").css("opacity","0.6");
            }else{
                $(".headerBox").css("opacity","1");
            }
        })
        //改变透明度end
        //logo start
        $(".header .logo").mouseenter(function () {
            $(".header .logo").stop().animate({"width":"270px","height":"42px","left":"60px","top":"24px"},300)
        });
        $(".header .logo").mouseleave(function () {
            $(".header .logo").stop().animate({"width":"290px","height":"46px","left":"50px","top":"20px"},300)
        });
        //logo end
        //小电话start
        $(".header .hotline").mouseenter(function () {
            $(".header .hotline s").stop().animate({"backgroundPositionY":0,"right":130+"px"},100);
        });
        $(".header .hotline").mouseleave(function () {
            $(".header .hotline s").stop().animate({"backgroundPositionY":-30+"px","right":120+"px"});
        });
        //小电话end
        //顶部蓝色line
        var lastLeft=$(".list-inline li").eq(0).position().left;
        $(".line").stop().animate({"left":lastLeft});
        $(".list-inline li").mouseenter(function () {

            //console.log($(this).position().left);

            $(".line").stop().animate({"left":$(this).position().left});

        });
        $(".list-inline li").mouseleave(function () {
            $(".line").stop().animate({"left":lastLeft});
        });

        $(".list-inline li").click(function () {
            lastLeft=$(this).position().left;
        });

        //顶部蓝色line结束
});
//顶部蓝色line结束
