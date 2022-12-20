import React from "react";
import {Header} from './Header';
import {getAuthUserTC} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

export class HeaderClassContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserTC()
    }
    render() {
        return <Header login={this.props.login} isAuth={this.props.isAuth}/>
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

export const HeaderContainer = connect(mapStateToProps, {getAuthUserTC})(HeaderClassContainer)