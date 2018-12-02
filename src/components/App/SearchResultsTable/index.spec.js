import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsTable, { getNucleotideChangeColumn } from './';

describe('<SearchResultsTable />', () => {
  it('renders without errors', () => {
    shallow(<SearchResultsTable />);
  });

  describe('getNucleotideChangeColumn', () => {
    it(
      'returns a string of Other_Mappings values separated by \n when given a comma separated string ' +
        'of Other_Mappings in Other_Mappings value',
      () => {
        const data = {
          Other_Mappings: 'foo,bar,baz'
        };
        const expectedResult = 'foo\nbar\nbaz';

        expect(getNucleotideChangeColumn(data)).toBe(expectedResult);
      }
    );
    it('returns Nucleotide_Change string when given a Nucleotide_Change value', () => {
      const data = {
        Nucleotide_Change: 'foobar'
      };
      const expectedResult = 'foobar';

      expect(getNucleotideChangeColumn(data)).toBe(expectedResult);
    });

    it(
      'returns Nucleotide_Change string and Other_Mappings values separated by \n when given ' +
        'Nucleotide_Change value and Other_Mappings value',
      () => {
        const data = {
          Nucleotide_Change: 'foo',
          Other_Mappings: 'bar,baz'
        };
        const expectedResult = 'foo\nbar\nbaz';

        expect(getNucleotideChangeColumn(data)).toBe(expectedResult);
      }
    );

    it(
      'returns unique values of Nucleotide_Change string and Other_Mappings values separated by \n when given ' +
        'Nucleotide_Change value and Other_Mappings value',
      () => {
        const data = {
          Nucleotide_Change: 'foo',
          Other_Mappings: 'foo,bar,baz'
        };

        const expectedResult = 'foo\nbar\nbaz';

        expect(getNucleotideChangeColumn(data)).toBe(expectedResult);
      }
    );
  });
});
