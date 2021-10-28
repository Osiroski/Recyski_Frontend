import React from 'react'
import { Form } from 'react-bootstrap'
import { useForm, FormProvider } from 'react-hook-form'
import { registerSchema, loginSchema } from './validators'
import { yupResolver } from '@hookform/resolvers/yup';

type Forms = {
  initialValues?: any
  children: React.ReactNode
  onSubmit: (data: any, actions: any) => void
  type:string
}

export const BasicForm = ({ initialValues, children, onSubmit,type}: Forms) => {
  const res=(type==='login')
          ?yupResolver(loginSchema)
          :yupResolver(registerSchema)    
  const methods = useForm({ defaultValues: initialValues ,resolver:res})
  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        {children}
      </Form>
    </FormProvider>
  )
}
