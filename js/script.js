$(function() {

  // スムーズスクロール機能
  // #から始まるアンカーリンクをクリックした際に、ヘッダーの高さを考慮してスクロールします。
  var navHeight = $(".header").outerHeight();
  $('a[href^="#"]').on("click", function() {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position,
    }, 300, "swing");
    return false;
  });

  // カードクリック機能を追加
  $('.card-works').on('click', function() {
    var target = $('#works');
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position,
    }, 300, "swing");
  });

  $('.card-skill').on('click', function() {
    var target = $('#skill');
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position,
    }, 300, "swing");
  });

  $('.card-about').on('click', function() {
    var target = $('#about');
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position,
    }, 300, "swing");
  });

  $('.card-contact').on('click', function() {
    var target = $('#contact');
    var position = target.offset().top - navHeight;
    $("html, body").animate({
      scrollTop: position,
    }, 300, "swing");
  });

  // 「ページトップへ戻る」ボタン機能
  // ボタンをクリックした際に、ページの最上部へスムーズにスクロールします。
  $("#js-page-top").on("click", function() {
    $("body,html").animate({
      scrollTop: 0,
    }, 300);
    return false;
  });

  // スクロールアニメーション機能
  // 要素が画面内に入った時にアニメーションを実行します。
  function scrollAnimation() {
    $('.fade-in-up').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight + 100) {
        $(this).css({
          'opacity': '1',
          'transform': 'translateY(0)'
        });
      }
    });
  }

  // スクロール時にアニメーション実行
  $(window).scroll(function() {
    scrollAnimation();
  });

  // ページ読み込み時にもアニメーション実行
  scrollAnimation();

});
