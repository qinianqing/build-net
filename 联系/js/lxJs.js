/**
 * Created by ty on 2016/9/3.
 */
    //公司简介start
$(function(){
    //获取显示图片的层
    var abImage = my$("abImage");
    //获取ul
    var ul = abImage.children[0];
    //获取ul中所有的li
    var lis = ul.children;
    //显示图片的宽度
    var imgWidth = lis[0].offsetWidth+1;
    //获取焦点层
    var arr = my$("arr");
    //获取left和right
    var left = my$("left");
    var right = my$("right");
    var pic = 0;//该变量配合左右按键使用

    //因为要做无缝连接,所以把ul中的前5个li克隆追加到ul中
    ul.appendChild(ul.children[0].cloneNode(true));
    ul.appendChild(ul.children[1].cloneNode(true));
    ul.appendChild(ul.children[2].cloneNode(true));
    ul.appendChild(ul.children[3].cloneNode(true));
    ul.appendChild(ul.children[4].cloneNode(true));
    var timeId = null;
    timeId=setInterval(rightHandle,1300);
    abImage.onmouseover = function () {
        animate(arr,{"opacity":1});
        clearInterval(timeId);
    };
    abImage.onmouseout = function () {
        animate(arr,{"opacity":0});
        timeId=setInterval(rightHandle,1300);
    };


    //设置鼠标点击右边的按钮
    right.onclick = rightHandle;
    function rightHandle() {
        if (pic == lis.length - 5) {
            //假的5张换成真的5张
            pic = 0;
            ul.style.left = "0px";
        }
        pic++;
        animate(ul,{"left":-pic * imgWidth});
    };
    left.onclick=leftHandle;
    function leftHandle() {
        if (pic == 0) {
            pic = lis.length - 5;
            ul.style.left = -(lis.length - 5) * imgWidth + "px";
        }
        pic--;
        animate(ul,{"left":-pic * imgWidth});
    }
})
//公司简介end


//荣誉
$(function () {


    var img=document.getElementById("hrpic23");
    img.onmouseover= function () {
        img.style.width='250px';
        img.style.height='250px';
        img.style.marginLeft='-25px';
        img.style.marginTop='-25px';
    }

    var imgi=document.getElementById("hrpic23");
    imgi.onmouseout= function () {
        imgi.style.width='203px';
        imgi.style.height='206px';
        imgi.style.marginLeft='2px';
        imgi.style.marginTop='2px';
    }

    var img1=document.getElementById("hrpic24");
    img1.onmouseover= function () {
        img1.style.width='250px';
        img1.style.height='250px';
        img1.style.marginLeft='-25px';
        img1.style.marginTop='-25px';
    }

    var img2=document.getElementById("hrpic24");
    img2.onmouseout= function () {
        img2.style.width='203px';
        img2.style.height='206px';
        img2.style.marginLeft='2px';
        img2.style.marginTop='2px';
    }

})

$(function(){
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

})


