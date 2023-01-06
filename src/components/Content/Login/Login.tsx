import React from "react";
import s from './Login.module.css'
import {Field, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    remember: boolean
}

export function Login() {

    function onSubmit(formData: FormDataType):void {
        console.log(formData)
    }

    return (
        <div className={s.login}>
            <div className={s.header}>Login please</div>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

function LoginForm(props: { handleSubmit: any}) {

    const { handleSubmit } = props

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'login'} component={'input'} placeholder={'login'}/>
            </div>
            <div>
                <Field name={'password'} component={'input'} type={'password'} placeholder={'password'}/>
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



