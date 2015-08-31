//eloGA.gg
//Item Class
//daphnekan & dw443 (c) 2015


//Globals to assist in using API
var API_KEY = '';
var jsonItem ='item-static-data.json';

//ajax call to get champion info for object initialization
$.ajax({
	url: 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?itemListData=depth,from,gold,groups,into,maps,requiredChampion,sanitizedDescription,specialRecipe,stacks,stats,tags&api_key=025aec65-5e3d-4673-bebd-7603d15af61d' + API_KEY,
	type: 'GET',
	dataType: 'json',
	data: {}
})
	.done(function (request) {
		useReturnData(request);
	});

//Helper function to set data to global variable for later access
function useReturnData(data){
    jsonItem = data;
}


//Upon data retrieval success, Item object is initialized
$(document).ajaxSuccess(function(){
//Item class definition
	var Item = function(itemID) {
		//Initializing all possible stats to 0
		this.flatMR = 0;
		this.percentMPRegen = 0;
		this.percentAD = 0;
		this.flatCritChance = 0;
		this.percentMR = 0;
        this.flatEXPBonus = 0;
		this.flatMPRegen = 0;
		this.percentEXPBonus = 0;
        this.flatEnergyPool = 0;
		this.flatAS = 0;
		this.flatHPPool = 0;
		this.percentAS = 0;
		this.flatEnergyRegen = 0;
		this.percentSpellVamp = 0;
		this.flatCritDmg = 0;
		this.percentHPRegen = 0;
		this.percentArmor = 0;
		this.percentBlock = 0;
		this.percentAP = 0;
        this.flatMPPool = 0;
		this.flatAD = 0;
		this.flatHPRegen = 0;
		this.percentLifeSteal = 0;
		this.percentMvtSpd = 0;
		this.flatArmor = 0;
		this.percentMPPool = 0;
		this.percentCritChance = 0;
		this.percentCritDmg = 0;
		this.percentHPPool = 0;
		this.flatAP = 0;
		this.flatMvtSpd = 0;
		//Additional stats
		this.cooldown = 0;
		this.apen = 0;
		this.mpen = 0;
		this.gold = 0;

		//Constructing Item Object
		if (jsonItem.data[itemID].stats.FlatSpellBlockMod !== undefined) {
            this.flatMR = jsonItem.data[itemID].stats.FlatSpellBlockMod;
		}
		if (jsonItem.data[itemID].stats.PercentMPRegen !== undefined) {
            this.percentMPRegen = jsonItem.data[itemID].stats.PercentMPRegenMod;
		}
		if (jsonItem.data[itemID].stats.PercentPhysicalDamageMod !== undefined) {
			this.percentAD = jsonItem.data[itemID].stats.PercentPhysicalDamageMod;
		}
		if (jsonItem.data[itemID].stats.FlatCritChanceMod !== undefined) {
			this.flatCritChance = jsonItem.data[itemID].stats.FlatCritChanceMod;
		}
		if (jsonItem.data[itemID].stats.PercentSpellBlockMod !== undefined) {
			this.percentMR = jsonItem.data[itemID].stats.PercentSpellBlockMod;
		}
		if (jsonItem.data[itemID].stats.FlatEXPBonus !== undefined) {
        	this.flatEXPBonus = jsonItem.data[itemID].stats.FlatEXPBonus;
		}
		if (jsonItem.data[itemID].stats.FlatMPRegenMod !== undefined) {
			this.flatMPRegen = jsonItem.data[itemID].stats.FlatMPRegenMod;
		}
		if (jsonItem.data[itemID].stats.FlatBlockMod !== undefined) {
			this.flatBlock = jsonItem.data[itemID].stats.FlatBlockMod;
		}
		if (jsonItem.data[itemID].stats.PercentEXPBonus !== undefined) {
			this.percentEXPBonus = jsonItem.data[itemID].stats.PercentEXPBonus;
		}
		if (jsonItem.data[itemID].stats.FlatEnergyPoolMod !== undefined) {
        	this.flatEnergyPool = jsonItem.data[itemID].stats.FlatEnergyPoolMod;
		}
		if (jsonItem.data[itemID].stats.FlatAttackSpeedMod !== undefined) {
			this.flatAS = jsonItem.data[itemID].stats.FlatAttackSpeedMod;
		}
		if (jsonItem.data[itemID].stats.FlatHPPoolMod !== undefined) {
			this.flatHPPool = jsonItem.data[itemID].stats.FlatHPPoolMod;
		}
		if (jsonItem.data[itemID].stats.PercentAttackSpeedMod !== undefined) {
			this.percentAS = jsonItem.data[itemID].stats.PercentAttackSpeedMod
		}
		if (jsonItem.data[itemID].stats.FlatEnergyRegenMod !== undefined) {
			this.flatEnergyRegen = jsonItem.data[itemID].stats.FlatEnergyRegenMod;
		}
		if (jsonItem.data[itemID].stats.PercentSpellVampMod !== undefined) {
			this.percentSpellVamp = jsonItem.data[itemID].stats.PercentSpellVampMod;
		}
		if (jsonItem.data[itemID].stats.FlatCritDamageMod !== undefined) {
			this.flatCritDmg = jsonItem.data[itemID].stats.FlatCritDamageMod;
		}
		if (jsonItem.data[itemID].stats.PercentHPRegenMod !== undefined) {
			this.percentHPRegen = jsonItem.data[itemID].stats.PercentHPRegenMod;
		}
		if (jsonItem.data[itemID].stats.PercentArmorMod !== undefined) {
			this.percentArmor = jsonItem.data[itemID].stats.PercentArmorMod;
		}
		if (jsonItem.data[itemID].stats.PercentBlockMod !== undefined) {
			this.percentBlock = jsonItem.data[itemID].stats.PercentBlockMod;
		}
		if (jsonItem.data[itemID].stats.PercentMagicDamageMod !== undefined) {
			this.percentAP = jsonItem.data[itemID].stats.PercentMagicDamageMod;
		}
		if (jsonItem.data[itemID].stats.FlatMPPoolMod !== undefined) {
       		this.flatMPPool = jsonItem.data[itemID].stats.FlatMPPoolMod;
		}
		if (jsonItem.data[itemID].stats.FlatPhysicalDamageMod !== undefined) {
			this.flatAD = jsonItem.data[itemID].stats.FlatPhysicalDamageMod;
		}
		if (jsonItem.data[itemID].stats.FlatHPRegenMod !== undefined) {
			this.flatHPRegen = jsonItem.data[itemID].stats.FlatHPRegenMod;
		}
		if (jsonItem.data[itemID].stats.PercentLifeStealMod !== undefined) {
			this.percentLifeSteal = jsonItem.data[itemID].stats.PercentLifeStealMod;
		}
		if (jsonItem.data[itemID].stats.PercentMovementSpeedMod !== undefined) {
			this.percentMvtSpd = jsonItem.data[itemID].stats.PercentMovementSpeedMod;
		}
		if (jsonItem.data[itemID].stats.FlatArmorMod !== undefined) {
			this.flatArmor = jsonItem.data[itemID].stats.FlatArmorMod;
		}
		if (jsonItem.data[itemID].stats.PercentMPPoolMod !== undefined) {
			this.percentMPPool = jsonItem.data[itemID].stats.PercentMPPoolMod;
		}
		if (jsonItem.data[itemID].stats.PercentDodgeMod !== undefined) {
			this.percentDodge = jsonItem.data[itemID].stats.PercentDodgeMod;
		}
		if (jsonItem.data[itemID].stats.PercentCritChanceMod !== undefined) {
			this.percentCritChance = jsonItem.data[itemID].stats.PercentCritChanceMod;
		}
		if (jsonItem.data[itemID].stats.PercentCritDamageMod !== undefined) {
			this.percentCritDmg = jsonItem.data[itemID].stats.PercentCritDamageMod;
		}
		if (jsonItem.data[itemID].stats.PercentHPPoolMod !== undefined) {
			this.percentHPPool = jsonItem.data[itemID].stats.PercentHPPoolMod;
		}
		if (jsonItem.data[itemID].stats.FlatMagicDamageMod !== undefined) {
			this.flatAP = jsonItem.data[itemID].stats.FlatMagicDamageMod;
		}
		if (jsonItem.data[itemID].stats.FlatMovementSpeedMod !== undefined) {
			this.flatMvtSpd = jsonItem.data[itemID].stats.FlatMovementSpeedMod;
		}
		if (jsonItem.data[itemID].stats.CooldownReduction !== undefined) {
			this.CDR = jsonItem.data[itemID].stats.CooldownReduction;
		}
		if (jsonItem.data[itemID].stats.ArmorPenetration !== undefined) {
			this.apen = jsonItem.data[itemID].stats.ArmorPenetration;
		}
		if (jsonItem.data[itemID].stats.MagicPenetration !== undefined) {
			this.mpen = jsonItem.data[itemID].stats.MagicPenetration;
		}
		this.gold = jsonItem.data[itemID].gold.total;

		//Member Access Methods
		this.getFlatMR = function() {return this.flatMR;}
		this.getPercentMRRegen = function() {return this.percentMPRegen;}
		this.getPercentAD = function() {return this.percentAD;}
		this.getFlatCritChance = function() {return this.flatCritChance;}
		this.getPercentMR = function() {return this.percentMR;}
        this.getFlatEXPBonus = function() {return this.flatEXPBonus;}
		this.getFlatMPRegen = function() {return this.flatMPRegen;}
		this.getFlatBlock = function() {return this.flatBlock;}
		this.getPercentEXPBonus = function() {return this.percentEXPBonus;}
        this.getFlatEnergyPool = function() {return this.flatEnergyPool;}
		this.getFlatAS = function() {return this.flatAS;}
		this.getFlatHPPool = function() {return this.flatHPPool;}
		this.getPercentAS = function() {return this.percentAS;}
		this.getFlatEnergyRegen = function() {return this.flatEnergyRegen;}
		this.getPercentSpellVamp = function() {return this.percentSpellVamp;}
		this.getFlatCritDmg = function() {return this.flatCritDmg;}
		this.getPercentHPRegen = function() {return this.percentHPRegen;}
		this.getPercentArmor = function() {return this.percentArmor;}
		this.getPercentBlock = function() {return this.percentBlock;}
		this.getPercentAP = function() {return this.percentAP;}
        this.getFlatMPPool = function() {return this.flatMPPool;}
		this.getFlatAD = function() {return this.flatAD;}
		this.getFlatHPRegen = function() {return this.flatHPRegen;}
		this.getPercentLifeSteal = function() {return this.percentLifeSteal;}
		this.getPercentMvtSpd = function() {return this.percentMvtSpd;}
		this.getFlatArmor = function() {return this.flatArmor;}
		this.getPercentMPPool = function() {return this.percentMPPool;}
		this.getPercentDodge = function() {return this.percentDodge;}
		this.getPercentCritChance = function() {return this.percentCritChance;}
		this.getPercentCritDmg = function() {return this.percentCritDmg;}
		this.getPercentHPPool = function() {return this.percentHPPool;}
		this.getFlatAP = function() {return this.flatAP;}
		this.getFlatMvtSpd = function() {return this.flatMvtSpd;}
		this.getCDR = function() {return this.CDR;}
		this.getAPen = function() {return this.apen;}
		this.getMPen = function() {return this.mpen;}
		this.getGold = function() {return this.gold;}
	};
});
