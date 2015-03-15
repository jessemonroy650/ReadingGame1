//
//  Reading California Game #1 - Choose Letter Bingo
//  by Jesus Monroy, Jr.
//  Date: 2015-03-13
//		* started with Game #2
//
var ReadingGame1 = {

	GameName          : 'Reading Game #2 ',
	GameVersion       : 'v.'+ '0.8.9',
	drawingsDirectory : 'lesson1/',
	audioDirectory    : 'sounds/',
	soundsDirectory   : '/android_asset/www/sounds/',
	imageType         : '.jpg',
	selectionIndex    : 0,
	fullPlacardScore  : 6,
	prizesDirectory   : 'prizes/',
	prize             : 'carrot.jpg',
	prizeSound        : 'hotel_bell.ogg',
	grandPrize        : 'chocolate_chip_cookie.png',
	grandPrizeSound   : 'solo_trumpet_06_inF.ogg',
	imageOverlay      : 'img_check.png',
	imagePrize        : '<img class=prize src=prizes/carrot.jpg>',
	imageChecked      : '<img class="play overlay" src=lesson1/img_check.png>',
	imageBigPrize     : '<img class=prizeBig src=prizes/chocolate_chip_cookie.png>',

	theScore          : 0,
	gameScore         : 0,
	gameDone          : false,
    gameWon           : false,


	my_media   : null,
	mediaTimer : null,

	drawings : new Array(
		'img2.jpg','img4.jpg','img6.jpg','img8.jpg','img10.jpg',
		'img12.jpg','img14.jpg','img16.jpg','img18.jpg','img20.jpg',
		'img22.jpg','img24.jpg','img26.jpg','img28.jpg','img30.jpg',
		'img32.jpg','img34.jpg','img36.jpg','img38.jpg','img40.jpg',
		'img42.jpg','img44.jpg','img46.jpg','img48.jpg','img50.jpg',
		'img52.jpg'
	),

	sounds : new Array(
		'a.ogg','b.ogg','c.ogg','d.ogg','e.ogg',
		'f.ogg','g.ogg','h.ogg','i.ogg','j.ogg',
		'k.ogg','l.ogg','m.ogg','n.ogg','o.ogg',
		'p.ogg','q.ogg','r.ogg','s.ogg','t.ogg',
		'u.ogg','v.ogg','w.ogg','x.ogg','y.ogg',
		'z.ogg'
	),

	//
	//
	updatePlaceCard : function (place, card) {
    	thePlace = document.getElementById(place);
		thePlace.src=card;
	},

	nextCard : function (sel) {
    	// <img>
	    img = document.getElementById("card0");
    	// Now Change them all
	    img.src = this.drawingsDirectory + this.drawings[sel];
		console.log("img.src:" + img.src + ":sel:" + sel)

	    src = this.soundsDirectory + this.sounds[sel];
		//console.log("gfPlayAudio(src):" + src)
		alert("gfPlayAudio(src):" + src);
	    PhoneGapAudio.playAudio(src);
		this.my_media = new Media(src);
		this.my_media.play();
		alert("snd");
	},


	updateTarget : function () {

		if (! this.gameDone) {
		    // <span> (button)
    		k = document.getElementById("turn0");

	    	// Change the 'START' button
	    	// This will be used for more than this.
		    if (this.selectionIndex == 0) {
    		    k.innerHTML = "Next";
		    }

    	   	this.nextCard(theShuffle[this.selectionIndex]);
			this.selectionIndex++;
			console.log("this.selectionIndex:" + this.selectionIndex);
		}
		if (this.selectionIndex >=  this.drawings.length) {
            this.gameDone = true;			
		}
	},

	resetPlacard : function () {
	    shuffleTheDeck(thePlacard);
    	shuffleTheDeck(theShuffle);

		this.updatePlaceCard('card1', this.drawingsDirectory + this.drawings[thePlacard[0]]);
		this.updatePlaceCard('card2', this.drawingsDirectory + this.drawings[thePlacard[1]]);
		this.updatePlaceCard('card3', this.drawingsDirectory + this.drawings[thePlacard[2]]);
		this.updatePlaceCard('card4', this.drawingsDirectory + this.drawings[thePlacard[3]]);
		this.updatePlaceCard('card5', this.drawingsDirectory + this.drawings[thePlacard[4]]);
		this.updatePlaceCard('card6', this.drawingsDirectory + this.drawings[thePlacard[5]]);

		// index to next card in the deck (theShuffle).
	    this.selectionIndex = 0;	

	    // reset Game Flage
    	this.gameDone  = false;

	    // reset scorecard
    	this.gameScore = 0;

	    cs = document.getElementById('number_score');
    	cs.innerHTML = '&nbsp;';
	},

	gameCelebrate : function() {
		k = document.getElementById('visual_score');
		k.innerHTML = ('<br>' + this.imageBigPrize);

		if (gPlaySoundForEveryGameWon) {
		    src = this.soundsDirectory + this.grandPrizeSound;
		    //gfPlayAudio.playAudio(src);
		    PhoneGapAudio.playAudio(src);
		}
	},

	scoreOne : function(iwrap) {
		// Overly image as matched
		targetElement = iwrap.innerHTML
		iwrap.innerHTML = targetElement + this.imageChecked;

		// Increment the score
		this.theScore++;
		this.gameScore++;

		// Increment onscreen score
		m = document.getElementById('number_score');
		m.innerHTML = this.theScore;

		// Increment onscreen visual prize
		k = document.getElementById('visual_score');
		if (this.gameScore < this.fullPlacardScore) {
			k.innerHTML += this.imagePrize;
		}

		// play happy sound
		if (gPlaySoundForEveryPointScored) {
			src = this.soundsDirectory + this.prizeSound;
			//gfPlayAudio.playAudio(src);
			PhoneGapAudio.playAudio(src);
		}
	},

	checkForMatch : function (i, iwrap) {
	    // INCOMING SOURCE
    	//i = document.getElementById(o);
	    b = i.src.lastIndexOf('/');
    	source = i.src.slice([b]);
    
	    // TARGET
    	j = document.getElementById("card0");
	    a = j.src.lastIndexOf('/');
	    target = j.src.slice([a]);

    	// Check the INCOMING SOURCE against the TARGET
	    if (source.match(target)) {
    	    answer = "yeah";
			this.scoreOne(iwrap);
    	} else {
        	answer = "boo";
	    }
    	//alert(answer);

		if (this.gameScore == this.fullPlacardScore) {
			this.gameWon  = true;
		}

	    if (this.gameWon) {
    	    this.gameCelebrate();
			this.gameDone = true;
	    }
    	// return false;
	}

};
