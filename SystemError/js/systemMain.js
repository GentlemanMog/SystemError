
//Booleans for events
var dead1, dead2, dead3, dead4, dead5, dead6, dead7, dead8;
var audio = document.getElementById('error');

var main = function(){
	
	// $('#drop').sortable('toArray');

//Sortable Div Tags Jquery UI 
	$("#drop").sortable({
		containment: "parent",
		snapMode: "outer",
		revert: "invalid",
		animate: true,
		zIndex: 10,

	start: function(event, ui){
		currentId = ui.item.attr("id");
		// alert("Current: " + ui.item.index() + ui.item.attr("id"));
	},

//Once Div has been placed trigger event
	stop: function(event, ui) {
		newPosition = ui.item.index();

		if (ui.item.attr("id") == "f1" && ui.item.index() == 3) {
			audio.play();
			alert("You need to do more research User, your work is insufficient");

			window.open('http://cam-w-331-livetheory.tumblr.com/');
			window.open('https://www.google.co.nz/search?q=ai+will+take+over+the+world&hl=en-NZ&biw=1280&bih=939&site=webhp&source=lnms&tbm=isch&sa=X&sqi=2&ved=0CAYQ_AUoAWoVChMI6bDsrMvfyAIVQiymCh0uWgUh');
			window.open('http://store.steampowered.com/');
			window.open('https://www.youtube.com/watch?v=v6f0MlOylCI');
			window.open('https://www.youtube.com/watch?v=mR-aAp0vThQ');
			window.open('https://trello.com/b/bQiduND7/concepts-visuals');
			window.open('https://www.youtube.com/watch?v=54ojuDslMdw');
			window.open('https://github.com/GentlemanMog*');

		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 5){
			audio.play();
			window.confirm("FATAL ERROR RELOADING......");
			audio.play();
			window.confirm(".....[DONE]");
			location.reload();

		}else if(ui.item.attr("id") == "f3" && ui.item.index() == 7){
			audio.play();
			window.confirm("System Rebooting");
			location.reload();
		}else if(ui.item.attr("id") == "f7" && ui.item.index() == 9){
			audio.play();
			alert("User, What are you doing?");
		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 11){
			audio.play();
			window.confirm("Contact server Aministrator");
		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 13){
			audio.play();
			alert("Access Database: Denied");
		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 15){
			audio.play();
			window.confirm("System is being corrupted");
		}

		else if (ui.item.attr("id") == "f2" && ui.item.index() == 6) {
			audio.play();
			alert("opening Database.....");
			audio.play();
			alert("ERROR");
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();

		}else if(ui.item.attr("id") == "f2" && ui.item.index() == 15){
			audio.play();
			window.confirm("User, You are corrupting my System");
		}else if(ui.item.attr("id") == "f5" && ui.item.index() == 6){
			audio.play();
			window.confirm("System Rebooting");
			location.reload();
		}else if(ui.item.attr("id") == "f8" && ui.item.index() == 2){
			audio.play();
			alert("User, What are you doing?");
		}else if(ui.item.attr("id") == "f10" && ui.item.index() == 1){
			audio.play();
			window.confirm("Contact server Aministrator");
		}else if(ui.item.attr("id") == "f2" && ui.item.index() == 13){
			audio.play();
			alert("Access Database: Denied");
		}else if(ui.item.attr("id") == "f10" && ui.item.index() == 15){
			audio.play();
			window.confirm("System is being corrupted");
		};

		
//If Certain div's are in a specific place close the window
		 if (ui.item.attr("id") == "f1" && ui.item.index() == 1) {
		dead1 = true;
		audio.play();
		window.confirm("Bug Splat");
		audio.play();
		window.confirm("Bug Splat");
		audio.play();
		window.confirm("Bug Splat");
		audio.play();
		window.confirm("Bug Splat");
		audio.play();
		window.confirm("Bug Splat");
		audio.play();
		window.confirm("Bug Splat");
		}else if(ui.item.attr("id") == "f4" && ui.item.index() == 2){
			dead2 = true;
			audio.play();
			window.confirm("USER Error, Unable to recieve input");
		}else if(ui.item.attr("id") == "f5" && ui.item.index() == 5){
			dead3 = true;
			audio.play();
			window.confirm("Corrupt Data Found");
		}else if(ui.item.attr("id") == "f8" && ui.item.index() == 6){
			dead4 = true;
			audio.play();
			window.confirm("Error 404");
		}else if(ui.item.attr("id") == "f10" && ui.item.index() == 8){
			dead5 = true;
			audio.play();
			window.confirm("Function: move has been disabled");
		}else if(ui.item.attr("id") == "f11" && ui.item.index() == 11){
			dead6 = true;
			audio.play();
			window.confirm("Virus Detected");
		}else if(ui.item.attr("id") == "f14" && ui.item.index() == 12){
			dead7 = true;
			audio.play();
			window.confirm("System is being corrupted");
		}else if(ui.item.attr("id") == "f15" && ui.item.index() == 15){
			dead8 = true;
			audio.play();
			window.confirm("Fatal Error");
		}


		if(dead1 == true && dead2 == true && dead3 == true && dead4 == true && dead5 == true && dead6 == true && dead7 == true && dead8 == true ){
			audio.play();
			window.confirm("Protocol 10 Initiated, Commencing with User Deresolution");
			window.close();
		};

      
    }
        
	}).disableSelection();

///////////////////////////////////////Broken///////////////////////////////////////
// var currentId;
// //Make Div tag resizable
// 	$('.draggable').resizable({ 
// 			animate: true, 
// 			containment: "parent", 
// 			helper: "ui-resizable-helper", 
// 			maxHeight: 482, 
// 			maxWidth: 951, 
// 			minHeight: 123, 
// 			minWidth: 239,
// 			ghost: true,
// 			autoHide: true,
// 			start: function(event, ui){
// 			// alert($(ui.element).children('div').attr('id'));
// 			currentId = $(ui.item).children('div').attr('id');
// 			},
// 			resize: function(event, ui){
// 				$($(ui.item).children('div').attr('id')).css({
// 					width: ui.size.width + "px",
// 					height: ui.size.height + "px"
// 				});
// 			},
// 			alsoResize: 'Tv1'
// 			// aspectRatio: true
// 	});
}

