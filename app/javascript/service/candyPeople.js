//write code to manage prisoners
(function(){
	var candyPeople = function($http, $interval, industry){
		//Candy Person base class. 
		//industry = link to industry object for production methods
		//production = how much one unit will make. 
		//cost = starting cost of one unit. 
		//exponent = cost's exponential growth. 
		var candyPerson = function(imgName, industry, production, cost, id){
			expect(cost).to.be.ok;
			expect(production).to.be.ok;
			expect(id).to.be.ok

			var population = 0;
			var self = {}
			self.id = id || 0;
			self.imgName = imgName || "missingno"
			self.industry = industry;
			self.production = production

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
				window.localStorage.setItem(self.imgName + '-' + id, population)
			}

			self.loadState = function(){

				var state = Number(window.localStorage.getItem(self.imgName + '-' + id));
				if(!state){
					population = Number(sessionStorage.getItem(self.imgName + '-' + id)) || 0;
					self.saveState();
				} else if(state){
					population = state
				}
			}

			self.produce = function(){
				if(population > 0){
					industry.makeItem(population * self.production)
				}
			}

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

		
		//now load stuff. Loading should DEFINITLY COME AFTER SEEDING.
		for(name in people){
			people[name].loadState()
		}

		//start game off with one taffy person
		if(!people.taffy.getCount()){
			people.taffy.seed()
		}


		self.incrementInterval = $interval(function harvestTaffy(){
			for(name in people){
				people[name].produce()
			}
		},100);
		

		//expose candyPerson in prototype for unit tests
		Object.defineProperty(people, "candyPerson", {
		  enumerable: false,
		  value: candyPerson
		});

		

		return people;
	};
	

	var module = angular.module("marcApp")
	module.factory("candyPeople", candyPeople)
}())