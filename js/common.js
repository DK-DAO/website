$(document).ready(function () {
    $(".txt-input").attr("spellcheck", "false");
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    })
})