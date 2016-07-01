(function($) {
	var model = {
		//initialize the empty array that will take in the movie date returned
		//from the server
	  movies: []
	}

	var controller = {
		//initialize
		init: function() {
			this.requestMovies();
		},
		//Use the API service to get the movie data
		requestMovies: function() {
			//allow for 'this' access in lower promised scope
      var self = this;
			//call the service api
			ApiService.get()
				.done(function(data) {
					self.setMoviesData(data);
				})
				.fail(function() {
					console.log('There was an error retrieving the data!');
				});
		},
		//set the movie data
		setMoviesData: function(movies) {
			model.movies = movies
			//render the movies view
			movieView.init();
		},
		//return the movies (for movie view)
		getMovies: function() {
			return model.movies;
		}
	} // ./controller

	var movieView = {
		init: function() {
			this.movie_container = document.querySelector('.movies');
			this.movies = controller.getMovies();
			this.render();
		},
		render: function() {
			var movie_el = this.movie_container,
					movies = this.movies;
			//loop through the movies and grab each movie's info
			//create an 'movie-card' element, and add a data attribute
			//container the array index - for use with modal
			console.log(movies);
		}
	}

	controller.init();

})(jQuery);
