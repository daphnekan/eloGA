var API_KEY = "025aec65-5e3d-4673-bebd-7603d15af61d";

var json='';

$.ajax({
			url: 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=stats&api_key=' + API_KEY,
			type: 'GET',
			dataType: 'json',
			data: {}
})
			.done(function (request) {
                useReturnData(request);
            });

function useReturnData(data){
    json = data;
}
