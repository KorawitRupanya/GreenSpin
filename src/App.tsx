import * as React from 'react';
import { useRef } from 'react'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'

const woodWest: string = require("./assets/WoodBiowaste.svg").default;
const simpleLeaf: string = require("./assets/Simpleleaf.svg").default;
const pulp: string = require("./assets/Pulp.svg").default;
const white_fiber:string = require( "./assets/White_Fiber.svg").default;
const fabric: string = require("./assets/FabricMaterial.svg").default;
const finalProduct: string = require("./assets/FinalProduct.svg").default;
const spinnovaLogo: string = require("./assets/Spinnova_logo_white.svg").default;

// Little helpers ...
const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function App() {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#C0EC83' }}>
      <Parallax ref={parallax} pages={6}>
        <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#A7E074' }} />
        <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#96CC39' }} />
        <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: '#6BA32D' }} />
        <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: '#547A1D' }} />
        <ParallaxLayer offset={5} speed={1} style={{ backgroundColor: '#3B5C0A' }} />

        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.6 }}>
          <img src={simpleLeaf} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={simpleLeaf} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={simpleLeaf} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={simpleLeaf} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
          <img src={simpleLeaf} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
          <img src={simpleLeaf} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={simpleLeaf} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
          <img src={simpleLeaf} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
          <img src={simpleLeaf} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={simpleLeaf} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
          <img src={simpleLeaf} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <div style={{width: '100%'}}>
          <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
          Wood Waste
        </h1>
          <img src={woodWest} style={{ width: '100%' }} />
        </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <div style={{width: '100%'}}>
          <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
          Paper Pulp
        </h1>
          <img src={pulp} style={{ width: '100%' }} />
        </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <div style={{width: '100%'}}>
          <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
          Spinnova Fiber
        </h1>
          <img src={white_fiber} style={{ width: '100%' }} />
        </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={0.1}
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <div>
            <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
          Fabric Material
        </h1>
          <img src={fabric} style={{ width: '100%' }} />
            </div>
           
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
         <div>
            <h1 style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
          Final Product
        </h1>
          <img src={finalProduct} style={{ width: '100%' }} />
            </div>
        </ParallaxLayer>
        
        <ParallaxLayer
          offset={5}
          speed={0.1}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => parallax.current.scrollTo(0)}>
          <img src={spinnovaLogo} style={{ width: '40%' }} />
        </ParallaxLayer>

        <ParallaxLayer
          offset={5.5}
          speed={-0.4}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
          <img src={url('earth')} style={{ width: '60%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
