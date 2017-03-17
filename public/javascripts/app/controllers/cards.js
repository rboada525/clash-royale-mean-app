app.controller('CardsController', ['$scope', '$http', function($scope, $http) {
	$scope.cards = [];
	$scope.title = 'Cartas';

	$http.get('/api/cards')
	.then(
		function success(response) {
			$scope.cards = response.data;
		},
		function error(error) {
			console.log(error);
		}
	);
}]);

app.controller('CardController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	$scope.card = [];

	$http.get('/api/cards/' + $routeParams.id)
	.then(
		function success(response) {
			$scope.card = response.data;
		},
		function error(error) {
			console.log(error);
		}
	);
}]);
