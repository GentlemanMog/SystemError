
//Booleans for events
var dead1, dead2, dead3, dead4, dead5, dead6, dead7, dead8;

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
			alert("You need more Tabs open User, your work is insufficient");

			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();

		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 5){
			window.confirm("User, You require more fun");
			window.atob();

		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 7){
			window.confirm("System Rebooting");
			location.reload();
		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 9){
			alert("User, What are you doing?");
		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 11){
			window.confirm("Contact server Aministrator");
		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 13){
			alert("Access Database: Denied");
		}else if(ui.item.attr("id") == "f1" && ui.item.index() == 15){
			window.confirm("System is being corrupted");
		}

		else if (ui.item.attr("id") == "f2" && ui.item.index() == 6) {
			alert("You need more Tabs open User, your work is insufficient");
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();
			window.open();

		}else if(ui.item.attr("id") == "f2" && ui.item.index() == 15){
			window.confirm("User, You require more fun");
			window.atob();

		}else if(ui.item.attr("id") == "f5" && ui.item.index() == 6){
			window.confirm("System Rebooting");
			location.reload();
		}else if(ui.item.attr("id") == "f8" && ui.item.index() == 2){
			alert("User, What are you doing?");
		}else if(ui.item.attr("id") == "f10" && ui.item.index() == 1){
			window.confirm("Contact server Aministrator");
		}else if(ui.item.attr("id") == "f2" && ui.item.index() == 13){
			alert("Access Database: Denied");
		}else if(ui.item.attr("id") == "f10" && ui.item.index() == 15){
			window.confirm("System is being corrupted");
		};

		
//If Certain div's are ina specific place close the window
		 if (ui.item.attr("id") == "f1" && ui.item.index() == 1) {
		dead1 = true;
		window.confirm("Bug Splat");
		}else if(ui.item.attr("id") == "f4" && ui.item.index() == 2){
			dead2 = true;
			window.confirm("USER Error, Unable to recieve input");
		}else if(ui.item.attr("id") == "f5" && ui.item.index() == 5){
			dead3 = true;
			window.confirm("Corrupt Data Found");
		}else if(ui.item.attr("id") == "f8" && ui.item.index() == 6){
			dead4 = true;
			window.confirm("Error 404");
		}else if(ui.item.attr("id") == "f10" && ui.item.index() == 8){
			dead5 = true;
			window.confirm("Function: move has been disabled");
		}else if(ui.item.attr("id") == "f11" && ui.item.index() == 11){
			dead6 = true;
			window.confirm("Virus Detected");
		}else if(ui.item.attr("id") == "f14" && ui.item.index() == 12){
			dead7 = true;
			window.confirm("System is being corrupted");
		}else if(ui.item.attr("id") == "f15" && ui.item.index() == 15){
			dead8 = true;
			window.confirm("Fatal Error");
		}


		if(dead1 == true && dead2 == true && dead3 == true && dead4 == true && dead5 == true && dead6 == true && dead7 == true && dead8 == true ){
			window.confirm("Protocol 10 Initiated, Commencing with User Deresolution");
			window.close();
		};

      
    }
        
	}).disableSelection();


//Make Div tag resizable
	$('.draggable').resizable({ 
			animate: true, 
			containment: "parent", 
			helper: "ui-resizable-helper", 
			maxHeight: 482, 
			maxWidth: 951, 
			minHeight: 123, 
			minWidth: 239,
			ghost: true,
			autoHide: true,
			start: function(event, ui){
				originH = $(this).height();
				originW = $(this).width();


			}
			// alsoResize: $(this).find('div')
			// aspectRatio: true
	});
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

	init();

//Randomizes the glitchPass
	function updateOptions() {
		glitchPass.goWild=canvases.checked;
	}


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

			loader.load('Resources/data2.dae', function (collada){
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
		// dae.scale.set(30,30,30);
		// scene.add(dae);
			});

		//Add VIdeo funtionality to the scene

			video = document.getElementById('video');
			video.width  = 1000;
			video.height = 1000;
			video.autoplay = true;
			videoTexture = new THREE.Texture( video );
			videoTexture.format = THREE.RGBFormat;

				

			var geometry =  new THREE.CubeGeometry(1000,1000,2);
			var material = new THREE.MeshBasicMaterial({
				// map : videoTexture.texture
				// vertexColors: THREE.FaceColors,
				map: videoTexture
			});


			var mesh = new THREE.Mesh(geometry, material);
			scene.add(mesh);



	//Renderer setup
		renderer = new THREE.WebGLRenderer({ anialias: true });
		// renderer.setSize(450,220);
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

	//GlitchPass effect
		glitchPass = new THREE.GlitchPass( THREE.DigitalGlitch);
		// glitchPass.renderToScreen = true;
		united.addPass (glitchPass);

	//Glitch Shader effect
		// glitchPass = new THREE.ShaderPass( THREE.DigitalGlitch);
		// // // glitchPass.renderToScreen = true;
		// glitchPass.uniforms['tDisp'].value = 50.0;
		// united.addPass (glitchPass);

	//BadTV shader
		effect = new THREE.ShaderPass(THREE.BadTVShader);
		// effect.uniforms['tDiffuse'].value = 1.0;
		effect.uniforms['time'].value = 1.0;
		effect.uniforms['distortion'].value = 2.5;
		effect.uniforms['distortion2'].value = 1.0;
		effect.uniforms['speed'].value = 0.1;
		effect.uniforms['rollSpeed'].value = 8.0;
		// effect.renderToScreen = true;
		united.addPass(effect);

	//Colour displacment Shader
		effect = new THREE.ShaderPass( THREE.RGBShiftShader );
		effect.uniforms[ 'amount' ].value = 0.07;
		effect.renderToScreen = true;
		united.addPass( effect );

	//BloomPass
		// bloomPass = new THREE.BloomPass();
		// united.addPass (bloomPass);


	//Creates renderer stats at the top left of the canvas, Shows fps counter
		// stats = new Stats();
		// stats.domElement.style.position = 'absolute';
		// stats.domElement.style.top = '0px';
		// $('#Tv1').append( stats.domElement );

	//Mouse event listeners for movement
		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

		
		
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
			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			};

				
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