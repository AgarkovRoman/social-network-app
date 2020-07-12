import React from 'react'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { InputType } from '../UI/FormsControls/FormsControls'
import { required } from '../../utils/validators'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import classes from '../UI/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder={'email'}
                name={'email'}
                component={InputType}
                validate={[required]}
                types="input"
                autocomplete="on"
            />
        </div>
        <div>
            <Field
                placeholder={'password'}
                name={'password'}
                type={'password'}
                component={InputType}
                validate={[required]}
                types="input"
                autocomplete="on"
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
        {props.error && <div className={classes.formError}>
            {props.error}
        </div>
        }
        <button>Login</button>
    </form>
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    debugger
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login); 