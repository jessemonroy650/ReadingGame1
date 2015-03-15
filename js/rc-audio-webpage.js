//
//	Audio play
//
//	https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
//	has a DOM interface of:
//	https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
//	which inherits from:
//	https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement
//	See: Methods
//
//	Attributes used: autoplay, loop, paused, src
//	Methods used: load(), play(), pause()
//
var WebAudio = {
	elementId  : undefined,
	objectHandle : undefined,
	my_media   : null,
	mediaTimer : null,

	init : function (id, aplay) {
		this.elementId = id;
		this.objectHandle = document.getElementById(this.elementId);
		if (this.objectHandle.src) {
			this.loadAudio(this.objectHandle.src);
		}
		if (aplay) {
			this.objectHandle.autoplay = aplay;
		}
		return this;
	},
	loadAudio : function (source) {
		this.objectHandle.src = source;
		this.objectHandle.load();
	},
	//
	// Play audio
    //
	playAudio : function (source) {
		if (source) {
			this.loadAudio(source);
		}
		this.objectHandle.play();
	},

	loopAudio : function ( ) {
		if ( this.objectHandle.loop ) {
			this.objectHandle.loop = false;
		} else {
			this.objectHandle.loop = true;
		}
	},

	pauseAudio : function ( ) {
		if ( this.objectHandle.paused ) {
			this.objectHandle.play();
		} else {
			this.objectHandle.pause();
		}
	},

	stopAudio : function ( ) {
		// There is no Audio function in Mozilla. 
	}
};
