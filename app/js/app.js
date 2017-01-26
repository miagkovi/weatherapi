'use strict';

var app = angular.module('WeatherApp', []);

app.controller('WeatherController', ['$scope', 'weather', function($scope, weather){
	$scope.index = 0;
	$scope.applyIndex = function(index) {
		$scope.index = index;
	};
	$scope.changeCity = function(id) {
		weather.setId(id);
		weather.getData().success(function(data){
			$scope.data = data;
		});
	};

	weather.getData().success(function(data){
		$scope.data = data;
	});

	$scope.selectedIndex = 1;
	$scope.itemClicked = function (index) {
		$scope.selectedIndex = index;
	};
}]);

app.factory('weather', ['$http', function($http){
	var city_id = 709930;
	var setId = function(id){
		city_id = id;
	};
	var getData = function(){
		return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id='+city_id+'&units=metric&APPID=a04758aa7a782b618d9d69ce0ee499b0&cnt=7')
					.success(function(data){return data;})
					.error(function(err){return err;});
	};
	return {
		getData: getData,
		setId: setId
	};
}]);

app.filter('secondsToDateTime', [function() {
	return function(seconds) {
		return new Date(1970, 0, 1).setSeconds(seconds);
	};
}])