import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHead, CardBody } from '@patternfly/react-core';
import { connect, reduxActions } from '../../redux';
import { helpers } from '../../common/helpers';

class SampleCard extends React.Component {
  componentDidMount() {
    const { getSampleData } = this.props;

    getSampleData();
  }

  render() {
    const { error, fulfilled, data, pending } = this.props;

    return (
      <Card>
        <CardHead>
          <h5>Sample</h5>
        </CardHead>
        <CardBody>
          Data ipsum... {(error && 'error') || (fulfilled && 'loaded') || (pending && 'pending')}{' '}
          {data.usage.length && JSON.stringify(data)}
        </CardBody>
      </Card>
    );
  }
}

SampleCard.propTypes = {
  error: PropTypes.bool,
  fulfilled: PropTypes.bool,
  getSampleData: PropTypes.func,
  data: PropTypes.shape({
    usage: PropTypes.array
  }),
  pending: PropTypes.bool
};

SampleCard.defaultProps = {
  error: false,
  fulfilled: false,
  getSampleData: helpers.noop,
  data: {
    usage: []
  },
  pending: false
};

const mapStateToProps = state => ({
  ...state.sample
});

const mapDispatchToProps = dispatch => ({
  getSampleData: () => dispatch(reduxActions.sample.getSampleData())
});

const ConnectedSampleCard = connect(
  mapStateToProps,
  mapDispatchToProps
)(SampleCard);

export { ConnectedSampleCard as default, ConnectedSampleCard, SampleCard };
