//eloGA.gg
//Stats Class
//daphnekan (c) 2015


//Stats is an object that will take a Champion type input
//It will initialize with base stats of selected champion at lvl 18
//Any additional stats will be calculated with member modification functions
	//This will include after ItemSet object is made needs to be added
	//Items in ItemSet will be added individually in main program 
	//by calling member functions
	
var Stats = function(champ) {
	//Initialization
	this.armor = champ.getArmor( + (champ.getArmorLvl() * 18);
	this.armorperlevel = champ.getArmorLvl();
	this.attackdamage = champ.getAD() + {champ.getADLvl() * 18);
	this.attackdamageperlevel = champ.getADLvl();
	this.magicdamage = 0;
	this.magicdamageperlevel = 0;
	this.lifesteal = 0;
	this.spellvamp = 0;
	this.crit = champ.getcrit() + (champ.getCritLvl() * 18);
	this.critperlevel = champ.getcritLvl();
	this.critChance = 0; 
		//default crit chance for most champs, not including passive/abilities
	this.hp = champ.getHP() + (champ.getHPLvl() * 18);
	this.hpperlevel = champ.getHPLvl();
	this.hpregen = champ.getHPRegen() + (champ.getHPRegenLvl() * 18);
	this.hpregenperlevel = champ.getHPRegenLvl();
	this.movespeed = champ.getMvSpd();
	this.mp = champ.getMP() + (champ.getMPLvl() * 18);
	this.mpperlevel = champ.getMPLvl();
	this.mpregen = champ.getMPRegen() + (champ.getRegen() * 18);
	this.mpregenperlevel = champ.getMPRegenLvl();
	this.spellblock = champ.getMR() + (champ.getMRLvl * 18);
	this.spellblockperlevel = champ.getMRLvl;
	this.CDR = 0; //base CDR is 0%
	this.mpen = 0;
	this.apen = 0;
	this.gold = 0;

	//Member Access
	this.getArmor = function() {return this.armor;}
	this.getAD = function() {return this.attackdamage;}
	this.getAP = function() {return this.magicdamage;}
	this.getLifeSteal = function() {return this.lifesteal;}
	this.getSpellVamp = function() {return this.spellvamp;}
	this.getCrit = function() {return this.crit;}
	this.getCritChance = function() {return this.critChance;}
	this.getHP = function() {return this.crit;}
	this.getHPRegen = function() {return this.HPRegen;}
	this.getMvSpd = function() {return this.movespeed;}
	this.getMP = function() {return this.mp;}
	this.getMPRegen = function() {return this.mpregen;}
	this.getMR = function() {return this.spellblock;}
	this.getCDR = function() {return this.CDR;}
	this.getMPen = function() {return this.mpen;}
	this.getAPen = function() {return this.apen;}
	this.getGold = function() {return this.gold;}

	//Member Modification
	//Takes ItemSet object
	this.addStats = function(itemSet) {
		var itemArr[] = [itemSet.getFirst(), itemSet.getSecond(), itemSet.getThird(),
						itemSet.getFourth(), itemSet.getFifth(), itemSet.getSixth()];
		for (i = 0; i<itemArr.length; i++) {
			this.attackdamage = this.attackdamage + itemArr[i].getFlatAD();
			this.magicdamage = this.magicdamage + itemArr[i].getFlatAP();
			this.apen = this.apen + itemArr[i].getAPen();
			this.mpen = this.mpen + itemArr[i].getMPen();
			this.crit = this.crit + itemArr[i].getFlatCritDmg; 
				//PercentCritDmg not a stat that is used
			this.critchance = this.critchance + itemArr[i].getFlatCritChance(); 
				//will be <=1, PercentCritChance not a stat that is used
			this.CDR = this.CDR + itemArr[i].getCDR(); 
				//will be <=i. note that CDR maxes at 0.4
			this.armor = this.armor + itemArr[i].getFlatArmor();
			this.spellblock = this.spellblock + itemArr[i].getFlatMR();
			this.mp = this.mp + itemArr[i].getFlatMPPool();
			this.hp = this.hp + itemArr[i].getFlatHPPool();
			this.mpregen = this.mpregen + itemArr[i].getMPRegen() 
				+ ((this.mpregen + itemArr[i].getMPRegen())*itemArr[i].getPercentMPRegen);
			this.hpregen = this.hpregen + itemArr[i].getHPRegen() 
				+ ((this.hpregen = itemArr[i].getHPRegen())*itemArr[i].getPercentHPRegen);
			this.movespeed = this.movespeed + itemArr[i].getMvSpd();
			this.gold = this.gold + itemArr[i].getGold();
		} 
	}
	//Unique Passives?

}
