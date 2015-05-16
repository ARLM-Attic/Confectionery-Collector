'use strict';

//write code to manage prisoners
(function() {
	var taffyUpgrades = function(UpgradeConstructor, industry) {
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
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100,//numerical cost
				title: "Red Taffy",//wity title
				description: "Inject the color red into taffy. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 2,//upgrade by how much math? 
				id: 1,//how far down the list should this be? 
			}
		));

		self.push(new upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 300,//numerical cost
				title: "Pastry incentives",//wity title
				description: "Get workers to work harder for the chance to win a donut party +20% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 1.2,//upgrade by how much math? 
				id: 2,//how far down the list should this be? 
			}
		));

		return self;
	};

	var module = angular.module('marcApp');
	module.factory('taffy', taffyUpgrades);
}());
