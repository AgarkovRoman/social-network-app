import React, { useState, useEffect } from 'react';

const ProfileStatus = (props) => {

    // const initialState = {
    //     editMode: false
    // }

    const [editMode, setstate] = useState(false)
    const [status, setStatus] = useState(props.status)

    // useEffect((prevProps, status) => {
    //     // if (props.status !== status) {
    //     //     setStatus({
    //     //         status: props.status,
    //     //     })
    //     // }
    //     console.log('useEffect')
    // })

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