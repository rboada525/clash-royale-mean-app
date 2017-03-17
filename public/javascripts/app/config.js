app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/home.pug'
	})
	.when('/arenas', {
		templateUrl: 'templates/arenas.pug',
		controller: 'ArenasController'
	})
	.when('/arenas/:id', {
		templateUrl: 'templates/arena.pug',
		controller: 'ArenaController'
	})
	.when('/cards', {
		templateUrl: 'templates/cards.pug',
		controller: 'CardsController'
	})
	.when('/cards/:id', {
		templateUrl: 'templates/card.pug',
		controller: 'CardController'
	})
	.when('/players', {
		templateUrl: 'templates/players.pug',
		controller: 'PlayersController'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