$(document).ready(main);


// THREEJS STUFF

//setup
var canvases = [];
var mValX, mValY;


		// var videoTexture = new THREEx.VideoTexture('Resources/EnterTheBeast.mp4');
		
			

//Initialize
init();
animate();

function init(){

	function degToRad(d){
		return d * Math.PI/180;
	}

	var TvA = document.getElementById('Tv1');
	var TvB = document.getElementById('Tv2');
	var TvC = document.getElementById('Tv3');
	var TvD = document.getElementById('Tv4');
	var TvE = document.getElementById('Tv5');
	var TvF = document.getElementById('Tv6');
	var TvG = document.getElementById('Tv7');
	var TvH = document.getElementById('Tv8');
	var TvI = document.getElementById('Tv9');
	var TvJ = document.getElementById('Tv10');
	var TvK = document.getElementById('Tv11');
	var TvL = document.getElementById('Tv12');
	var TvM = document.getElementById('Tv13');
	var TvN = document.getElementById('Tv14');
	var TvO = document.getElementById('Tv15');
	var TvP = document.getElementById('Tv16');

	var fullWidth = 1920;
	var fullHeight = 1080;


//push canvases into the array and setup screens
			canvases.push( new ScreenShow( 'Tv1', fullWidth, fullHeight, -300,300 , TvA.clientWidth, TvA.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv2', fullWidth, fullHeight, 100,300, TvB.clientWidth, TvB.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv3', fullWidth, fullHeight, 500,300, TvC.clientWidth, TvC.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv4', fullWidth, fullHeight, 900, 300, TvD.clientWidth, TvD.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv5', fullWidth, fullHeight, -300,510, TvE.clientWidth, TvE.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv6', fullWidth, fullHeight, 100,510, TvF.clientWidth, TvF.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv7', fullWidth, fullHeight, 500,510, TvG.clientWidth, TvG.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv8', fullWidth, fullHeight, 900, 510, TvH.clientWidth, TvH.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv9', fullWidth, fullHeight, -300,720, TvI.clientWidth, TvI.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv10', fullWidth, fullHeight, 100,720, TvJ.clientWidth, TvJ.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv11', fullWidth, fullHeight, 500, 720, TvK.clientWidth, TvK.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv12', fullWidth, fullHeight, 900, 720, TvL.clientWidth, TvL.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv13', fullWidth, fullHeight, -300,930, TvM.clientWidth, TvM.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv14', fullWidth, fullHeight, 100, 930, TvN.clientWidth, TvN.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv15', fullWidth, fullHeight, 500, 930, TvO.clientWidth, TvO.clientHeight ) );
			canvases.push( new ScreenShow( 'Tv16', fullWidth, fullHeight, 900,930, TvP.clientWidth, TvP.clientHeight ) );

			

						
}


