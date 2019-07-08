import React from 'react';
import { PageSection } from '@patternfly/react-core';
import { connectRouter } from '../../redux';
import SampleCard from '../sampleCard/sampleCard';

class SampleView extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <PageSection>
          <h1>Sample view</h1>
          <SampleCard />
        </PageSection>
      </React.Fragment>
    );
  }
}

SampleView.propTypes = {};

SampleView.defaultProps = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

const ConnectedSampleView = connectRouter(mapStateToProps, mapDispatchToProps)(SampleView);

export { ConnectedSampleView as default, ConnectedSampleView, SampleView };
