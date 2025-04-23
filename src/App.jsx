import { useState } from 'react'
import React from 'react'
import Navigation from './components/Navigation/Navigation'
import Home from './components/Home/Home'
import Reason from './components/Reasons/Reason'
import Developer from './components/Developers/Developer'
import Ready from './components/Ready/Ready'
// import Last from './components/Footer/Last'
import Customers from './components/Customers/Customers';

function App() {

  return (
    <>
    <Navigation />
    <Home />
    <Reason />
    <Developer />
    <Ready />
    <Customers />
    {/* <Last /> */}
    </>
  )
}

export default App
