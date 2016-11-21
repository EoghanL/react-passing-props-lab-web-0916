const React = require('react');
const { Component } = require('react');

const Filter = (props) => {
  debugger
  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: function(event) {
    props.handleChange(event)
 }
}
module.exports = Filter
