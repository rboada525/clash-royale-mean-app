app.controller('PlayersController', ['$scope', '$http', function($scope, $http) {
	$scope.players = [];
	$scope.title   = 'Nivel de Jugador';

	$http.get('/api/players')
	.then(
		function success(response) {
			$scope.players = response.data;
		},
		function error(error) {
			console.log(error);
		}
	);
}]);
