import { Canvas, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Stars, Text3D } from "@react-three/drei";
import { Suspense, useState } from "react";
import CustomCursor from "../../components/CursorEffect/CursorEffect";
import HamBtn from "../../components/Landing/Navbar/HamBtn/Btn";

const FloatingText = () => {
  const goldenMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color(0xffd700),
    emissive: new THREE.Color(0xffd700),
    roughness: 0.5,
    metalness: 1,
  });

  const glowMaterial = new THREE.MeshBasicMaterial({
    color: 0xffd700,
    blending: THREE.AdditiveBlending,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });

  const [yearText] = useState("Ignitia 2025");

  return (
    <>
      <Text3D
        font="/Fonts/samarkan.json"
        size={1}
        position={[-3, 0, -0.01]}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.02}
        bevelSegments={5}
        material={glowMaterial}
      >
        {yearText}
      </Text3D>

      <Text3D
        font="/Fonts/samarkan.json"
        size={1}
        position={[-3, 0, 0]}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.1}
        bevelSize={0.02}
        bevelSegments={5}
        material={goldenMaterial}
      >
        {yearText}
      </Text3D>

      <Text3D
        font="/Fonts/helvetiker_regular.typeface.json"
        size={1}
        position={[-4, -3, 0]}
        curveSegments={10}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={4}
      >
        Page Not Found
      </Text3D>
    </>
  );
};

const Logo = () => {
  const texture = useLoader(THREE.TextureLoader, "/icon.png");

  return (
    <mesh position={[0, 3, 0]}>
      <boxGeometry args={[3, 2, 0]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const ComingSoon = () => {
  const rotationSpeed = 0.2;

  return (
    <>
      <CustomCursor />

      <div className="hamBtn">
        <HamBtn />
      </div>

      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#000",
          position: "relative",
        }}
      >
        <Canvas camera={{ position: [0, 0, 15] }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Logo />
            <FloatingText />
            <Stars
              radius={100}
              depth={50}
              count={5000}
              factor={4}
              saturation={0}
            />
          </Suspense>
          <OrbitControls
            autoRotate
            autoRotateSpeed={rotationSpeed}
            enableZoom={false}
          />
        </Canvas>

        <button
          onClick={() => window.history.back()}
          className="Btn"
          style={{
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          GO BACK
        </button>

        <style jsx>{`
          .Btn {
            width: 180px;
            height: 60px;
            border: none;
            border-radius: 10px;
            background: linear-gradient(
              to right,
              #77530a,
              #ffd277,
              #77530a,
              #77530a,
              #ffd277,
              #77530a
            );
            background-size: 250%;
            background-position: left;
            color: #ffd277;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition-duration: 1s;
            overflow: hidden;
          }

          .Btn::before {
            position: absolute;
            content: "GO BACK";
            color: #ffd277;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 97%;
            height: 90%;
            border-radius: 8px;
            transition-duration: 1s;
            background-color: rgba(0, 0, 0, 0.842);
            background-size: 200%;
          }

          .Btn:hover {
            background-position: right;
            transition-duration: 1s;
          }

          .Btn:hover::before {
            background-position: right;
            transition-duration: 1s;
          }

          .Btn:active {
            transform: scale(0.95);
          }

          @media (max-width: 768px) {
            .Btn {
              width: 130px;
              height: 55px;
              margin-bottom: 50px;
            }

            .Btn::before {
              font-size: 14px;
            }

            canvas {
              width: 100%;
              height: 60vh;
            }

            .Btn {
              font-size: 14px;
            }
          }

          @media (max-width: 480px) {
            .Btn {
              width: 140px;
              height: 50px;
              margin-bottom: 50px;
            }

            .Btn::before {
              font-size: 12px;
            }

            canvas {
              height: 50vh;
            }
          }
        `}</style>

        <style jsx global>{`
          .hamBtn {
            position: fixed;
            top: 30px;
            left: 20px;
            z-index: 5200;
          }
          @media screen and (min-width: 1921px) {
            .hamBtn {
              top: 60px;
              left: 60px;
            }
          }
          @media screen and (max-width: 585px) {
            .hamBtn {
              right: 20px;
              top: 15px;
              left: unset;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default ComingSoon;
