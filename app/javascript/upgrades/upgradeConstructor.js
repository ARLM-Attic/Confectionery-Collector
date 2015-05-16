'use strict';

//write code to manage prisoners
(function() {
	var Upgrades = function() {
		/*
		data = {
			industry: industry to use in cost 
			cost: numerical cost
			title: wity title
			description: text that refferences pop culture
			effectedItem: what industry does this actually upgrade?
			upgrade: upgrade by how much math? 
			id: how far down the list should this be? 
		}
		*/

		var Upgrade = function(data) {
			expect(data).to.be.ok;
			expect(data.title).to.be.ok;
			expect(data.id).to.be.ok;

			//expose arguments
			var self = {};
			self.id = data.id || 0;
			self.title = data.title || 'missingno';
			self.description = data.description || '???';
			self.industry = data.industry
			self.upgrade = data.upgrade;
			self.cost = data.cost
			self.unlocked = false;

			self.getCount = function() {
				return population;
			};

			self.getCost = function() {
				return data.cost;
			};

			self.getCostProgress = function() {
				var progress = item.getCount() / self.getCost();
				if (progress > 1) {
					return 100;
				}
				return progress * 100;
			};
			self.buy = function(){
				if (industry.getCount() >= data.cost) {
					self.unlocked = true;
					industry.useItem(data.cost);
					self.saveState();
				}
			}

			self.saveState = function() {
				window.localStorage.setItem('UPGR-' + id + '-' + title, self.unlocked);
			};

			self.loadState = function() {

				var state = Number(window.localStorage.getItem('UPGR-' + id + '-' + title));
				if (state) {
					self.unlocked = state;
				}
			};

			return self;
		};
		
		return Upgrade;
	};


	var module = angular.module('marcApp');
	module.factory('UpgradeConstructor', Upgrades);
}());
