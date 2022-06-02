import React from 'react'

const Alerta = ({children}) => {
  return (
    <div>
      
                        <div className='text-center text-red-800 font-bold uppercase'>
                            {children}
                        </div>
                
    </div>
  )
}

export default Alerta