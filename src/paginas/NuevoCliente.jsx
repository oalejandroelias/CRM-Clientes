import React from 'react'
import Formulario from '../components/Formulario'

const NuevoCliente = () => {
  return (
    <div>
      <h1 className='font-black text-4xl text-blue-900'>NuevoCliente</h1>
      <p className='mt-3'>Llena los siguientes campos</p>

      <Formulario/>
    </div>
  )
}

export default NuevoCliente