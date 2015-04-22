//write code to manage prisoners
(function(){
	var candyPeople = function($http, $interval, industry){
		//Candy Person base class. 
		//industry = link to industry object for production methods
		//production = how much one unit will make. 
		//cost = starting cost of one unit. 
		//exponent = cost's exponential growth. 
		var candyPerson = function(imgName, industry, production, cost, id){
			var population = 0;
			var self = {}
			self.id = id || 0;
			self.imgName = imgName || "missingno"
			self.industry = industry;

			self.getCount = function(){
				return population;
			}

			self.getCost = function(){
				return Math.pow(population, 2) + cost;
			}

			self.getCostProgress = function(){
				var progress = industry.getCount() / self.getCost();
				if(progress > 1){ 
					return 100;
				}
				return progress * 100
			}

			self.mkTaffyPerson = function(){
				var cost = self.getCost()
				if(industry.getCount() >= cost){
					industry.useItem(cost)
					population += 1;
					self.saveState()
				}
			}

			self.seed = function(){
				population = 1;
			}

			self.saveState = function(){
				sessionStorage.setItem(self.imgName + '-' + id, population)

			}

			self.loadState = function(){
				var state = Number(sessionStorage.getItem(self.imgName + '-' + id));
				if(state){
					population = state;
				}
			}

			self.incrementInterval = $interval(function harvestTaffy(){
				if(population > 0){
					industry.makeItem(population)
				}
			},
			100);

			return self
		}

		var people = {
			taffy: new candyPerson('taffy', industry.taffy, 1, 10, 1),
			jellyBean: new candyPerson('jellybean', industry.jellyBean, 1, 30, 2),
			doughNut: new candyPerson('doughnut', industry.doughNut, 1, 200, 3),
			jawBreaker: new candyPerson('jawbreaker', industry.jawBreaker, 1, 700, 4),
			peppermint:new candyPerson(false, industry.peppermint, 1, 5000, 5),
			rockCandy: new candyPerson(false, industry.rockCandy, 1, 13000, 6)
		}

		//start game off with one taffy person
		people.taffy.seed()

		//now load stuff. Loading should DEFINITLY COME AFTER SEEDING.
		for(name in people){
			people[name].loadState()
		}

		

		return people;
	};
	

	var module = angular.module("marcApp")
	module.factory("candyPeople", candyPeople)
}())