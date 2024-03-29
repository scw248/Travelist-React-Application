import React from 'react';
import DestinationInput from '../components/destinations/DestinationInput'
import Destinations from '../components/destinations/Destinations'
import { connect } from 'react-redux'
import { addDestination } from '../actions/destinationFormActions'
import Button from 'react-bootstrap/Button'


const DestinationsContainer = ({ currentUser }) => {
  return (
    <div className="DestinationsContainer">
      {currentUser ?
        <p>
          <Button>
            <DestinationInput addDestination={addDestination} />
          </Button>
          <br />
          <br />
          <Destinations />
        </p> : ""}

    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { addDestination })(DestinationsContainer)


