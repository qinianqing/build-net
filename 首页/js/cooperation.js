/**
 * Created by Administrator on 2016/9/2 0002.
 */
//添加元素标签start
$(function () {
    var datas=[{
        "className":"cctv",
        "text":"CCTV影响力视频网站建设"
    },{
        "className":"apple",
        "text":"中航苹果官方网站"
    },{
        "className":"lenovo",
        "text":"联想控股成员网站建设"
    },{
        "className":"unicom",
        "text":"中国联通电信卡网站建设"
    },{
        "className":"zhongying",
        "text":"中影集团后期制作网站建设"
    },{
        "className":"qinghua",
        "text":"清华大学国际预科学网站建设"
    },{
        "className":"car",
        "text":"中科院力学研究网站建设"
    },{
        "className":"vanke",
        "text":"万科链家装饰官网网站建设"
    },{
        "className":"haier",
        "text":"海尔懒烤箱网站建设"
    },{
        "className":"cosco",
        "text":"中远航国际空货运网站建设"
    },{
        "className":"das",
        "text":"一汽大众汽车门户网站建设"
    },{
        "className":"toread",
        "text":"探路者冰雪控股网站建设"
    },{
        "className":"neusoft",
        "text":"东软汇聚官方网站建设"
    },{
        "className":"zjgl",
        "text":"中交公路海外分局公司网站建设"
    },{
        "className":"report",
        "text":"中国报道信息门户网站建设"
    }];
    var str="";
    for(var i=0;i<datas.length;i++){
        str +='<li class="item-li '+datas[i].className+'"><span>'+datas[i].text+'</span><i></i></li>';
    }
    $("#co-items").html(str);
    //添加元素标签end
    //控制图片位置start
        var imgWidth = $(".item-li").outerWidth();
        var imgHeight = $(".item-li").outerHeight();
        var windowWidth = $(window).width();
        var column = Math.floor(windowWidth / imgWidth);
        //console.log(column);
        $(".co-items").css("width",column*imgWidth+"px");
        function waterPull() {
            var $box = $(".item-li");
            for (var i = 0; i < $box.length; i++) {
                if (i >column) {
                    var leftValue = (i-column) * imgWidth;
                    var topValue = imgHeight;
                    $box.eq(i).css({
                        left: leftValue,
                        top: topValue,
                        position: "absolute"
                    });
                }
            }
        }
        waterPull();
    //控制图片位置end
    //添加背景图片start
    for (var i = 0; i < $("#co-items li").length; i++) {
        $("#co-items li").eq(i).css("background", "url(images/clients.png) " + (-230 * i) + "px -150px no-repeat");
    }
    //添加背景图片end
    //给图片设置鼠标进入离开效果 改变位置（火狐有bug） 添加遮罩层 改变透明度start
    $("#co-items li").mouseenter(function () {
        $(this).stop(false,true).animate({"backgroundPositionY":"0","opacity":"0.8"},400).siblings().stop(false,true).animate({"opacity":"1"},400);
        if(!$(this).css("backgroundPositionY")){
            $(this).css("background","url(images/clients.png) "+(-230 * $(this).index()) + "px 0");
        }
        $(this).find("i").stop(false,true).fadeIn("fast").parent().siblings().find("i").stop(true,true).slideUp("fast");
    });
    $("#co-items li").mouseleave(function () {
        $(this).stop(false,true).animate({"opacity":1,"backgroundPositionY":"-150px"},400).find("i").stop(false,true).slideUp("fast");
        if(!$(this).css("backgroundPositionY")){
            $(this).css("background","url(images/clients.png) "+(-230 * $(this).index()) + "px -150px");
        }
    });
    //给图片设置鼠标进入离开效果 改变位置 添加遮罩层 改变透明度end
});