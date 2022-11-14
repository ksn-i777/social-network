import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../../../redux/redux-store";
import {UserType} from '../../../../redux/messages-reducer';

type mapStateToPropsType = {
    usersData:Array<UserType>
}

function mapStateToProps(state:StateType):mapStateToPropsType {
    return {
        usersData: state.messagesPage.usersData,
    }
}

export const UsersContainer = connect(mapStateToProps)(Users)