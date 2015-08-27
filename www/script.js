var main = function () {
    var SUMMONERNAME = "";
    var inputShowing = true;
    var champOpen = false;
    var itemOpen = false;
    var masterRunes = false;
    var battleOpen = false;
    var SUMMONER_NAME_NOSPACES = "";
    var selectedChamp = "";
    
    //aesthetics of hovering on banners
    $(".banner").hover(
    function () {
        $(this).fadeTo('fast', 1);
    },
    function () {
        $(this).fadeTo('fast', 0.5);
    });
    
    $('#champSelect img ').click(function() {
        selectedChamp = $(this).attr("name");
        
        $("#champions").css("background-image", 'url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + selectedChamp + '_0.jpg)');
        $("#champions").css("background-position", "center");
        
        $("#champions h2").html(selectedChamp);
    });
    
    
    //look up the summoner
  	$("#lookup").click(function(){
        SUMMONERNAME = $("#summonerName").val();
        SUMMONER_NAME_NOSPACES= SUMMONERNAME.replace(" ", "");
    	SUMMONER_NAME_NOSPACES = SUMMONER_NAME_NOSPACES.toLowerCase().trim();
        
        $("#welcoming").html(SUMMONERNAME);
        $("#welcome").css('display', 'none');
        inputShowing = false;
        
        //open championselect as soon as they've specified their name
       	champOpen = true;
        $("#champions").animate({left: "11%"}, 'fast');
        $("#champSelect").css('display', 'block');
	});

    //clicking on the eloGA banner
    $("#site").click(function() {
        //if the champion banner is open
        if(champOpen) {
            $("#champions").animate({left: "67%"}, 'fast');
            $("#champSelect").css('display', 'none');
            champOpen = false;
        }
        //if the item banner is open
        if (itemOpen) {
            $("#items").animate({left: "75%"}, 'fast');
            itemOpen = false;
        }
        if (masterRunes) {
            $("#mnr").animate({left: "83%"}, 'fast');
            masterRunes = false;
        }
        if (battleOpen) {
            $("#battle").animate({left: "91%"},'fast');
            battleOpen = false;
        }
        if (inputShowing==false) {
            $("#welcome").fadeTo('slow',1);
            inputShowing = true;
        }
    });

    $("#champions").click(function () {
        if (champOpen==false) {
            $(this).animate({left: "11%"}, 'fast');
            $("#welcome").css('display', 'none');
            inputShowing = false;
            $("#champSelect").fadeTo('slow',1);
            champOpen = true;
        } else {
            $(this).animate({left: "67%"}, 'fast');
            $("#items").animate({left: "75%"}, 'fast');
            $("#welcome").fadeTo('slow',1);
            inputShowing = true;
            $("#champSelect").css('display', 'none');
            champOpen = false;
        }
    });
    
    $("#items").click(function () {
        if (itemOpen==false) {
            $("#champions").animate({left: "11%"}, 'fast');
            $("#champSelect").css('display', 'none');
            champOpen = true;
            $(this).animate({left: "19%"}, 'fast');
            itemOpen = true;
            $("#welcome").css('display', 'none');
            inputShowing = false;
        } else {
            $(this).animate({left: "75%"}, 'fast');
            $("#champSelect").fadeTo('slow',1);
            itemOpen = false;
        }
    });
};

$(document).ready(main);
