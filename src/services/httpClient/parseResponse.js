import _ from 'lodash/fp';

const getHandlerMethod = _.cond([
  [contentType => /application\/json/.test(contentType), () => 'json'],
  [contentType => /application\/zip/.test(contentType), () => 'blob'],
  [_.stubTrue, () => 'text']
]);

export default async function parseResponse(response, includeHeaders = []) {
  const responseContentType = response.headers.get('Content-type');
  const responseHandlerMethod = getHandlerMethod(responseContentType);

  const headers = includeHeaders.reduce((obj, header) => {
    return {
      ...obj,
      [header]: response.headers.get(header)
    };
  }, {});

  return {
    data: await response[responseHandlerMethod](),
    headers
  };
}
