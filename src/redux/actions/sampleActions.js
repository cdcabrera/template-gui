import { sampleTypes } from '../types';
import sampleServices from '../../services/sampleServices';

const getSampleData = () => dispatch =>
  dispatch({
    type: sampleTypes.GET_SAMPLE_DATA,
    payload: sampleServices.getSampleData()
  });

export { getSampleData as default, getSampleData };
