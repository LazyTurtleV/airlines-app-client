import {React} from 'react';
import { Component } from 'react/cjs/react.production.min';
import './styles/LoginForm.css'

class LoginForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            login: undefined,
            password: undefined
        }
    }

    render(){
        return (
        <div className='form-wrapper'>
            <input 
                className='login-input' 
                placeholder='login' 
                onChange={event => this.setState({login: event.target.value})}
            />
            <input 
                type="password" 
                className='password-input' 
                placeholder='password' 
                onChange={event => this.setState({password: event.target.value})}
            />

            <button className='submit-button' onClick={() => this.props.authenteficateUser({login: this.state.login, password: this.state.password})}>
                Submit
            </button>
        </div>)
    }
}

export default LoginForm;