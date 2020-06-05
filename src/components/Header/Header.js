import React from 'react'
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.login}>
                {props.isAuth ? <div className={classes.link}>{props.login}</div> : <NavLink className={classes.link} to={'/login'}>Log in</NavLink>}
            </div>
        </header>
    )
}

export default Header