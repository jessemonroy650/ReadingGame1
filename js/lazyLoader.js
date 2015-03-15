//
//	Lazy load for Javascript, Images and Text files.
//	Date: 2015-03-13T01:27:44
//
//	Based code idea by smfoote:
//		http://stackoverflow.com/questions/5490996/load-scripts-after-page-has-loaded
//
//	Originally intended for loading Javascript files. 
//	Extended for images - which need an insertion point (parent) and an 'id'.
//
function lazyLoader(file, type, parent, id) {

	// Assign the appropriate DOM type
	switch (type) {
		case 'script':
			elementType = 'script';
			scriptType  = 'text/javascript';
			attachPoint = document.getElementsByTagName("head")[0];
		break;
		case 'img':
			elementType = 'img';
			scriptType  = '';
			attachPoint = document.getElementById(parent);
		break;
		default:
			elementType = null;
	}

	if (elementType) {
		// Create the DOM element
		var element  = document.createElement(elementType);
		element.src  = file;
		if (scriptType) { element.type = scriptType; }
		if (id) { element.id = id; }
		//console.log("type:" + type);
		//console.log("file:" + file);
		console.log(element.src);
		// Load the DOM
		attachPoint.appendChild(element);
	}
}
