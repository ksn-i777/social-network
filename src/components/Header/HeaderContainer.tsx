import React from "react";
import {Header} from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {authAPI} from '../../api/api';

export class HeaderClassContainer extends React.Component<any, any> {
    componentDidMount() {
        authAPI.getAuthUser().then(data => {
            if (data.resultCode === 0) {this.props.setAuthUserData(data.data.id, data.data.email, data.data.login)}
        })
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderClassContainer)