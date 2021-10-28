import React from 'react'
import { Form } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'
import { Errors } from './Error'

type Checkbox = {
    label: string
    name: string
    required?: boolean | string
}

export const Checkboxs = ({ label, name, required }: Checkbox) => {
    const { register, formState: { errors } } = useFormContext()

    return (
        <Form.Group controlId="acceptTCs">
            <Form.Check
                className={` ${errors[name] ? 'is-invalid' : ''}`}
                {...register(name)} />
            <Form.Label>I have read and agree to the Terms</Form.Label>
            {errors[name] && <Errors message={errors[name].message} />}

        </Form.Group>
    
  )
}