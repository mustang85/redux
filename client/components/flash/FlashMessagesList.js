import React, { Component, PropTypes } from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessagesList extends Component {  
  constructor(props) {
    super(props);
  }

  render() {
  	const messages = this.props.messages.map(message => 
  		<FlashMessage 
  			key={message.id} 
  			message={message} 
  			deleteFlashMessage={this.props.deleteFlashMessage} 
  		/>
  	);

    return (
      <div>
      	{ messages }
      </div>
    );
  }
}

FlashMessagesList.propTypes = {
	messages: PropTypes.array.isRequired,
	deleteFlashMessage: PropTypes.func.isRequired
};

export default connect((state) => {
	return {
		messages: state.flashMessages
	};
}, {
	deleteFlashMessage
})(FlashMessagesList);