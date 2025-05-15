export default()=>{
    
    $('.lookmovie-wrap').click(function() {
        var videoID = $(this).data('video-id'); // data-video-idからYouTubeのIDを取得
        var videoURL = "https://www.youtube.com/embed/" + videoID + "?autoplay=1"; // 自動再生を追加
        var productLink = $(this).data('product-link'); // 商品詳細リンクを取得
    
        // モーダルを表示
        $('.bbq_modal-wrap').show();
        
        // モーダル内のYouTube iframeに動画URLを設定
        $('.bbq-modal .youtube').html('<iframe src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>');
        
        // 商品詳細リンクを設定
        $('.bbq-modal .product-link').attr('href', productLink);
        
        // 0.5秒後に動画を自動再生させる
        setTimeout(function() {
          // モーダルが表示された後に動画の自動再生を開始
          var iframe = $('.bbq-modal .youtube iframe')[0];
          iframe.src = iframe.src; // 再読み込みで再生を開始
        }, 500); // 500ミリ秒後に再生開始
      });
    
      // モーダルを閉じる
      $('.bbq_modal-close').click(function() {
        $('.bbq_modal-wrap').hide(); // モーダルを非表示にする
        $('.bbq-modal .youtube').html(''); // YouTubeのiframeをリセット
      });
    // モーダルを閉じる
    $('.bbq_modal-bg').click(function() {
        $('.bbq_modal-wrap').hide(); // モーダルを非表示にする
        $('.bbq-modal .youtube').html(''); // YouTubeのiframeをリセット
    });
      
      
}
