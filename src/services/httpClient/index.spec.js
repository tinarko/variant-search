import httpClient from './index';

import HTTP_STATUS_CODES from 'http-status-codes';

describe('httpClient', () => {
  describe('response parsing', () => {
    it('returns json data', async () => {
      const resBody = ['foo', 'bar'];
      const resHeaders = new Headers({
        'Content-type': 'application/json',
        'some-header': 'foo'
      });
      const res = new Response(JSON.stringify(resBody), {
        headers: resHeaders
      });

      jest.spyOn(res, 'json');

      global.fetch = async () => res;

      const { data, headers } = await httpClient('', {
        includeHeaders: ['some-header']
      });

      expect(res.json).toHaveBeenCalled();
      expect(data).toEqual(resBody);
      expect(headers).toEqual({ 'some-header': 'foo' });
    });

    it('returns text data', async () => {
      const resBody = 'foobarbat';
      const resHeaders = new Headers({
        'some-header': 'foo'
      });
      const res = new Response(resBody, {
        headers: resHeaders
      });

      jest.spyOn(res, 'json');
      jest.spyOn(res, 'text');

      global.fetch = async () => res;

      const { data, headers } = await httpClient('', {
        includeHeaders: ['some-header']
      });

      expect(res.json).not.toHaveBeenCalled();
      expect(res.text).toHaveBeenCalled();
      expect(data).toEqual(resBody);
      expect(headers).toEqual({ 'some-header': 'foo' });
    });
  });

  describe('error handling', () => {
    it('handles responses with errors', async () => {
      expect.assertions(1);
      const resBody = { message: 'something bad' };
      const resHeaders = new Headers({
        'Content-type': 'application/json',
        'some-header': 'foo'
      });

      const res = new Response(JSON.stringify(resBody), {
        headers: resHeaders,
        status: HTTP_STATUS_CODES.BAD_REQUEST
      });

      global.fetch = async () => res;

      try {
        await httpClient();
      } catch (e) {
        expect(e.message).toBe('something bad');
      }
    });
  });
});
