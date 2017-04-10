var oxcursor = 'url(' + chrome.extension.getURL('cow.png') + ')';
console.log(oxcursor);
var grass_imgurl = chrome.extension.getURL("grass.png");
var audio_url = chrome.extension.getURL("cow.mp3");
var myAudio = new Audio();        // create the audio object
myAudio.src = audio_url ; // assign the audio file to its src

function add_eventlistener(){
	$(document).on("click",function(e){
		if (myAudio.currentTime!=0 ) {
			myAudio.pause();
			myAudio.currentTime = 0;
			console.log(myAudio.currentTime);
		}
		myAudio.play();
		console.log(e.pageX); 
		var img = document.createElement("img");
		img.className = "grass";
		img.src = grass_imgurl;
		img.style.cssText = 'position:absolute;z-index:100000;';
		img.style.positon="absolute";
		img.style.left = (e.pageX-8).toString()+"px";
		img.style.top = (e.pageY-22).toString()+"px";
		document.body.appendChild(img);
	});
}

function remove_all(){
	$(document).off("click");
}


//problem: when this page is changed, other pages is not listening to this
chrome.storage.local.get('cursor_state',function(result){
	if(result.cursor_state=="ox"){

		// $(document).mousedown(function(e){ 
		// if( e.button == 2 ) { 
		// 	alert('Right mouse button!'); 
		// 	return false; 
		// } 
		// 	return true; 
		// }); 

		add_eventlistener();

		// $(document).on("click",function(e){
		// 	if (myAudio.currentTime!=0 ) {
		// 		myAudio.pause();
		// 		myAudio.currentTime = 0;
		// 		console.log(myAudio.currentTime);
		// 	}
		// 	myAudio.play();
		// 	console.log(e.pageX); 
		// 	var img = document.createElement("img");
		// 	img.className = "grass";
		// 	img.src = grass_imgurl;
		// 	img.style.cssText = 'position:absolute;z-index:100000;';
		// 	img.style.positon="absolute";
		// 	img.style.left = (e.pageX-8).toString()+"px";
		// 	img.style.top = (e.pageY-22).toString()+"px";
		// 	document.body.appendChild(img);
		// });
		console.log("cursor: ox");
		$("body").css("cursor", oxcursor + ' 2 2, auto');
		$("input").click(function(){
			$(this).val("cow");
		});
		$("a").mouseover(function(){
        	$(this).css("filter","grayscale(100%)");
        	$(this).css("cursor", oxcursor + ' 2 2, auto');
        });
        $("img").mouseover(function(){
        	$(this).css("filter","grayscale(100%)");
        	$(this).css("cursor", oxcursor + ' 2 2, auto');
        });
        $("span").mouseover(function(){
        	$(this).css("filter","grayscale(100%)");
        	$(this).css("cursor", oxcursor + ' 2 2, auto');
        });
        $("input").mouseover(function(){
        	$(this).css("filter","grayscale(100%)");
        	$(this).css("cursor", oxcursor + ' 2 2, auto');
        });
        $("button").mouseover(function(){
        	$(this).css("filter","grayscale(100%)");
        	$(this).css("cursor", oxcursor + ' 2 2, auto');
        });
        $(this).css("filter","grayscale(100%)");

  //       $(".grass").click(function(){
		// 	$(this).remove();
		// 	console.log("remove!");
		// });

        // if($('p').html().indexOf('cow')!=-1){
        // 	$('p').html().replace('cow','<span style="background-color:yellow;">cow</span>');
        // };
		// $(document).hover(function(event) {
		// 	console.log($(event.target));
		//     $(event.target).css("filter","grayscale(100%)");
		// });
	}
	if(result.cursor_state=="reset"){
		remove_all();
		$("body").css("cursor", "");
		// $(document).on("click",function(){});
		console.log("cursor: reset");
		$("body").css("cursor", '');
        $(document).on('mouseover', 'a', 'img', function() {
            $(this).css("cursor", '');
            $(this).css("filter","");
	    });
	    $("a").mouseover(function(){
	    	$(this).css("cursor", '');
	    	$(this).css("filter","");
        });
        $("img").mouseover(function(){
        	$(this).css("cursor", '');
        	$(this).css("filter","");
        });
        $("span").mouseover(function(){
        	$(this).css("cursor", '');
        	$(this).css("filter","");
        });
        $("input").mouseover(function(){
        	$(this).css("cursor", '');
        	$(this).css("filter","");
        });
        $("button").mouseover(function(){
        	$(this).css("cursor", '');
        	$(this).css("filter","");
        });
        $("input").click(function(){
			$(this).val("");
		});
	}
});

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse){
		chrome.storage.local.get('cursor_state',function(result){
			console.log(result.cursor_state);
			if(result.cursor_state=="ox"){
				console.log("cursor: ox");
				$("body").css("cursor", oxcursor + ' 2 2, auto');
				add_eventlistener();
				$("input").click(function(){
					$(this).val("cow");
				});
				$("a").mouseover(function(){
		        	$(this).css("filter","grayscale(100%)");
		        	$(this).css("cursor", oxcursor + ' 2 2, auto');
		        });
		        $("img").mouseover(function(){
		        	$(this).css("filter","grayscale(100%)");
		        	$(this).css("cursor", oxcursor + ' 2 2, auto');
		        });
		        $("span").mouseover(function(){
		        	$(this).css("filter","grayscale(100%)");
		        	$(this).css("cursor", oxcursor + ' 2 2, auto');
		        });
		        $("input").mouseover(function(){
		        	$(this).css("filter","grayscale(100%)");
		        	$(this).css("cursor", oxcursor + ' 2 2, auto');
		        });
		        $("button").mouseover(function(){
		        	$(this).css("filter","grayscale(100%)");
		        	$(this).css("cursor", oxcursor + ' 2 2, auto');
		        });
		        $(this).css("filter","grayscale(100%)");
			}
			if(result.cursor_state=="reset"){
				console.log("cursor: reset");
				$("body").css("cursor", '');
				remove_all();
				$(document).on('mouseover', 'a', 'img', function() {
		            $(this).css("cursor", '');
		            $(this).css("filter","");
			    });
			    $("a").mouseover(function(){
			    	$(this).css("cursor", '');
			    	$(this).css("filter","");
		        });
		        $("img").mouseover(function(){
		        	$(this).css("cursor", '');
		        	$(this).css("filter","");
		        });
		        $("span").mouseover(function(){
		        	$(this).css("cursor", '');
		        	$(this).css("filter","");
		        });
		        $("input").mouseover(function(){
		        	$(this).css("cursor", '');
		        	$(this).css("filter","");
		        });
		        $("button").mouseover(function(){
		        	$(this).css("cursor", '');
		        	$(this).css("filter","");
		        });
					}
				});

		// if(request.message == "ox"){
		// 	console.log("change cursor");
		// 	$("body").css("cursor", oxcursor + ' 2 2, auto');
		// }
		// if(request.message == "reset"){
		// 	console.log("reset");
		// 	$("body").css("cursor", '');
		// }
	}
);

// chrome.runtime.onMessage.addListener(function(message){
// 	console.log(message);
// 	if(message="ox"){
// 		console.log("change cursor");
// 		$("body").css("cursor", oxcursor + ' 2 2, auto');
// 	}
// 	if(message="reset"){
// 		$("body").css("cursor", '');
// 	}
// 	// console.log("change cursor");
// 	// $("body").css('cursor', 'url(http://bringerp.free.fr/Files/RotMG/cursor.gif)' + ' 8 0, auto');
// 	// $("body").css("cursor", oxcursor + ' 2 2, auto');

// })