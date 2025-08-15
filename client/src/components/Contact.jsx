import React from 'react'
import { useState,useEffect } from 'react'
import NavBar from './NavBar'
import Hero2 from '../contact/Hero2'
const Contact = ({ isDark, setIsDark }) => {
  
  return (
    <div>
      <NavBar isDark={isDark} setIsDark={setIsDark}/>
      <Hero2 isDark={isDark}/>
    </div>
  )
}

export default Contact
