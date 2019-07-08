import * as sampleActions from './sampleActions';
import * as userActions from './userActions';

const actions = {
  sample: sampleActions,
  user: userActions
};

const reduxActions = { ...actions };

export { reduxActions as default, reduxActions, sampleActions, userActions };
