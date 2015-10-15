
// var getE;

// var newPosition;
// var currentId;
var dead1, dead2, dead3, dead4, dead5, dead6, dead7, dead8;

var main = function(){
	// $('#drop').sortable('toArray');

	var breakWindow = false;

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
		stop: function(event, ui) {
		newPosition = ui.item.index();

		if (ui.item.attr("id") == "f1" && ui.item.index() == 3) {
		// alert("New position: " + newPosition + currentId);
		// window.close();
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
		// alert("New position: " + newPosition + currentId);
		// window.close();
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

		

		  if (ui.item.attr("id") == "f1" && ui.item.index() == 1) {
		// alert("New position: " + newPosition + currentId);
		// window.close();
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
        // alert("New position: " + ui.item.index() + ui.item.attr("id"));

      
    	}
        
	}).disableSelection();

	// $('.draggable').resizable({ 
	// 		animate: true, 
	// 		containment: "parent", 
	// 		helper: "ui-resizable-helper", 
	// 		maxHeight: 482, 
	// 		maxWidth: 951, 
	// 		minHeight: 123, 
	// 		minWidth: 239,
	// 		ghost: true,
	// 		autoHide: true
	// 		// alsoResize: document.this.childNodes
	// });
}

$(document).ready(main);



var canvases = [];
var mValX, mValY;
var views = [
				// {
				// 	width: 0.5,
				// 	height: 1.0,
				// 	eye: [ -100, 0, 0 ],
				// 	// up: [ 0, 1, 0 ],
				// 	fov: 10,
				// 	updateCamera: function ( camera, scene, mouseX, mouseY ) {
				// 	  camera.position.x += mouseX * 0.05;
				// 	  camera.position.x = Math.max( Math.min( camera.position.x, 2000 ), -2000 );
				// 	  camera.lookAt( scene.position );
				// 	}
				// },
				// {
				// 	width: 0.5,
				// 	height: 0.5,
				// 	eye: [ 0, 0, 0 ],
				// 	// up: [ 0, 0, 1 ],
				// 	fov: 45,
				// 	updateCamera: function ( camera, scene, mouseX, mouseY ) {
				// 	  camera.position.x -= mouseX * 0.05;
				// 	  camera.position.x = Math.max( Math.min( camera.position.x, 2000 ), -99 );
				// 	  camera.lookAt( camera.position.clone().setY( 0 ) );
				// 	}
				// },
				{
					width: 0.5,
					height: 0.5,
					eye: [ -10, 0, 0 ],
					// up: [ 0, 1, 0 ],
					fov: 20,
					updateCamera: function ( camera, mouseX, mouseY ) {
				// 	  camera.position.y -= mouseX * 0.05;
				// 	  camera.position.x -= mouseY * 0.05;
				// 	  if(mouseX < 0){
				// 	  	mValY = 99;
				// 	  }else{
				// 	  	mValY = -99;
				// 	  };
				// 	  if (mouseY < 0) {
				// 	  	mValX = 99;
				// 	  }else{
				// 	  	mValX = -99;
				// 	  };
				// 	  camera.position.y = Math.max( Math.min( camera.position.y, 299 ), mValY );
				// 	  camera.position.x = Math.max( Math.min( camera.position.x, 200 ), mValX );
				// 	  // camera.lookAt( scene.position );
					}
				}
			];

init();
animate();

