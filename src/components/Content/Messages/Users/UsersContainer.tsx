import React from "react";
import {Users} from "./Users";
import {connect} from "react-redux";
import {RootType} from "../../../../redux/store";
import {UserType} from '../../../../redux/messages-reducer';

type mapStateToPropsType = {
    usersData:Array<UserType>
}

function mapStateToProps(state:RootType):mapStateToPropsType {
    return {
        usersData: state.messagesPage.usersData,
    }
}

export const UsersContainer = connect(mapStateToProps)(Users)