import React, {useState} from "react";
import FormSignup from "./FormSignup"
import "./Form.css"
const FormState = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }

    return(
        <div className="form-container">
            <div className="form-content-left">
                <FormSignup submitForm={submitForm}/>
            </div>
        </div>
    )

}

export default FormState;