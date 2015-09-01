//eloGA.gg
//Champion Class
//daphnekan & dw443 (c) 2015

//Globals to assist in using API
var API_KEY = '3d9c5d24-c4e5-4f74-b2f7-5684e45851ac';
var json='';

//ajax call to get champion info for object initialization
$.ajax({
	url: 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=stats&api_key=' + API_KEY,
	type: 'GET',
	dataType: 'json',
	data: {}
})
	.done(function (request) {
		useReturnData(request);
	});

//Helper function to set data to global variable for later access
function useReturnData(data){
    json = data;
}

//Upon data retrieval success, Champion object is initialized
$(document).ajaxSuccess(function(){
//Champion class definition + member access
	var Champion = function(champ) {
		this.armor = json.data[champ].stats.armor;
		this.armorperlevel = json.data[champ].stats.armorperlevel;
		this.attackdamage = json.data[champ].stats.attackdamage;
		this.attackdamageperlevel = json.data[champ].stats.attackdamageperlevel;
		this.crit = json.data[champ].stats.crit;
		this.critperlevel = json.data[champ].stats.critperlevel;
		this.hp = json.data[champ].stats.hp;
		this.hpperlevel = json.data[champ].stats.hpperlevel;
		this.hpregen = json.data[champ].stats.hpregen;
		this.hpregenperlevel = json.data[champ].stats.hpregenperlevel;
		this.movespeed = json.data[champ].stats.movespeed;
		this.mp = json.data[champ].stats.mp;
		this.mpperlevel = json.data[champ].stats.mpperlevel;
		this.mpregen = json.data[champ].stats.mpregen;
		this.mpregenperlevel = json.data[champ].stats.mpregenperlevel;
		this.spellblock = json.data[champ].stats.spellblock;	
		this.spellblockperlevel = json.data[champ].stats.spellblockperlevel;
	
		//Member Access Methods
		this.getArmor = function() {return this.armor;};
		this.getArmorLvl = function() {return this.armorperlevel;};
		this.getAD = function() {return this.attackdamage;};
		this.getADLvl = function() {return this.attackdamageperlevel;};
		this.getCrit = function() {return this.crit;};
		this.getCritLvl = function() {return this.critperlevel;};
		this.getHP = function() {return this.hp;};
		this.getHPLvl = function() {return this.hpperlevel;};
		this.getHPRegen = function() {return this.hpregen;};
		this.getHPRegenLvl = function() {return this.hpregenperlevel;};
		this.getMvSpd = function() {return this.movespeed;};
		this.getMP = function() {return this.mp;};
		this.getMPLvl = function() {return this.mpperlevel;};
		this.getMPRegen = function() {return this.mpregen;};
		this.getMPRegenLvl = function() {return this.mpregenperlevel;};
		this.getMR = function() {return this.spellblock;};
		this.getMRLvl = function() {return this.spellblockperlevel;};

		//Member Modification Methods
			//Each mod function checks that input is valid
			//else no action is done to the member variable
		this.modArmor = function(num) {
			if (typeof num === 'number') {this.armor = num;}
		}
		this.modArmorLvl = function(num) {
			if (typeof num === 'number') {this.armorperlevel = num;}
		}
		this.modAD = function(num) {
			if (typeof num === 'number') {this.attackdamage = num;}
		}
		this.modADLvl = function(num) {
			if (typeof num === 'number') {this.attackdamageperlevel = num;}
		}
		this.modCrit = function(num) {
			if (typeof num === 'number') {this.crit = num;}
		}
		this.modCritLvl = function(num) {
			if (typeof num === 'number') {this.critperlevel = num;}
		}
		this.modHP = function(num) {
			if (typeof num === 'number') {this.hp = num;}
		}
		this.modHPLvl = function(num) {
			if (typeof num === 'number') {this.hpperlevel = num;}
		}
		this.modHPRegen = function(num) {
			if (typeof num === 'number') {this.hpregen = num;}
		}
		this.modHPRegenLvl = function(num) {
			if (typeof num === 'number') {this.hpregenperlevel = num;}
		}
		this.modMvSpd = function(num) {
			if (typeof num === 'number') {this.movespeed = num;}
		}
		this.modMP = function(num) {
			if (typeof num === 'number') {this.mp = num;}
		}
		this.modMPLvl = function(num) {
			if (typeof num === 'number') {this.mpperlevel = num;}
		}
		this.modMPRegen = function(num) {
			if (typeof num === 'number') {this.mpregen = num;}
		}
		this.modMPRegenLvl = function(num) {
			if (typeof num === 'number') {this.mpregenperlevel = num;}
		}
		this.modMR = function(num) {
			if (typeof num === 'number') {this.spellblock = num;}
		}
		this.modMRLvl = function(num) {
			if (typeof num === 'number') {this.spellblockperlevel = num;}
		}
	};
});
