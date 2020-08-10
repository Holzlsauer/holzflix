import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ keys }) => (
  <thead>
    <tr>
      { keys.map((key) => <th key={key}>{key}</th>) }
    </tr>
  </thead>
);

const Row = ({ row, keys }) => (
  <tr key={row.id}>
    { keys.map((index) => <td key={`${row.id}.${index}`}>{row[index]}</td>) }
  </tr>
);

function Table({ data, head }) {
  const headKeys = Object.keys(head);
  const headValues = Object.values(head);

  return (
    <table>
      <Header keys={headValues} />
      <tbody>
        { data.map((row) => <Row keys={headKeys} row={row} />) }
      </tbody>
    </table>
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
