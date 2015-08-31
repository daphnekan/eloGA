//eloGA.gg
//Item Set Class
//daphnekan (c) 2015



//Each var will be the ID of an item
//Variable will be provided on-click

//Function to add item to set?



//Function to remove item from set?



//arr[] is an array of IDs carried over from front-end
//Creation of ItemSet is after the finalization of item selection step
//Any changes that need to be made in the Item Selection step will be made
//by creating a completely new ItemSet for any change in arr[]
var ItemSet = function(arr[]) {
	//Six items
	//Each item will be recorded by ID


	//CONDITIONS HOLY SHIT//
	
	//Array of all the IDs of the boot enchants
	var bootArr[] = ["1315","1310","1325","1320","1330","1300","1305",
					"1318","1313","1328","1323", "1308", "1303", "1333",
					"1316","1311","1326","1321","1306","1301","1331",
					"1317","1312","1327","1322","1307","1302","1332",
					"1319","1314","1329","1324","1309","1304","1334"]
	//"3240" Furor
		//"1315" from 3047: Ninja Tabi
		//"1310" from 3020: Sorcerer's Shoes
		//"1325" from 3117: Boots of Mobility
		//"1320" from 3111: Mercury's Treads
		//"1330" from 3158: Ionian Boots of Lucidity
		//"1300" from 3006: Berserker's Greaves
		//"1305" from 3009: Boots of Swiftness
	//"3243" Distortion
		//"1318" from 3047: Ninja Tabi
		//"1313" from 3020: Sorcerer's Shoes
		//"1328" from 3117: Boots of Mobility
		//"1323" from 3111: Mercury's Treads
		//"1308" from 3009: Boots of Swiftness
		//"1303" from 3006: Berserker's Greaves
		//"1333" from 3158: Ionian Boots of Lucidity
	//"3241" Alacrity
		//"1316" from 3047: Ninja Tabi
		//"1311" from 3020: Sorcerer's Shoes
		//"1326" from 3117: Boots of Mobility
		//"1321" from 3111: Mercury's Treads
		//"1306" from 3009: Boots of Swiftness
		//"1301" from 3006: Berserker's Greaves
		//"1331" from 3158: Ionian Boots of Lucidity
	//"3242" Captain
		//"1317" from 3047: Ninja Tabi
		//"1312" from 3020: Sorcerer's Shoes
		//"1327" from 3117: Boots of Mobility
		//"1322" from 3111: Mercury's Treads
		//"1307" from 3009: Boots of Swiftness
		//"1302" from 3006: Berserker's Greaves
		//"1332" from 3158: Ionian Boots of Lucidity
	//"3244" Homeguard
		//"1319" from 3047: Ninja Tabi
		//"1314" from 3020: Sorcerer's Shoes
		//"1329" from 3117: Boots of Mobility
		//"1324" from 3111: Mercury's Treads
		//"1309" from 3009: Boots of Swiftness
		//"1304" from 3006: Berserker's Greaves
		//"1334" from Ionian Boots of Lucidity

	//Array of all the IDs of the jungle enchants
	var jgEnchants[] = ["
	//"3722" from 3711, 1043; into 3932 Sated Devourer
	//"

	//Array of all the IDs of the jungle items	
	var jgItems[] = ["

	//Hardcode unique passives
		//Possibly need to include these after modifying Stats object
		//with finalized ItemSet data
	//Ranged-only or Melee-only


	//1) Only one boot enchant
	var bootOccur = 0;
	for (i=0; i<arr.length; i++) {
		for (j=0; j<bootArr.length; j++) {
			if (arr[i] === bootArr[j]) {
				bootOccur = bootOccur + 1;
			}
		}
		if (bootOccur > 1) {
			alert("You may only have one boot enchant!");
		}
	}
			
	//2) Only one jungle item
	var jgOccur = 0;

	//3) Only one jungle enchant
	var jgEnchant = 0;
	
	//4) Must have certain champ selected to purchase certain item
	//5) STACKS AND SHIT. I DON'T FUCKING KNOW.
		//This is more for later on, but I should code this into ItemSet now
		//so I don't go insane later
	//6) Hard-coding passives? Hard-coding CDR, Apen, Mpen??
	//7) Ranged-only or Melee-only items, make a note

	this.first = new Item(arr[0]);
	this.second = new Item(arr[1];
	this.third = new Item(arr[2]);
	this.fourth = new Item(arr[3]);
	this.fifth = new Item(arr[4]);
	this.sixth = new Item(arr[5]);

	//Member Access
	//All methods return Item object
	this.getFirst = function() {return this.first;}
	this.getSecond = function() {return this.second;}
	this.getThird = function() {return this.third;}
	this.getFourth = function() {return this.fourth;}
	this.getFifth = function() {return this.fifth;}
	this.getSixth = function() {return this.sixth;}

}
