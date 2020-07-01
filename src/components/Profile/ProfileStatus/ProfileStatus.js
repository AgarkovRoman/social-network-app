import React, { useState } from 'react';

const ProfileStatus = (props) => {

    // const initialState = {
    //     editMode: false
    // }

    const [editMode, setstate] = useState(false)
    const [status, setStatus] = useState(props.status)

    // const toggleEditMode = () => {
    //     setstate(
    //         !editMode
    //     );
    // }

    const activateEditMode = () => {
        setstate({
            editMode: true,
        })
    }

    const deactivateEditMode = () => {
        setstate({
            editMode: false,
        });
        props.updateStatus(status)
    }


    const onStatusChange = (e) => {
        setStatus(
            e.currentTarget.value
        )
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Статус'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>
    )
}

export default ProfileStatus