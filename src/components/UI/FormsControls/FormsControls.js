import React from 'react'
import classes from './FormsControls.module.css'


export const InputType = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={hasError ? classes.error : null}>
            <div>
                {props.types === 'input' ? <input {...input} {...props} /> : <textarea {...input} {...props} />}
            </div>
            {hasError ? <span> {meta.error}</span> : null}
        </div>
    )
}