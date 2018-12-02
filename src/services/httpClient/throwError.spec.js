import throwError from './throwError';

describe('throwError', () => {
  it('throws an error with the passed in message', () => {
    expect(() => throwError('foo')).toThrow('foo');
    expect(() => throwError('bar')).toThrow('bar');
  });
});
