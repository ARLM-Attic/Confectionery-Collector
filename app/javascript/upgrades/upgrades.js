'use strict';

//write code to manage prisoners
(function() {
	var upgrades = function(industry, taffy, doughNut, jawBreaker, jellyBean, peppermint, rockCandy) {
		//first load all Upgrades from local storage.
		var self = []
		//concat all upgrades from taffy
		self = self.concat(taffy);
		self = self.concat(doughNut)
		self = self.concat(jawBreaker)
		self = self.concat(jellyBean)
		self = self.concat(peppermint)
		self = self.concat(rockCandy)


		return self;
	};

	var module = angular.module('marcApp');
	module.factory('upgrades', upgrades);
}());
