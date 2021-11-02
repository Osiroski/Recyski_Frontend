
import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { userLogin } from "../../redux/actions/actionCreators";
import { RootState } from '../../redux/store/store';
import { Buttons, Inputs, BasicForm} from '../Forms';
import './login.css';
import LoginAlert from './loginAlert';

const Login = () => {
  const dispatch = useDispatch()
  const message = useSelector((state: RootState) => state.messages.message)
  const isLoggedin = useSelector((state: RootState) => state.user.isLoggedin)
  const code = useSelector((state: RootState) => state.messages.code)
  const handleSubmit = (data:any) => {
    dispatch(
      userLogin(
        data.email, 
        data.password
        )
        )
  }
  if (isLoggedin){
    return (
      <Redirect to='dashboard' />
    )
  }


  return (
    <Container className="rounded-3 col-xl-12 col-xxl-12 mt-4 py-2 bg-light2">
      <Row className="align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Vertically centered hero sign-up form</h1>
          <p className="col-lg-10 fs-4">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          {(message && message.length > 0)
            ? <LoginAlert message={message} code={code} />
            : ''}
          <BasicForm onSubmit={handleSubmit} type={'login'} >
            <Inputs label={'Email'} name={'email'} type={'email'}
              autoplace={{
                autoComplete: 'email',
                placeholder: 'Email Address'
              }} />
            <Inputs label={'Password'} name={'password'} type={'password'}
              autoplace={{
                autoComplete: 'new-password',
                placeholder: 'Password'
              }} />   
            <Buttons>Sign In</Buttons>
          </BasicForm>
        </div>
      </Row>
    </Container>
  )
}
export default Login