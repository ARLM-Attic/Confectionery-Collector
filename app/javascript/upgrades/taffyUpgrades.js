'use strict';

//write code to manage prisoners
(function() {
	var taffyUpgrades = function(UpgradeConstructor, industry, candyPeople) {
		var upgrade = UpgradeConstructor;
		var taffy = industry.taffy;
		var jellyBean = industry.jellyBean;
		var doughNut = industry.doughNut;
		var peppermint = industry.peppermint;
		var jawBreaker = industry.jawBreaker;
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
				upgrade: 0.02,//upgrade by how much math? 
				id: 1,//how far down the list should this be? 
			}
		));

		self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Pink Taffy",//wity title
				description: "The most feminine of the taffy world. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 2,//how far down the list should this be? 
			}
		));
			self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 30,//numerical cost
				title: "Jelly Beans",//wity title
				description: "Buy your first jelly bean",//text that refferences pop culture
				effectedItem: candyPeople.jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 3,//how far down the list should this be? 
				type: "seed"
			}
		));

		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100,//numerical cost
				title: "Wax Paper",//wity title
				description: "Wax paper made of ground up jelly beans. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 4,//how far down the list should this be? 
			}
		));
		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100,//numerical cost
				title: "New flavors!",//wity title
				description: "No guarantee of any good flavors. +100% JellyBeans",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 5,//how far down the list should this be? 
			}
		));
		self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Taffy Jellys!",//wity title
				description: "Who says you can't make Jellybeans out of taffy?. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 6,//how far down the list should this be? 
			}
		));
		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "Large JellyBeans",//wity title
				description: "Make new larger Jellybeans! Warning:keep out of reach of small children. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 7,//how far down the list should this be? 
			}
		));
		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Large JellyBeans",//wity title
				description: "Make new larger JellyBeans! Warning:keep out of reach of small children. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 8,//how far down the list should this be? 
			}
		));
		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 3000,//numerical cost
				title: "Tiny JellyBeans",//wity title
				description: "Technicly a net increase in JellyBeans. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 9,//how far down the list should this be? 
			}
		));


		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Doughnut",//wity title
				description: "Buy your first Doughnut!",//text that refferences pop culture
				effectedItem: candyPeople.doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 10,//how far down the list should this be? 
				type: "seed"
			}
		));
		self.push(new upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 200,//numerical cost
				title: "Glazed Doughnuts",//wity title
				description: "Now with glaze! +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 11,//how far down the list should this be? 
			}
		));
		self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 20000,//numerical cost
				title: "Sprinkled Doughnuts",//wity title
				description: "Little taffy Sprinkles in every bite. +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 12,//how far down the list should this be? 
			}
		));
		self.push(new upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 5000,//numerical cost
				title: "Doughnut Holes",//wity title
				description: "Little Doughnut bites. +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 13,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Holeless Doughnuts",//wity title
				description: "Get the entire Doughnut! +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 14,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 20000,//numerical cost
				title: "Maple Bars",//wity title
				description: "Elongated Doughnut goodness. +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 15,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 50000,//numerical cost
				title: "Jawbreakers!",//wity title
				description: "Buy your first JawBreaker!",//text that refferences pop culture
				effectedItem: candyPeople.jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 16,//how far down the list should this be? 
				type: "seed"
			}
		));	
		self.push(new upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "Harder Jawbreakers",//wity title
				description: "Made even tougher for more broken teeth! +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 17,//how far down the list should this be?  
			}
		));		
		self.push(new upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "More Colors!",//wity title
				description: "More fun colors to lick through to. +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 18,//how far down the list should this be?  
			}
		));	
		self.push(new upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 100000,//numerical cost
				title: "Sweet Breakers",//wity title
				description: "Taffy enhanced JawBreaker goodness. +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 19,//how far down the list should this be?  
			}
		));		
		self.push(new upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "Hard Taffy",//wity title
				description: "Hardest taffy in the land. +100% Taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 20,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100000,//numerical cost
				title: "Chewy Taffy",//wity title
				description: "Jelly Chew taffy for hours of chewing. +100% Taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 21,//how far down the list should this be?  
			}
		));					
		self.push(new upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 5000,//numerical cost
				title: "Everlasting JawBreaker",//wity title
				description: "They never run out of flavor. +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 22,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 3000,//numerical cost
				title: "Stale Doughnuts",//wity title
				description: "Some people like them... +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 23,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 50000,//numerical cost
				title: "Jawbreakers!",//wity title
				description: "Buy your first PepperMint!",//text that refferences pop culture
				effectedItem: candyPeople.peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 24,//how far down the list should this be? 
				type: "seed"
			}
		));			
		self.push(new upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300,//numerical cost
				title: "Extra Minty",//wity title
				description: "Gives you that fresh feeling. +100% PepperMint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 25,//how far down the list should this be?  
			}
		));		
		self.push(new upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "PepperMint Tootpaste",//wity title
				description: "Brilliant! Surely no one has thought of this! +100% PepperMint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 26,//how far down the list should this be?  
			}
		));	
		self.push(new upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Spearmint",//wity title
				description: "The pointyest of all mints. +100% PepperMint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 27,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 5000,//numerical cost
				title: "Mint Taffy",//wity title
				description: "New Mint Taffy. +100% Taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 28,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 7000,//numerical cost
				title: "JellyMints",//wity title
				description: "Sometimes you get mint, sometimes you get popcorn flavored. +100% Jellybean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 29,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Plain Doughnut",//wity title
				description: "What? you expected mint? +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 30,//how far down the list should this be?  
			}
		));
		self.push(new upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 15000,//numerical cost
				title: "Minty Layer",//wity title
				description: "One sweet layer of PepperMint +100% JawBreaker production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 31,//how far down the list should this be?  
			}
		));		










		return self;
	};

	var module = angular.module('marcApp');
	module.factory('taffy', taffyUpgrades);
}());
