import React, {ChangeEvent} from "react"
import s from './About.module.css'

export class ProfileStatus extends React.Component<any, any> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }
    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.updateProfileStatusTC(this.state.status)
    }
    changeStatus = (e:ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return this.state.editMode
            ? <input onChange={this.changeStatus} onBlur={this.deactivateEditMode} className={s.statusInput} value={this.state.status} autoFocus/>
            : <span onDoubleClick={this.activateEditMode} className={s.statusSpan}>{this.props.status || '---'}</span>
    }
}