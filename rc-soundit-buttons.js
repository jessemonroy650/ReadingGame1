//console.log('button handlers loaded');
$('#turn0').click( function(e) {
    ReadingGame1.updateTarget();
});
$('#reset0').click(function(){
    ReadingGame1.resetPlacard();
})

$('#card1').click(function(){
    ReadingGame1.checkForMatch(
		document.getElementById('card1'),
		document.getElementById('slot1')
	);
})
$('#card2').click(function(){
    ReadingGame1.checkForMatch(
		document.getElementById('card2'),
		document.getElementById('slot2')
	);
})
$('#card3').click(function(){
    ReadingGame1.checkForMatch(
		document.getElementById('card3'),
		document.getElementById('slot3')
	);
})
$('#card4').click(function(){
    ReadingGame1.checkForMatch(
		document.getElementById('card4'),
		document.getElementById('slot4')
		);
})
$('#card5').click(function(){
    ReadingGame1.checkForMatch(
		document.getElementById('card5'),
		document.getElementById('slot5')
	);
})
$('#card6').click(function(){
    ReadingGame1.checkForMatch(
		document.getElementById('card6'),
		document.getElementById('slot6')
	);
})
