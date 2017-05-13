/**
 * Created by Administrator on 2016/9/1.
 */
//����������װ
function animate(element, attrObj, fn) {
//        ��ʱ�����ʱ������ֹ������Ч��
    if (element.timer) {
        clearInterval(element.timer);
    }

//      console.log(getAttrValue(element, attr));//���ԭ��û������leftֵ�ͻ�Ĭ��auto
    element.timer = setInterval(function () {
        var flag = true;//���������ж����е�Ԫ�ض���ȫ�����
        for (var attr in attrObj) {//ÿ20���룬���Ԫ�ض��ﳯ������targetֵ��һ����ֻ�ж�����ˣ�flag�Ż��Ϊtrue
            if (attr == "opacity") {
                var current = getAttrValue(element, attr) * 100;
                console.log(current);
                var target = attrObj[attr] * 100;
                var step = (target - current) / 10;
                step = step < 0 ? Math.floor(step) : Math.ceil(step);
                current += step;
                console.log(current);
//                    element.css[attr] = current / 100 + "px";
                element.style[attr] = current / 100 ;//opacityû��px������
            } else if (attr == "zindex") {
                element.style[attr] = attrObj[attr];
            } else {
                var current = parseInt(getAttrValue(element, attr));
                var target = attrObj[attr];
                var step = (target - current) / 10;
                step = step < 0 ? Math.floor(step) : Math.ceil(step);
                current += step;
                element.style[attr] = current + "px";
            }

            if (current !== target) {
                flag = false;
            }
//                console.log("current=" + current + "  target=" + target + " step=" + step);
        }

        if (flag) {//���Ϊtrue��˵��������Զ��ﵽ��Ŀ��ֵ
            clearInterval(element.timer);
            if (fn) {
                fn();
            }
        }

    }, 20);
}

//��ü���֮�������ֵ
function getAttrValue(element, attr) {
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr];
}

