import promiseMiddleware from 'redux-promise-middleware';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import moxios from 'moxios';
import { sampleReducer, sampleViewReducer } from '../../reducers';
import { sampleApiTypes } from '../../../types/sampleApiTypes';
import { sampleActions } from '..';

describe('RhelActions', () => {
  const middleware = [promiseMiddleware];
  const generateStore = () =>
    createStore(
      combineReducers({
        sample: sampleReducer,
        sampleView: sampleViewReducer
      }),
      applyMiddleware(...middleware)
    );

  beforeEach(() => {
    moxios.install();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          test: 'success',
          [sampleApiTypes.SAMPLE_API_RESPONSE_DATA]: ['success']
        }
      });
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('Should return response content for getSampleData method', done => {
    const store = generateStore();
    const dispatcher = sampleActions.getSampleData();

    dispatcher(store.dispatch).then(() => {
      const response = store.getState().sample;

      expect(response.fulfilled).toBe(true);
      done();
    });
  });
});
