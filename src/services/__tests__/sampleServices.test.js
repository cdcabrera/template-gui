import moxios from 'moxios';
import sampleServices from '../sampleServices';

describe('SampleServices', () => {
  beforeEach(() => {
    moxios.install();

    moxios.stubRequest(/\/(sample).*?/, {
      status: 200,
      responseText: 'success',
      timeout: 1
    });
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should export a specific number of methods and classes', () => {
    expect(Object.keys(sampleServices)).toHaveLength(1);
  });

  it('should have specific methods', () => {
    expect(sampleServices.getSampleData()).toBeDefined();
  });

  it('should return promises for every method', done => {
    const promises = Object.keys(sampleServices).map(value => sampleServices[value]());

    Promise.all(promises).then(success => {
      expect(success.length).toEqual(Object.keys(sampleServices).length);
      done();
    });
  });
});
