run();

function run() {
    var img = document.getElementsByTagName("img")[0],
        amp = document.getElementsByTagName("button")[0],
        narrow = document.getElementsByTagName("button")[1],
        reduction = document.getElementsByTagName("button")[2],
        num = 0,// 放大系数
        basicWidth = img.offsetWidth,// 图片初始宽度        
        flag = false,// 鼠标按下和松开的标志
        left = 0,// 鼠标点下时，距图片左边距离
        top = 0;// 鼠标点下时，距图片顶部距离

    // 放大图片
    addEvent(amp, "click", function(event) {
        num++;
        img.style.width = basicWidth + num * 50;
    });

    // 缩小图片
    addEvent(narrow, "click", function(event) {
        num--;
        img.style.width = basicWidth + num * 50;
    });

    // 还原图片
    addEvent(reduction, "click", function(event) {
        num = 0;
        img.style.width = basicWidth;
        img.style.left = 40;
        img.style.top = 50;
    });

    addEvent(img, "mousedown", function(event) {        
        flag = true;
        left = event.clientX - this.offsetLeft;
        top = event.clientY - this.offsetTop;
        
        // 阻止默认事件，防止拖拽图片时出现情况（FF需在mousedown时添加）
        if(event.preventDefault) {
          event.preventDefault();
        }else{
          event.returnValue = false;
        }
    });

    addEvent(img, "mousemove", function(event) {
        if(flag) {
            this.style.left = event.clientX - left;
            this.style.top = event.clientY - top;
        }      
        
        // 阻止默认事件，防止拖拽图片时出现情况
        if(event.preventDefault) {
          event.preventDefault();
        }else{
          event.returnValue = false;
        }        
    });

    addEvent(img, "mouseup", function(event) {                                
        flag = false;
    });
}

// 为element添加事件
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + event, listener);
    } else {
        element["on" + type] = listener;
    }
}