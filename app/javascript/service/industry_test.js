'use strict';

describe('Industry', function() {
	console.log("Testing: Industry.")
	expect = chai.expect;
	var controller, candyPeople, industry, scope
	beforeEach(module('marcApp'));

	//setup services and controller.
	beforeEach(inject(function (_candyPeople_, _industry_, $controller, $rootScope) {
	    candyPeople = _candyPeople_;
	    industry = _industry_;
  	}));

	it("should exsist", function() {
		expect(industry).to.exist;
	});
	
	describe("constructor", function(){
		var sampleIndustry;
		beforeEach(function(){
			sampleIndustry = new industry.comodity("Taffy", 10, 15)
		})

		it("assigns a name", function(){
			expect(sampleIndustry).to.have.property('name', 'Taffy');
		})
	})
});



