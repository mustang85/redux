import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

class FlashMessage extends Component {
	constructor(props) {
		super(props);
		this.onClick = this.onClick.bind(this);
	}

  onClick() {
  	this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
  	const { message: { id, type, text } } = this.props;
    return (
      <div className={classnames('alert', {
      	'alert-success': type === 'success',
      	'alert-danger': type === 'error',
      })}>
      	<button onClick={this.onClick} className="close">
      		<span>&times;</span>
      	</button>
      	{text}
      </div>
    );
  }
}

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

export default FlashMessage;