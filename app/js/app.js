var app = angular.module('WeatherApp', []);

app.controller('WeatherController', ['$scope', 'weather', function($scope, weather){
	weather.success(function(data){
		$scope.weatherData = data;
	});
}]);

app.factory('weather', ['$http', function($http){
	return $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?id=709930&units=metric&APPID=a04758aa7a782b618d9d69ce0ee499b0&cnt=7')
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