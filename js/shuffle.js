//
// ISBN 0-7645-5743-8 - pg.115 (Jesse has a copy of this book)
// This function returns an integer
// lowest - is the lowest integer you want
// highest - is the highest you will accept
//
function getRandomNumber(lowest, highest) {
    return Math.floor(Math.random() * highest) + lowest;
}
// Shuffle the deck
function shuffleTheDeck(deck) {
    len = deck.length;
    for (n = 0; n < len; n++){
        rand = getRandomNumber(0, len);
        tempfirst  = deck[n];
        tempsecond = deck[rand];
        deck[n]    = tempsecond;
        deck[rand] = tempfirst;
    }
}
