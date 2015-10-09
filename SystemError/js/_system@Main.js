

var main = function(){

	$('.draggable').draggable({ 
			containment: "parent", 
			snap: true, 
			snapMode: "outer",
			revert: "invalid"
	}).resizable({ 
			animate: true, 
			containment: "parent", 
			helper: "ui-resizable-helper", 
			maxHeight: 482, 
			maxWidth: 951, 
			minHeight: 123, 
			minWidth: 239,
			ghost: true,
			autoHide: true
			// alsoResize: document.this.childNodes
	});


	
}

$(document).ready(main);



var canvases = [];
 

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
	}

	requestAnimationFrame(animate);
}

function ScreenShow(containerID, rotateY){
	var container, stats;
	// var videos = [];

	var virtualCamera, camera, scene, renderer, united;

	var mesh, light;

	var dae;

	var mouseX = 0, mouseY = 0;
	var cameraZ = 1800;

	var windowHalfX = window.innerWidth/2;
	var windowHalfY = window.innerHeight/2;

	var rendertime = 0;
	var renderToggle = false;

	var glitchPass, bloomPass;

	init();
	// animate();

	function updateOptions() {
				glitchPass.goWild=canvases.checked;
			}


	function init(){
		container = document.getElementById(containerID);

		camera = new THREE.PerspectiveCamera(20, container.clientWidth / container.clientHeight, 1, 20000);
		camera.position.y = rotateY;

		virtualCamera = new THREE.Camera();
		virtualCamera.add( camera );
		virtualCamera.position.z = cameraZ;

		scene = new THREE.Scene();
		scene.add(virtualCamera);

		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 0, 1 ).normalize();
		scene.add( light );

			// light.position.x = Math.random() - 0.5;
   //          light.position.y = Math.random() - 0.5;
   //          light.position.z = Math.random() - 0.5;

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
		dae = collada.scene;
		dae.scale.set(30,30,30);
		scene.add(dae);
		});



		renderer = new THREE.WebGLRenderer({ anialias: true });
		// renderer.setSize(450,220);
		renderer.setClearColor ( 0x000000 );
		renderer.setPixelRatio( window.devicePixelRatio);
		renderer.setSize( container.clientWidth, container.clientHeight);
		container.appendChild( renderer.domElement );

		

		united = new THREE.EffectComposer(renderer);
		united.addPass( new THREE.RenderPass(scene, camera));
		glitchPass = new THREE.GlitchPass();
		// bloomPass = new THREE.BloomPass();
		glitchPass.renderToScreen = true;
		// united.addPass (bloomPass);
		united.addPass (glitchPass);


		// effect = new THREE.AsciiEffect( renderer );
		// effect.setSize( 450, 220 );
		// effect.setSize( container.clientWidth, container.clientHeight);
		// container.appendChild( effect.domElement );


		stats = new Stats();
		stats.domElement.style.position = 'absolute';
		stats.domElement.style.top = '0px';
		container.appendChild( stats.domElement );

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

				}


				

				this.animate = function() {

					render();
					united.render(); // new renderer to render scenes
					stats.update();

				};

				function render() {

					
					virtualCamera.position.x = -mouseX *4;
					virtualCamera.position.y = -mouseY *4;
					virtualCamera.position.z = cameraZ;
					virtualCamera.lookAt( scene.position );
					// renderer.render( scene, camera );
					// effect.render( scene, camera );
				}
};