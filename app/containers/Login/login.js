import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { withRouter, Redirect } from 'react-router-dom'
import compose from 'recompose/compose'
class Login extends Component {
    constructor(props){
    super(props);
        this.state= {
            username: '',
            password: ''
        }
    }

 handleClick(event){
    var apiBaseUrl = "http://localhost:3001/api/";
    var self = this;
    var payload={
        username: self.state.username,
        password: self.state.password
    }

    console.log(payload, 'state');
    axios.post(apiBaseUrl+'login', payload)
        .then(function (response) {
            console.log(response);
            if(response && response.username && response.password){
                alert("Login successful, your username: " + response.username);
                self.props.history.push('/todo')
            }
            else if(!response.username || !response.password) {
                alert("username or password does not match")
            }
        })
        .catch(function (error) {
            alert("Username does not exist");
            console.log(error);
        });
    }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div style={{ position: 'absolute', left: '43%', top: '30%' }}>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
 margin: 15,
};

export default Login;