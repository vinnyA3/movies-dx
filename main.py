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
	movie_list = []

	interstellar = Movie('Interstellar', 'PG-13',
						'Man was born on earth, but he was never meant to die here',
						'https://d3ui957tjb5bqd.cloudfront.net/uploads/2014/11/interstellar-poster-2.jpg',
						'https://www.youtube.com/watch?v=2LqzF5WauAw')

	star_wars = Movie('The Force Awakens', 'PG-13',
						'A new hope is born',
						'http://www.comicgeekspeak.com/images/episodes/swtfapos.jpg',
						'https://www.youtube.com/watch?v=sGbxmsDFVnE')

	#add the movies as a dictionary to the movie list
	movie_list.append(interstellar.__dict__)
	movie_list.append(star_wars.__dict__)
	return json.dumps(movie_list)

#Static Routes
@get('/<filename:re:.*\.js>')
def javascripts(filename):
	return static_file(filename, root='static/js')

@get ('/<filename:re:.*\.css>')
def stylesheets(filename):
	return static_file(filename, root='static/css')


run(host='0.0.0.0', port=8080, debug=True)