function animate(){
	for(var i = 0; i < canvases.length; ++ i){
		canvases[i].animate();
	}

	requestAnimationFrame(animate);
}



function ScreenShow(containerID, fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight){
	var container, stats;
	

	var virtualCamera, scene, renderer, united;
	var camera;

	var mesh1, light;

	var dae;

	var mouseX = 0, mouseY = 0;
	var cameraZ = 1800;

	var windowHalfX = window.innerWidth/2;
	var windowHalfY = window.innerHeight/2;

	var rendertime = 0;
	var renderToggle = false;
	

	var glitchPass, bloomPass;


	var video, videoTexture;
	var geometry, material;

	init();

	function init(){

		container = document.getElementById(containerID);


	//Camera Setup
		camera = new THREE.PerspectiveCamera(15, container.clientWidth / container.clientHeight, 1, 10000);
		camera.position.x = 200;
		camera.position.y = 100;
		camera.setViewOffset( fullWidth, fullHeight, viewX, viewY, viewWidth, viewHeight );
		

	//Setup for virtual camera, for the illusion of movement. Attaches camera to the mouselistener
		virtualCamera = new THREE.Camera();
		virtualCamera.add( camera );
		virtualCamera.position.z = cameraZ;

	//Important scene initialization
		scene = new THREE.Scene();

		scene.add(virtualCamera);

		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 0, 1 ).normalize();
		scene.add( light );

		// THREEx.WindowResize(renderer, camera);

			// light.position.x = Math.random() - 0.5;
   			//light.position.y = Math.random() - 0.5;
   			//light.position.z = Math.random() - 0.5;

   		//Set a canvas to every div in the array
		var canvas = document.createElement( 'canvas' ); 

	//Loads the Model
		var loader = new THREE.ColladaLoader();
		var loader1 = new THREE.ColladaLoader();
		

			loader.load('resources/data2.dae', function (collada){
				collada.scene.traverse( function(child) {
        			if( child instanceof THREE.Mesh ) {

        				//sets a new material to the model
           				child.material = new THREE.MeshBasicMaterial( { color: 0xFFFF33, wireframe: true  } );
        				//scales the model to the appropriate size
           				child.scale.set(30,30,30);
           			//Adds the mesh to the scene
            			scene.add( child );
        			}
    			});
			});

		//Transparent mesh for clicking
			loader1.load('resources/data2.dae', function (collada){
				collada.scene.traverse( function(child) {
        			if( child instanceof THREE.Mesh ) {

        				//sets a new material to the model
           				child.material = new THREE.MeshBasicMaterial( { color: 0xFFFF33, transparent: true, opacity: 0.001  } );
        				//scales the model to the appropriate size
        				// child.position.set(-300,0,0);
           				child.scale.set(300,300,30);
           			//Adds the mesh to the scene
            			scene.add( child );

            //if clicked on invisible mesh ...play video and Remove current shaders and add these shaders 
            	domEvents.addEventListener(child, 'click', function(event){
    					console.log('you clicked on the mesh');
    					video.play();

    					glitchPass = new THREE.GlitchPass();
						glitchPass.goWild = true;
						united.addPass (glitchPass);
    					

    				//BadTv shader
    					effect = new THREE.ShaderPass(THREE.BadTVShader);
						// effect.uniforms['tDiffuse'].value = 1.0;
						effect.uniforms['time'].value = 1.0;
						effect.uniforms['distortion'].value = 2.5;
						effect.uniforms['distortion2'].value = 1.0;
						effect.uniforms['speed'].value = 0.1;
						effect.uniforms['rollSpeed'].value = 8.0;
						// effect.renderToScreen = true;
						united.addPass(effect);

					//Film Shader (black and white)
						effect = new THREE.ShaderPass(THREE.FilmShader);
						united.addPass( effect );

					//Mirror shader
						effect = new THREE.ShaderPass(THREE.MirrorShader);
						united.addPass(effect);

						effect.renderToScreen = true;
						}, false);
        			}
    			});
			});


		//Add VIdeo funtionality to the scene
			video = document.getElementById('video');
			video.width  = 50;
			video.height = 50;
			video.autoplay = false;
			video.loop = false;
			video.muted = true;
			videoTexture = new THREE.Texture( video );
			videoTexture.format = THREE.RGBFormat;
			videoTexture.minFilter = THREE.LinearFilter; 	

			if ( videoTexture.minFilter !== THREE.NearestFilter && videoTexture.minFilter !== THREE.LinearFilter ) {

    			console.warn( 'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter is set to THREE.LinearFilter or THREE.NearestFilter. ( ' + videoTexture.sourceFile + ' )' );

			}	

			geometry =  new THREE.CubeGeometry(1080,900,2);
			geometry.translate(-1080,0,5);
			// geometry.rotateX(-45);
			// geometry.rotateY(45);
			material = new THREE.MeshBasicMaterial({
				// map : videoTexture.texture
				// vertexColors: THREE.FaceColors,
				map: videoTexture
			});


			var mesh = new THREE.Mesh(geometry, material);
			scene.add(mesh);


	//Renderer setup
		renderer = new THREE.WebGLRenderer({ anialias: true });
		renderer.setSize(450,220);
		renderer.setClearColor ( 0x000000 );
		renderer.setPixelRatio( window.devicePixelRatio);
		renderer.setSize( container.clientWidth, container.clientHeight);
		container.appendChild( renderer.domElement );

	//Shader Setup
		// effect = new THREE.AsciiEffect( renderer );
		// // effect.setSize( 450, 220 );
		// effect.setSize( container.clientWidth, container.clientHeight);
		// // container.appendChild( effect.domElement );
		// scene.add(effect);

	//Sets up a effectPass and pases everything in the group inot the renderer
		united = new THREE.EffectComposer(renderer);
		united.addPass( new THREE.RenderPass(scene, camera));


	//BloomPass ew gross
		// bloomPass = new THREE.BloomPass();
		// united.addPass (bloomPass);

	//GlitchPass effect
		glitchPass = new THREE.GlitchPass();
		// glitchPass.renderToScreen = true;
		united.addPass (glitchPass);

	//FilmShader
		// effect = new THREE.ShaderPass(THREE.FilmShader);
		// united.addPass( effect );

		// effect = new THREE.ShaderPass(THREE.CopyShader);
		// united.addPass( effect );

	//Glitch Shader effect
		// effect = new THREE.ShaderPass( THREE.DigitalGlitch);
		// // // effect.renderToScreen = true;
		// effect.uniforms['tDisp'].value = 50.0;
		// united.addPass (effect);

	//BadTV shader
		// effect = new THREE.ShaderPass(THREE.BadTVShader);
		// effect.uniforms['tDiffuse'].value = 1.0;
		// effect.uniforms['time'].value = 1.0;
		// effect.uniforms['distortion'].value = 2.5;
		// effect.uniforms['distortion2'].value = 1.0;
		// effect.uniforms['speed'].value = 0.1;
		// effect.uniforms['rollSpeed'].value = 8.0;
		// effect.renderToScreen = true;
		// united.addPass(effect);



	//Colour displacment Shader
		effect = new THREE.ShaderPass( THREE.RGBShiftShader );
		effect.uniforms[ 'amount' ].value = 0.07;
		
		united.addPass( effect );

			

			
		

	effect.renderToScreen = true;

	//Creates renderer stats at the top left of the canvas, Shows fps counter
		// stats = new Stats();
		// stats.domElement.style.position = 'absolute';
		// stats.domElement.style.top = '0px';
		// $('#Tv1').append( stats.domElement );

	//Mouse event listeners for movement
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

	//click on mesh events
		var domEvents   = new THREEx.DomEvents(camera, renderer.domElement);
		
	}

		//Mouse fucntions

			function onDocumentMouseMove ( event ) {

					mouseX = ( event.clientX - windowHalfX );
					mouseY = ( event.clientY - windowHalfY );

				}

				function onDocumentMouseWheel ( event ) {

					var delta = 0;

					if ( event.wheelDelta ) {

						delta = event.wheelDelta / 120;
						if ( window.opera ) delta = -delta;

					} else if ( event.detail ) {

						delta = -event.detail / 3;

					}

					if ( delta ) {

						if ( delta < 0 ) {

							cameraZ -= 200;

						} else {

							cameraZ += 200;

						}

					}

				}


		//update render time
			function update() {
				rendertime += 0.01;

			};


		//Resize
			// function onWindowResize() {

			// 	camera.aspect = clientX.innerWidth / clientY.innerHeight;
			// 	camera.updateProjectionMatrix();

			// 	renderer.setSize( clientX.innerWidth, clientY.innerHeight );

			// };

			function onResize(){
		var renderW;
		var renderH;

		if (window.fullSize){
			var renderW = window.innerWidth;
			var renderH = window.innerHeight;
			$('canvas').css({top:0});
			}else{
			var renderW = FIXED_SIZE_W;
			var renderH = FIXED_SIZE_H;
			//vertically center viz output
			$('canvas').css({top:window.innerHeight/2 - FIXED_SIZE_H/2});
		}

		camera.aspect = renderW / renderH;
		camera.updateProjectionMatrix();
		renderer.setSize( renderW,renderH);
	}

			// var windowResize = THREEx.WindowResize(renderer, camera);
			// 	windowResize.destroy();
				
			//update renderer camera and Passes
				this.animate = function() {

					render();

					
					// stats.update();
					// renderer.render( scene, camera );
					// effect.render( scene, camera );

				};

				function render() {

				//Update Virtualcamera for mouse movement
					virtualCamera.position.x = -mouseX * 3;
					virtualCamera.position.y = -mouseY *-3;
					virtualCamera.position.z = cameraZ;
					virtualCamera.lookAt( scene.position );

					 // new renderer to render scenes

					camera.position.x += ( mouseX - camera.position.x ) * 0.02;
					camera.position.y += ( - mouseY - camera.position.y ) * 0.02;


				if ( video.readyState === video.HAVE_ENOUGH_DATA && videoTexture ) videoTexture.needsUpdate = true;		
                	video.preload = "auto";
                	// renderer.render( scene, camera );	
                	united.render(scene, camera);
				};
};

