import React, {useState} from 'react';
import {Form} from 'semantic-ui-react';
import '../styles/PeopleForm.scss';
import {Button} from './Buttons.js';

export default function PeopleForm(props){
    const [people, setPeople] = useState({trip: '', person1: '', person2: '', person3:'', person4: '', person5: ''});
    const handleChange = event => {
        setPeople({...people, [event.target.name]: event.target.value});
    };
    const handleSubmit = event => {
        event.preventDefault();
        setPeople({trip: '', person1: '', person2: '', person3:'', person4: '', person5: ''});
        props.history.push('/');
    }
    return (
        <div className="new-trip">
            <h1>New Trip</h1>
            <Form className="trip-form" onSubmit={handleSubmit}>
                <Form.Field>
                    <label>Trip Name</label>
                    <input
                    placeholder="Trip Name"
                    name="trip"
                    value={people.trip}
                    onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                <label>Name 1</label>
                <input
                    placeholder="Name"
                    name="person1"
                    value={people.person1}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Name 2</label>
                <input
                    placeholder="Name"
                    name="person2"
                    value={people.person2}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Name 3</label>
                <input
                    placeholder="Name"
                    name="person3"
                    value={people.person3}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Name 4</label>
                <input
                    placeholder="Name"
                    name="person4"
                    value={people.person4}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <label>Name 5</label>
                <input
                    placeholder="Name"
                    name="person5"
                    value={people.person5}
                    onChange={handleChange}
                />
                </Form.Field>
                <Button>Submit</Button>
            </Form>
        </div>
    )
}
