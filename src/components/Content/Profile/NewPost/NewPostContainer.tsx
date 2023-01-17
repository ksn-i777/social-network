import React from "react"
import {addNewPostAC, ProfileActionsType} from '../../../../store/profile-reducer'
import {NewPost} from './NewPost'
import {connect} from "react-redux"
import {AppStateType} from "../../../../store/store"

type mapDispatchToPropsType = {
    addNewPost(newPostText:string):void
}

function mapStateToProps(state:AppStateType):{} {
    return ({})
}

function mapDispatchToProps(dispatch:(AC:ProfileActionsType) => void):mapDispatchToPropsType {
    return {
        addNewPost: (newPostText:string) => {
            dispatch (addNewPostAC(newPostText))
        },
    }
}

export const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)