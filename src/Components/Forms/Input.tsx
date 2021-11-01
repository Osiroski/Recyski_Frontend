import React from 'react'
import { Form } from 'react-bootstrap'
import { Errors } from './Error'
import { useFormContext } from 'react-hook-form';


export type Input = {
  label: string
  name: string
  type?: 'text' | 'email' | 'password' | 'phone'
  disabled?:boolean
  autoplace: {autoComplete:string,placeholder:string}
}

export const Inputs = ({label,name,type,autoplace,disabled}: Input) => {
  const { register, formState: { errors } } = useFormContext()

  return (
    <Form.Group controlId={name}>
    <div className="form-floating mb-3">
        <Form.Control
            
            className={`${errors[name] ? 'is-invalid' : ''}`}
            disabled={disabled}
            type={type}
            autoComplete={autoplace.autoComplete}
            placeholder={autoplace.placeholder}
            {...register(name)}
           
        />
        <Form.Label>{label}</Form.Label>
        {errors[name] && <Errors message={errors[name].message} />}
    </div>
</Form.Group>
  )
}