import axios from 'axios';
import serviceConfig from './config';

/**
 * @apiMock {DelayResponse} 2000
 * @api {get} /api/sample/v1/sample Get data
 * @apiDescription Retrieve data.
 *
 * @apiParam (Query string) {Mixed} [limit] Limit the number of results
 * @apiParam (Query string) {Mixed} [offset]
 * @apiParam (Query string) {Date} [start_date] Start date in ISO format
 * @apiParam (Query string) {Date} [end_date] End date in ISO format
 *
 * @apiSuccess {Array} data
 * @apiSuccess {Object} links
 * @apiSuccess {Object} meta
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": [
 *          {
 *            "date": "2019-05-01",
 *            "lorem": 0,
 *            "ipsum": 0.0
 *          },
 *          {
 *            "date": "2019-05-02",
 *            "lorem": 0,
 *            "ipsum": 0.0
 *          },
 *          {
 *            "date": "2019-05-03",
 *            "lorem": 0,
 *            "ipsum": 0.0
 *          },
 *          {
 *            "date": "2019-05-04",
 *            "lorem": 0,
 *            "ipsum": 0.0
 *          }
 *        ],
 *        "links": {
 *          "first": null,
 *          "last": null,
 *          "next": null,
 *          "previous": null
 *        },
 *        "meta": {
 *          "count": 4
 *        }
 *     }
 *
 * @apiError {String} detail
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "detail": "Authentication credentials were not provided."
 *     }
 * @apiError {String} detail
 * @apiErrorExample {text} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "detail": "Failed because of {reasons}"
 *     }
 */
const getSampleData = (params = {}) =>
  axios(
    serviceConfig({
      url: process.env.REACT_APP_SERVICES_SAMPLE,
      params
    })
  );

const sampleServices = { getSampleData };

export { sampleServices as default, sampleServices, getSampleData };
