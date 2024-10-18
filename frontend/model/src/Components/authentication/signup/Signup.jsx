import "./Signup.css"
import React, { useState } from 'react';


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
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch('http://127.0.0.1:8000/accounts/signup/', 
                {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                body: JSON.stringify({
                    email: formData.email,
                    first_name: formData.first_name,
                    last_name: formData.last_name,
                    mobile: formData.mobile,
                    password: formData.password,}
                ),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('User created successfully:', data);
            } 
            else {
                const errorData = await response.json();
                console.error('Error creating user:', errorData);
                alert('Error: ' + JSON.stringify(errorData));
            }
        } 
        catch (error) {
            console.error('Network error:', error);
            alert('Network error. Please try again.');
        }
    };

    return (
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
    );
};

export default Signup;
