let scene = new THREE.Scene();
const loader = new THREE.TextureLoader();
loader.load('assets/textures/bg.jfif' , function(texture)
            {
             scene.background = texture;  
            });
let camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 1000 );

// =================================== TEXTURES ===================================
let textureConcrete = new THREE.TextureLoader().load( 'assets/textures/concrete.jpg' );
let textureWater = new THREE.TextureLoader().load( 'assets/textures/water.jpg' );
let textureCastle = new THREE.TextureLoader().load( 'assets/textures/castle.jpg' );
let textureWood = new THREE.TextureLoader().load( 'assets/textures/wood.jpg' );
let textureRoof = new THREE.TextureLoader().load( 'assets/textures/roof.jpg' );
let textureWindow = new THREE.TextureLoader().load( 'assets/textures/window.jpg' );
let textureTree = new THREE.TextureLoader().load( 'assets/textures/tree.jpg' );

// =================================== MATERIALS ==================================
let materialConcrete = new THREE.MeshBasicMaterial( {map: textureConcrete} );
let materialWater = new THREE.MeshBasicMaterial( {map: textureWater} );
let materialRedGrass = new THREE.MeshBasicMaterial({color: 0xff0000});
let materialCastle = new THREE.MeshBasicMaterial({map: textureCastle});
let materialWood = new THREE.MeshBasicMaterial({map: textureWood});
let materialRoof = new THREE.MeshBasicMaterial( { map: textureRoof } );
let materialTree = new THREE.MeshBasicMaterial({map: textureTree});

// ==================================== OBJECTS ===================================
// Concrete
const geometryGround = new THREE.BoxBufferGeometry(100, 1, 150); 
let ground = new THREE.Mesh( geometryGround, materialWater  );
ground.position.set(0, 5, 7);
scene.add(ground);

// Bridge
const geometryBridge = new THREE.BoxBufferGeometry(12, 1.5, 100); 
let bridge = new THREE.Mesh( geometryBridge, materialWood );
bridge.position.set(0, 5, 40);
scene.add(bridge);

// Bridge Fence Left
const geometryBridgeLeft = new THREE.BoxBufferGeometry(1, 5, 100); 
let bridgeLeft = new THREE.Mesh( geometryBridgeLeft, materialWood );
bridgeLeft.position.set(5.5, 4, 40);
scene.add(bridgeLeft);

// Bridge Fence Right
const geometryBridgeRight = new THREE.BoxBufferGeometry(1, 5, 100); 
let bridgeRight = new THREE.Mesh( geometryBridgeRight, materialWood );
bridgeRight.position.set(-5.5, 4, 40);
scene.add(bridgeRight);

// Front House
const geometryFrontHouse = new THREE.BoxBufferGeometry(15, 12, 11); 
let frontHouse = new THREE.Mesh( geometryFrontHouse, materialCastle );
frontHouse.position.set(0, 0, -10);
scene.add(frontHouse);

// Cylinder Right
const geometryCylinderRight = new THREE.CylinderBufferGeometry(2, 2, 13, 30);
let rightCylinder = new THREE.Mesh( geometryCylinderRight, materialCastle );
rightCylinder.position.set(-8, -2.25, -1);
scene.add(rightCylinder);

// Left of Front House
const geometryFrontHouseLeft = new THREE.BoxBufferGeometry(5, 12, 2); 
let frontHouseLeft = new THREE.Mesh( geometryFrontHouseLeft, materialCastle );
frontHouseLeft.rotation.y = 0.20;
frontHouseLeft.position.set(10.25, 0, -3.5);
scene.add(frontHouseLeft);

// Cylinder Left
const geometryCylinderLeft = new THREE.CylinderBufferGeometry(2, 2, 12, 30);
let cylinderLeft = new THREE.Mesh( geometryCylinderLeft, materialCastle );
cylinderLeft.position.set(14, 0, -2);
scene.add(cylinderLeft);

// Door
const geometryDoor = new THREE.BoxBufferGeometry(2.5, 8.5, 2); 
let door = new THREE.Mesh( geometryDoor, materialCastle );
door.position.set(0, -3, -1);
scene.add(door);

// Door Top
const geometryDoorTop = new THREE.BoxBufferGeometry(3, 2, 1); 
let doorTop = new THREE.Mesh( geometryDoorTop, materialCastle );
doorTop.position.set(0, -6, 0);
scene.add(doorTop);

// Stairs Top
const geometryStairsTop = new THREE.BoxBufferGeometry(7, 1.5, 4); 
let stairsTop = new THREE.Mesh( geometryStairsTop, materialConcrete );
stairsTop.position.set(0, 2, -2);
scene.add(stairsTop);

