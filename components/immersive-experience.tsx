"use client"

import { useState, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

// Using placeholder images that are guaranteed to exist
const destinations = [
  {
    name: "Bali",
    color: "#0088cc",
    description: "Tropical paradise with lush landscapes and vibrant culture",
  },
  {
    name: "Santorini",
    color: "#3366ff",
    description: "Iconic white buildings with blue domes overlooking the Aegean Sea",
  },
  {
    name: "Kyoto",
    color: "#ff3366",
    description: "Ancient temples and traditional gardens in the heart of Japan",
  },
  {
    name: "Machu Picchu",
    color: "#33cc66",
    description: "Mysterious Incan citadel set high in the Andes Mountains",
  },
  {
    name: "Iceland",
    color: "#6633ff",
    description: "Land of fire and ice with dramatic landscapes and northern lights",
  },
]

function ColorSphere({ color }) {
  const sphereRef = useRef()

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.001
    }
  })

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[5, 64, 64]} />
      <meshStandardMaterial color={color} side={THREE.BackSide} />
    </mesh>
  )
}

function Controls() {
  const [currentDestination, setCurrentDestination] = useState(0)

  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 0.1]} />
        <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} rotateSpeed={-0.5} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ColorSphere color={destinations[currentDestination].color} />
        <Environment preset="sunset" />
      </Canvas>
      <UI currentDestination={currentDestination} setCurrentDestination={setCurrentDestination} />
    </>
  )
}

function UI({ currentDestination, setCurrentDestination }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute left-0 right-0 top-0 bg-gradient-to-b from-black to-transparent p-8"
      >
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold text-white">Discover the World</h1>
          <p className="mt-2 text-xl text-white/80">Immersive travel experiences</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8"
      >
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold text-white">{destinations[currentDestination].name}</h2>
          <p className="mb-6 text-xl text-white/80">{destinations[currentDestination].description}</p>

          <div className="mb-8 flex flex-wrap gap-2">
            {destinations.map((dest, index) => (
              <Button
                key={dest.name}
                variant={currentDestination === index ? "default" : "outline"}
                onClick={() => setCurrentDestination(index)}
                style={{
                  backgroundColor: currentDestination === index ? dest.color : "transparent",
                  borderColor: dest.color,
                  color: currentDestination === index ? "white" : dest.color,
                }}
              >
                {dest.name}
              </Button>
            ))}
          </div>

          <Button size="lg" style={{ backgroundColor: destinations[currentDestination].color }}>
            Explore {destinations[currentDestination].name}
          </Button>
        </div>
      </motion.div>
    </>
  )
}

export default function ImmersiveExperience() {
  return <Controls />
}

