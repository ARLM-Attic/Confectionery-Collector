'use strict';

describe('marcApp.market module', function() {
	var controller, candyPeople, industry, scope
	beforeEach(module('marcApp'));
	beforeEach(module('marcApp.market'));
	beforeEach(inject(function (_candyPeople_, _industry_, $controller, $rootScope) {
	    candyPeople = _candyPeople_;
	    industry = _industry_;
	    scope = $rootScope.$new();
	    controller = $controller('MarketCtrl', {
	      $scope: scope
	    });
  	}));

    it('Should exsist', function() {
     	console.log("should Exsist");
      	expect(marcApp).toBeDefined();
	});

	it("should have MarketCtrl", function() {
		// console.log(marcApp.market)
		expect(controller).toBeDefined();
	});

});