function init(){

	function degToRad(d){
		return d * Math.PI/180;
	}

	var rot = degToRad(30);

	var fudge = 0.45;

			canvases.push( new ScreenShow( 'Tv1',  rot * -7 * fudge ) );
			canvases.push( new ScreenShow( 'Tv2',  rot * -6 * fudge ) );
			canvases.push( new ScreenShow( 'Tv3',  rot * -5 * fudge ) );
			canvases.push( new ScreenShow( 'Tv4',  rot * -4 * fudge ) );
			canvases.push( new ScreenShow( 'Tv5',  rot * -3 * fudge ) );
			canvases.push( new ScreenShow( 'Tv6',  rot * -2 * fudge ) );
			canvases.push( new ScreenShow( 'Tv7',  rot * -1 * fudge ) );
			canvases.push( new ScreenShow( 'Tv8',  rot * 0 * fudge ) );
			canvases.push( new ScreenShow( 'Tv9',  rot * 1 * fudge ) );
			canvases.push( new ScreenShow( 'Tv10', rot * 2 * fudge ) );
			canvases.push( new ScreenShow( 'Tv11', rot * 3 * fudge ) );
			canvases.push( new ScreenShow( 'Tv12', rot * 4 * fudge ) );
			canvases.push( new ScreenShow( 'Tv13', rot * 5 * fudge ) );
			canvases.push( new ScreenShow( 'Tv14', rot * 6 * fudge ) );
			canvases.push( new ScreenShow( 'Tv15', rot * 7 * fudge ) );
			canvases.push( new ScreenShow( 'Tv16', rot * 8 * fudge ) );

			
				
}

function animate(){
	for(var i = 0; i < canvases.length; ++ i){
		canvases[i].animate();
		views[i];
	}

	requestAnimationFrame(animate);
}

