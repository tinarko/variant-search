import React from 'react';
import _ from 'lodash/fp';
import moment from 'moment';
import Table from '../../core/Table';

const dateFormat = 'MMM D, YYYY';

function SearchResultsTable({ data = [] }) {
  return (
    <Table
      columnHeaders={columnHeaders}
      data={data}
      rowComponent={rowComponent}
    />
  );
}

const columnHeaders = [
  'Gene',
  'Nucleotide Change',
  'Proteien Change',
  'Alias',
  'Region',
  'Reported Classification',
  'Last Updated',
  'More Info'
];

const rowComponent = data => {
  const nucleotideChange = getNucleotideChangeColumn(data);
  return (
    <tr>
      <td>{data.Gene}</td>
      <td>
        <div style={styles.nucleotideChange}>
          <div>{nucleotideChange}</div>
        </div>
      </td>
      <td>{data.Protein_Change}</td>
      <td>{data.Alias}</td>
      <td>{data.Region}</td>
      <td>{_.upperFirst(data.Reported_Classification)}</td>
      <td>{moment(data.Last_Updated).format(dateFormat)}</td>
      <td>
        {
          <a href={data.URL} target="_blank">
            {data.Source}
          </a>
        }
      </td>
    </tr>
  );
};

export const getNucleotideChangeColumn = data => {
  const nucleotideChange = data.Nucleotide_Change;
  const otherMappings = data.Other_Mappings
    ? _.split(',')(data.Other_Mappings)
    : '';
  let columnData = _.isEmpty(otherMappings) ? [] : otherMappings;
  nucleotideChange && columnData.unshift(nucleotideChange);
  return _.pipe(_.uniq, _.join('\n'))(columnData);
};

const styles = {
  nuclieotideChange: {
    display: 'flex',
    flex: 'column'
  }
};

export default SearchResultsTable;
