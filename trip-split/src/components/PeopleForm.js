import React, {useState} from 'react';
import { connect } from 'react-redux';
import { postTrip } from '../actions/actions';
import moment from "moment";
import {Form} from 'semantic-ui-react';

function PeopleForm(props){
    const [tripInfo, setTripInfo] = useState({
        trip: '', 
        person1: '', 
        person2: '', 
        person3:'', 
        person4: '', 
        person5: ''
    });
    const handleChange = event => {
        setTripInfo({...tripInfo, [event.target.name]: event.target.value});
    };
    const handleSubmit = event => {
        event.preventDefault();
        let tripObj = {
            trip_name: tripInfo.trip,
            trip_destination: "Planet Earth",
            trip_date: moment().format("MMM Do YY"), 
            trip_opened: true,
            peoples:[
              {people_name:"tayo alade"},
              {people_name: "tayo jojo"}
            ]
        }
        props.postTrip(tripObj)
        setTripInfo({trip: '', person1: '', person2: '', person3:'', person4: '', person5: ''});
        props.history.push('/');
    }
    return (
        <div>
            <h1>PeopleForm</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Field>
                    <input
                    placeholder="Trip Name"
                    name="trip"
                    value={tripInfo.trip}
                    onChange={handleChange}
                    />
                </Form.Field>
                <Form.Field>
                <input
                    placeholder="Name"
                    name="person1"
                    value={tripInfo.person1}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <input
                    placeholder="Name"
                    name="person2"
                    value={tripInfo.person2}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <input
                    placeholder="Name"
                    name="person3"
                    value={tripInfo.person3}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <input
                    placeholder="Name"
                    name="person4"
                    value={tripInfo.person4}
                    onChange={handleChange}
                />
                </Form.Field>
                <Form.Field>
                <input
                    placeholder="Name"
                    name="person5"
                    value={tripInfo.person5}
                    onChange={handleChange}
                />
                </Form.Field>
                <button>Submit</button>
            </Form>
        </div>
    )
}
function mapStateToProps(){
    return {}
}

export default connect(mapStateToProps, {postTrip})(PeopleForm);