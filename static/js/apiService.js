
	define(['jquery'], function($) {
		// send ajax request to get our movie data :D
		function getMovies() {
			//create deffered object
			var defer = $.Deferred();

			//make get request
			$.get('/movies', function(data) {
					defer.resolve(data);
			}).fail(function() {
					defer.reject();
			});

			//return the promise
			return defer;

		} // ./getMovies

		//reveal api
		return{
				get: getMovies
		}

	}); // ./ApiService
