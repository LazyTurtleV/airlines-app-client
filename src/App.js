import { Component } from 'react/cjs/react.production.min';
import LoginForm from './LoginForm'
import { isUserAuthentificated, authenteficateUser } from './service_modules/serverAPI';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isUserActive: false
    }

    isUserAuthentificated()
    .then(isAuthentificated => this.setState({isUserActive: isAuthentificated}));

    this.authentificateUser = this.authentificateUser.bind(this);
  }

  async authentificateUser(user){
    let res = await authenteficateUser(user);
    
    if(res.isAuthentificated){
      this.setState({isUserActive: true});
    }
    else{
      window.alert(res.errMessage);
    }
  }

  render(){
    let HTMLcode;

    if(this.state.isUserActive){
      HTMLcode = <div>Access granted</div> 
    }else{
      HTMLcode = (
      <div>
        <LoginForm authenteficateUser={this.authentificateUser}/>
      </div>
      )
    }

    return HTMLcode
  }
}

export default App;
