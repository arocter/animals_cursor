var oxcursor = 'url(' + chrome.extension.getURL('ox.jpg') + ')';
console.log(oxcursor);

chrome.runtime.onMessage.addListener(function(message){
	console.log("change cursor");
	// $("body").css('cursor', 'url(http://bringerp.free.fr/Files/RotMG/cursor.gif)' + ' 8 0, auto');
	$("body").css("cursor", oxcursor + ' 2 2, auto');

})