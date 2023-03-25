import React, { useState, useEffect,} from "react";
import classes from './Forms.module.css';

function Forms() { 
    const initialValues ={
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "",
        isFriendly: true,
        employment: "",
        favColor: "",
        isMan: "",
    }
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [resultForm, setResultForm] = useState(formData);

    function handleSubmit(event) {
        event.preventDefault()
        setFormErrors (validate(formData));
        setIsSubmit(true)
        setResultForm(!resultForm)
    }

    let contentCard = null;

    if (resultForm){
        contentCard = (
        <div className={classes.message}>
            <p>{formData.firstName}</p>
            <p>{formData.lastName}</p>
            <p>{formData.email}</p>
            <p>{formData.password}</p>
            <p>{formData.isFriendly}</p>
            <p>{formData.employment}</p>
            <p>{formData.favColor}</p>
            <p>{formData.isMan}</p>
        </div> 
        )
    }

 
    // {Object.keys(resultForm).length === 0 && isSubmit ? null :

    //     <div className={classes.message}>
    //      Имя:{formData.firstName} 
    //      Фамилия:{formData.lastName}
    //      Электронная почта:{formData.email}
    //      Пароль:{formData.password}
    //      Дружелюбность:{formData.isFriendly}
    //      Работа:{formData.employment}
    //      Любимый цвет:{formData.favColor}
    //      Пол:{formData.isMan}
    //      </div> 
    //      }

    
    useEffect(()=>{
        console.log(formErrors)
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formData);
        }
    },[formErrors])


    const validate = (values) => {
        const errors = {}
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.firstName) {
            errors.firstName = "FirstName is required!";
        }

        if (!values.lastName) {
            errors.lastName = "LastName is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if(!regex.test(values.email)){
            errors.email = "This is not a valid email!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        }  else if(values.password.length < 4){
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.isFriendly) {
            errors.isFriendly = "is required!";
        }
        if (!values.employment) {
            errors.employment = "is required!";
        }
        if (!values.favColor) {
            errors.favColor = "is required!";
        }
        if (!values.isMan) {
            values.isMan = "";
        } 
        return errors        
        };  

        function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }  
    return (
        <form onSubmit={handleSubmit}>      
            <div className={classes.formsWrapper}> 
            <div className={classes.formsBorder}>
            <label className={classes.formText}>First name</label>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />

            <p className={classes.errorBlock}>{formErrors.firstName}</p>

            <label className={classes.formText}>Last name</label>
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />

            <p className={classes.errorBlock}>{formErrors.firstName}</p>

            <label className={classes.formText}>Email:</label> 
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />

            <p className={classes.errorBlock}>{formErrors.email}</p>

            <label className={classes.formText}>Password</label> 
            <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="password"
                value={formData.password}
            />

            <p className={classes.errorBlock}>{formErrors.password}</p>

            <label className={classes.formText} htmlFor="isFriendly">Are you friendly? <br />
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"/>
            </label>
           
            <br />
            <br />

            <p className={classes.errorBlock}>{formErrors.isFriendly}</p>
            <fieldset>
            <p className={classes.formText}>Current employment status</p>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}/>
                
                <label className={classes.formText} htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}/>

                <label className={classes.formText} htmlFor="part-time">Part-time</label>
                <br />

                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}/>
                    
                <label className={classes.formText} htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>
            <br />
            <p className={classes.errorBlock}>{formErrors.radio}</p>
            <label 
            className={classes.text} 
            htmlFor="favColor">What is your favorite color?
            </label>
            <br />

            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor">
                    <option></option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
            </select>
            <br />
            <br />

            <p className={classes.errorBlock}>{formErrors.favColor}</p>
            <div className={classes.container}>
                <input 
                    type="checkbox" 
                    id="isMan" 
                    checked={formData.isMan}
                    onChange={handleChange}
                    name="isMan" 
                    className={classes.toggleButton}/>
            <label for="toggleButton" className={classes.text}>male/female</label>
            </div>
            <br />

            <button type='submit' onClick={handleSubmit}> Submit</button>
            {contentCard}
            <br />
            
            </div>
            </div>
        </form>
    )}
export default Forms;