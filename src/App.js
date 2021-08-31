import './App.css';
import { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { Searchbox } from './components/search-box/search-box.component';
class App extends Component {
  constructor () {
    super();

    this.state = {
      monster: [],
      SearchField: '',
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then( response => response.json() )
    .then(users=> this.setState( {monster: users} ))
  }

  handleChange = (e) => {
    this.setState( { SearchField: e.target.value}) 
  }

  render () {
    const { monster, SearchField } = this.state;
    const filterMonsters = monster.filter( monster =>
        monster.name.toLowerCase().includes(SearchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1 className="App-title">Monsters Rolodex</h1>
        <Searchbox
                placeholder = "Search Monsters"
                handleChange = { this.handleChange }
        />
        <CardList monster={filterMonsters} />
      </div>
    );
  }
}

export default App;
