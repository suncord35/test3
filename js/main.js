$(function () {
    // スムーススクロール

    $('a[href^="#"]').click(function () {
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? "html" : href);
        let position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });
    // ハンバーガー
    $('.ham-icon').on('click', function () {
        $('header').toggleClass('open');
    });
    $('.mask').on('click', function () {
        $('header').toggleClass('open');
    });
    $('#appear a').on('click', function () {
        $('header').removeClass('open');
    });

    // コンセプトフェードイン
    // $(window).scroll(function () {
    //     // fadeinクラスに対して順に処理を行う
    //     $(".fadein").each(function () {
    //         // スクロールした距離
    //         let scroll = $(window).scrollTop();
    //         // fadeinクラスの要素までの距離
    //         let target = $(this).offset().top;
    //         // 画面の高さ
    //         let windowHeight = $(window).height();
    //         // fadeinクラスの要素が画面下にきてから200px通過した
    //         // したタイミングで要素を表示
    //         if (scroll > target - windowHeight + 200) {
    //             $(this).css("opacity", "1");
    //             $(this).css("transform", "translateX(0)");
    //         }
    //     });
    // });

    // メニューページフェードイン
    // $(window).scroll(function () {

    //     $(".fade").each(function () {

    //         let scroll = $(window).scrollTop();

    //         let target = $(this).offset().top;

    //         let windowHeight = $(window).height();

    //         if (scroll > target - windowHeight + 200) {
    //             $(this).css("opacity", "1");
    //             $(this).css("transform", "translateY(0)");
    //         }
    //     });
    // });
});

// ページトップ
function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {//上から200pxスクロールしたら
        $('#page-top').removeClass('RightMove');//#page-topについているRightMoveというクラス名を除く
        $('#page-top').addClass('LeftMove');//#page-topについているLeftMoveというクラス名を付与
    } else {
        if (
            $('#page-top').hasClass('LeftMove')) {//すでに#page-topにLeftMoveというクラス名がついていたら
            $('#page-top').removeClass('LeftMove');//LeftMoveというクラス名を除き
            $('#page-top').addClass('RightMove');//RightMoveというクラス名を#page-topに付与
        }
    }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
});




