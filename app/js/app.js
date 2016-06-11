var app = angular.module('WeatherAPIApp', []);

app.controller('OpenweathermaporgController', ['$scope', 'openweathermaporg', function($scope, openweathermaporg){
	openweathermaporg.success(function(data){
		$scope.openweathermaporgData = data;
	});
}]);

app.factory('openweathermaporg', ['$http', function($http){
	return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=709930&units=metric&APPID=a04758aa7a782b618d9d69ce0ee499b0&cnt=5')
		.success(function(data){
			return data;
		})
		.error(function(err){
			return err;
		});
}]);

app.controller('ForecastioController', ['$scope', 'forecastio', function($scope, forecastio){
	forecastio.success(function(data){
		$scope.forecastioData = data;
	});
}]);

app.factory('forecastio', ['$http', function($http){
	return $http.get('https://api.forecast.io/forecast/272b811e0cdc899ae2ba04d359c25b08/48.450001,34.98333')
		.success(function(data){
			return data;
		})
		.error(function(err){
			return err;
		});
}]);

app.filter('secondsToDateTime', [function() {
	return function(seconds) {
		return new Date(1970, 0, 1).setSeconds(seconds);
	};
}])