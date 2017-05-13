/**
 * Created by Administrator on 2016/9/2.
 */
$(function () {

   $(".caption").mouseenter(function () {
      $(".caption span").animate({"fontFamily":"simsun",
                    "fontSize":"36px","color":"#988790","marginTop":30,"top":10},1000)
       /*$(".caption span").letterfx({"fx":"fly-left","letter_end":"destory","timing":1000});*/
   });
    $('.items li').each(function() {
        $(this).find('.cover').css('top', -$(this).height());
        $(this).hover(function() {
            $(this).find('.cover').stop().animate({
                'top': '0'
            }, 1000);
        }, function() {
            $(this).find('.cover').stop().animate({
                'top': $(this).height()
            }, {
                duration:600,
                complete: function() {
                    $(this).css('top', -$(this).parent('li').height())
                }
            },1000);
        });
    });
    $(".items li").mouseenter(function () {
        $(".cl").slideDown();
        $(".cr").slideUp();
        $(this).css("opacity",1).siblings().css("opacity",0.5);
        //$(".items li").transition(300);
    })
    $(".items li").mouseleave(function () {
        //$(".cl").removeClass("change")
        //$(".cr").removeClass("change");
        //$(".items li").css()
    })
});