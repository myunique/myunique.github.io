window.onload = function () {
    var search_text = document.getElementById("search_text");
    var search_btn = document.getElementById("search_btn");

    var shopShow = document.getElementById("shopClass_show");
    var shopItem = document.getElementsByClassName("shopClass_item");
    var shopList = document.getElementsByClassName("shopClass_list");

    var container = document.getElementById('container');
    var list = document.getElementById('imgBox');
    var buttons = document.getElementById('imgNum').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var len = 4;//图片数量
    var animated = false;
    var interval = 3000;//自动轮播间隔
    var timer;

    var i;

    //搜索跳转
    search_text.onkeypress=function () {
        var keyCode = event.keyCode ? event.keyCode : event.which ? event.which
            : event.charCode;
        if (keyCode == 13) {
            window.location.href="https://myunique.github.io/mooc/E-commerceWebsite/filterPage.html";
        }
    }
    search_btn.onclick=function () {
        window.location.href="https://myunique.github.io/mooc/E-commerceWebsite/filterPage.html";
    }

    //轮播图
    function animate(offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 300;
        var inteval = 10;
        var speed = offset / (time / inteval);
        var left = parseInt(list.style.left) + offset;

        var go = function () {
            if ((speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';
                if (left > -810) {
                    list.style.left = -810 * len + 'px';
                }
                if (left < (-810 * len)) {
                    list.style.left = '-810px';
                }
                animated = false;
            }
        }
        go();
    }

    function showButton() {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].className == 'active') {
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'active';
    }

    function play() {
        timer = setTimeout(function () {
            next.onclick();
            play();
        }, interval);
    }

    function stop() {
        clearTimeout(timer);
    }

    next.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 4) {
            index = 1;
        }
        else {
            index += 1;
        }
        animate(-810);
        showButton();
    }

    prev.onclick = function () {
        if (animated) {
            return;
        }
        if (index == 1) {
            index = 4;
        }
        else {
            index -= 1;
        }
        animate(810);
        showButton();
    }

    for (i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {
            if (animated) {
                return;
            }
            if (this.className == 'active') {
                return;
            }
            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -810 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;

    play();

}