import sampleApiTypes, * as allApiTypes from '../sampleApiTypes';

describe('SampleApiTypes', () => {
  it('Should have specific API properties', () => {
    expect(sampleApiTypes).toMatchSnapshot('specific types');
    expect(allApiTypes).toMatchSnapshot('all exported api types');
  });
});
