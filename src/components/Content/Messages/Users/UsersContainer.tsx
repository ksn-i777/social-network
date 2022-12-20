import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {RootType} from "../../../../redux/store";
import {UserType} from '../../../../redux/messages-reducer';

type mapStateToPropsType = {
    usersData:Array<UserType>
    isAuth: boolean
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        usersData: state.messagesPage.usersData,
        isAuth: state.auth.isAuth,
    }
}

export const UsersContainer = connect(mapStateToProps)(Users)