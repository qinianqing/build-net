$(function () {
    $(".zz-mc li").mouseenter(
        function () {
            $(this).children("u").addClass("bg_u");
            $(this).children("u").stop().animate({"opacity": "1"},200);
            $(this).siblings().children("u").stop().animate({"opacity": "0"},200);
        }
    );
    $(".zz-mc .items").mouseleave(
        function () {
            $(this).find("u").animate({"opacity": "0"},150);
        }
    );

});
