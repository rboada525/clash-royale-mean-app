app.controller('ArenasController', ['$scope', '$http', function($scope, $http) {
	$scope.arenas = [];
	$scope.title  = 'Arenas';

	$http.get('/api/arenas')
	.then(
		function success(response) {
			$scope.arenas = response.data;
		},
		function error(error) {
			console.log(error);
		}
	);
}]);

app.controller('ArenaController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.arena = [];

	$http.get('/api/arenas/' + $routeParams.id)
	.then(
		function success(response) {
			$scope.arena       = response.data;
			$scope.numero      = response.data.numero != 0 ? true : false;
			$scope.desbloquea  = (Object.keys(response.data.desbloquea).length > 0) ? true : false;
			$scope.recompensas = (Object.keys(response.data.recompensas).length > 0) ? true : false;
		},
		function error(error) {
			console.log(error);
		}
	);
}]);
