/**
 * Created by Administrator on 2016/9/3.
 */
$(function () {
    var json = [
        {src: "images/al-con1.jpg", title: "网站设计", name: "海尔嫩烤箱官方网站建设", style: "上市公司，官方网站，欧美风格"},
        {src: "images/al-con2.jpg", title: "网站设计", name: "探路者H5网站建设项目", style: "上市公司 , 电子商务网站建设 , 红色 , 欧美风格"},
        {src: "images/al-con3.jpg", title: "网站设计", name: "中远国际航空网站设计", style: "国有企业 , 蓝色 , 欧美风格 , 上市公司"}
    ];
    var str = "";
    for (var i = 0; i < json.length; i++) {
        str += '<div class="al-left al-r">'
            + '<div class="al-image-effect-future">'
            + '<div class="al-share-layer">'
            + '<a href="#" class="al-share-button al-share-via">进入</a>'
            + '</div>'
            + '<div class="al-image-layer"><img src="' + json[i].src + '">'
            + '</div>'
            + '</div>'
            + '<div class="al-left-con">'
            + '<a href="javascript:;" class="al-left-a">'
            + '<p>' + json[i].title + '</p>'
            + '<p class="al-p-con">' + json[i].name + '</p>'
            + '<p>' + json[i].style + '</p>'
            + '</a>'
            + '<a href="javascript:;" class="al-left-at">'
            + '<p>' + json[i].title + '</p>'
            + '<p class="al-p-con">' + json[i].name + '</p>'
            + '<p>' + json[i].style + '</p>'
            + '</a>'
            + '</div>' + '</div>';
    }
    $(".al-content").html(str);
    $(".al-left").eq(2).css("marginRight", "0");
    $(".al-left").mouseenter(function () {
        $(this).find(".al-left-at").stop().slideDown(200);
    })
    $(".al-left").mouseleave(function () {
        $(this).find(".al-left-at").stop().slideUp(200);
    })
})