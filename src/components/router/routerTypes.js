import { helpers } from '../../common/helpers';
import SampleView from '../sampleView/sampleView';

/**
 * Return the application base directory.
 * @type {string}
 */
const baseName = helpers.PUBLIC_URL;

/**
 * Return array of objects that describe navigation
 * @return {array}
 */
const routes = [
  {
    title: 'Sample View',
    id: 'sample',
    to: '/sample',
    redirect: true,
    component: SampleView
  }
];

export { routes as default, baseName, routes };
