import "./Signup.css"
import React, { useState } from 'react';
import Nav from '../../navbar/Nav'

const Signup = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://127.0.0.1:8000/accounts/signup/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    mobile: formData.mobile,
                    password: formData.password,
                }),
            });
    
            // Check if the response is successful (status code 200-299)
            if (response.ok) {
                const responseData = await response.json();                         // Parse the response body as JSON
                console.log("User created successfully:", responseData);
                alert("User created successfully!");
            } else {
                // Handle errors (e.g., validation errors from the backend)
                const errorData = await response.json();                            // extract json body from json obj
                console.error("Error creating user:", errorData);
                alert("User already exists");         //convert json obj body into string
            }
        } catch (error) {
            // Handle network errors or unexpected issues
            console.error("Network error:", error);
            alert("Network error occurred: " + error.message);
        }
    };
    

    return (
        <>
        <Nav />

        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"                  //A unique identifier for this input, useful for linking labels and inputs.
                    id="first_name"              //Identifies this input field. This is important for the handleChange function, as it will be used to update the corresponding state property.
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="mobile">Mobile</label>
                <input
                    type="text"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                    type="password"
                    id="confirm-password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Sign Up</button>
            </form>
        </div>
        </>
    );
};

export default Signup;
