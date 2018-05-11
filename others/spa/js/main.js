window.onload = function () {
    var styleBtn = document.getElementById("styleBtn").getElementsByTagName("button");
    var marketBtn = document.getElementById("marketBtn").getElementsByTagName("button");
    var i = 0;

    function btnReset(btn) {
        for (var i = 0; i < btn.length; i++) {
            if (btn[i].classList.contains("on")) {
                btn[i].classList.remove("on");
            }
        }
    }

    for (i = 0; i < styleBtn.length; i++) {
        (function (i) {
            styleBtn[i].onclick = function () {
                btnReset(styleBtn);
                styleBtn[i].classList.add("on");
            }
        })(i);
    }
    for (i = 0; i < marketBtn.length; i++) {
        (function (i) {
            marketBtn[i].onclick = function () {
                btnReset(marketBtn);
                marketBtn[i].classList.add("on");
            }
        })(i);
    }
}