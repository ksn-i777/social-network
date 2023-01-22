import React from "react"
import {Header} from './Header'
import {logoutUserTC} from '../../../store/auth-reducer'
import {connect} from 'react-redux'

export class HeaderClassContainer extends React.Component<any, any> {
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth} logoutUserTC={this.props.logoutUserTC}/>
    }
}

type mapStateToPropsType = {
    login:string|null
    isAuth: boolean
}

function mapStateToProps(state: { auth: { login: any; isAuth: any; }; }):mapStateToPropsType {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {logoutUserTC})(HeaderClassContainer)