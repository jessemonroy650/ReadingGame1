// The functions are used as visual validation of the shuffle.
function writeCard(n) {
    var i = document.getElementById('thedeck');
    i.innerHTML += "<div class=number>" + n + "</div>";
}

function writeShuffle(n) {
    var i = document.getElementById('otherdeck');
    i.innerHTML += "<div class='number shuffled'>" + n + "</div>";
    // image as expected
    xsrc = ReadingGame1.drawingsDirectory + ReadingGame1.drawings[n];
    imgcard = "<img class=active_card src=" + xsrc + ">";

    i.innerHTML += "<div class='play'>" + imgcard + "</div>";
}

function validateShuffle() {
    // Clear out previous output, if any.
    document.getElementById('thedeck').innerHTML = '';
    document.getElementById('otherdeck').innerHTML = '';
    // Write out the results -- Validate the shuffle of both
    for (n = 0; n < thePlacard.length; n++){
        writeCard(thePlacard[n]);
        writeShuffle(theShuffle[n]);
    }
}
