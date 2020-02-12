/*
* メニュースクロール
*/
$(function () {

    // メニュー
    $(".n_about").click(function () {
        const i = $(".n_about").index(this);
        const p = $(".about").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });

    $(".n_works").click(function () {
        const i = $(".n_works").index(this);
        const p = $(".works").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });

    $(".n_contact").click(function () {
        const i = $(".n_contact").index(this);
        const p = $(".contact").eq(i).offset().top;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });


    // TOP戻る
    var pagetop = $('#floating');   
    pagetop.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {  //100pxスクロールしたら表示
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function () {
        $('html,body').animate({ scrollTop: 0 }, '2000');
        return false;
    });
});
