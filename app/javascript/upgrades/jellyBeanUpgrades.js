'use strict';

//write code to manage prisoners
(function() {
	var upgrades = function(UpgradeConstructor, industry, candyPeople) {
		var upgrade = UpgradeConstructor;
		var taffy = industry.taffy;
		var jellyBean = industry.jellyBean;
		var doughNut = industry.doughNut;
		var peppermint = industry.peppermint;
		var jawBreaker = industry.jawBreaker;
		var rockCandy = industry.rockCandy;
		var self = []
		
		//Uuuupgrade template; verbose cause i'm gonna forget
		/**********************************

		self.push(new upgrade(
			data = {
				industry: ,//industry to use in cost 
				cost: ,//numerical cost
				title: ,//wity title		***********************************

				description: ,//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: ,//upgrade by how much math? 
				id: ,//how far down the list should this be? 
			}
		));
		***********************************
		***********************************/


		return self;
	};

	var module = angular.module('marcApp');
	module.factory('jellyBean', upgrades);
}());
