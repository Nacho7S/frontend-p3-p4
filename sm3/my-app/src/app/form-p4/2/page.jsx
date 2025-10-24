'use client'

import React from 'react'
import { RegisterForms } from '../../../../components/registerForms'

export default function formp42() {

  const logSubmit = (data ) => {
    console.log({
      'Nama Lengkap': `${data.firstName} ${data.lastName}`,
      'Nilai Angka': +data.score,
      'Nilai Huruf': data.score,
    });
    
  }

  return (
    <RegisterForms labelInput={['firstName', 'lastName', 'score']} submit={logSubmit}/>
  )
}
