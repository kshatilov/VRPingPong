import * as BABYLON from 'babylonjs'


const canvas = document.getElementById("canvas");
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
let box;

var createScene = async function () {
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 0, 0), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, true);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 0, 0), scene);
    light.intensity = 0.7;
    const env = scene.createDefaultEnvironment();
    const xr = await scene.createDefaultXRExperienceAsync({
        floorMeshes: [env.ground],
    });
    return scene;
};

createScene();
scene.createDefaultXRExperienceAsync();

let createBox = () => {
    box = BABYLON.Mesh.CreateBox("box", 2, scene);
    const boxMaterial = new BABYLON.StandardMaterial("material", scene);
    boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
    box.material = boxMaterial;
    box.position._x = 10;
    box.position._y = 10;
    box.position._z = 10;
}
createBox();

var renderLoop = function () {
    box.rotation.x += 0.002;
    box.rotation.y += 0.004;
    scene.render();
};

engine.runRenderLoop(renderLoop);


