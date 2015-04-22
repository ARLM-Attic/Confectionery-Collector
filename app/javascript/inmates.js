//write code to manage prisoners
(function(){
	var candyPeople = function($http, $interval){
		var population = 0;
		var taffyPeople = 0;
		var CandyFairy = 0;

		var getPopulation = function(){
			return taffyPeople + CandyFairy
		}

		var getTaffyPeople = function(){
			return taffyPeople;
		}

		//handlr for adding people. Should be called from industry
		var addPopulation = function(){

		}

		return {
			getTaffyPeople: getTaffyPeople,
			getPopulation: getPopulation,
			addPopulation: addPopulation
		};

	};

	var module = angular.module("marcApp")
	module.factory("candyPeople", candyPeople)
}())