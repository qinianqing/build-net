$(function () {
    //顶部蓝色line
    var lastLeft=$(".list-inline li").eq(0).position().left;
    $(".line").stop().animate({"left":lastLeft});
    $(".list-inline li").mouseenter(function () {

        console.log($(this).position().left);

        $(".line").stop().animate({"left":$(this).position().left});

    });
    $(".list-inline li").mouseleave(function () {
        $(".line").stop().animate({"left":lastLeft});
    });

    $(".list-inline li").click(function () {
        lastLeft=$(this).position().left;
    });

    //顶部蓝色line结束



//    首页js开始
    var indexSwiper = document.getElementById("index-swiper");
    var bglis = indexSwiper.children;
    var guide = document.getElementById("guide");
    var guideas = guide.children;
    var swiperImgWidth = bglis[0].offsetWidth;
    var pic = 0;//用来记录图片的索引
    var menu = document.getElementById("menu");
    var menulis = menu.getElementsByTagName("li");
    var line = document.getElementById("line");

    var videoBox = document.getElementById("videoBox");


//索引小横条控制轮播图
    var pic = 0;
    for (var i = 0; i < guideas.length; i++) {
        guideas[i].index = i;
        guideas[i].onmouseover = function () {
            for (var j = 0; j < guideas.length; j++) {
                guideas[j].className = "";
            }
            this.className = "current";
            var target = -this.index * swiperImgWidth;
            pic = this.index;
            animate(indexSwiper, {"left": target});
        }
    }

//自动向右移动
//         复制轮播图的第一个
    var bgli = bglis[0].cloneNode(true);
    indexSwiper.appendChild(bgli);
    var timer = setInterval(rightHandel, 3000);
    function rightHandel() {
        if (pic == bglis.length - 1) {
            pic = 0;
            indexSwiper.style.left = 0 + "px";
        }
        pic++;//将要展示的图片的序号
        var target = -pic * swiperImgWidth;
        animate(indexSwiper, {"left": target});
        if (pic == bglis.length - 1) {
            guideas[0].className = "current";
            guideas[guideas.length - 1].className = "";
        } else {
            for (var j = 0; j < guideas.length; j++) {
                guideas[j].className = "";
            }
            guideas[pic].className = "current";
        }

    }
    guide.onmouseover = function () {
        clearInterval(timer);
    }
    guide.onmouseout = function () {
        timer = setInterval(rightHandel, 3000);
    }

//新闻news向上滑动
    var tempNews = document.getElementById("tempNews");
    var tempUl = tempNews.children[0];
    var templis = tempNews.getElementsByTagName("li");
    var templiHeight = templis[0].offsetHeight;

    var tempNewTimer = setInterval(topHandel, 3000);
//复制新闻最后一个元素
    var templiLast = templis[0].cloneNode(true);
    tempUl.appendChild(templiLast);
    var tempIdx = 0;
    function topHandel() {

        if (tempIdx == templis.length - 1) {
            tempIdx = 0;
            tempUl.style.top = 0 + "px";
        }
        tempIdx = ( tempIdx + 1) % templis.length;
        var target = -tempIdx * templiHeight;
        animate(tempUl, {"top": target});
    }
    tempNews.parentNode.onmouseover = function () {
        clearInterval(tempNewTimer);
    };
    tempNews.parentNode.onmouseout = function () {
        tempNewTimer = setInterval(topHandel, 2000);
    }
    //    首页js结束

});




