// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GUI } from "dat.gui";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// const Hero = () => {
//   const canvas = useRef(null);
//   useEffect(() => {
//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(0x282c33);
//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     camera.position.z = 20;
//     scene.rotation.set(0.8, -1.5, 0);
//     scene.position.x = 7;

//     const light = new THREE.AmbientLight(0xffffff, 1);
//     scene.add(light);

//     const renderer = new THREE.WebGLRenderer({ canvas: canvas.current });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(devicePixelRatio);

//     const controls = new OrbitControls(camera, canvas.current);
//     controls.enableDamping = true;
//     controls.enableZoom = false;

//     const loader = new GLTFLoader();
//     let room;
//     loader.load(
//       "./assets/desktop_pc/scene.gltf",
//       (gltfScene) => {
//         room = gltfScene.scene;
//         // room.scale.set(2, 2, 2);
//         // room.position.set(2, 0, 3);
//         // room.rotation.set(2, -0.2, -0.1);
//         scene.add(room);
//       },
//       (onload) => {
//         console.log(onload);
//       }
//     );

//     const gui = new GUI();
//     gui.add(scene?.position, "x", -5, 10).name("roytatex");
//     gui.add(scene?.position, "y", -5, 10).name("roytatey");
//     gui.add(scene?.position, "z", -5, 10).name("roytatez");

//     const animate = () => {
//       controls.update();
//       renderer.render(scene, camera);
//       requestAnimationFrame(animate);
//     };
//     animate();
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="w-screen absolute left-0 h-screen flex flex-wrap justify-center max-md:mt-4 mb-20"
//     >
//       <canvas ref={canvas}></canvas>
//     </section>
//   );
// };

// export default Hero;
