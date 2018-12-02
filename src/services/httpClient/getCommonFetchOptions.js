export const commonOptions = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

export default function getCommonFetchOptions(options = {}) {
  return {
    ...commonOptions,
    ...options,
    headers: mergeHeaders(options.headers)
  };
}

function mergeHeaders(headers = {}) {
  return { ...commonOptions.headers, ...headers };
}
