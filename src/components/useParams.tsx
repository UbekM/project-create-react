import React from 'react'
import { useParams } from 'react-router-dom'

export const UseParamsClass:React.FC = () => {
    const {id} = useParams();
  return (
    <div className='mx-auto pt-8'>
        <h1 className='text-center pt-4 font-bold text-4xl'>
        How to use useParams Hook in react
            </h1>
            <p className='text-center text-4xl'>This is the id from the url {'  '}<span className='font-bold text-6xl'> {id}</span></p>
            </div>
  )
}
