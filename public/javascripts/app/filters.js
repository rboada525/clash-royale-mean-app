app.filter('calidad', function() {
	return function(input) {
		if (input == undefined) return;

        return input.
                toLowerCase().
				replace("á","a").
				replace("é","e").
				replace("í","i").
				replace("ó","o").
				replace("ú","u");
    };
});

app.filter('efecto', function() {
	return function(input) {
		if (input == undefined) return;

		if (input == 'Legendaria') return 'img-legendary';
	}
});
