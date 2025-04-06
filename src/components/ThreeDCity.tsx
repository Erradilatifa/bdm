
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface ThreeDCityProps {
  cityName: string;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const ThreeDCity: React.FC<ThreeDCityProps> = ({ cityName, className = '', size = 'medium' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set dimensions based on size prop
  const dimensions = {
    small: { width: 150, height: 150 },
    medium: { width: 220, height: 180 },
    large: { width: 300, height: 250 }
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Create scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f8ff);

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      50, 
      dimensions[size].width / dimensions[size].height, 
      0.1, 
      1000
    );
    camera.position.set(8, 10, 15);
    camera.lookAt(0, 0, 0);

    // Create renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(dimensions[size].width, dimensions[size].height);
    containerRef.current.appendChild(renderer.domElement);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // Create a simple city based on cityName
    const cityGroup = new THREE.Group();
    
    // Ground plane
    const groundGeometry = new THREE.PlaneGeometry(20, 20);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x7cac7c, 
      side: THREE.DoubleSide 
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    cityGroup.add(ground);
    
    // Buildings
    const buildingCount = {
      'Paris': 15,
      'Lyon': 10,
      'Marseille': 12,
      'Bordeaux': 8,
      'Lille': 9,
      'Toulouse': 11,
      'Nice': 10,
      'default': 10
    };
    
    const cityColors = {
      'Paris': 0xb0c4de,
      'Lyon': 0xd3d3d3,
      'Marseille': 0xffdab9,
      'Bordeaux': 0xbc8f8f,
      'Lille': 0xdcdcdc,
      'Toulouse': 0xffa07a,
      'Nice': 0xffe4c4,
      'default': 0xd3d3d3
    };
    
    // Create buildings
    const count = buildingCount[cityName as keyof typeof buildingCount] || buildingCount.default;
    const baseColor = cityColors[cityName as keyof typeof cityColors] || cityColors.default;

    for (let i = 0; i < count; i++) {
      const width = Math.random() * 2 + 1;
      const height = Math.random() * 6 + 2;
      const depth = Math.random() * 2 + 1;
      
      const geometry = new THREE.BoxGeometry(width, height, depth);
      
      // Vary the building colors slightly
      const colorVariation = Math.random() * 0x222222 - 0x111111;
      const buildingColor = new THREE.Color(baseColor).offsetHSL(0, 0, Math.random() * 0.2 - 0.1);
      
      const material = new THREE.MeshStandardMaterial({ color: buildingColor });
      const building = new THREE.Mesh(geometry, material);
      
      // Position buildings randomly on the "ground"
      building.position.x = Math.random() * 16 - 8;
      building.position.y = height / 2;
      building.position.z = Math.random() * 16 - 8;
      
      cityGroup.add(building);
    }
    
    // Add a landmark based on the city
    if (cityName === 'Paris') {
      // Simple Eiffel Tower
      const towerGeometry = new THREE.ConeGeometry(1, 8, 4);
      const towerMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
      const tower = new THREE.Mesh(towerGeometry, towerMaterial);
      tower.position.set(0, 4, 0);
      cityGroup.add(tower);
    } else if (cityName === 'Marseille') {
      // Simple sea
      const seaGeometry = new THREE.PlaneGeometry(20, 10);
      const seaMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x1e90ff,
        transparent: true,
        opacity: 0.8
      });
      const sea = new THREE.Mesh(seaGeometry, seaMaterial);
      sea.rotation.x = -Math.PI / 2;
      sea.position.z = 10;
      sea.position.y = 0.1;
      cityGroup.add(sea);
    }
    
    scene.add(cityGroup);

    // Create simple roads
    const roadGeometry = new THREE.PlaneGeometry(1, 20);
    const roadMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const road1 = new THREE.Mesh(roadGeometry, roadMaterial);
    road1.rotation.x = -Math.PI / 2;
    road1.position.y = 0.01;
    scene.add(road1);

    const road2 = new THREE.Mesh(roadGeometry, roadMaterial);
    road2.rotation.x = -Math.PI / 2;
    road2.rotation.z = Math.PI / 2;
    road2.position.y = 0.01;
    scene.add(road2);

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      cityGroup.rotation.y += 0.003;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Clean up
    return () => {
      cancelAnimationFrame(animationId);
      renderer.dispose();
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, [cityName, size]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg shadow-lg ${className}`}
      style={{ width: dimensions[size].width, height: dimensions[size].height }}
    />
  );
};

export default ThreeDCity;
