from video import Video

class Movie(Video):
	""" This class is used to make a new movie entry.
		A movie will contain a title, rating, poster_image, description, and
		a youtube_url
	"""

	def __init__(self, title, rating, description, poster_image, youtube_url):
		#Call the parent constructor
		Video.__init__(self, title, rating)
		self.description = description
		self.poster_image = poster_image
		self.youtube_url = youtube_url
