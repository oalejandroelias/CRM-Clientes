import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import Alerta from './alerta'

function Formulario() {

    const navigate = useNavigate();

    const NuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
        .min(3,'Nombre muy corto')
        .max(20,'Nombre muy largo')
        .required('Campo requerido'),
        empresa: '',
        email: Yup.string()
        .email()
        .required(),
        telefono: Yup.number().typeError('El munero no es válido')
        .integer('Número no válido')
        .positive('Número no válido'),
        notas: ''
    })

    const handleSubmit = async (valores) => {

        try{
            const url = "http://localhost:4000/clientes";

            const respuesta = await fetch(url,{
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            const resultado = await respuesta.json();
            navigate('/clientes')

        }
        catch(error){
            console.log(error)
        }
        

    }
  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>
        <Formik
        initialValues={{
            nombre: '',
            empresa: '',
            email: '',
            telefono: '',
            notas: ''
        }}

        onSubmit={ async (values, {resetForm}) => {
            await handleSubmit(values);

            resetForm();
        }}

        validationSchema={NuevoClienteSchema}
        
        >
            {({errors, touched}) => { 
                return (
            <Form className='mt-10'>
                <div className='mb-4'>
                    <label className='text-gray-800' htmlFor='nombre'>Nombre: </label>
                    <Field id='nombre' name='nombre' type='text' className='mt-2 block w-full p-3 bg-gray-100' placeholder="Nombre del Cliente"/>
                    {errors.nombre && touched.nombre ? (
                        <Alerta>{errors.nombre}</Alerta>
                    ) : null}
                </div>
                <div className='mb-4'>
                    <label className='text-gray-800' htmlFor='empresa'>Empresa: </label>
                    <Field id='empresa' name='empresa' type='text' className='mt-2 block w-full p-3 bg-gray-100' placeholder="Empresa del Cliente"/>
                </div>
                <div className='mb-4'>
                    <label className='text-gray-800' htmlFor='email'>Email: </label>
                    <Field id='email' name='email' type='text' className='mt-2 block w-full p-3 bg-gray-100' placeholder="Email del Cliente"/>
                </div>
                {errors.email && touched.email ? (
                        <Alerta>{errors.email}</Alerta>
                    ) : null}
                <div className='mb-4'>
                    <label className='text-gray-800' htmlFor='telefono'>Teléfono: </label>
                    <Field id='telefono' name='telefono' type='tel' className='mt-2 block w-full p-3 bg-gray-100' placeholder="Teléfono del Cliente"/>
                </div>
                {errors.telefono && touched.telefono ? (
                        <Alerta>{errors.telefono}</Alerta>
                    ) : null}
                <div className='mb-4'>
                    <label className='text-gray-800' htmlFor='notas'>Notas: </label>
                    <Field id='notas' name='notas' as='textarea' type='text' className='mt-2 block w-full p-3 bg-gray-100 h-40' placeholder="Teléfono del Cliente"/>
                </div>

                <input type='submit' value='Agregar Cliente' className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg'>
                    </input>
                
            </Form>
            )}}
        </Formik>
    </div>
  )
}

export default Formulario