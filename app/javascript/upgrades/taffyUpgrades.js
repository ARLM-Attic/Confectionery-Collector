'use strict';

//write code to manage prisoners
(function() {
	var taffyUpgrades = function(UpgradeConstructor, industry, candyPeople) {
		var upgrade = UpgradeConstructor;
		var taffy = industry.taffy;
		var self = []
		
		//Uuuupgrade template; verbose cause i'm gonna forget
		/**********************************
		***********************************

		self.push(new upgrade(
			data = {
				industry: ,//industry to use in cost 
				cost: ,//numerical cost
				title: ,//wity title
				description: ,//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: ,//upgrade by how much math? 
				id: ,//how far down the list should this be? 
			}
		));

		***********************************
		***********************************/

		self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 100,//numerical cost
				title: "Red Taffy",//wity title
				description: "Inject the color red into taffy. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.1,//upgrade by how much math? 
				id: 1,//how far down the list should this be? 
			}
		));

		self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 30,//numerical cost
				title: "Jelly Beans",//wity title
				description: "Buy your first jelly bean",//text that refferences pop culture
				effectedItem: candyPeople.jellyBean,//what industry does this actually upgrade?
				upgrade: 0.1,//upgrade by how much math? 
				id: 1,//how far down the list should this be? 
				type: "seed"
			}
		));

		self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Pink Taffy",//wity title
				description: "The most feminine of the taffy world. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.1,//upgrade by how much math? 
				id: 5,//how far down the list should this be? 
			}
		));

		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100,//numerical cost
				title: "Wax Paper",//wity title
				description: "Wax paper made of ground up jelly beans. +100% taff production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.1,//upgrade by how much math? 
				id: 6,//how far down the list should this be? 
			}
		));
















		return self;
	};

	var module = angular.module('marcApp');
	module.factory('taffy', taffyUpgrades);
}());
