module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      // 'app/components/**/*.js',
      //'app/javascript/**/*.js',
      'app/javascript/vendor/Chart.js',
      'app/javascript/vendor/angular-chart.js',
      'app/app.js',
      'app/javascript/candyPeople.js',
      'app/javascript/industry.js',
      'app/javascript/market/*.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
