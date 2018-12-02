import React from 'react';
import { shallow } from 'enzyme';
import Table from './index';

describe('<Table />', () => {
  it('renders without errors', () => {
    shallow(<Table />);
  });

  describe('row iteration', () => {
    const data = [
      { id: '1', name: 'foo', date_of_birth: '1111-11-11' },
      { id: '2', name: 'bar', date_of_birth: '2222-02-02' }
    ];

    const rowComponent = data => (
      <tr>
        <td>{data.id}</td>
        <td>{data.name}</td>
        <td>{data.date_of_birth}</td>
      </tr>
    );

    const columnHeaders = ['ID', 'Name', 'Date of Birth'];

    const component = shallow(
      <Table
        data={data}
        rowComponent={rowComponent}
        columnHeaders={columnHeaders}
      />
    );

    it('creates a row for every item in the data array', () => {
      expect(component.find('tbody tr')).toHaveLength(data.length);
    });

    it('creates a column for each item in the columnHeaders array', () => {
      expect(component.find('thead th')).toHaveLength(columnHeaders.length);
    });

    it('inserts the column names', () => {
      expect.assertions(columnHeaders.length);

      component
        .find('thead th')
        .forEach((header, i) => expect(header.text()).toBe(columnHeaders[i]));
    });

    it('inserts the data in the rows', () => {
      const totalCells = data.length * Object.keys(data[0]).length;
      expect.assertions(totalCells);

      data.forEach((rowData, rowIndex) =>
        Object.keys(rowData).forEach((cellKey, cellIndex) =>
          expect(
            component
              .find('tbody tr')
              .at(rowIndex)
              .find('td')
              .at(cellIndex)
              .text()
          ).toBe(data[rowIndex][cellKey])
        )
      );
    });
  });
});
