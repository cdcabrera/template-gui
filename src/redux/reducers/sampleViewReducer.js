const initialState = {
  view: {
    data: [],
    error: false,
    errorStatus: null,
    errorMessage: null,
    pending: false,
    fulfilled: false
  }
};

const sampleViewReducer = (state = initialState) => state;

sampleViewReducer.initialState = initialState;

export { sampleViewReducer as default, initialState, sampleViewReducer };
