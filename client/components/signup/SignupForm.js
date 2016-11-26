import React, { Component, PropTypes } from 'react';
import timezone from '../../data/timezones';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { browserHistory } from 'react-router';

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
			isLoading: false,
      inValid: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
	}

	onSubmit(e) {
		const { userSignupRequest } = this.props;
		e.preventDefault();

		if (this.isValid()) {
			this.setState({ errors: {}, isLoading: true });
			userSignupRequest(this.state).then(
				() => {
					// browserHistory.push('/');
					this.context.router.push('/');
					this.props.addFlashMessage({
						type: 'success',
						text: 'trololo'
					});
				})
				.catch(error => {
					console.log('error.config', error.config);
					console.log('error.response', error.config);
					this.setState({ errors: error.config.data, isLoading: false })
				}
			);
		}
		
	}

	isValid() {
		const { errors, isValid } = validateInput(this.state);

		if (!isValid) {
			this.setState({ errors });
		}

		return isValid;
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

  checkUserExists(e) {
    const field = e.target.name;
    const val = e.target.value;
    if (val !== '') {
      this.props.isUserExists(val).then(res => {
        let errors = this.state.errors;
        let inValid;
        if (res.data.user) {
          errors[field] = 'There is user with such ' + field;
          inValid = true; 
        } else {
          errors[field] = '';
          inValid = false;
        }
        this.setState({ errors, inValid });
      })
    }
  }

  render() {
  	const { errors } = this.state;
  	const options = map(timezone, (val, key) => {
  		return <option key={val} value={val}>{key}</option>
  	});
    return (
      <form action="" onSubmit={this.onSubmit}>
      	<h1>Join our community</h1>
      	
      	<TextFieldGroup
      		error={errors.username}
      		label="Username"
      		checkUserExists={this.checkUserExists}
          onChange={this.onChange}
      		value={this.state.username}
      		field="username" 
      	/>

      	<TextFieldGroup
      		error={errors.email}
      		label="Email"
          checkUserExists={this.checkUserExists}
      		onChange={this.onChange}
      		value={this.state.email}
      		field="email"
      	/>

      	<TextFieldGroup
      		error={errors.password}
      		label="Password"
      		onChange={this.onChange}
      		value={this.state.password}
      		field="password" 
      	/>

      	<TextFieldGroup
      		error={errors.passwordConfirmation}
      		label="Password Confirmation"
      		onChange={this.onChange}
      		value={this.state.passwordConfirmation}
      		field="passwordConfirmation" 
      	/>


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
      		<button disabled={this.state.isLoading || this.state.inValid} className="btn btn-primary btn-lg">Sign up</button>
      	</div>

      </form>
    );
  }
}

SignupForm.propTypes = {
	userSignupRequest: PropTypes.func.isRequired,
	addFlashMessage: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
};

SignupForm.contextTypes = {
	router: PropTypes.object.isRequired
};

export default SignupForm;