import React from 'react'
import { Button } from 'react-bootstrap'
import { useFormContext } from 'react-hook-form'

type Buttonn = {
  children: React.ReactNode
}

export const Buttons = ({ children }: Buttonn) => {
  const { formState: { isDirty, isSubmitting } } = useFormContext()

  return (
    <div className="text-center">
      <Button 
      variant="primary" 
      type="submit" 
      style={{ 'width': '75%' }} 
      disabled={!isDirty || isSubmitting}>
        
        {children}
      
      </Button>
    </div>
  )
}