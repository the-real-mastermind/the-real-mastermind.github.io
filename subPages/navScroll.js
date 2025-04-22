window.onscroll = function (e) {

    var navs = document.getElementsByClassName("nav-bar");

    for (var i = 0; i < navs.length; i++) {
        if (navs[i].id === "top-nav") {
            navs[i].style.background = "rgba(51, 51, 51, 1)";
        } else {
            navs[i].style.opacity = 1;
        }

        if (window.scrollY < 100) {
            if (navs[i].tagName === "NAV") {
                navs[i].style.background = "rgba(51, 51, 51, 0)";
            } else {
                navs[i].style.opacity = 0;
            }
        }
    }
    console.log(window.scrollY);
};