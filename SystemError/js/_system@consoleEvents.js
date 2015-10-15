$('.console-text').append("<p id='console-text'>");
// console();
// Manifesto();
var timer = null;
var isDragging = false;
var message = document.getElementById('console-text');
var spanC = document.getElementsByClassName('typed-cursor')
var console = document.getElementsByClassName('console-text');

$(document).on('mousemove', function(){
		if(timer !== null && isDragging == false){
			// $(console).remove("#console-text");
			// $('#console').remove('.console-text');
			clearTimeout(timer);	
			// timer = 0;
		}
		
			timer = setTimeout(function(){
				// $('#console-text').text('');

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
					// callback: function() {
						// message.remove();
						// timer = 0;
						// $('.console-text').remove("span");
						// $('.console-text').append("<p id='console-text'>");
					// }
				});
			}, 300);
		
	});

// var typeEvents = [
	// {
	// 	$("#console-text").typed({
	// 		strings: ["TimerStop?", "Stop drop and roll?"],
	// 		typeSpeed: 40,
	// 		loop: true,
	// 		loopCount: true
	// 	});
	// },
	// {

	// }
// ];



function console(){
	

	// console().reload();


	

	

	// window.onload  =  $('.console-text').fadeIn("slow", function(){
	// 	$('.console-text').text('Hello? Anyone there?');

	// });
	// $('#console').mouseenter(function(){
	// 	$("#console-text").typed({
	// 	strings: ["Hello?", "Anyone there?"],
	// 	typeSpeed: 30,
	// 	loop: false
	// 	});
	// });

	// if($('#console').mouseenter()){
	 
	// }

}
// function Manifesto(){
// 	$('#manifesto').mouseenter(function(){

// 	});
// }
