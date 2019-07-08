import React from 'react';
import { shallow } from 'enzyme';
import { SampleView } from '../sampleView';

describe('SampleView Component', () => {
  it('should render a non-connected component', () => {
    const props = {};

    const component = shallow(<SampleView {...props} />);

    expect(component).toMatchSnapshot('non-connected');
  });
});
