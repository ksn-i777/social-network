import React from 'react'
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form'
import {requiredField} from '../../../validators/validators'
import {Input} from '../../Common/ValidatedForms'

//form

type LoginReduxFormDataType = {
    login: string
    password: string
    remember: boolean
}

const LoginReduxForm = reduxForm<LoginReduxFormDataType>({form: 'login'})(LoginForm)

function LoginForm(props:any) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} component={Input} placeholder={'login'} validate={[requiredField]}/>
            </div>
            <div>
                <Field name={'password'} component={Input} type={'password'} placeholder={'password'} validate={[requiredField]}/>
            </div>
            <div className={s.checkbox}>
                <Field name={'remember'} component={'input'} type={'checkbox'}/> remember me
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

//login page

export function Login() {

    function onSubmit(loginFormData: LoginReduxFormDataType):void {
        console.log(loginFormData)
    }

    return (
        <div className={s.login}>
            <div className={s.header}>Login please</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}