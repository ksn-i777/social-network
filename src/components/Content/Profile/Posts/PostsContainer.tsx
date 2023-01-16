import React from "react"
import {Posts} from "./Posts"
import {connect} from "react-redux"
import {RootType} from "../../../../store/store"
import {PostType} from '../../../../store/profile-reducer'

type mapStateToPropsType = {
    postsData: Array<PostType>
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        postsData: state.profilePage.postsData,
    }
}

export const PostsContainer = connect(mapStateToProps)(Posts)