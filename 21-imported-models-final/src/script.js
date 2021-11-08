import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import {FBXLoader} from "three/examples/jsm/loaders/FBXLoader";

/**
 * Material
 */
const material = new THREE.MeshBasicMaterial()

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Control Keys
 */
 const keysPressed = {  }

 document.addEventListener('keydown', (event) => {
     console.log(event)
     if (event.shiftKey && characterControls) {
         characterControls.switchRunToggle()
     } else {
         (keysPressed)[event.key.toLowerCase()] = true
     }
 }, false);
 document.addEventListener('keyup', (event) => {
     (keysPressed)[event.key.toLowerCase()] = false
 }, false);


/**
 * Models
 */


/**
 * Material
 */
 let mixer = null

 const textureLoader = new THREE.TextureLoader()

 const floor02Texture = textureLoader.load('models/gym/texture/floor02.jpg')
 const groundTexture = textureLoader.load('models/gym/texture/ground.jpg')
 const bikeTexture = textureLoader.load('models/gym/texture/bike.jpg')
 const bike_tireTexture = textureLoader.load('models/gym/texture/bike_tire.jpg')
 const bushTexture = textureLoader.load('models/gym/texture/bush.jpg')
 const clockTexture = textureLoader.load('models/gym/texture/clock.jpg')
 const decoTexture = textureLoader.load('models/gym/texture/deco.jpg')
 const dumbbell01Texture = textureLoader.load('models/gym/texture/dumbbell01.jpg')
 const dumbbell02Texture = textureLoader.load('models/gym/texture/dumbbell02.jpg')
 const glassTexture = textureLoader.load('models/gym/texture/glass(opacity).jpg')
 const legmachine_01Texture = textureLoader.load('models/gym/texture/legmachine_01.jpg')
 const legmachine_02Texture = textureLoader.load('models/gym/texture/legmachine_02.jpg')
 const legmachine_03Texture = textureLoader.load('models/gym/texture/legmachine_03.jpg')
 //const pillarTexture = textureLoader.load('models/gym/texture/pillar.jpg')
 const posterTexture = textureLoader.load('models/gym/texture/poster.jpg')
 const rocksTexture = textureLoader.load('models/gym/texture/rocks.jpg')
 const runningmachineTexture = textureLoader.load('models/gym/texture/running.jpg')

 const shouldermachine_01Texture = textureLoader.load('models/gym/texture/shouldermachine_01.jpg')
 const shouldermachine_02Texture = textureLoader.load('models/gym/texture/shouldermachine_02.jpg')
 const shouldermachine_03Texture = textureLoader.load('models/gym/texture/shouldermachine_03.jpg')
 const shouldermachine_04Texture = textureLoader.load('models/gym/texture/shouldermachine_04.jpg')
 const treeTexture = textureLoader.load('models/gym/texture/tree.jpg')

 const wall_frontTexture = textureLoader.load('models/gym/texture/wall_front.jpg')
 const wall_LRTexture = textureLoader.load('models/gym/texture/wall_LR.jpg')
 const water_machineTexture = textureLoader.load('models/gym/texture/water.jpg')
 const windowTexture = textureLoader.load('models/gym/texture/glass(opacity).jpg')



const fbxLoader = new FBXLoader()
//초록색 바닥
fbxLoader.load(
    '/models/gym/export/floor02.FBX',
    (fbx) =>
    {
        const bakedMaterial = new THREE.MeshBasicMaterial({map: floor02Texture})
        fbx.children[0].material = bakedMaterial
        // fbx.scene.traverse((child)=>{
        //     child.material = bakedMaterial
        // })
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//베이지색 바닥
fbxLoader.load(
    '/models/gym/export/ground.FBX',
    (fbx) =>
    {
        const bakedMaterial = new THREE.MeshBasicMaterial({map: groundTexture})
        fbx.children[0].material = bakedMaterial
        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//바이크 바닥
fbxLoader.load(
    '/models/gym/export/bike.FBX',
    (fbx) =>
    {
        const bakedMaterial = new THREE.MeshBasicMaterial({map: bikeTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial
        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//바이크타이어 바닥
fbxLoader.load(
    '/models/gym/export/bike_tire.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: bike_tireTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial
        fbx.children[3].material = bakedMaterial
        fbx.children[4].material = bakedMaterial
        fbx.children[5].material = bakedMaterial
        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//바이크타이어 바닥
fbxLoader.load(
    '/models/gym/export/bush.FBX',
    (fbx) =>
    {
        console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: bushTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial
        fbx.children[3].material = bakedMaterial
        fbx.children[4].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)

fbxLoader.load(
    '/models/Male/Male.fbx',
    (fbx) =>
    {
        fbx.position.set(0,0.01,3)
        fbx.scale.set(0.1, 0.1, 0.1) 

        scene.add(fbx)
    }
)
fbxLoader.load(
    '/models/Female/Female.fbx',
    (fbx) =>
    {
        //fbx.scale()
        fbx.position.set(1,0.01,3)
        fbx.scale.set(0.1, 0.1, 0.1)
        scene.add(fbx)
    }
)



/**
 * Floor
 */
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshStandardMaterial({
        color: '#444444',
        metalness: 0,
        roughness: 0.5
    })
)
floor.receiveShadow = true
floor.rotation.x = - Math.PI * 0.5
scene.add(floor)

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(2, 2, 2)
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.target.set(0, 0.75, 0)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Model animation
    if(mixer)
    {
        mixer.update(deltaTime)
    }

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()