requirejs.config({
    baseUrl: "/",
    paths: {
			"app": "./",
      "jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min"
    }
});
// Load the main app module to start the app
requirejs(["main"]);
