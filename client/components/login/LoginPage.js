import React, { Component } from 'react';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    	<div className="row">
	      <div className="col-md-4 col-md-offset-4">
	      	<LoginForm />
	      </div>
    	</div>
    );
  }
}

export default LoginPage;
