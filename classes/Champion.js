//eloGA.gg: Champion Class
//daphnekan (c) 2015

var API_KEY = "025aec65-5e3d-4673-bebd-7603d15af61d";

//Champion class definition + member access
var Champion = function(champ) {
	if (champ!=="") {
		$.ajax({
			url: 'https://na.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=stats&api_key=' + API_KEY,
			type: 'GET',
			dataType: 'json',
			data: {

			},
			success: function (json) {
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
			},
			error: function (XMLHttpRequest, textStatus, errorThrown) {
				alert("Error getting data!");
			}
		});
	}
	
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
};

//Member Modification Functions

Champion.prototype.modArmor(num) = {
	if (num.
	this.armor = num;
}

Champion.prototype.modArmorLvl(num) = {
	this.armorperlevel = num;
}
