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

 const floorTexture = textureLoader.load('models/gym/texture/floor.jpg')
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
 const posterTexture = textureLoader.load('models/gym/texture/poster.jpg')
 const rocksTexture = textureLoader.load('models/gym/texture/rock.jpg')
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

 const armmachine_01Texture = textureLoader.load('models/gym/texture/armmachine_01.jpg')
 const armmachine_02Texture = textureLoader.load('models/gym/texture/armmachine_02.jpg')


const fbxLoader = new FBXLoader()
//초록색 바닥
fbxLoader.load(
    '/models/gym/export/floor.FBX',
    (fbx) =>
    {
        const bakedMaterial = new THREE.MeshBasicMaterial({map: floorTexture})
        fbx.children[0].material = bakedMaterial
        // fbx.scene.traverse((child)=>{
        //     child.material = bakedMaterial
        // })
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
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
//바이크
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
//바이크타이어
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
//부쉬
fbxLoader.load(
    '/models/gym/export/bush.FBX',
    (fbx) =>
    {
        //console.log(fbx)
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
//시계 
fbxLoader.load(
    '/models/gym/export/clock.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: clockTexture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//데코 요소들(시간, 이름 등등)
fbxLoader.load(
    '/models/gym/export/deco.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: decoTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial
        fbx.children[3].material = bakedMaterial
        fbx.children[4].material = bakedMaterial
        fbx.children[5].material = bakedMaterial
        fbx.children[6].material = bakedMaterial



        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//덤벨1
fbxLoader.load(
    '/models/gym/export/dumbbell01.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: dumbbell01Texture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//덤벨2
fbxLoader.load(
    '/models/gym/export/dumbbell02.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: dumbbell02Texture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//창문
fbxLoader.load(
    '/models/gym/export/window.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: windowTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial
        fbx.children[3].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//leg machine1
fbxLoader.load(
    '/models/gym/export/legmachine_01.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: legmachine_01Texture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//leg machine2
fbxLoader.load(
    '/models/gym/export/legmachine_02.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: legmachine_02Texture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//leg machine3
fbxLoader.load(
    '/models/gym/export/legmachine_03.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: legmachine_03Texture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//Poster
fbxLoader.load(
    '/models/gym/export/poster.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: posterTexture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//Rock
fbxLoader.load(
    '/models/gym/export/rocks.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: rocksTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial
        fbx.children[3].material = bakedMaterial
        fbx.children[4].material = bakedMaterial
        fbx.children[5].material = bakedMaterial
        fbx.children[6].material = bakedMaterial
        fbx.children[7].material = bakedMaterial



        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//Running Machine1
fbxLoader.load(
    '/models/gym/export/runningmachine01.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: runningmachineTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//Running Machine2
fbxLoader.load(
    '/models/gym/export/runningmachine02.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: runningmachineTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//shouldermachine_01
fbxLoader.load(
    '/models/gym/export/shouldermachine_01.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: shouldermachine_01Texture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//shouldermachine_02
fbxLoader.load(
    '/models/gym/export/shouldermachine_02.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: shouldermachine_02Texture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//shouldermachine_03
fbxLoader.load(
    '/models/gym/export/shouldermachine_03.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: shouldermachine_03Texture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//shouldermachine_04
fbxLoader.load(
    '/models/gym/export/shouldermachine_04.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: shouldermachine_04Texture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//Tree
fbxLoader.load(
    '/models/gym/export/tree01.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: treeTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
fbxLoader.load(
    '/models/gym/export/tree02.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: treeTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
fbxLoader.load(
    '/models/gym/export/tree03.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: treeTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
fbxLoader.load(
    '/models/gym/export/tree04.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: treeTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
fbxLoader.load(
    '/models/gym/export/tree05.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: treeTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
fbxLoader.load(
    '/models/gym/export/tree06.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: treeTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
fbxLoader.load(
    '/models/gym/export/tree07.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: treeTexture})
        fbx.children[0].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//wall_front
fbxLoader.load(
    '/models/gym/export/wall_front.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: wall_frontTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial
        fbx.children[3].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//wall_LR
fbxLoader.load(
    '/models/gym/export/wall_LR.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: wall_LRTexture})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial

        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//pillar
fbxLoader.load(
    '/models/gym/export/pillar.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})
        fbx.children[0].material = bakedMaterial
        fbx.children[1].material = bakedMaterial
        fbx.children[2].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//water_machine
fbxLoader.load(
    '/models/gym/export/water_machine.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: water_machineTexture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//water_machine
fbxLoader.load(
    '/models/gym/export/armmachine_01.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: armmachine_01Texture})
        fbx.children[0].material = bakedMaterial


        //fbx.scale()
        fbx.position.set(-0.5,0.01,-2)
        fbx.scale.set(0.2, 0.2, 0.2)
        scene.add(fbx)
    }
)
//water_machine
fbxLoader.load(
    '/models/gym/export/armmachine_02.FBX',
    (fbx) =>
    {
        //console.log(fbx)
        const bakedMaterial = new THREE.MeshBasicMaterial({map: armmachine_02Texture})
        fbx.children[0].material = bakedMaterial


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
        //console.log(fbx)
        fbx.position.set(0,0.01,3)
        fbx.scale.set(0.1, 0.1, 0.1) 

        const anim = new FBXLoader()
        anim.load(
            '/models/Male/Breathing.fbx',
            (anim) => {
                const idle = anim.animations[0]
                console
                idle.play()
            }
        )


        scene.add(fbx)
    }
)


fbxLoader.load(
    '/models/Male/Male_Idle.fbx',
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