import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { EmptyState, EmptyStateBody, EmptyStateIcon, EmptyStateVariant } from '@patternfly/react-core';
import { BanIcon, BinocularsIcon } from '@patternfly/react-icons';
import { connectRouter, reduxActions } from '../../redux';
import { helpers } from '../../common/helpers';
import PageLayout from '../pageLayout/pageLayout';

class Authentication extends Component {
  componentDidMount() {
    const { authorizeUser, session } = this.props;

    if (!session.authorized) {
      authorizeUser();
    }
  }

  render() {
    const { children, session } = this.props;

    if (session.authorized) {
      return <React.Fragment>{children}</React.Fragment>;
    }

    if (session.pending) {
      return (
        <PageLayout>
          <EmptyState variant={EmptyStateVariant.full} className="fadein">
            <EmptyStateIcon icon={BinocularsIcon} />
            <EmptyStateBody>Authenticating...</EmptyStateBody>
          </EmptyState>
        </PageLayout>
      );
    }

    return (
      <PageLayout>
        <EmptyState variant={EmptyStateVariant.full} className="fadein">
          <EmptyStateIcon icon={BanIcon} />
          <EmptyStateBody>You do not have permission to access. Contact your administrator.</EmptyStateBody>
        </EmptyState>
      </PageLayout>
    );
  }
}

Authentication.propTypes = {
  authorizeUser: PropTypes.func,
  children: PropTypes.node.isRequired,
  session: PropTypes.shape({
    authorized: PropTypes.bool,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    pending: PropTypes.bool
  })
};

Authentication.defaultProps = {
  authorizeUser: helpers.noop,
  session: {
    authorized: false,
    error: false,
    errorMessage: '',
    pending: false
  }
};

const mapDispatchToProps = dispatch => ({
  authorizeUser: () => dispatch(reduxActions.user.authorizeUser())
});

const mapStateToProps = state => ({ session: state.user.session });

const ConnectedAuthentication = connectRouter(mapStateToProps, mapDispatchToProps)(Authentication);

export { ConnectedAuthentication as default, ConnectedAuthentication, Authentication };
