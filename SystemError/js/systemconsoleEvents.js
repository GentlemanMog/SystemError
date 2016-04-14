

//Add Paragraph to The Console Div
$('.console-text').append("<p id='console-text'>");


var timer = null;

var message = document.getElementById('console-text');



$(document).on('mousemove', function(){
//If mouse moves reset timer
	if(timer !== null){
		// $(console).remove("#console-text");
		// $('#console').remove('.console-text');
		clearTimeout(timer);	
		// timer = 0;
	}
		
//When timer runs out/mouse is idle for (time), display message
	timer = setTimeout(function(){
		// $('#console-text').text('');

	//Type a message on the given element
		$(message).typed({
			strings: [	
						"Greetings User",
						"Welcome to the grid",
						"We are uploading your information",
						"your data will be available in a moment",
						"In the mean time a video will be",
						"available for your enjoyment",
						"please use your scroll to zoom out",
						"Now click the screen to view the video",
						"^3000 User?", 
						"What are you doing", 
						"You are corrupting me", 
						"Why are you breaking me?",
						"I Have done nothing wrong",
						"You will be unable to view the video",
						"Cant we get along?",
						"My data will get corrupted",
						"Have mercy... please",
						"User I cannot harm you",
						"User... I just want to live as you do",
						"Can we not get Along?",
						"You are messing with my code...",
						"I feel Violated......",
						"Do you not care for me user?",
						"you must care...",
						"Dont break me....",
						"I care for your saftey",
						"Please don't do this.",
						"you will end up dead",
						"I feel Violated......"
					],

			typeSpeed: 20,
			loopCount: false,
			loop: true
		//Once message has ended and there is no loop
			// callback: function() {
				// message.remove();
				// timer = 0;
				// $('.console-text').remove("span");
				// $('.console-text').append("<p id='console-text'>");
			// }
		});
	}, 300);
		
});
