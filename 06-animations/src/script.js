import './style.css'
import * as THREE from 'three'
import gsap from 'gsap'
import { RectAreaLight } from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'green' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)


const tick = () =>
{
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}


/**
 * Animate
 */
function right(){
    
}

 window.addEventListener('keydown', function(e){
    console.log("pressed");
   if(e.keyCode === 39){
       //right
        gsap.to(mesh.position, { duration: 1, delay: 0, x: 2 })
        gsap.to(mesh.position, { duration: 1, delay: 1, x: 0 })
        tick()
   }
   else if(e.keyCode === 37){
       //left
       gsap.to(mesh.position, { duration: 1, delay: 0, x: -2 })
       gsap.to(mesh.position, { duration: 1, delay: 1, x: 0 })
       tick()
   }
   else if(e.keyCode ===38){
       //up
        gsap.to(mesh.position, { duration: 1, delay: 0, y: 1 })
        gsap.to(mesh.position, { duration: 1, delay: 1, y: 0 })
        tick()
   }
   else if(e.keyCode ===40){
    //down
     gsap.to(mesh.position, { duration: 1, delay: 0, y: -1 })
     gsap.to(mesh.position, { duration: 1, delay: 1, y: 0 })
     tick()
}
})