// Stairs Bottom
const geometryStairsBottom = new THREE.BoxBufferGeometry(9, 1.5, 8); 
let stairsBottom = new THREE.Mesh( geometryStairsBottom, materialConcrete );
stairsBottom.position.set(0, 3.5, -4);
scene.add(stairsBottom);

// Roof Center
const geometryRoofCenter = new THREE.ConeBufferGeometry(2, 3, 8); 
let roofCenter = new THREE.Mesh( geometryRoofCenter, materialRoof );
roofCenter.rotation.x = 3;
roofCenter.position.set(0, -8.5, 0);
scene.add(roofCenter);

// Roof Back
const geometryRoofBack = new THREE.ConeBufferGeometry(11, 5, 5); 
let roofBack = new THREE.Mesh( geometryRoofBack, materialRoof );
roofBack.rotation.x = 3;
roofBack.position.set(0, -9, -10);
scene.add(roofBack);

// Roof of FrontHouse Left
const geometryRoofOfFrontHouseLeft = new THREE.ConeBufferGeometry(4, 4, 8); 
let roofOfFrontHouseLeft = new THREE.Mesh( geometryRoofOfFrontHouseLeft, materialRoof );
roofOfFrontHouseLeft.rotation.x = 3;
roofOfFrontHouseLeft.rotation.y = 0.20;
roofOfFrontHouseLeft.position.set(9, -7.5, -4);
scene.add(roofOfFrontHouseLeft);

// Roof Right
const geometryRoofRight = new THREE.ConeBufferGeometry(3.5, 5, 8); 
let roofRight = new THREE.Mesh( geometryRoofRight, materialRoof );
roofRight.rotation.x = 3;
roofRight.position.set(-7.75, -11.5, -1);
scene.add(roofRight);

// Roof Left
const geometryRoofLeft = new THREE.ConeBufferGeometry(3, 5, 8); 
let roofLeft = new THREE.Mesh( geometryRoofLeft, materialRoof );
roofLeft.rotation.x = 3;
roofLeft.position.set(14, -8, -2);
scene.add(roofLeft);

// Trees
const geometryTree = new THREE.BoxBufferGeometry(150, 50, 1); 
let tree = new THREE.Mesh( geometryTree, materialTree );
tree.applyMatrix(new THREE.Matrix4().makeScale(-1, -1, 1));
tree.position.set(0, 0, -50);
scene.add(tree);

// ============================= FUNCTIONS OF OBJECTS =============================
// Time Variables
let startTime, endTime;
let timeGathered = false;

// Start Recording Time
function start() {
  startTime = new Date();
};

// End Recording Time and Return Time
function end() {
  endTime = new Date();
  let timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  let seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}

// Camera Initial Location and Rotations
camera.position.z = 30; 
camera.position.x = 0; // 0
camera.position.y = 0; 
camera.rotation.z = 3.142;
camera.rotation.x = 0;

// Camera Boolean Logic For Direction
let zCameraMovementForward = true;
let xCameraMovementForward = true;
let yCameraMovementForward = true;

// Camera Speed 
let zCameraSpeed = 0.1; // 0.05
let xCameraSpeed = 0.1; // 0.05
let yCameraSpeed = 0.0052;  // 0.5

// Camera Min and Max Position (z axis)
let zMinPosition = 30;
let zMaxPosition = -30;

// Renders and Projects the Scene
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
function animate() {

   // Logic for Z Camera Rotation
   if (camera.position.z > zMinPosition) {
      zCameraMovementForward = true;
   }
   if (camera.position.z < zMaxPosition) {
      zCameraMovementForward = false;
   }   
   if (zCameraMovementForward) {
      camera.position.z -= zCameraSpeed;
   }
   if (!zCameraMovementForward) {
      camera.position.z += zCameraSpeed;
   }

   // Logic for X Camera Rotation
   if (camera.position.z < 0) {
      xCameraMovementForward = true;
   }
   if (camera.position.z > 0) {
      xCameraMovementForward = false;
   }   
   if (xCameraMovementForward) {
      camera.position.x -= xCameraSpeed;
   }
   if (!xCameraMovementForward) {
      camera.position.x += xCameraSpeed;
   }

   camera.rotation.y += yCameraSpeed;

   // Record Rotation Time and Stop
   if (!zCameraMovementForward && camera.position.z > zMinPosition) {  
      end();
   }
   console.log("x: " + camera.position.x);
   console.log("y: " + camera.rotation.y);
   console.log("z: " + camera.position.z);
   requestAnimationFrame( animate );      
   renderer.render( scene, camera );
}

start();
animate();