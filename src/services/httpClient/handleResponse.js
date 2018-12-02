import CODES from 'http-status-codes';
import handleError from './handleError';
import parseResponse from './parseResponse';

export default function handleResponse(response = {}, includeHeaders = []) {
  if (!response.status || response.status >= CODES.BAD_REQUEST) {
    return handleError(response);
  } else if (response.status === CODES.NO_CONTENT) {
    return response;
  }

  return parseResponse(response, includeHeaders);
}
