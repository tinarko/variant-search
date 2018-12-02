import CODES from 'http-status-codes';
import handleError from './handleError';

export const flushAllPromises = () =>
  new Promise(resolve => setImmediate(resolve));

jest.spyOn(window.location, 'assign');
jest.mock('./throwError', () => jest.fn());

beforeEach(jest.clearAllMocks);

describe('handleError', () => {
  it('throws an error with the message from the response', () => {
    const throwError = require('./throwError');
    handleError({
      status: CODES.BAD_REQUEST,
      json: () => Promise.resolve({ message: 'foo' })
    });
    expect.assertions(1);
    return flushAllPromises().then(() =>
      expect(throwError).toHaveBeenCalledWith('foo')
    );
  });

  xit('takes the user to the login screen if the response is 401', () => {
    handleError({
      status: CODES.UNAUTHORIZED,
      json: Promise.resolve({})
    });

    expect.assertions(1);
    return flushAllPromises().then(() => {
      expect(window.location.assign).toHaveBeenCalledWith(`/expired`);
    });
  });
});
