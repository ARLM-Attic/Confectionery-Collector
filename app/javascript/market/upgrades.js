'use strict';

//write code to manage prisoners
(function() {
	var Upgrades = function($http, $interval) {
		var Upgrade = function(industry, cost, title, description, effectedItem, upgrade, id) {
			expect(cost).to.be.ok;
			expect(production).to.be.ok;
			expect(id).to.be.ok;

			//expose arguments
			var self = {};
			self.id = id || 0;
			self.title = title || 'missingno';
			self.description = description || '???';
			self.industry = industry
			self.upgrade = production;
			self.unlocked = false;

			self.getCount = function() {
				return population;
			};

			self.getCost = function() {
				return cost;
			};

			self.getCostProgress = function() {
				var progress = item.getCount() / self.getCost();
				if (progress > 1) {
					return 100;
				}
				return progress * 100;
			};
			self.buy = function(){
				if (industry.getCount() >= cost) {
					self.unlocked = true;
					industry.useItem(cost);
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
	module.factory('Upgrades', Upgrades);
}());
