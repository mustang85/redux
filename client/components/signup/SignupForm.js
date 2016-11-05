import React, { Component, PropTypes } from 'react';
import timezone from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';

class SignupForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			email: '',
			password: '',
			passwordConfirmation: '',
			timezone: '',
			errors: {},
			isLoading: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(e) {
		const { userSignupRequest } = this.props;
		e.preventDefault();
		this.setState({ errors: {}, isLoading: true });
		userSignupRequest(this.state).then(
			() => {})
			.catch(error => {
				console.log('error.config', error.config);
				console.log('error.response', error.response);
				this.setState({ errors: error.response.data, isLoading: false })
			}
		);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

  render() {
  	const { errors } = this.state;
  	const options = map(timezone, (val, key) => {
  		return <option key={val} value={val}>{key}</option>
  	});
    return (
      <form action="" onSubmit={this.onSubmit}>
      	<h1>Join our community</h1>
      	
      	<div className={classnames("form-group", {
      		'has-error': errors.username
      	})}>
      		<label className="control-label">Username</label>
      		<input
      		 onChange={this.onChange}
      		 type="text" 
      		 name="username" 
      		 className="form-control"
      		 value={this.state.username} 
      		/>
      		{errors.username && <span className="help-block">{errors.username}</span>}
      	</div>

      	<div className={classnames("form-group", {
      		'has-error': errors.email
      	})}>
      		<label className="control-label">Email</label>
      		<input
      		 onChange={this.onChange}
      		 type="text" 
      		 name="email" 
      		 className="form-control"
      		 value={this.state.email} 
      		/>
      		{errors.email && <span className="help-block">{errors.email}</span>}
      	</div>

      	<div className={classnames("form-group", {
      		'has-error': errors.password
      	})}>
      		<label className="control-label">Password</label>
      		<input
      		 onChange={this.onChange}
      		 type="text" 
      		 name="password" 
      		 className="form-control"
      		 value={this.state.password} 
      		/>
      		{errors.password && <span className="help-block">{errors.password}</span>}
      	</div>

      	<div className={classnames("form-group", {
      		'has-error': errors.passwordConfirmation
      	})}>
      		<label className="control-label">Password Confirmation</label>
      		<input
      		 onChange={this.onChange}
      		 type="password" 
      		 name="passwordConfirmation" 
      		 className="form-control"
      		 value={this.state.passwordConfirmation} 
      		/>
      		{errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
      	</div>

      	<div className={classnames("form-group", {
      		'has-error': errors.timezone
      	})}>
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
      		{errors.timezone && <span className="help-block">{errors.timezone}</span>}
      	</div>

      	<div className="form-group">
      		<button disabled={this.state.isLoading} className="btn btn-primary btn-lg">Sign up</button>
      	</div>

      </form>
    );
  }
}

SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired
};

export default SignupForm;