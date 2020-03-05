/*
* スクロール
*/
$(function () {

    if (matchMedia('(max-width: 768px)').matches) {
        var headerHight = 80;
    } else {
        var headerHight = 30;
    }

    // メニュー
    $(".n_about").click(function () {
        const i = $(".n_about").index(this);
        const p = $(".about").eq(i).offset().top - headerHight;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });

    $(".n_works").click(function () {
        const i = $(".n_works").index(this);
        const p = $(".works").eq(i).offset().top - headerHight;
        $('html,body').animate({ scrollTop: p }, '2000');
        return false;
    });

    $(".n_contact").click(function () {
        const i = $(".n_contact").index(this);
        const p = $(".contact").eq(i).offset().top - headerHight;
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


/*
* スクロールでナビ固定
*/
$(function(){
    var imgHeight = 100; //画像の高さを取得。これがイベント発火位置になる。
    var header = $('#head-wrap'); //ヘッダーコンテンツ
  
    $(window).on('load scroll', function(){
       if ($(window).scrollTop() < imgHeight) {
         //メインビジュアル内にいるので、クラスを外す。
         header.removeClass('header-scroll');
       } else {
         //メインビジュアルより下までスクロールしたので、クラスを付けて色を変える
         header.addClass('header-scroll');
       }
    });
});