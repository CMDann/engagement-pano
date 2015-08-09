// Launch the pano, prefer the HTML5 version
embedpano({swf:"pano.swf", xml:"pano.xml", target:"pano", html5:"prefer", passQueryParameters:true});

// Launch the BSD site
function load_site(){
	window.open("http://bitspacedevelopment.com");
}

// Open featherlight
function launchFeatherlight(){
	$.featherlight($("#fl1")[0]);
}