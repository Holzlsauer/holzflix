import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TableWrapper = styled.table`
  border-collapse: collapse;
`;

TableWrapper.TD = styled.td`
  border: 1px solid #FFFFFF;
  padding: 7px;
`;

TableWrapper.TH = styled.th`
  border: 1px solid #FFFFFF;
  padding: 10px;
`;

const Header = ({ keys }) => (
  <thead>
    <tr>
      { keys.map((key) => <TableWrapper.TH key={key}>{key}</TableWrapper.TH>) }
    </tr>
  </thead>
);

const Row = ({ row, keys }) => (
  <tr key={row.id}>
    { keys.map((index) => <TableWrapper.TD key={`${row.id}.${index}`}>{row[index]}</TableWrapper.TD>) }
  </tr>
);

function Table({ data, head }) {
  const headKeys = Object.keys(head);
  const headValues = Object.values(head);

  return (
    <TableWrapper>
      <Header keys={headValues} />
      <tbody>
        { data.map((row) => <Row keys={headKeys} row={row} />) }
      </tbody>
    </TableWrapper>
  );
}

Header.propTypes = {
  keys: PropTypes.node.isRequired,
};

Row.propTypes = {
  row: PropTypes.node.isRequired,
  keys: PropTypes.node.isRequired,
};

Table.defaultProps = {
  data: [],
  head: {},
};

Table.propTypes = {
  data: PropTypes.node,
  head: PropTypes.node,
};

export default Table;
