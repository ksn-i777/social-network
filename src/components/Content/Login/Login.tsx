import React from 'react'
import s from './Login.module.css'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../../validators/validators'
import { Input } from '../../Common/ValidatedForms/ValidatedForms'
import { loginUserTC } from '../../../store/auth-reducer'
import { connect } from 'react-redux'

//form

type LoginReduxFormDataType = {
    login: string
    password: string
    remember: boolean
}

const LoginForm = React.memo((props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component={Input} placeholder={'login'} validate={[requiredField]} />
            </div>
            <div>
                <Field name={'password'} component={Input} type={'password'} placeholder={'password'} validate={[requiredField]} />
            </div>
            <div className={s.checkbox}>
                <Field name={'remember'} component={'input'} type={'checkbox'} /> remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
            <div className={s.formError}>{props.error}</div>
        </form>
    )
})

const LoginReduxForm = reduxForm<LoginReduxFormDataType>({ form: 'login' })(LoginForm)

//login page

const Login = React.memo((props: any) => {

    function onSubmit(loginFormData: LoginReduxFormDataType): void {
        props.loginUserTC(loginFormData.login, loginFormData.password, loginFormData.remember)
    }

    return (
        <div className={s.login}>
            <div className={s.header}>Login please</div>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
})

export const LoginContainer = connect(null, { loginUserTC })(Login)