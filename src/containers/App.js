import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] Inside Constructor', props);
    this.state = {
      persons: [
        {id:'qw', name: 'Archit', age: 28},
        {id:'as', name: 'Ridhima', age: 28},
        {id:'zx', name: 'abc', age: 27}
      ],
      otherState: 'some other state',
      showPersons: false
    };
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

  deletePersonHandler = (personIndex) => {
    const newPersonsArr = [...this.state.persons]; // this creates a deep copy of the object.
    //Any mutation will take place for the object 'copy' and not the 'original' object
    newPersonsArr.splice(personIndex, 1);
    this.setState({
      persons: newPersonsArr
    });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id;
    });

    const personToUpdate = {...this.state.persons[personIndex]}
    personToUpdate.name = event.target.value;

    const newPersonsArr = [...this.state.persons];
    newPersonsArr[personIndex] = personToUpdate;

    this.setState({persons: newPersonsArr});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] Inside render()');
    let persons = null;

    if(this.state.showPersons){
      persons = <Persons 
        persons = {this.state.persons}
        clicked = {this.deletePersonHandler}
        changed = {this.nameChangeHandler}/>
    }

    return (
      <div className={classes.App}>
        <Cockpit
          appTitle = {this.props.title}
          showPersons = {this.state.showPersons}
          persons = {this.state.persons}
          clicked = {this.togglePersonsHandler}/>
        {persons}
      </div>
    );
  }
}

export default App;
