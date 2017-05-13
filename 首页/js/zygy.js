


$(function () {
    function animate(element, target) {
        clearInterval(element.timeId);
        element.timeId = setInterval(function () {
            //ÿһ���ƶ�8px
            var step = 8;
            var current = element.offsetLeft;
            step = current < target ? step : -step;
            if (Math.abs(target - current) <= Math.abs(step)) {
                clearInterval(element.timeId);
                element.style.left = target + "px";
            } else {
                current = current + step;
                element.style.left = current + "px";
            }
        }, 5);
    }

    //$("#aboutRight").animate({
    //    "top": "200px",
    //    "width": "480px",
    //    "left": "50%",
    //    "opacity": "1"
    //}, 1000);

    var gy = $("#about");
    if (gy.gyTimeId) {
        clearInterval(gy.gyTimeId);
    } else {
        gy.gyTimeId = setInterval(rightHandle, 2000);
    }
    //��ȡ�ֲ�ͼ��ul�Լ�li�б�
    var gyLis = $("#aboutRight>ul>li");
    var gyUl = $("#aboutRight>ul")[0];
    //��ȡ��ߵ�lis
    var gyLeftLis = document.getElementById("aboutLeft").children;
    //�������
    var gyPic = 0;
    //"����"���ֲ�ͼ��������
    function rightHandle() {
        if (gyPic === gyLis.length - 1) {//��Ϊ��ͼƬ�����һ��
            gyPic = 0;
            gyUl.style.left = 0 + "px";
        }
        //������һ
        gyPic++;
        animate(gyUl, -gyPic * 480);//������һ��

        //����ߵĲ˵�������ͬ����ʽ
        for (var i = 0; i < gyLeftLis.length; i++) {
            //�ɵ�����
            gyLeftLis[i].className = "";
        }
        if (gyPic < gyLis.length - 1) {
            //������С��4��ʱ�򣬾ͽ���Ӧ����li
            gyLeftLis[gyPic].className = "one";
        } else {
            //����ʾ���һ�ſ�¡ͼ��ʱ���������ʾ���ǵ�һ��li
            gyLeftLis[0].className = "one";
        }
    }

    //�����liע����꾭���¼����ұ���ʾ��Ӧ������
    for (var i = 0; i < gyLeftLis.length; i++) {
        gyLeftLis[i].index = i;
        gyLeftLis[i].onmouseover = function () {
            //�ر��Զ��л�Ч��
            clearInterval(gy.gyTimeId);
            gyPic = this.index;
            for (var i = 0; i < gyLeftLis.length; i++) {
                //�ɵ�����
                gyLeftLis[i].className = "";
            }
            this.className = "one";
            animate(gyUl, -gyPic * 480);//������һ��
        }
        //�����liע������Ƴ��¼����ұ߼�ʱ������
        gyLeftLis[i].onmouseout = function () {
            gy.gyTimeId = setInterval(rightHandle, 2000);
        };
    }

    //���������ұ��ֲ�ͼ�У�����ֹͣ
    for (var i = 0; i < gyLis.length; i++) {
        gyLis[i].onmouseover = function(){
            //ֹͣ����
            clearInterval(gy.gyTimeId);
        };
        //������ƿ��ֲ�ͼ��������������
        gyLis[i].onmouseout = function () {
          //���¿�������
            gy.gyTimeId = setInterval(rightHandle, 2000);
        };
    }


});
