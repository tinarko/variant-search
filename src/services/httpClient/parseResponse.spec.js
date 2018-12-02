import parseResponse from './parseResponse';

describe('parseResponse', () => {
  it('returns the json response if there are no errors', async () => {
    expect.assertions(2);

    const responseData = ['foo', 'bar'];
    const headers = new Headers({
      'Content-type': 'application/json'
    });
    const jsonResponse = new Response(JSON.stringify(responseData), {
      headers
    });

    jest.spyOn(jsonResponse, 'json');

    const { data } = await parseResponse(jsonResponse);

    expect(jsonResponse.json).toHaveBeenCalled();

    expect(data).toEqual(responseData);
  });

  it('returns the requested headers', async () => {
    const responseData = ['foo', 'bar'];
    const responseHeaders = new Headers({
      'Content-type': 'application/json',
      'relevant-header': 'foo',
      'irrelevant-header': 'bar'
    });
    const response = new Response(JSON.stringify(responseData), {
      headers: responseHeaders
    });

    const { headers } = await parseResponse(response, ['relevant-header']);

    expect(headers).toEqual({ 'relevant-header': 'foo' });
  });

  it('returns response data as a blob when content type is application/zip', async () => {
    const headers = new Headers({
      'Content-type': 'application/zip'
    });
    const jsonResponse = new Response('zipcontents', {
      headers
    });

    jest.spyOn(jsonResponse, 'blob');

    const { data } = await parseResponse(jsonResponse);

    expect(jsonResponse.blob).toHaveBeenCalled();

    expect(data).toBeInstanceOf(Blob);
  });
});
