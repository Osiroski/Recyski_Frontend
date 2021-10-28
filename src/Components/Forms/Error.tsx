import React from 'react'
import { Form } from 'react-bootstrap'

type Error = {
  message?: string
}

export const Errors = ({ message }: Error) => (
  <Form.Control.Feedback type="invalid">{message}</Form.Control.Feedback>

)