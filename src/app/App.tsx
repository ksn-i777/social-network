import React, { useEffect } from 'react'
import './App.css'
import { Nav } from "../components/Common/Nav/Nav"
import { Content } from "../components/Content/Content"
import { HeaderContainer } from '../components/Common/Header/HeaderContainer'
import { useDispatch } from 'react-redux'
import { AppStateType, AppDispatchType } from '../store/store'
import { setInitializationTC } from '../store/app-reducer'
import { useSelector } from 'react-redux'
import { Preloader } from '../components/Common/Preloader/Preloader'

export function App() {

    const initialized = useSelector<AppStateType, boolean>(st => st.app.initialized)
    const dispatch = useDispatch<AppDispatchType>()

    useEffect(() => {
        dispatch(setInitializationTC())
    }, [])

    return (
        <div className="body">
            {initialized &&
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <Content/>
                </div>
            }
            {!initialized &&
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div style={{
                        gridArea: 'content',
                        backgroundColor: 'rgba(21, 34, 42, 0.9)',
                        border: '1px solid rgba(112, 128, 144, 0.9)',
                        borderRadius: '8px'}}>
                        <Preloader/>
                    </div>
                    
                </div>
            }
        </div>
    )
}