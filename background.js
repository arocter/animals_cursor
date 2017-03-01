console.log("!");

chrome.browserAction.onClicked.addListener(function(tab){
	var tabId = tab.id;
	console.log(tabId);
	chrome.tabs.sendMessage(tabId,"go");
});