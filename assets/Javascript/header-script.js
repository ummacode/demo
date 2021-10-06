[].slice.call(document.querySelectorAll('.dropdown .nav-link')).forEach(function (el) {
    el.addEventListener('click', onClick, false);
});

function onClick(e) {
    e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('show-submenu') ? hideSubMenu(el) : showSubMenu(el);
}

function showSubMenu(el) {
    el.classList.add('show-submenu');
    document.addEventListener('click', function onDocClick(e) {
        e.preventDefault();
        if (el.contains(e.target)) {
            return;
        }
        document.removeEventListener('click', onDocClick);
        hideSubMenu(el);
    });
}

function hideSubMenu(el) {
    el.classList.remove('show-submenu');
}





$(function () {
    $(".humberger").click(function () {
        $(".overlay").fadeToggle(200);
        //    $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
});

// $('.overlay').on('click', function(){
//     $(".overlay").fadeToggle(200);   
//     open = false;
// });




$(function () {
    var menu = $('.humberger'),
        menuBtn = $('.humberger'),
        body = $(document.body),
        menuWidth = menu.outerWidth();

    menuBtn.on('click', function () {
        body.toggleClass('open');
        var st = $(window).scrollTop();

        if (body.hasClass('open')) {
            $("html").css("top", -st + "px");
            $("html").addClass("scroll-prevent");
            menuBtn.on("click", function () {
                if (!body.hasClass("open")) {
                    $(window).scrollTop(st);
                    $("html").removeClass("scroll-prevent");
                    // console.log(st);
                }
            });
        } 
    });
});

