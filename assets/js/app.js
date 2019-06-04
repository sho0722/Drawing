$(function() {

    // 右ウインクの処理
    let winkRight = "show";
    $("#wink-right").on("click", function() {
        
        if (winkRight == "show") {
            $("<p>").appendTo(".right-black").text("＜");
            $(".right-black").css("backgroundColor", "#FFF");

            winkRight = "hide";

        } else if (winkRight == "hide") {
            $(".right-black").children("p").remove();
            $(".right-black").css("backgroundColor", "#000");

            winkRight = "show";
        };
    });

    // 左ウインクの処理
    let winkLeft = "show";
    $("#wink-left").on("click", function() {
        
        if (winkLeft == "show") {
            $("<p>").appendTo(".left-black").text(">");
            $(".left-black").css("backgroundColor", "#FFF");

            winkLeft = "hide";

        } else if (winkLeft == "hide") {
            $(".left-black").children("p").remove();
            $(".left-black").css("backgroundColor", "#000");

            winkLeft = "show";
        };
    });

    //rotateのプラグイン
    $("#rotate").on("click", function() {
        $("#korosuke").rotate({
            angle:0,
            animateTo:360,
        });
    });

    //animate.cssのプラグイン
    $("#fadeout").on("click", function() {
        $("#korosuke").addClass("animated rollOut");
    })

    $("#fadein").on("click", function() {
        $("#korosuke").addClass("animated rollLeft");
    })

    // ボタンをクリックしてマイクを表示
    $("#sing").on("click", function() {
        $(".sing").fadeIn(3000);
    })

    //マイクをクリックした時の処理
    $("#microphone").on("click", function() {

        //headerの文字列を変更
        $("header h1").text("♪はじめてのチュウ♪");

        // 音声の再生
        $("#audio").get(0).play();

        // アニメーションのクラスを追加
        $("#swing").addClass("swing");

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