import { combineReducers } from 'redux';
import sampleReducer from './sampleReducer';
import sampleViewReducer from './sampleViewReducer';
import userReducer from './userReducer';

const reducers = {
  sample: sampleReducer,
  sampleView: sampleViewReducer,
  user: userReducer
};

const reduxReducers = combineReducers(reducers);

export { reduxReducers as default, reduxReducers, sampleReducer, sampleViewReducer, userReducer };
