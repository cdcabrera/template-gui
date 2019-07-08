import { sampleTypes } from '../types';
import { sampleApiTypes } from '../../types/sampleApiTypes';
import { reduxHelpers } from '../common/reduxHelpers';

const initialState = {
  data: {
    usage: []
  },
  error: false,
  errorStatus: null,
  errorMessage: null,
  pending: false,
  fulfilled: false
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case reduxHelpers.REJECTED_ACTION(sampleTypes.GET_SAMPLE_DATA):
      return reduxHelpers.setStateProp(
        null,
        {
          error: action.error,
          errorMessage: reduxHelpers.getMessageFromResults(action.payload),
          errorStatus: reduxHelpers.getStatusFromResults(action.payload)
        },
        {
          state,
          initialState
        }
      );

    case reduxHelpers.PENDING_ACTION(sampleTypes.GET_SAMPLE_DATA):
      return reduxHelpers.setStateProp(
        null,
        {
          pending: true
        },
        {
          state,
          initialState
        }
      );

    case reduxHelpers.FULFILLED_ACTION(sampleTypes.GET_SAMPLE_DATA):
      return reduxHelpers.setStateProp(
        null,
        {
          data: {
            usage: action.payload.data[sampleApiTypes.SAMPLE_API_RESPONSE_DATA] || []
          },
          fulfilled: true
        },
        {
          state,
          initialState
        }
      );

    default:
      return state;
  }
};

sampleReducer.initialState = initialState;

export { sampleReducer as default, initialState, sampleReducer };
