define(function() {
	function Modal(contents) {

		this.modal_data = {};

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

	Modal.prototype.open = function() {
		this.build();
	};

	Modal.prototype.build = function() {
		var dom_modal = document.querySelector('.modal'),
				modal_content_container = dom_modal.querySelector('.modal-content'),
				modal_close = modal_content_container.querySelector(".close"),
				modal_content = modal_content_container.querySelectorAll('.content'),
				self = this;

		//loop through our Modal data, and the media content nodes, and
		//add the media data to their respective nodes
		for(var i = 0; i < modal_content.length; ++i) {

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

	Modal.prototype.destroyBuild = function(el) {
		el.forEach(function(node, idx) {
			if(node.className == 'modal-content__youtube_url content') {
				node.removeAttribute('src');
			}
				node.removeChild(node.childNodes[0]);

		});
	};

	return {
		Modal: Modal
	};

}); // ./define
