//获取元素
function my$(id) {
    return document.getElementById(id);
}

function getAttrValue(element,attr) {
    return element.currentStyle?element.currentStyle[attr] : window.getComputedStyle(element,null)[attr]||0;
}
//动画函数封装
/*
function animate(element,target) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var step=9;
        var current=element.offsetLeft;
        step=current<target?step:-step;
        if(Math.abs(target-current)<=Math.abs(step)){
            clearInterval(element.timeId);
            element.css.left=target+"px";
        }else{
            current=current+step;
            element.css.left=current+"px";
        }
    },10);
}
*/

/*
 * 终极版本的动画函数
 *
 * */
function animate(element,json,fn) {
    clearInterval(element.timeId);
    element.timeId=setInterval(function () {
        var flag=true;//假设都达到了目标
        for(var attr in json){
            if(attr=="opacity"){//判断属性是不是opacity
                var current= getAttrValue(element,attr)*100;
                //每次移动多少步
                var target=json[attr]*100;//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current/100;
            }else if(attr=="zIndex"){//判断属性是不是zIndex
                element.style[attr]=json[attr];
            }else{//普通的属性

                //获取当前的位置----getAttrValue(element,attr)获取的是字符串类型
                var current= parseInt(getAttrValue(element,attr))||0;
                //每次移动多少步
                var target=json[attr];//直接赋值给一个变量,后面的代码都不用改
                var step=(target-current)/10;//(目标-当前)/10
                step=step>0?Math.ceil(step):Math.floor(step);
                current=current+step;
                element.style[attr]=current+"px";
            }
            if(current!=target){
                flag=false;//如果没到目标结果就为false
            }
        }
        if(flag){//结果为true
            clearInterval(element.timeId);
            if(fn){//如果用户传入了回调的函数
                fn(); //就直接的调用,
            }
        }
    },10);
}

