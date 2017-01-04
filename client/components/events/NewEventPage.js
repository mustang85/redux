import React, { Component, PropTypes } from 'react';
import EventForm from './EventForm';

class NewEventPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      	<EventForm />
      </div>
    );
  }
}

NewEventPage.propTypes = {
  name: PropTypes.string
};

export default NewEventPage; 
