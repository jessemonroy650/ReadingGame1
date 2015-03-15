//
// Phonegaps says ''device'' is a global attached to ''window''
//
// NOTE: gVariableName = global variableName, so scope is global
//
//var gPhoneModel = null;
if (window.device) {
	gPhoneModel   = window.device.model;
	var gCordova  = window.device.cordova
	var gPlatform = window.device.platform
	var gUuid     = window.device.uuid
	var gVersion  = window.device.version
	var gName     = winwow.device.name
}
