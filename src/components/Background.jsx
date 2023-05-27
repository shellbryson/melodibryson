import React from 'react'

import Dragon from '../assets/dragon.png';

const containerStyle = {
  zIndex: -1, overflow: "hidden", width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0
}

const imageStyle = {
  display: "block", objectFit: "cover", width: '100%', height: '100%'
}

export default function Background() {
  return (
    <div style={containerStyle}>
      <img src={Dragon} alt="Picture of a hand drawn dragon" style={imageStyle}/>
    </div>
  )
}
