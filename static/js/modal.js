function Modal(movie) {
	//Cache DOM
	var modal = document.querySelector('.modal')
	//element is the passed in object ( in our case, movie )
	this.movie_data = movie;
	//initialize data
	this.movie_title = movie_data.title;
	this.movie_des = movie_data.description;
	this.movie_img = movie_data.poster_image;
	this.movie_rating = movie_data.rating;
	this.movie_youtube = movie_data.youtube_url;


}
