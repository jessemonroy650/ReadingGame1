//
// Audio player
//
//  http://plugins.cordova.io/#/package/org.apache.cordova.media
//  == Constants ==
//  Media.MEDIA_NONE = 0;
//  Media.MEDIA_STARTING = 1;
//  Media.MEDIA_RUNNING = 2;
//  Media.MEDIA_PAUSED = 3;
//  Media.MEDIA_STOPPED = 4;
//
//  MediaError.MEDIA_ERR_ABORTED = 1
//  MediaError.MEDIA_ERR_NETWORK = 2
//  MediaError.MEDIA_ERR_DECODE = 3
//  MediaError.MEDIA_ERR_NONE_SUPPORTED = 4
//

var PhoneGapAudio = {
	elementId  : undefined,
	my_media   : null,
	mediaTimer : null,


	init : function (id) {
	},
	//
	// Play audio
    //
	playAudio : function (src) {
		if (this.my_media === null) {
			// Create Media object from src
			this.my_media = new Media(src, onSuccess, onError);
		} // else play current audio
		// Play audio
		this.my_media.play();
		// Update my_media position every second
		if (this.mediaTimer === null) {
			this.mediaTimer = setInterval(function() {
				// get my_media position
				this.my_media.getCurrentPosition(
					// success callback
					function(position) {
						if (position > -1) {setAudioPosition((position) + " sec");}
					},
					// error callback
					function(e) {
						console.log("Error getting pos=" + e);
						setAudioPosition("Error: " + e);
					}
				);
			}, 1000);
		}
	},
	//
	// Pause audio
	// 
	pauseAudio : function () {
		if (this.my_media) {
			this.my_media.pause();
		}
	},
	//
	// Stop audio
	// 
	stopAudio : function () {
		if (this.my_media) {
			this.my_media.stop();
		}
		clearInterval(this.mediaTimer);
		this.mediaTimer = null;
	},
	//
	// Set audio position
	// 
	setAudioPosition : function (position) {
		if (document.getElementById('audio_position')) {
			document.getElementById('audio_position').innerHTML = position;
		}
	},
	//
	// onSuccess Callback
	//
	onSuccess : function () {
		console.log("playAudio():Audio Success");
	},
	//
	// onError Callback 
	//
	onError : function (error) {
		alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	}
};