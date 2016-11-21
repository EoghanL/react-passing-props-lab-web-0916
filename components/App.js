const React = require('react');

const FruitBasket = require('./FruitBasket');

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };
    //this.handleChange = this.handleChange.bind(this)
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }
  componentWillMount() {
    this.fetchFilters();
    this.fetchFruit();
  }
  fetchFruit(){
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }
  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }
  handleFilterChange(e) {
    debugger
    console.log('new filter: ', e.target.value);
    this.setState(Object.assign({}, this.state, {currentFilter: e.target.value}));
  }
  render() {
  return (
    <FruitBasket fruit={this.state.fruit} filters={this.state.filters} filterChange={this.handleFilterChange} currentFilter={this.state.currentFilter}/>
  );
  }
}

module.exports = App;