function ScreenShow(containerID, rotateY){
	var container, stats;
	// var videos = [];

	var virtualCamera, scene, renderer, united;
	var camera;

	var mesh1, light;

	var dae;

	var mouseX = 0, mouseY = 0;
	var cameraZ = 200;

	var windowHalfX = window.innerWidth/2;
	var windowHalfY = window.innerHeight/2;

	var rendertime = 0;
	var renderToggle = false;

	var windowWidth, windowHeight;
	var width, height;

	var glitchPass, bloomPass;

	var animations, animHandler;
    var kfAnimations = [];
    var kfAnimationsLength = 0;

	init();
	// animate();

	function updateOptions() {
				glitchPass.goWild=canvases.checked;
			}


	function init(){
		container = document.getElementById(containerID);

		for (var ii =  0; ii < views.length; ++ii ) {

					var view = views[ii];
					camera = new THREE.PerspectiveCamera( view.fov, container.clientWidth / container.clientHeight, 1, 10000 );
					camera.position.x = view.eye[ 0 ];
					camera.position.y = view.eye[ 1 ];
					camera.position.z = view.eye[ 1 ];
					// camera.up.x = view.up[ 0 ];
					// camera.up.y = view.up[ 1 ];
					// camera.up.z = view.up[ 2 ];
					view.camera = camera;
				}

		// camera = new THREE.PerspectiveCamera(10, container.clientWidth / container.clientHeight, 2, 2000);
		// camera.position.x = -100;
		// camera.position.y = rotateY;

		virtualCamera = new THREE.Camera();
		virtualCamera.add( camera );
		virtualCamera.position.z = cameraZ;

		scene = new THREE.Scene();
		scene.add(virtualCamera);

		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 0, 1 ).normalize();
		scene.add( light );

			// light.position.x = Math.random() - 0.5;
   			//light.position.y = Math.random() - 0.5;
   			//light.position.z = Math.random() - 0.5;

		// var noof_balls = 51;

		var canvas = document.createElement( 'canvas' ); 

		var context = canvas.getContext( '2d' );
		var gradient = context.createRadialGradient(canvas.width/2, canvas.height/2,0, canvas.width/2, canvas.height/2, canvas.width/2);
		gradient.addColorStop(0.1, 'rgba(210,210,210,1)');
		gradient.addColorStop(1, 'rgba(255,255,255,1)');

		context.fillStyle = gradient;
		context.fillRect(0,0, canvas.width, canvas.height);




		var loader = new THREE.ColladaLoader();

		loader.load('Resources/data2.dae', function (collada){
		// dae = collada.scene.children[0];
		// animations = collada.animations;
  //           kfAnimationsLength = animations.length;
  //           animHandler = THREE.AnimationHandler;
  //           for ( var i = 0; i < kfAnimationsLength; ++i )
  //       {
  //           var animation = animations[i];
  //           animHandler.add(animation);

  //           var kfAnimation = new THREE.KeyFrameAnimation(animation.node, animation.name);
  //           kfAnimation.timeScale = 0.01;
  //           kfAnimations.push(kfAnimation);

  //           kfAnimation.play(true, 0);
  //       }
		collada.scene.traverse( function(child) {
        if( child instanceof THREE.Mesh ) {
            child.material = new THREE.MeshBasicMaterial( { color: 0xFFFF33, wireframe: true  } );

            child.scale.set(30,30,30);
            scene.add( child );
        }
        // vertexColors: THREE.VertexColors
    	});
		// dae.scale.set(30,30,30);
		// scene.add(dae);
		});




		renderer = new THREE.WebGLRenderer({ anialias: true });
		// renderer.setSize(450,220);
		renderer.setClearColor ( 0x000000 );
		renderer.setPixelRatio( window.devicePixelRatio);
		renderer.setSize( container.clientWidth, container.clientHeight);
		container.appendChild( renderer.domElement );

		// effect = new THREE.AsciiEffect( renderer );
		// // effect.setSize( 450, 220 );
		// effect.setSize( container.clientWidth, container.clientHeight);
		// // container.appendChild( effect.domElement );
		// scene.add(effect);


		united = new THREE.EffectComposer(renderer);
		united.addPass( new THREE.RenderPass(scene, camera));

		

		



		glitchPass = new THREE.GlitchPass( THREE.DigitalGlitch);
		// glitchPass.renderToScreen = true;
		united.addPass (glitchPass);

		effect = new THREE.ShaderPass( THREE.RGBShiftShader );
		effect.uniforms[ 'amount' ].value = 0.0015;
		effect.renderToScreen = true;
		united.addPass( effect );

		// effect = new THREE.ShaderPass(THREE.BadTVShader);
		// effect.uniforms['tDiffuse'].value = 1.0;
		// effect.uniforms['time'].value = 1.0;
		// effect.uniforms['distortion'].value = 2.5;
		// effect.uniforms['distortion2'].value = 1.0;
		// effect.uniforms['speed'].value = 0.1;
		// effect.uniforms['rollSpeed'].value = 8.0;
		// effect.renderToScreen = true;
		// united.addPass(effect);

		// bloomPass = new THREE.BloomPass();
		// united.addPass (bloomPass);


		// stats = new Stats();
		// stats.domElement.style.position = 'absolute';
		// stats.domElement.style.top = '0px';
		// $('#Tv1').append( stats.domElement );

		document.addEventListener( 'mousemove', onDocumentMouseMove, false );
		document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );

		// scene.fog = new THREE.fog( 0x000000, 2000, 3000 );


		// var videoTexture = new THREEx.VideoTexture('Resources/EnterTheBeast.mp4');
		// var video = videoTexture.video;


		// var geometry =  new THREE.CubeGeometry(1,1,1);
		// var material = new THREE.MeshBasicMaterial({
		// 	map : videoTexture.texture
		// });

		// mesh = new THREE.Mesh(geometry, material);
		// scene.add(mesh);

		// videos.push(function(delta, now){
		// 	videoTexture.update(delta, now);
		// 	renderer.render( scene, camera)
		// })

	}


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


				function update() {
					rendertime += 0.01;

				};


				function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			};

				

				this.animate = function() {

										// render();
					

					virtualCamera.position.x = -mouseX *4;
					virtualCamera.position.y = -mouseY *-4;
					virtualCamera.position.z = cameraZ;
					virtualCamera.lookAt( scene.position );

					for ( var ii = 0; ii < views.length; ++ii ) {

					view = views[ii];
					camera = view.camera;
					view.updateCamera( camera, mouseX, mouseY );
					// renderer.enableScissorTest ( true );
					// camera.aspect = width / height;
					camera.updateProjectionMatrix();

					
					}

					united.render(); // new renderer to render scenes
					// stats.update();
					// renderer.render( scene, camera );
					// effect.render( scene, camera );

				};

				function render() {

					
					
				};
};