import { useState } from "react";
import { useForm } from "../../../hooks/useForm";


const FormContainer = () => {
    const [loginForm, handleInputChange] = useForm({email:'', password:''})
    const [isPasswordVisible, setVisible] = useState(false)

    const handleSubmit =(event) => {
        event.preventDefault()
        console.log(loginForm);
    }

    return(
        <>
            <div>Hello form</div>
            <form onSubmit={handleSubmit}>
                <p>
                    Email:
                    <input 
                        required
                        onChange={handleInputChange}
                        value={loginForm.email}
                        type='email'
                        name="email"
                    />
                </p>

                <p>
                    Password:
                    <input 
                        required
                        onChange={handleInputChange}
                        value={loginForm.password}
                        type={isPasswordVisible ? 'text' : 'password'}
                        name="password"
                    />
                    <button onClick={() => setVisible(!isPasswordVisible)}>Visible password</button>
                </p>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default FormContainer;