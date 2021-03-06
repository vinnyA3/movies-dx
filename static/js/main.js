
define(['jquery', 'apiService', 'modal'], function($, ApiService, Modal) {

	var model = {
		// initialize the empty array that will take in the movie data returned
		// from the server
	  movies: []
	}

	var controller = {
		//initialize
		init: function() {
			this.requestMovies();
		},
		// Use the API service to get the movie data
		requestMovies: function() {
			// allow for 'this' access in lower promised scope
      var self = this;
			// call the service api
			ApiService.get()
				.done(function(data) {
					self.setMoviesData(data);
				})
				.fail(function() {
					console.log('There was an error retrieving the data!');
				});
		},
		// set the movie data
		setMoviesData: function(movies) {
			model.movies = movies
			//render the movies view
			movieView.init();
		},
		// return the movies (for movie view)
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
					movies = JSON.parse( this.movies ),
					movies_length = movies.length;
			// loop through the movies and grab each movie's info
			// create an 'movie-card' & 'movie-card__image element
			for(var i = 0; i < movies.length; ++i) {
				//create a new movie card el
				var movie_card = document.createElement('div');
				movie_card_img = document.createElement('img');
				movie_card.className = 'movie-card';
				movie_card_img.className = 'movie-card__image';
				//set the src attr of image to the current movie image
				movie_card_img.src = movies[i]["poster_image"];
				movie_card.appendChild(movie_card_img);

				// add event lister to the movie_card (open modal functionality)
				// Use a closure to maintain 'current' movie index
				(function(i) {
					movie_card.addEventListener('click', function() {
						// create modal instance
						var content_modal = new Modal.Modal(movies[i]);
						content_modal.open();
					});
				})(i);
				// append the movie card to the movie container
				movie_el.appendChild(movie_card);
			}
		}

	} // ./modalView

  // initialize controller
	controller.init();

}); // ./require
