import React, { Component } from 'react';
import timezone from '../../data/timezones';
import map from 'lodash/map';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: ''
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

  render() {
  	const options = map(timezone, (val, key) => {
  		return <option key={val} value={val}>{key}</option>
  	});
    return (
      <form action="" onSubmit={this.onSubmit}>
      	<h1>Join our community</h1>
      	
      	<div className="form-group">
      		<label className="control-label">Username</label>
      		<input
      		 onChange={this.onChange}
      		 type="text" 
      		 name="username" 
      		 className="form-control"
      		 value={this.state.username} 
      		/>
      	</div>

      	<div className="form-group">
      		<label className="control-label">Email</label>
      		<input
      		 onChange={this.onChange}
      		 type="text" 
      		 name="email" 
      		 className="form-control"
      		 value={this.state.email} 
      		/>
      	</div>

      	<div className="form-group">
      		<label className="control-label">Password</label>
      		<input
      		 onChange={this.onChange}
      		 type="text" 
      		 name="password" 
      		 className="form-control"
      		 value={this.state.password} 
      		/>
      	</div>

      	<div className="form-group">
      		<label className="control-label">Password Confirmation</label>
      		<input
      		 onChange={this.onChange}
      		 type="password" 
      		 name="passwordConfirmation" 
      		 className="form-control"
      		 value={this.state.passwordConfirmation} 
      		/>
      	</div>

      	<div className="form-group">
      		<label className="control-label">Timezone</label>
      		<select
      		 onChange={this.onChange}
      		 name="timezone" 
      		 className="form-control"
      		 value={this.state.timezone} 
      		>
      		<option value="" disabled>Choose Your Timezone</option>
      		{options}
      		</select>
      	</div>

      	<div className="form-group">
      		<button className="btn btn-primary btn-lg">Sign up</button>
      	</div>

      </form>
    );
  }
}

export default SignupForm;