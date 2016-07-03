define(function() {

  /* The Modal, oo the Modal.  The Modal here is programmed only for the
	movie application, in other words, this plugin is not reusable.  However, that
	sounds like a great project to tackle in the future.

	Summary: The Modal acts as a constructor function that enables creation
	of mulitple instances of Movie Modals!

	Use: The modal will take in an object (a movie), and add the movie's data ie:
	its title, rating, description etc.., and adds that to the modal_data object.
  */

	function Modal(contents) {

		this.modal_data = {};

		// Extend the contents data to the modal_data object ^^
		function extendData(source, data) {
			var prop;
			for(prop in data) {
				if(data.hasOwnProperty(prop)) {
					source[prop] = data[prop];
				}
			}
		}
		//extendData
		extendData(this.modal_data, contents);
	};

  // Open the modal, and call the build function ( build the modal )
	Modal.prototype.open = function() {
		this.build();
	};

	// Build the modal.  Populate the modal with movie data
	Modal.prototype.build = function() {
		// Cache the DOM
		var dom_modal = document.querySelector('.modal'),
				modal_content_container = dom_modal.querySelector('.modal-content'),
				modal_close = modal_content_container.querySelector(".close"),
				modal_content = modal_content_container.querySelectorAll('.content'),
				self = this;

		//loop through our Modal data, and the media content nodes, and
		//add the media data to their respective nodes
		for(var i = 0; i < modal_content.length; ++i) {

     /* MAGIC ** : for each node, in this case the emtpy html element that is
	   the modal, we want to pull out the class name that correponds to the movie
		 data attribute ( in our data_model).  The class names of the DOM nodes
		 are labeled to make this work ( Can you say tightly coupled :0 ) */
		 // Ex: the node's classname: '.modal-content__youtube_url' becomes:
		 // 'youtube_url'
			var node = modal_content[i].className.split(" ")[0].split("__")[1];

			for(var prop in self.modal_data) {
				var childNode;
				if(node == prop) {
					//if we have a youtube url, we need to append an src attribute
					//as opposed to a text node
					if(prop == 'youtube_url') {
						modal_content[i].setAttribute('src', self.modal_data[prop]);
					}else{
						childNode = document.createTextNode(self.modal_data[prop]);
						modal_content[i].appendChild(childNode);
					}
				}
			}
		};

		dom_modal.style.display = "block";

		modal_close.onclick = function() {
			dom_modal.style.display = "none";
			self.destroyBuild(modal_content);
		}

	};

  // Destroy build -> we want to clear up the modal's data upon modal close.
	// This allows us to add another movie's content to the modal
	Modal.prototype.destroyBuild = function(el) {
		el.forEach(function(node, idx) {
			if(node.className == 'modal-content__youtube_url content') {
				node.removeAttribute('src');
			}
				node.removeChild(node.childNodes[0]);

		});
	};

	// return the modal to be used in the application
	return {
		Modal: Modal
	};

}); // ./define
