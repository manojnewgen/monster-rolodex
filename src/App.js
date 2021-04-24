import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import { CardList } from "./Components/card-list/card-list";
import {SearchBox} from './Components/search-box/search-box.component.jsx'

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      message: "hello React class component",
      searchField: "",
    };

    // this.handleChange= this.handleChange.bind(this);
  }

  handleChange=(event)=>{
    this.setState({ searchField: event.target.value })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ monsters: data }))
      .catch((error) => {
        console.log("Error in feacthing api");
      });
  }

  render() {
    const {monsters, searchField} = this.state;
   const filteredmonster = monsters.filter(monster=>
      monster.name.toLowerCase()
      .includes(searchField.toLocaleLowerCase())
   )
    return (
      <div className="App">
       <h1>React Project</h1>
        <SearchBox  placeholder='Search Monster'  handleChange={this.handleChange} />
        <CardList
          monstersList={filteredmonster}
          searchstring={this.props.searchField}
        />
      </div>
    );
  }
}

export default App;
