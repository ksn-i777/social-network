import React from 'react'
import s from './ValidatedForms.module.css'

export function Input(props:any) {

    const {input, meta} = props

    return (
        <div>
            <input
                {...input}
                className={meta.touched && meta.error ? props.classNeme + ' ' + s.formWithError : props.className + ' ' + s.form}
                placeholder={props.placeholder}
            />
            {meta.touched && meta.error && <span className={s.spanError}> {meta.error}</span>}
        </div>
    )
}

export function Textarea(props:any) {

    const {input, meta} = props

    return (
        <div>
            <textarea
                {...input}
                className={meta.touched && meta.error ? props.classNeme + ' ' + s.formWithError : props.className + ' ' + s.form}
                placeholder={props.placeholder}
            />
            {meta.touched && meta.error && <span className={s.spanError}> {meta.error}</span>}
        </div>
    )
}