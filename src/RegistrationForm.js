import React, { useState } from "react";
import './RegistrationForm.css';

function RegistrationForm(){

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(18);
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitFormData = (event) => {
        event.preventDefault();
        console.log("Form Submitted with : ", {firstName, lastName, age, city, email, password})
        alert(`Registered for : ${firstName} : ${email}`)
    }

    return(
        <div>
            <h2>Registration Form</h2>
            <div className="registration-form">
                <form onSubmit={submitFormData}>
                <p>
                    <input type="text" placeholder="Enter First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </p>
                <p>
                    <input type="text" placeholder="Enter Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </p>
                <p>
                    <input type="text" placeholder="Enter Age value" value={age} onChange={(e) => setAge(e.target.value)}/>
                </p>
                <p>
                <p>
                    <input type="text" placeholder="Enter City" value={city} onChange={(e) => setCity(e.target.value)}/>
                </p>
                    <input type="text" placeholder="Enter Email " value={email} onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <p>
                    <input type="text" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </p>
                <p>
                    <button type="submit">Submit</button>
                </p>
                </form>
            </div>
        </div>
    );
}

export default RegistrationForm;