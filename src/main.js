import * as THREE from "three";

window.addEventListener("load", function () {
  init();
});

function init() {
  const renderer = new THREE.WebGLRenderer({
    // 배경을 밝게
    // alpha: true,
    // 계단 현상 삭제
    antialias: true,
  });

  // 캔버스 사이즈 설정
  renderer.setSize(window.innerWidth, window.innerHeight);

  // 도큐먼트에 renderer 추가
  document.body.appendChild(renderer.domElement);

  // 씬 추가
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    500
  );

  // 기하학 (원, 캡슐, 콘 등등)
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  // 질김
  // MeshBasicMaterial : 조명에 영향을 받지 않음
  const material = new THREE.MeshStandardMaterial({ color: 0xcc99ff });
  const cube = new THREE.Mesh(geometry, material);

  // 씬에 큐브 추가
  scene.add(cube);

  // x, y, z
  camera.position.set(3, 4, 5);

  // cube를 바라보도록 설정
  camera.lookAt(cube.position);

  // 직사광선
  const directionalLight = new THREE.DirectionalLight(0xf0f0f0, 1);
  directionalLight.position.set(-1, 2, 3);
  scene.add(directionalLight);

  // 은은한 조명
  const ambientLight = new THREE.AmbientLight(0xf0f0f0, 0.1);
  ambientLight.position.set(3, 2, 1);
  scene.add(ambientLight);

  renderer.render(scene, camera);
}
