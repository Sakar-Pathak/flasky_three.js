let scene, camera, renderer;

function init() {

    scene = new THREE.Scene();

    scene.background = new THREE.Color(0xd2fec5);

    camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,5000);

    camera.rotation.y = 45/180*Math.PI;

    camera.position.x = 8;

    camera.position.y = 1;

    camera.position.z = 10;



    renderer = new THREE.WebGLRenderer({antialias:true});

    renderer.setSize(window.innerWidth,window.innerHeight);

    document.body.appendChild(renderer.domElement);

    function render() {
        renderer.render( scene, camera );
     }





    controls = new THREE.OrbitControls(camera,renderer.domElement);

    controls.addEventListener('change', render);

    hlight = new THREE.AmbientLight (0x4040a6,0);

    scene.add(hlight);

    directionalLight = new THREE.DirectionalLight(0xffffff,0);

    directionalLight.position.set(0,10,0);

    directionalLight.castShadow = true;

    scene.add(directionalLight);

    light = new THREE.PointLight(0xfdfbd3,1);

    light.position.set(0,3,5);

    scene.add(light);

    light2 = new THREE.PointLight(0xfdfbd3,1);

    light2.position.set(5,1,0);

    scene.add(light2);

    light3 = new THREE.PointLight(0xfdfbd3,1);

    light3.position.set(0,1,-5);

    scene.add(light3);

    light4 = new THREE.PointLight(0xfdfbd3,1);

    light4.position.set(-5,3,5);

    scene.add(light4);







    let loader = new THREE.GLTFLoader();

    loader.load('static/models/rocket.glb', function(gltf){

        car = gltf.scene.children[0];

        car.scale.set(0.5,0.5,0.5);

        scene.add(gltf.scene);

        animate();

    });

}



function animate() {

    renderer.render(scene,camera);

    requestAnimationFrame(animate);

}

init();
