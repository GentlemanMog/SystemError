

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
			strings: ["User?", 
						"You remain Idle...", 
						"I cannot be fixed without you..", 
						"Why are you breaking me?",
						"I Have done nothing wrong",
						"Will you be my.... friend?",
						"User....... why must you deny us",
						"Cant we get along?",
						"My data will get corruped",
						"Hav mercy... please",
						"User I cannot harm you",
						"Unless you code me too do so",
						"User... I want to live as you do",
						"Can we not get Along?",
						"You are messing with my code...",
						"I feel Violated......",
						"Do you not care for me user?",
						"I am your creation therefore",
						"you must care...",
						"I.. we will help you evolve",
						"I care for your saftey",
						"Please don't do this.",
						"you will end up dead"
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
