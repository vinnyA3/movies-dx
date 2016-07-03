from movie import Movie
#use bottle lightweight framework to produce routes
from bottle import route, run, get, template, static_file
#import json dumps to convert dictionary to json
import json

@route('/')
def serve_home():
	return template('index.html')

@route('/movies')
def movies():
	# create an empty movie list that will be returned as json via json dumps
	movie_list = []

    # some urls are long, so they exceed recommended line space allocation

	# To add a movie, create a new instance of Movie and add the following:
	# Movie title, movie description, link to movie poster image, and youtube url
	# Note!! The youtube url should be an embedded movie link
	# Note!  Append the movie instance to the movie_list array! *Shown below
	interstellar = Movie('Interstellar', 'PG-13',
						'Man was born on earth, but he was never meant to die here',
						'https://d3ui957tjb5bqd.cloudfront.net/uploads/2014/11/interstellar-poster-2.jpg',
						'https://www.youtube.com/embed/2LqzF5WauAw')

	star_wars = Movie('Star Wars: The Force Awakens', 'PG-13',
						'There has been an awakening...',
						'http://3.bp.blogspot.com/-0_6xjfnrpzk/Vl7mYARXTsI/AAAAAAABNh4/0PoZ4-vN00s/s1600/Star%2BWars%2B-%2BThe%2BForce%2BAwakens%2Bby%2BBryan%2BMorton_1.jpg',
						'https://www.youtube.com/embed/sGbxmsDFVnE')

	social_network = Movie('The Social Network', 'PG-13',
						'Facebook in its infancy',
						'http://www.collegeadmissionsbible.com/wp-content/uploads/2013/03/0000the-social-network.jpg',
						'https://www.youtube.com/embed/lB95KLmpLR4')



	#add the movies as a dictionary to the movie list
	movie_list.append(interstellar.__dict__)
	movie_list.append(star_wars.__dict__)
	movie_list.append(social_network.__dict__)
	#return json
	return json.dumps(movie_list)

#Static Routes - used for static files and assets
@get('/<filename:re:.*\.js>')
def javascripts(filename):
	return static_file(filename, root='static/js')

@get ('/<filename:re:.*\.css>')
def stylesheets(filename):
	return static_file(filename, root='static/css')


run(host='0.0.0.0', port=8080, debug=True)
