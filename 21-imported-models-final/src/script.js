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

let mixer = null

const fbxLoader = new FBXLoader()
fbxLoader.load(
    '/models/gym/gym(no_wall).FBX',
    (fbx) =>
    {
        fbx.material = new THREE.MeshToonMaterial()
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