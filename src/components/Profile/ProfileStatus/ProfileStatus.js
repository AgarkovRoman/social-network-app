import React from 'react';
import { useState } from 'react'

const ProfileStatus = (props) => {

    // const initialState = {
    //     editMode: false
    // }

    const [editMode, setstate] = useState(false)


    const toggleEditMode = () => {
        setstate(
            !editMode
        )
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={toggleEditMode}>{props.status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus onBlur={toggleEditMode} value={props.status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus