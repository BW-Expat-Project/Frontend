import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "./utils/axiosWithAuth";
import * as yup from "yup";

const FormSignup = () => {
    const history = useHistory()
    const defaultState= {
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
        terms: ""
    }

    const [formState, setFormState] = useState(defaultState);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [errors, setErrors] = useState({ 
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        password2: "",
        terms: ""
    })
    
    const setFormErrors = (name, value) => {
        yup.reach(formSchema, name).validate(value)
        .then(() => setErrors({ ...errors, [name]: ""}))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }
    const inputChange = e => {
        const { value, name, type } = e.target
        const valueToUse = type === 'checkbox' ? e.target.checked : e.target.value;
        setFormErrors(name, valueToUse);
        setFormState({ ...formState, [e.target.name]: value});
    };
    const formSchema = yup.object().shape({
        username: yup.string().required("Username required").min(2, "Username needs to be atleast 2 characters").max(20, "Username can be no more than 20 characters"),
        email: yup.string().required("Email required").email("Invalid email address"),
        firstName: yup.string().required("Your Name is required").min(2, "Name must be more than 2 characters").max(24, "Name can be no more than 24 characters"),
        lastName: yup.string().required("Your Name is required").min(2, "Name must be more than 2 characters").max(24, "Name can be no more than 24 characters"),
        password: yup.string().required("Password is required").min(6, "Password should be at least 6 characters"),
        password2: yup.string().oneOf([yup.ref('password'), null], "Passwords must match"),
        terms: yup.boolean().oneOf([true], "Please read and agree to our Terms & Conditions to proceed")
    });
    useEffect(() => {
        formSchema.isValid(formState).then(valid => setButtonDisabled(!valid))
    }, [formState])
    const formSubmit = e => {
        e.preventDefault();
        console.log("Submitted");
        axiosWithAuth().post('/users', formState)
        .then(res => history.push("/login"))
        .catch(err => console.log(err))
    };
    return (
        <div>
            <form className="form" onSubmit={formSubmit}>
                <h1>Start sharing your journey today! Create your account by filling out the information below</h1>
                <div>
                    <label htmlFor="username" className="form-label">
                        Username
                    </label>
                    <input 
                        id="username"
                        type="text" 
                        name="username"
                        placeholder="Enter your username"
                        value={formState.username}
                        onChange={inputChange}
                        className="input"
                    />
                    <p>{errors.username}</p>
                </div>
                <div >
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                        id="email"
                        type="email" 
                        name="email"
                        placeholder="Enter your email"
                        value={formState.email}
                        onChange={inputChange}
                        className="input"
                    />
                    <p>{errors.email}</p>
                </div>
                <div className="form-inputs">
                    <label htmlFor="firstName" className="form-label">
                        First Name
                    </label>
                    <input 
                        id="firstName"
                        type="text" 
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formState.firstName}
                        onChange={inputChange}
                    />
                    <p>{errors.firstName}</p>
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastName" className="form-label">
                        Last Name
                    </label>
                    <input 
                        id="lastName"
                        type="text" 
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formState.lastName}
                        onChange={inputChange}
                    />
                    <p>{errors.lastName}</p>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input 
                        id="password"
                        type="password" 
                        name="password"
                        placeholder="Enter your password"
                        value={formState.password}
                        onChange={inputChange}
                    />
                    <p>{errors.password}</p>
                </div>
                <div className="form-inputs">
                    <label htmlFor="password2" className="form-label">
                        Confirm Password
                    </label>
                    <input 
                        id="password2"
                        type="password" 
                        name="password2"
                        placeholder="Re-enter your password"
                        value={formState.password2}
                        onChange={inputChange}
                    />
                    <p>{errors.password2}</p>
                </div>
                <div className="form-inputs">
                    <label htmlFor="terms" className="form-label">
                        <a href="#">Terms &amp; Conditions</a>
                    </label>
                    <input 
                        id="terms"
                        type="checkbox" 
                        name="terms"
                        checked={formState.terms}
                        onChange={inputChange}
                    />
                    <p>{errors.terms}</p>
                </div>
                <button className="form-input-btn" type="submit">Create Account</button>
                <small><a href="#">Already have an account?</a></small>
            </form>
        </div>
    )
}

export default FormSignup;