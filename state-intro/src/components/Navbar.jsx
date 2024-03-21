import React from 'react'
import { useEffect } from 'react'

const Navbar = ({color}) => {
    useEffect(() => {
        alert("Hey, I will run on every render.")
    })
      
    useEffect(() => {
        alert("Hey, welcome to my page.")
      }, [])

    useEffect(() => {
        alert("Color was changed")
    }, [color])
    
    useEffect(() => {
      alert("Navbar.jsx")
    
      return () => {
        alert("Unmounted")
      }
    }, [])
    
  return (
    <div>
      I'm a navbar of {color} color hehe...
    </div>
  )
}

export default Navbar
