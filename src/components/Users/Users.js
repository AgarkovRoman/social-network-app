import React from 'react';
import classes from './Users.module.scss';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                imgSrc: 'https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png',
                firstName: 'Dmitry',
                lastName: 'Ivanov',
                status: 'I am looking for a job',
                location: {
                    country: 'Russia',
                    city: 'Saint-Petersburg',
                },
            },
            {
                id: 2,
                followed: true,
                imgSrc: 'https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png',
                firstName: 'Nikola',
                lastName: 'Protonov',
                status: 'Die COVID-19',
                location: {
                    country: 'Ukraine',
                    city: 'Kiev',
                },
            },
            {
                id: 3,
                followed: false,
                imgSrc: 'https://www.kindpng.com/picc/m/269-2697881_computer-icons-user-clip-art-transparent-png-icon.png',
                firstName: 'Roman',
                lastName: 'Romanov',
                status: 'Hi everyone!',
                location: {
                    country: 'Russia',
                    city: 'Moscow',
                },
            },
        ])
    }


    return <div className={classes.Users}>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <img className={classes.Img} src={u.imgSrc} alt='' />
                </span>
                <span>

                    {u.followed
                        ? <button onClick={() => { props.toggleFollowUser(u.id) }}>Unfolllow</button>
                        : <button onClick={() => { props.toggleFollowUser(u.id) }}>Folllow</button>}

                </span>
                <span>
                    <span>
                        <div>{u.firstName}</div><div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div><div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )
        }
    </div>
}

export default Users