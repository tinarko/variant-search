// import CODES from 'http-status-codes';
// import ROUTES from '../../constants/routes';
import throwError from './throwError';

export default function handleError(response) {
  // if (response.status === CODES.UNAUTHORIZED) {
  // return window.location.assign(`/admin-portal${ROUTES.LOGIN}/expired`);
  // }

  try {
    return response.json().then(json => {
      return throwError(json.message);
    });
  } catch (error) {
    return throwError('please contact SmithRx support');
  }
}
