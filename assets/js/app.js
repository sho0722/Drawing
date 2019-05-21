$(function() {

    //マイクをクリックした時の処理
    $("#microphone").click(function() {

        //headerの文字列を変更
        $("header h1").text("♪はじめてのチュウ♪");

        // 音声の再生
        $("#audio").get(0).play();

        // アニメーションのクラスを追加
        $("#korosuke").addClass("swing");

        //曲が終了した時の処理
        $("#audio").on("ended", function(){

            // アニメーションのクラスを削除
            $("#korosuke").removeClass("swing");

            //headerの文字列を変更
            $("header h1").text("💓LOVE YOU💓");
        });
        
        // 順番に歌詞を表示
        $(".lyrics1").fadeIn("fast", function() {
            $(this).delay(1500).fadeOut(2500);
        });

        $(".lyrics2").delay(3500).fadeIn("fast", function() {
            $(this).delay(1500).fadeOut(2500);
        });

        $(".lyrics3").delay(6000).fadeIn("fast", function() {
            $(this).delay(2000).fadeOut(2500);
        });

        $(".lyrics4").delay(10000).fadeIn("fast", function() {
            $(this).delay(6500).fadeOut(2500);
        });

        $(".lyrics5").delay(18000).fadeIn("fast", function() {
            $(this).delay(1500).fadeOut(2500);
        });

        $(".lyrics6").delay(21500).fadeIn("fast", function() {
            $(this).delay(1500).fadeOut(2500);
        });

        $(".lyrics7").delay(24000).fadeIn("fast", function() {
            $(this).delay(2000).fadeOut(2500);
        });

        $(".lyrics8").delay(28000).fadeIn("fast", function() {
            $(this).delay(6500).fadeOut(2500);
        });

        $(".lyrics9").delay(35000).fadeIn("fast", function() {
            $(this).delay(4000).fadeOut(2500);
        });
    });
});