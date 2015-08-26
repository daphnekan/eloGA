var main = function () {
    var SUMMONERNAME = "";
    SUMMONERNAME = $("#summonerInput").val();
    var champOpen = false;
    var itemOpen = false;
    var masterRunes = false;

    /*$('submit').click(function() {
        $("#champions").append("<p>Hello</p>");
    })*/
    
    //http://ddragon.leagueoflegends.com/cdn/5.2.1/img/champion/Aatrox.png 

    $(".banner").hover(

    function () {
        $(this).fadeTo('fast', 1);
    },

    function () {
        $(this).fadeTo('fast', 0.5);
    });

    $("#champions").click(function () {
        if (champOpen==false) {
            $(this).animate({left: "11%"}, 'fast');
            $("#welcome").css('display', 'none');
            champOpen = true;
        } else {
            $(this).animate({left: "67%"}, 'fast');
            $("#items").animate({left: "75%"}, 'fast');
            $("#welcome").fadeTo('slow',1);
            champOpen = false;
        }
    });
    
    $("#items").click(function () {
        if (itemOpen==false) {
            $("#champions").animate({left: "11%"}, 'fast');
            $(this).animate({left: "20%"}, 'fast');
            $("#welcome").css('display', 'none');
            itemOpen = true;
        } else {
            $(this).animate({left: "75%"}, 'fast');
            itemOpen = false;
        }
    });
};

$(document).ready(main);
