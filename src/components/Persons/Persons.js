import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
    constructor(props){
        super(props);
        console.log('[Persons.js] Inside Constructor', props);
    }
    
    componentWillMount() {
        console.log('[Persons.js] Inside componentWillMount()');
    }
    
    componentDidMount() {
        console.log('[Persons.js] Inside componentDidMount()');
    }

    componentWillReceiveProps(nextProps){
        console.log('[UPDATE Persons.js] Inside componentWillRecieveProps()', nextProps);
    }

    //classes that extends PureComponent do not need to implement shouldComponentUpdate method.
    //PureComponent performs a check for current props/state with previous props/state
    shouldComponentUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside shouldComponentUpdate()', nextProps, nextState);
        return nextProps.persons !== this.props.persons;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('[UPDATE Persons.js] Inside componentWillUpdate()', nextProps, nextState);
    }

    componentDidUpdate(){
        console.log('[UPDATE Persons.js] Inside componentDidUpdate()');
    }

    render(){
        console.log('[Persons.js] Inside render()');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)}
                >Index: {index}
            </Person>
        });
    }
}

export default Persons;