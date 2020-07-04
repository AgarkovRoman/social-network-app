import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputType } from '../UI/FormsControls/FormsControls'
import { required } from '../../utils/validators'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={'login'}
                name={'login'}
                component={InputType}
                validate={[required]}
                types="input"
            />
        </div>
        <div>
            <Field
                placeholder={'password'}
                name={'password'}
                component={InputType}
                validate={[required]}
                types="input"
            />
        </div>
        <div>
            <Field
                type={'checkbox'}
                name={'rememberMe'}
                component={InputType}
                validate={[required]}
                types="input"
            />remember me
        </div>
        <button>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

export default Login; 