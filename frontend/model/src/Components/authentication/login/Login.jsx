import "./Login.css"
import React , {useState} from 'react' ;

const Login = () => {

    const [formData , setFormData] = useState({
        email : "" , 
        password : "" ,
    });





    // saving form data into react state
    const handleChange = (e) => {
        const { name, value } = e.target;           //destructuring javasscript obj
        console.log(e.target);
        setFormData({ ...formData, [name]: value });
    };



    // const handleSubmit = async (e) =>{
    //     e.preventDefault();

    //     try {
    //         const response = await fetch("http://127.0.0.1:8000/accounts/login/" ,
    //             {
    //             method :'POST',
    //             headers : {'Content-Type': 'application/json'},
    //             body : JSON.stringify({email :formData.email , password :formData.password})
    //             }
    //         );

    //         // execute upon when server return response 
    //         if (response.ok) {
    //             const data = await response.json() ;
    //             console.log("response message :" , data)
    //             alert(JSON.stringify(data))
    //         }
    //         else{
    //             const errorData = await response.json();
    //             console.error('Error creating user:', errorData);
    //             alert('Error: ' + JSON.stringify(errorData));
    //         }
    //     }
    //     catch(error){
    //         console.error("Network error" , error);
    //         alert("Catch block Network error!! Please try again")

    //     }

    // };
    

    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            const response = await fetch("http://127.0.0.1:8000/accounts/login/" ,
                {
                method :'POST',
                headers : {'Content-Type': 'application/json'},
                body : JSON.stringify({email :formData.email , password :formData.password})
                }
            )




            if (response.ok) {
                const data = await response.json() ;
                console.log("response.ok message :" , data)
                alert(JSON.stringify(data))
            }

            else{
                const errorData = await response.json();
                console.log('else blovk of handle submit JSON data:' ,errorData);  // Check if error data is being parsed correctly
                alert(`Error :  ${errorData} `);
            }
        }
        catch(error){
            console.log("Catch block of handlesubmit function Network error" , error);
            alert("Network error!! Please try again")

        }

    };
    return(
        <div className="login-container">
            <h2>Login</h2>
            <form  onSubmit = {handleSubmit} className = "login-form">
                <label htmlFor="email">Email</label>
                <input 
                type = "email"  
                id = "email"            // link labels with input tag
                name = "email"          // used as a key to identify which input field is updated
                value = {formData.email} // holds current value of email state
                onChange = {handleChange}
                required
                />

                <label htmlFor="password">Password</label>
                <input 
                type = "password"  
                id = "password"            // link labels with input tag
                name = "password"          // used as a key to identify which input field is updated
                value = {formData.password} // holds current value of email state
                onChange = {handleChange}
                required
                />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    )


};

export default Login ;