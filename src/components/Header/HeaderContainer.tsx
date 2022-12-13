import React from "react";
import {Header} from './Header';
import axios from 'axios';
import {setAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';

export class HeaderClassContainer extends React.Component<any, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(res => {
            if (res.data.resultCode === 0) {this.props.setAuthUserData(res.data.data.id, res.data.data.email, res.data.data.login)}
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