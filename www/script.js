var main = function() {
	$(".banner").hover(
        function() {
    		$(this).fadeTo('fast',1);
  		}, 
        function() {
    		$( this ).fadeTo('fast',0.5);
  		}
    );
};

$(document).ready(main);
