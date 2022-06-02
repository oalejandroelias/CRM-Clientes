import {useEffect} from 'react'

const Inicio = () => {

  useEffect(() =>{
    const obtenerClientesAPI = async () =>{
      try{
        const url = 'http://localhost:4000/clientes';
        const respuesta = await fetch(url)
        const resultado = await respuesta.json();
      }
      catch{

      }
    }
  }, [])

  return (
    <div><h1>Inicio</h1></div>
  )
}

export default Inicio