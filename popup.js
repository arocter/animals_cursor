console.log("ya,this is popup!")
// chrome.storage.local.set({'cursor_state':'reset'});

//check button state when popup
chrome.storage.local.get('cursor_state',function(result){
	console.log(result.cursor_state);
	if(result.cursor_state=="reset"){
		$('.active').removeClass('active');
		reset_cursor();
	}else{
		$("#"+result.cursor_state).addClass('active');
		change();
	}
});


//create an array of btn to listen individually
//need to shout out the state to other tabs content.js if state changes 
$(function() {
    $('.btn').on('click', function(e) {
    	if($('.btn').hasClass('active')){
    		$('.active').removeClass('active');
    		reset_cursor();
    	}else{
    		$(this).addClass('active');
    		change();
    	}
        e.preventDefault();
    });
});

function change() {
	//why it's not getting all the tabs?
    chrome.tabs.query({}, function (tabs){
    	chrome.storage.local.set({'cursor_state':'ox'});
	    for(var i=0;i<tabs.length;i++){
	    	console.log("now we have "+ tabs.length + " tabs");
	    	chrome.tabs.sendMessage(tabs[i].id, {"message": "ox"});
	    	console.log(tabs[i]);
	    }
   	});
}

function reset_cursor(){
	chrome.tabs.query({}, function (tabs){
	    chrome.storage.local.set({'cursor_state':'reset'});
	    console.log("now we have "+ tabs.length + " tabs");
	    for(var j=0;j<tabs.length;j++){
	    	chrome.tabs.sendMessage(tabs[j].id, {"message": "reset"});
	    	console.log(tabs[j]);
	    }
   	});
}

function save(){

}


// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("cow").addEventListener("click", popup);
// });