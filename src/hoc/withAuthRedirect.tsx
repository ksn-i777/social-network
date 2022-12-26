import React, { ComponentType } from "react"
import {Redirect} from 'react-router-dom'
import {connect} from "react-redux"
import { RootType } from '../redux/store'

type mapStateToPropsType = {
    isAuth: boolean,
}
function mapStateToProps(state: RootType):mapStateToPropsType {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect(Component: ComponentType) {

    function RedirectComponent(props: mapStateToPropsType) {

        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}></Redirect>

        return  <Component {...restProps}/> 
    }

    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)

    return ConnectedRedirectComponent
}



