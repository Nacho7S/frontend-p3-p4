'use client'
import React from 'react'
import { RegisterForms } from '../../../../components/registerForms'

export default function formp41() {

  const logSubmit = (data ) => {
    console.log({
      'Nama Lengkap': `${data.firstName} ${data.lastName}` 
    });
    
  }
  return (
    <RegisterForms labelInput={['firstName', 'lastName']} submit={logSubmit}/>
  )
}
