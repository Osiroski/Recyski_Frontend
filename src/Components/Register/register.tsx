import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { userRegister } from '../../redux/actions/actionCreators'
import { RootState } from '../../redux/store/store'
import { BasicForm,Inputs,Checkboxs,Buttons } from '../Forms/index'
import LoginAlert from '../Login/loginAlert'



const Register = () => {
    const dispatch = useDispatch()
    const code = useSelector((state: RootState) => state.messages.code)
    const message = useSelector((state: RootState) => state.messages.message)
    const handleSubmit = (data:any) => {
        dispatch(userRegister(
            data.username,
            data.password,
            data.email, 
            data.firstName,
            data.lastName,
            ))
    
        }
    if(code===201){
        return (<Redirect to='/login' />)
    }
    
    return (
        <div className="container col-xl-12 col-xxl-12 px-4 py-2 mt-4 bg-light2 ">
            <div className="row align-items-center g-lg-5 py-2">
                <div className="col-md-10 mx-auto col-lg-5">
                {(message && message.length > 0)
                ? <LoginAlert message={message} code={code} />
                : ''}
                    <BasicForm onSubmit={handleSubmit} type={'register'}>
                        <Row>
                            <Col>
                                <Inputs label={'First Name'} type={'text'} name={'firstName'}
                                    autoplace={{
                                        autoComplete: 'first-name',
                                        placeholder: 'First Name'
                                    }}
                                />
                            </Col>
                            <Col>
                                <Inputs label={'Last Name'} name={'lastName'} type={'text'}
                                    autoplace={{
                                        autoComplete: 'last-name',
                                        placeholder: 'Last Name'
                                    }} />
                            </Col>
                        </Row>
                        <Inputs label={'Username'} name={'username'} type={'text'}
                            autoplace={{
                                autoComplete: 'username',
                                placeholder: 'Username'
                            }} />
                        <Inputs label={'Email'} name={'email'} type={'email'}
                            autoplace={{
                                autoComplete: 'Email',
                                placeholder: 'Email Address'
                            }} />
                        <Inputs label={'Password'} name={'password'} type={'password'}
                            autoplace={{
                                autoComplete: 'password',
                                placeholder: 'Password'
                            }} />
                        <Inputs label={'Confirm Password'} name={'confirmPassword'} type={'password'}
                            autoplace={{
                                autoComplete: 'new-password',
                                placeholder: 'Confirm Password'
                            }} />
                        <Checkboxs name="acceptTerms" label="Accept terms of service" />
                        <Buttons>Sign Up</Buttons>
                    </BasicForm>
                </div>
            </div>
        </div >
    )
}

export default Register