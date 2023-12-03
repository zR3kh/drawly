import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header container-fluid'>
        <div className="settings">
            <div className="container-thickness">
                <input 
                    className='thickness-number'
                    type="number" 
                    placeholder='Thickness'
                    max={99}
                    min={1}    
                />
            </div>
            <div className="container-color">
                <div className="color-number-wrapper">
                    <input 
                        className='color-number'
                        type="color" 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
