/**
 * Created by aaa on 2016/9/1.
 */
$(function () {
    $(".news-title>li").mouseenter(function () {
        $(this).css("backgroundColor", "#00dfb9").siblings().css("backgroundColor", "#727272");
        $(".news-content-ul>li").eq($(this).index()).addClass("current")
            .siblings().removeClass();
    });


    var newstt0 = document.getElementById("newstt0");
    var newstt1 = document.getElementById("newstt1");
    var newstt2 = document.getElementById("newstt2");
    //newstt0.index=0;
    //newstt1.index=1;
    //newstt2.index=2;


    var newImgcontent0 = document.getElementById("news-imgcontent0");
    var newImgcontent1 = document.getElementById("news-imgcontent1");
    var newImgcontent2 = document.getElementById("news-imgcontent2");
    var screen = document.getElementById("news-img");
    var screen1 = document.getElementById("news-img1");
    var screen2 = document.getElementById("news-img2");
    //��ȡСԲ��
    var newsOl = document.getElementById("news-ol");
    var newsOl1 = document.getElementById("news-ol1");
    var newsOl2 = document.getElementById("news-ol2");
    var newli = newsOl.children;
    var newli1 = newsOl1.children;
    var newli2 = newsOl2.children;

    //��ȡͼƬli
    var newsImg = newImgcontent0.children;
    var newsImg1 = newImgcontent1.children;
    var newsImg2 = newImgcontent2.children;

    //��ȡ��Ļ�Ĵ�С
    var imgWidth = screen.offsetWidth;


    //������ʱ��
    //newstt0.timeId = setInterval(rightHandle, 2000);
    //newstt1.timeId1 = setInterval(rightHandle1, 2000);
    //newstt2.timeId2 = setInterval(rightHandle2, 2000);


//�ֲ�1============================================================================
    var pic = 0;
    for (var i = 0; i < newli.length; i++) {
        newli[i].index = i;
        newli[i].onmouseover = function () {
            for (var j = 0; j < newli.length; j++) {
                newli[j].className = "";
            }
            this.className = "current";
            //���ö����ĺ���
            var target = -(this.index * imgWidth);
            animate(newImgcontent0, target);
            pic = this.index;//������Ҫ
        };
    }
    //��ʱ�ֲ�
    var timeId = setInterval(rightHandle, 2000);

    function rightHandle() {
        if (pic == newsImg.length - 1) {//pic=4 lis.length-1===3
            pic = 0;//����Ϊ0��ʱ��
            newImgcontent0.style.left = 0 + "px";
        }
        pic++;
        var target = -pic * imgWidth;
        animate(newImgcontent0, target);
        //�ж�
        if (pic == newsImg.length - 1) {//pic===4  lis.length-1=====5,������--��һ��
            newsOl.children[0].className = "current";
            newsOl.children[newsOl.children.length - 1].className = "";
        } else {
            //����
            for (var i = 0; i < newsOl.children.length; i++) {
                newsOl.children[i].className = "";
            }
            newsOl.children[pic].className = "current";
        }
    };

    screen.onmouseover = function () {
        clearInterval(timeId);
    };
    screen.onmouseout = function () {
        timeId = setInterval(rightHandle, 2000);
    };


//�ֲ�2===========================================================================================
//    var timeId1 = setInterval(rightHandle1, 2000);
    newstt1.onmouseover = function () {
        var pic1 = 0;
        for (var i = 0; i < newli1.length; i++) {
            newli1[i].index = i;
            newli1[i].onmouseover = function () {
                for (var j = 0; j < newli1.length; j++) {
                    newli1[j].className = "";
                }
                this.className = "current";
                //���ö����ĺ���
                console.log(this.index);
                var target = -(this.index * imgWidth);
                animate(newImgcontent1, target);
                pic1 = this.index;//������Ҫ
            };
        }
        //��ʱ�ֲ�
        var timeId1= setInterval(rightHandle1, 2000);

        function rightHandle1() {
            if (pic1 == newsImg1.length - 1) {//pic=4 lis.length-1===3
                pic1 = 0;//����Ϊ0��ʱ��
                newImgcontent1.style.left = 0 + "px";
            }
            pic1++;
            var target = -pic1 * imgWidth;
            animate(newImgcontent1, target);
            //�ж�
            if (pic1 == newsImg1.length - 1) {//pic===5  lis.length-1=====5,������--��һ��
                newsOl1.children[0].className = "current";
                newsOl1.children[newsOl1.children.length - 1].className = "";
            } else {
                //����
                for (var i = 0; i < newsOl1.children.length; i++) {
                    newsOl1.children[i].className = "";
                }
                newsOl1.children[pic1].className = "current";
            }
        };

        screen1.onmouseover = function () {
            clearInterval(timeId1);
        };
        screen1.onmouseout = function () {
            timeId1 = setInterval(rightHandle1, 2000);
        };

    }


    //�ֲ�3=======================================================================================

    newstt2.onmouseover = function () {

        var pic2 = 0;
        for (var i = 0; i < newli2.length; i++) {
            newli2[i].index = i;
            newli2[i].onmouseover = function () {
                for (var j = 0; j < newli2.length; j++) {
                    newli2[j].className = "";
                }
                this.className = "current";
                //���ö����ĺ���
                var target = -(this.index * imgWidth);
                animate(newImgcontent2, target);
                pic2 = this.index;//������Ҫ
            };
        }
        //��ʱ�ֲ�
        var timeId2 = setInterval(rightHandle2, 2000);

        function rightHandle2() {
            if (pic2 == newsImg2.length - 1) {//pic=4 lis.length-1===3
                pic2 = 0;//����Ϊ0��ʱ��
                newImgcontent2.style.left = 0 + "px";
            }
            pic2++;
            var target = -pic2 * imgWidth;
            animate(newImgcontent2, target);
            //�ж�
            if (pic2 == newsImg2.length - 1) {//pic===5  lis.length-1=====5,������--��һ��
                newsOl2.children[0].className = "current";
                newsOl2.children[newsOl2.children.length - 1].className = "";
            } else {
                //����
                for (var i = 0; i < newsOl2.children.length; i++) {
                    newsOl2.children[i].className = "";
                }
                newsOl2.children[pic2].className = "current";
            }
        };

        screen2.onmouseover = function () {
            clearInterval(timeId2);
        };
        screen2.onmouseout = function () {
            timeId2 = setInterval(rightHandle2, 2000);
        };

    }

    //=====================================

    //animate����
    function animate(element, target) {
        clearInterval(element.timeId);
        //��ʱ��
        element.timeId = setInterval(function () {
            //��ȡ���Ŀ��λ��
            //var target=400;
            //��ȡ��ĵ�ǰλ��
            var current = element.offsetLeft;
            //��ÿ���ƶ���������---ÿ���ƶ��Ĳ���
            var step = 9;
            step = current < target ? step : -step;
            current = current + step;
            //�����ǰλ��С����ÿ���ƶ��Ĳ���,��ô��֤�����Ͼ͵���Ŀ��λ��
            //��ʱ���ƶ�һ�ξͳ�����Ŀ���λ��,����,ֱ�ӰѼ�ʱ����վͿ�����,Ȼ�����õ�ǰ��λ�þ���Ŀ��λ��,����ͼ����ƶ�
            if (Math.abs(target - current) < Math.abs(step)) {
                clearInterval(element.timeId);
                element.style.left = target + "px";
            } else {
                element.style.left = current + "px";
            }
        }, 20);
    }

})