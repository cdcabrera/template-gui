import React from 'react';
import { mount } from 'enzyme';
import { SampleCard } from '../sampleCard';

describe('SampleCard Component', () => {
  it('should render a non-connected component', () => {
    const props = {};

    const component = mount(<SampleCard {...props} />);

    expect(component).toMatchSnapshot('non-connected');
  });
});
