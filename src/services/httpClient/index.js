import getCommonFetchOptions from './getCommonFetchOptions';
import handleResponse from './handleResponse';

/*
  async
  returns { data, headers }

  options.includeHeaders is an array of strings which correspond to the
  response headers you want to include in the returned { headers } object
*/

export default function(url = '', options = {}) {
  return fetch(url, getCommonFetchOptions(options)).then(response => {
    return handleResponse(response
      , options.includeHeaders
    );
  });
}
