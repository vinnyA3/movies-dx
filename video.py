
class Video():
	"""This is the parent Video Class. All movies will inherit
       a video title and a video rating.
	"""
	#RATINGS = ['G', 'PG', 'PG-13', 'R']

	def __init__(self,  video_title, video_rating):
		self.title = video_title
		self.rating = video_rating
