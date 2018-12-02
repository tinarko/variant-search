import getCommonFetchOptions, { commonOptions } from './getCommonFetchOptions';

describe('getCommonFetchOptions', () => {
  it('returns the common options if nothing is passed in', () => {
    expect(getCommonFetchOptions()).toMatchObject(commonOptions);
  });

  it('merges in the passed in options', () => {
    const options = {
      credentials: 'foo',
      method: 'PUT',
      headers: {
        baz: 'baz'
      }
    };

    const expectedResult = {
      credentials: 'foo',
      method: 'PUT',
      headers: {
        ...commonOptions.headers,
        baz: 'baz'
      }
    };

    expect(getCommonFetchOptions(options)).toMatchObject(expectedResult);
  });
});
