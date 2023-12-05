import React from 'react'
import './Header.css'

export default function Header(props) {

  return (
    <div className='header container-fluid'>
      <div className="settings">
          <div className="container-thickness">
              <input 
                  className='thickness-number'
                  type="number" 
                  placeholder='Thickness'
                  value={props.currentThick}
                  onChange={(e) => props.updateThick(e.target.value)}
                  max={99}
                  min={1}    
              />
          </div>
          <div className="container-color">
              <div className="color-number-wrapper">
                  <input 
                      value={props.currentColor}
                      onChange={(e) => props.updateColor(e.target.value)}
                      className='color-number'
                      type="color" 
                  />
              </div>
          </div>
      </div>
    </div>
  )
}
