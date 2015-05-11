'use strict';

//write code to manage prisoners
(function() {
	var candyPeople = function($http, $interval, industry, achievement) {
		//Candy Person base class.
		//industry = link to industry object for production methods
		//production = how much one unit will make.
		//cost = starting cost of one unit.
		//exponent = cost's exponential growth.
		var candyPerson = function(imgName, industry, production, cost, id) {
			expect(cost).to.be.ok;
			expect(production).to.be.ok;
			expect(id).to.be.ok;

			var population = 0;
			var self = {};
			self.id = id || 0;
			self.imgName = imgName || 'missingno';
			self.imgfullsrc = imgName ? 'images/' + imgName + '.png' : 'images/missingno.png';
			self.industry = industry;
			self.production = production;
			self.achievements = [];

			self.getCount = function() {
				return population;
			};

			self.getCost = function() {
				return Math.pow(population, 2) + cost;
			};

			self.getCostProgress = function() {
				var progress = industry.getCount() / self.getCost();
				if (progress > 1) {
					return 100;
				}
				return progress * 100;
			};

			self.mkTaffyPerson = function() {
				var cost = self.getCost();
				if (industry.getCount() >= cost) {
					industry.useItem(cost);
					population += 1;
					self.checkYourSelf();
					//wreck yourself. 
					self.saveState();
				}
			};

			self.seed = function() {
				population = 1;
			};

			self.saveState = function() {
				window.localStorage.setItem(self.imgName + '-' + id, population);
			};

			self.loadState = function() {

				var state = Number(window.localStorage.getItem(self.imgName + '-' + id));
				if (!state) {
					population = Number(sessionStorage.getItem(self.imgName + '-' + id)) || 0;
					self.saveState();
				} else if (state) {
					population = state;
				}
			};

			self.produce = function() {
				if (population > 0) {
					industry.makeItem(population * self.production);
				}
			};

			self.checkYourSelf = function(){
				for(var item in self.achievements){
					self.achievements[item].check();
				}
			}

			return self;
		};

		var people = {
			taffy: new candyPerson('taffy', industry.taffy, 1, 10, 1),
			jellyBean: new candyPerson('jellybean', industry.jellyBean, 1, 30, 2),
			doughNut: new candyPerson('doughnut', industry.doughNut, 1, 200, 3),
			jawBreaker: new candyPerson('jawbreaker', industry.jawBreaker, 1, 700, 4),
			peppermint: new candyPerson(false, industry.peppermint, 1, 5000, 5),
			rockCandy: new candyPerson(false, industry.rockCandy, 1, 13000, 6)
		};
		
		people.taffy.achievements.push(new achievement(people.taffy, 2, "Humble Beginnings", "Make your first Taffy person"))
		people.jellyBean.achievements.push(new achievement(people.jellyBean, 1,"HO SHIT DAT JELLY", "Create your first Jelly Person!"))
		people.doughNut.achievements.push(new achievement(people.doughNut, 1, "Hello Donut", "Breath life into donut kind"))
		people.jawBreaker.achievements.push(new achievement(people.jawBreaker, 1, "Jaw Cracker", "Create first living Jawbreaker"))
		people.peppermint.achievements.push(new achievement(people.peppermint, 1, "GET PEPPERD", "Manifest Sentient Peppermints"))
		people.rockCandy.achievements.push(new achievement(people.rockCandy, 1, "Purity", "Refine the purest Rock Candy"))	
		people.rockCandy.achievements.push(new achievement(people.rockCandy, 2, "goddamit jessy", "Make a second Sentient Rock Candy"))
		//now load stuff.
		for (name in people) {
			people[name].loadState();
		}

		//start game off with one taffy person
		if (!people.taffy.getCount()) {
			people.taffy.seed();
		}


		self.incrementInterval = $interval(function harvestTaffy() {
			for (name in people) {
				people[name].produce();
			}
		},100);


		//expose candyPerson in prototype for unit tests
		Object.defineProperty(people, 'candyPerson', {
		  enumerable: false,
		  value: candyPerson
		});



		return people;
	};


	var module = angular.module('marcApp');
	module.factory('candyPeople', candyPeople);
}());
