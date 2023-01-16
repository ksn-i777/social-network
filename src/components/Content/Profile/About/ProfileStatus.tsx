import React, {ChangeEvent, useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import s from './About.module.css'
import {SetProfileStatusActionType} from '../../../../store/profile-reducer'
import {AppDispatch} from '../../../../store/store'

type ProfileStatusPropsType = {
    status: string
    updateProfileStatusTC: (
        status: string
    ) => (dispatch: (AC: SetProfileStatusActionType) => void) => void
}

export function ProfileStatus(props: ProfileStatusPropsType) {
    useEffect(() => {
        setLocalStatus(props.status)
    }, [props.status])

    const dispatch = useDispatch<AppDispatch>()

    const [localStatus, setLocalStatus] = useState<string>('')
    const [editMode, setEditMode] = useState<boolean>(false)

    function activateEditMode() {
        setEditMode(true)
    }
    function deactivateEditMode() {
        setEditMode(false)
        dispatch(props.updateProfileStatusTC(localStatus))
    }
    function changeStatus(e: ChangeEvent<HTMLInputElement>) {
        setLocalStatus(e.currentTarget.value)
    }

    return editMode ? (
        <input
            onChange={changeStatus}
            onBlur={deactivateEditMode}
            className={s.statusInput}
            value={localStatus}
            autoFocus
        />
    ) : (
        <span onDoubleClick={activateEditMode} className={s.statusSpan}>
            {props.status || '---'}
        </span>
    )
}