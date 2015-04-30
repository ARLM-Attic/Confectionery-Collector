//write code to manage prisoners
(function(){
	var achievements = function($http, $interval, industry){
		//first load all achievements from local storage. 
		var achievement = function(item, amount, title, description){
			var self = {}
			self.unlocked = false;
			self.id = 0,
			self.item = item
			self.amountNeeded = amount;
			self.title = 'Candy Candy!';
			self.description = 'You started playing this game!'
			self.win = function(){
				self.unlocked = true;

				//using a global variable in angular is no good 
				toastr.success(self.title, self.description)
			}

			self.check = function(){
				if(self.item.getCount() >= self.amountNeeded){
					self.win();
				}
			}

			return self
		}
		return achievement;
	};
	debugger;
	var module = angular.module("marcApp")
	module.factory("industry_achievement", achievements)
}())