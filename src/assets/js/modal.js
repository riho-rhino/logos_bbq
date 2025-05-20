export default () => {

    // ボタンがクリックされたとき
    $('.lookmovie-wrap').on('click', function () {
        $('body').addClass('noscroll');
        var videoID = $(this).data('video-id'); // data-video-idからYouTubeのIDを取得
        var videoURL = "https://www.youtube.com/embed/" + videoID + "?autoplay=1"; // 自動再生を追加
        var productLink = $(this).data('product-link'); // 商品詳細リンクを取得
        // モーダルラップをフェードインで表示
        $('.bbq_modal-wrap').fadeIn(300, function() {
            // .bbq-youtubeにfadeInアニメーションを適用
            $('.bbq_modal-inner').css('animation', 'fadeIn 0.7s forwards');
        });
        var iframe = $('<iframe>', {
            src: videoURL,
            frameborder: 0,
            allowfullscreen: true,
            allow: 'autoplay',
            class: 'youtube-iframe'
        });

        $('.bbq-modal .bbq-youtube').html(iframe);  
        
        $('.bbq-modal .product-link').attr('href', productLink);
        
        setTimeout(function() {
            var iframeElement = $('.bbq-modal .bbq-youtube iframe')[0];
            iframeElement.src = iframeElement.src; 
        }, 300); 
    });

    $('.bbq_modal-bg').on('click', function () {
        $('body').removeClass('noscroll');
        $('.bbq_modal-inner').css('animation', 'fadeOut 0.5s forwards'); 
        setTimeout(function() {
            $('.bbq_modal-wrap').fadeOut(300); 
        }, 500); 
        $('.bbq-modal .bbq-youtube').html(''); 
    });

    // モーダルを閉じる（フェードアウト）
    $('.bbq_modal-close').on('click', function () {
        $('body').removeClass('noscroll');
        $('.bbq_modal-inner').css('animation', 'fadeOut 0.5s forwards');  // fadeOutアニメーションを適用
        setTimeout(function() {
            $('.bbq_modal-wrap').fadeOut(300); // モーダルをラップを非表示にする
        }, 500); // fadeOutが終了するまで待機
        $('.bbq-modal .bbq-youtube').html(''); 
    });

}
