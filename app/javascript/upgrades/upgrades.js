'use strict';

//write code to manage prisoners
(function() {
	var upgrades = function(industry, taffy) {
		//first load all Upgrades from local storage.
		var self = []
		//concat all upgrades from taffy
		self = self.concat(taffy);
		return self;
	};

	var module = angular.module('marcApp');
	module.factory('upgrades', upgrades);
}());
