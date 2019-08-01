import React, {useState} from 'react';

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
        <div>
            <h1>PeopleForm</h1>
            <form className="trip-form" onSubmit={handleSubmit}>
                <input
                placeholder="Trip Name"
                name="trip"
                value={people.trip}
                onChange={handleChange}
                />
                <input
                    placeholder="Name"
                    name="person1"
                    value={people.person1}
                    onChange={handleChange}
                />
                <input
                    placeholder="Name"
                    name="person2"
                    value={people.person2}
                    onChange={handleChange}
                />
                <input
                    placeholder="Name"
                    name="person3"
                    value={people.person3}
                    onChange={handleChange}
                />
                <input
                    placeholder="Name"
                    name="person4"
                    value={people.person4}
                    onChange={handleChange}
                />
                <input
                    placeholder="Name"
                    name="person5"
                    value={people.person5}
                    onChange={handleChange}
                />
                <button>Submit</button>
            </form>
            
        </div>
    )
}
