import httpClient from './httpClient';

export const getVariants = async (searchString = '') => {
  const variants = searchString
    ? await httpClient(`http://localhost:8000/variants/${searchString}`)
    : await httpClient('http://localhost:8000/variants');

  const { data = [] } = variants;
  return data;
};

export const getAutoSearchOptions = async (searchString = '') => {
  const autoSearchResults = await httpClient(
    `http://localhost:8000/variants/${searchString}`
  );
  const { data = [] } = autoSearchResults;

  return data.map(result => result.Gene);
};
