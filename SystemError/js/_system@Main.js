

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
			maxHeight: 422, 
			maxWidth: 802, 
			minHeight: 105, 
			minWidth: 200,
			ghost: true,
			autoHide: true
			// alsoResize: document.this.childNodes
	});


	
}

$(document).ready(main);


var canvases = [];
 

init();

function init(){

	function degToRad(d){
		return d * Math.PI/180;
	}

	var rot = degToRad(30);

	var fudge = 0.45;

			// canvases.push( new ScreenShow( 'Tv1',  rot * -7 * fudge ) );
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
	var container;

	var camera, scene, renderer;

	var mesh, light;

	var mouseX = 0, mouseY = 0;
	var cameraZ = 1000;

	var windowHalfX = window.innerWidth/2;
	var windowHalfY = window.innerHeight/2;

	var rendertime = 0;
	var renderToggle = false;
	var screenHolder;

	init();

	function init(){
		container = document.getElementById(containerID);

		camera = new THREE.PerspectiveCamera(20, container.clientWidth / container.clientHeight, 1, 20000);
		camera.position.z = 500;

		scene = new THREE.Scene();
		// scene.fog = new THREE.fog( 0x000000, 2000, 3000 );

		light = new THREE.DirectionalLight( 0xffffff );
		light.position.set( 0, 0, 1 ).normalize();
			scene.add( light );

					
		var canvas = document.createElement( 'canvas' ); 


	var WhiteRing2 = function() { //trying to build this on my own! following the origional code for the beat detection though


	var groupHolder; // Need this (I dont know why D:)
	var material;

	var constructs = []; // Geometry array!

	var scl = 0; // dont know what this does

	function init(){


		events.on("update", update); // for Beat detection
		events.on("onBeat", onBeat);


		var radius = 300;
		groupHolder = new THREE.Object3D();
		screenHolder.add(groupHolder);

		material = new THREE.MeshBasicMaterial( { // Rendering the Geometry!
			color: 0xFF3399, 
			wireframe: false,
			transparent:false,
			opacity:3
		} );


	//Geometry shapes!
		geometry = new THREE.RingGeometry( radius*.8,radius, 50,3, 3, Math.PI*2) ;
		mesh = new THREE.Mesh( geometry, material );
		groupHolder.add( mesh );
		constructs.push(mesh); //adds to the array!

		geometry = new THREE.CubeGeometry(100,100,100);
		mesh = new THREE.Mesh(geometry, material);
		groupHolder.add(mesh);
		constructs.push(mesh);

		geometry = new THREE.RingGeometry( radius*.6,radius, 3,1, 0, Math.PI*2) ;
		mesh = new THREE.Mesh( geometry, material );
		groupHolder.add( mesh );
		constructs.push(mesh);


		geometry = new THREE.RingGeometry( radius*.6,radius, 24,1, 0, Math.PI*2) ;
		mesh = new THREE.Mesh( geometry, material );
		groupHolder.add( mesh );
		constructs.push(mesh);

		geometry = new THREE.RingGeometry( radius*.6,radius, 8,1, 0, Math.PI*2) ;
		mesh = new THREE.Mesh( geometry, material );
		groupHolder.add( mesh );
		constructs.push(mesh);

		

		count = constructs.length; 

	}

	function showNewShape() { // this is required for the shapes to move (also breaks the origonal code if tampered with (super SPeed))

		groupHolder.rotation.z = Math.random()*Math.PI;

		for (var i = 0; i <= count-1;i++){
			constructs[i].rotation.y = Math.PI/2; //Breaks everything glad i kept it! :S
		}

		if (Math.random() < .5){
			var r = Math.floor(Math.random() * count);
			constructs[r].rotation.y = Math.random()*Math.PI/4-Math.PI/8;
		}

	}

	function update() { // updates the thingy with the beats
		groupHolder.rotation.z += 0.01; 
		var gotoScale = AudioHandler.getVolume()*1.2 + .1;
		scl += (gotoScale - scl)/3;
		groupHolder.scale.x = groupHolder.scale.y = groupHolder.scale.z = scl;
	}

	function onBeat(){
		showNewShape();
	}

	return {
		init:init, // thought i might need this since its in the origonal code
		update:update,
		onBeat:onBeat,
	};
	}();


		renderer = new THREE.WebGLRenderer({ anialias: false });
		renderer.setSize(350,190);
		renderer.setClearColor ( 0x000000 );
		container.appendChild( renderer.domElement );

		screenHolder = new THREE.Object3D();
			scene.add(screenHolder);

		activeViz = [WhiteRing2];

		activeVizCount = activeViz.length;
					for ( var j = 0; j < activeVizCount; j ++ ) {
						activeViz[j].init();
				}


	}
				function update() {
					rendertime += 0.01;

				}


				

				this.animate = function() {

					render();

				};

				function render() {

					renderer.render( scene, camera );

				}
};