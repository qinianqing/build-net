/**
 * Created by aaa on 2016/9/1.
 */
$(function () {
    $(".pz-title").slideDown(500);
    $(".pz-content").slideDown(1000);
    $(".pz-more").show(1000);

    $(".pz-content div").mouseenter(function () {
        console.log("here");
        $(this).stop().animate({fontSize:"20px"},500);

        })

    $(".pz-content").mouseleave(function () {
        $(".pz-content div").stop().animate({fontSize:"14px"},500);

    })




    $(".pz-more").mouseenter(function () {
        $(this).css({"backgroundColor":"#00DFB9","color":"white"})
        $(".pz-more").animate({fontSize:20},1000);
        $(this).animate({opacity:0.8});
    })

    $(".pz-more").mouseleave(function () {
        $(".pz-more").stop().animate({"backgroundColor":"","color":"#00DFB9",fontSize:16},1000);
    })
})