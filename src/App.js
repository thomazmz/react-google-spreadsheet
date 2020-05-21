import React from 'react'
import Routes from './routes'

import { getProfessionals } from './spreadSheets'
getProfessionals()
  .then(professionals => console.log(professionals))
  .catch(err => console.log(err))

function App() {

  return (
    <>
      <Routes />
    </>
  )
}

export default App
