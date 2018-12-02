import handleResponse from './handleResponse';
import CODES from 'http-status-codes';

jest.mock('./handleError', () => jest.fn());
jest.mock('./parseResponse', () => jest.fn());

beforeEach(jest.clearAllMocks);

describe('handleResponse', () => {
  it('sends empty responses to handleError', () => {
    const handleError = require('./handleError');
    handleResponse();
    expect(handleError).toHaveBeenCalled();
  });

  it('sends responses with statuses higher than 400 to handleError', () => {
    const handleError = require('./handleError');
    handleResponse({ status: 400 });
    expect(handleError).toHaveBeenCalled();
    handleError.mockClear();

    handleResponse({ status: 401 });
    expect(handleError).toHaveBeenCalled();
    handleError.mockClear();

    handleResponse({ status: 200 });
    expect(handleError).not.toHaveBeenCalled();
    handleError.mockClear();

    handleResponse({ status: 403 });
    expect(handleError).toHaveBeenCalled();
    handleError.mockClear();

    handleResponse({ status: 500 });
    expect(handleError).toHaveBeenCalled();
    handleError.mockClear();
  });

  it('sends valid responses to parseResponse', () => {
    const parseResponse = require('./parseResponse');
    handleResponse({ status: 200 });
    expect(parseResponse).toHaveBeenCalled();
    parseResponse.mockClear();

    handleResponse({ status: 500 });
    expect(parseResponse).not.toHaveBeenCalled();
    parseResponse.mockClear();
  });

  it('doesnt try to parse the response in case of a no-content status', () => {
    const parseResponse = require('./parseResponse');
    const emptyResponse = {
      status: CODES.NO_CONTENT
    };
    handleResponse(emptyResponse);
    expect(parseResponse).not.toHaveBeenCalled();
  });
});
