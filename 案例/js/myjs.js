/**
 * Created by Administrator on 2016/9/3 0003.
 */


$(function () {
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
        $(".line").stop().animate({"left":lastLeft});
    });

    //顶部蓝色line结束


//手风琴start
    $(".mobileConli").children().mouseenter(function () {
//                手风琴移动效果
        $(this).stop().animate({"width":751})
            .siblings().stop().animate({"width":205});

//                改变图片大小
        $(this).find("img").stop().animate({"width":300})
            .parent().parent().siblings().find("img").stop().animate({"width":180});

        //info 模块定位变化
        $(this).find(".info").stop().animate({"left":40,"top":100})
            .parent().siblings().find(".info").stop().animate({"left":10,"top":80});

        $(this).find(".info h3").stop().animate({"fontSize":46});
        $(this).find(".info h6").stop().animate({"fontSize":16});

        $(this).find(".info a").addClass("more").fadeIn();

        $(this).find(".info").stop().animate({"width":380,"padding-top":20,"left":50})
            .parent().siblings().find(".info").stop().animate({"width":180,"padding-top":20,"left":20});


    });

    $(".mobileConli").children().mouseleave(function () {
        $(this).find(".info h3").stop().animate({"fontSize":32});
        $(this).find(".info h6").stop().animate({"fontSize":14});
        $(this).find(".info a").removeClass("more").fadeOut();
    });
})
//手风琴end
//banner start
$(function(){
    $(".banner-close").click(function () {
        $(".banner").slideUp(300);
    });
});
//banner end
//waterpull start
var json = [
    {src: "images/con0.jpg", title: "百果园", name: "【微官网】", style: "布局上采用了在国际品牌设计中的对比布局风格.."},
    {src: "images/con1.jpg", title: "日丰", name: "【官方门户网站 微信站】", style: "整体展示方式高端时尚，增强了产品体验感.."},
    {src: "images/con2.jpg", title: "优儿选商城", name: "【电子商务网站】", style: "优网科技携手优儿选打造全新界面效果,致力于.."},
    {src: "images/con3.jpg", title: "氧宝宝商城", name: "【电子商务网站】", style: "专题网站的建设有效整合了企业的整体资源.."},
    {src: "images/con4.jpg", title: "王老吉", name: "【官方门户网站】", style: "网站设计具备逻辑严谨的页面结构、层次分明.."},
    {src: "images/con5.jpg", title: "大自然官网", name: "【品牌展示网站】", style: "从细节体现网站的特色，整体体现企业的形象.."},
    {src: "images/con6.jpg", title: "索菲亚DIY", name: "【3D虚拟仿真】", style: "用户根据索菲亚DIY定制搭配，便可足不出户.."},
    {src: "images/con7.jpg", title: "海天味业", name: "【官方门户网站】", style: "海天味业网站建设着眼体现企业及品牌文化.."},
    {src: "images/con8.jpg", title: "奈瑞儿", name: "【微官网】", style: "大幅画面选用能体现品牌特性的意境大图展.."}
];
$(function () {
    var $container = $('#container');
    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: '.box',
            isAnimated: true
        });
    });
    var str = "";
    for (var i = 0; i < json.length; i++) {
        //                        str += '<div class="box"><a href="#"><img src="' + json[i].src + '" alt=""/></a></div>&nbsp;&nbsp;&nbsp;&nbsp;';
        str += '<div class="box"><a href="#"><img src="' + json[i].src + '" alt=""/>'
            + '<div class="al-left-con">'
            + '<a href="javascript:;" class="al-left-a">'
            + '<p>'+json[i].title+'</p>'
            + '<p class="al-p-con">'+json[i].name+'</p>'
            + '<p>'+json[i].style+'</p>'
            + '</a>'
            + '<a href="javascript:;" class="al-left-at">'
            + '<p>'+json[i].title+'</p>'
            + '<p class="al-p-con">'+json[i].name+'</p>'
            + '<p>'+json[i].style+'</p>'
            + '</a>'
            + '</div>'
            + '</a></div>';
    }
    //判断触底，加载更多的图片
    $(window).scroll(function () {
        //当距离底部就剩下500px的时候，加载新图片
        if ($(document).height() - $(this).scrollTop() - $(this).height() < 500) {
            //创建一个jquery对象
            var $boxes = $(str);
            $("#container").append($boxes).masonry("appended", $boxes, true);//追加元素
            //                    $boxes.css("margin","5px");
            $("#container").imagesLoaded(function () {
                $("#container").masonry();
            });//加载完图片后，会实现自动重新排列。【这里是重点】
        }
        $(".box").mouseenter(function () {
            $(this).find(".al-left-at").stop().slideDown();
        })
        $(".box").mouseleave(function () {
            $(this).find(".al-left-at").stop().slideUp();
        })
    });
    for (var j = 0; j < 3; j++) {
        $("#container").html(str);
    }
    $("#container").imagesLoaded(function () {
        $("#container").masonry();
    });
    $(".box").mouseenter(function () {
        $(this).find(".al-left-at").stop().slideDown(200);
    })
    $(".box").mouseleave(function () {
        $(this).find(".al-left-at").stop().slideUp(200);
    })
});
//waterpull end
//小火箭start
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) { //向下滚动像素大于这个值时，即出现小火箭~
            $('.actGotop').stop().fadeIn(300); //火箭淡入的时间，越小出现的越快~
        } else {
            $('.actGotop').stop().fadeOut(100); //火箭淡出的时间，越小消失的越快~
        }
    });
    $('.actGotop').click(function () {
        //$('.actGotop').stop().fadeOut(200);
        $('html,body').stop().animate({scrollTop: '0px'}, 1000);
    });
})
//小火箭end