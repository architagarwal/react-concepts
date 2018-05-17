import React, {Component} from 'react';
import personClasses from './Person.css';

class Person extends Component{
    render(){
        return(
            <div className={personClasses.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.children}</p>
                <input type="text" value={this.props.name} onChange={this.props.changed} />
            </div>
        )
    }
}

export default Person;