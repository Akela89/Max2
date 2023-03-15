import React, { useState, useEffect } from "react";
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

     function handleSubmit(event) {
        event.preventDefault()
        setFormErrors (validate(formData));
        setIsSubmit(true)
    }

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
                name="isFriendly"
            />
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
                    onChange={handleChange}
                />
                
                <label className={classes.formText} htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label className={classes.formText} htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
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
                name="favColor"
            >
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
                    className={classes.toggleButton}
                />
                <label for="toggleButton" className={classes.text}>male/female</label>
            </div>

            <br />
            <button type='submit'>Submit</button>
            <br />
            {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className={classes.message}>FUCK YEAAA!!!</div>
            ) : (
                <pre></pre>
            ) }
            </div>
            </div>
        </form>
    )

    }

export default Forms;

// настройка инпута "новости"
//     const[news, setNews] = useState('')
//     const[newsDirty, setNewsDirty] = useState(false)
//     const[newsError, setNewsError] = useState('Поле ввода не может быть пустым')

//     const newsHeadler = (e) =>{
//         setNews(e.target.value)
//             if (!e.target.value){
//                 setNewsError("Поле ввода не может быть пустым")
//             }
//            else {
//                 setNewsError("")
//             }
//     }

    

//     // настройка инпутов емейл и пароль
//     const[email, setEmail] = useState('')
//     const[password, setPassword] = useState('')
//     const[emailDirty, setEmailDirty] = useState(false)
//     const[passwordDirty, setPasswordlDirty] = useState(false)
//     const[emailError, setEmailError] = useState('Поле ввода не может быть пустым')
//     const[passwordError, setPasswordError] = useState('Поле ввода не может быть пустым')

//     const emailHandler = (e)=>{
//         setEmail(e.target.value)
//         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             if (!re.test(String(e.target.value).toLowerCase())){
//                 setEmailError("Некорректный емейл")
//             } else {
//                 setEmailError("")
//             }
//     }
//     const passwordHeadler = (e) =>{
//         setPassword(e.target.value)
//         if (e.target.value.length < 6 || e.target.value.length > 8){
//         setPasswordError("Пароль должен быть длиннее 6 символов и не меньше 8")
//             if (!e.target.value){
//                 setPasswordError("Поле ввода не может быть пустым")
//             }
//         }   else {
//                 setPasswordError("")
//             }
//     }

//     // настройка инпута "язык"
//     const[language, setLanguage] = useState('')
//     const[languageDirty, setLanguageDirty] = useState(false)
//     const[languageError, setLanguageError] = useState('Поле ввода не может быть пустым')
//     const languageHeadler = (e) =>{
        
//         setLanguage(e.target.value)
//             if (!e.target.value){
//                 setLanguageError("Поле ввода не может быть пустым")
//             }
//            else {
//                 setLanguageError("")
//             }
//     }

//     // настройка инпута "дата рождения"
//     const[birthday, setBirthday] = useState('')
//     const[birthdayDirty, setBirthdayDirty] = useState(false)
//     const[birthdayError, setBirthdayError] = useState('Поле ввода не может быть пустым')
    
//     const birthdayHeadler = (e) =>{
//         setBirthday(e.target.value)
//             if (!e.target.value){
//                 setBirthdayError("Поле ввода не может быть пустым")
//             }
//            else {
//                 setBirthdayError("")
//             }
//     }

//     // настройка инпута "телефон"
//     const[phone, setPhone] = useState('')
//     const[phoneDirty, setPhoneDirty] = useState(false)
//     const[phoneError, setPhoneError] = useState('Поле ввода не может быть пустым')

//     const phoneHeadler = (e) =>{
//         setPhone(e.target.value.replace(/\D+/g, ''))
//         if (e.target.value.length < 10 || e.target.value.length > 11){
//         setPhoneError("Номер должен быть длиннее 10 символов и не меньше 11")
//             if (!e.target.value){
//                 setPhoneError("Поле ввода не может быть пустым")
//             }
//         }   else {
//                 setPhoneError("")
//             }
//     }

   

//  // общая настройка инпутов 
//     const blurHundler = (e) => {
//         switch(e.target.name){
//             case 'email': setEmailDirty(true)
//                 break
//             case 'password': setPasswordlDirty(true)
//                 break
//             case 'phone': setPhoneDirty(true) 
//                 break 
//             case 'birthday': setBirthdayDirty(true)
//                 break
//             case 'language': setLanguageDirty(true)
//                 break
//             case 'news': setNewsDirty(true)
//             }
//     }

   
//     return (
//         <form>
//         <div className={classes.formsWrapper}>
//             <div className={classes.formsBorder}>
//                     <p className={classes.formText}>Email:</p> 
//                     {(emailDirty && emailError) && <div className={classes.errorBlock}>{emailError}</div>}
//                     <input 
//                     value={email}
//                     onChange={e => emailHandler(e)}
//                     onBlur={e => blurHundler(e)}
//                     type="text" 
//                     name="email"
//                     placeholder="Enter your email"
//                     />

//                     <p className={classes.formText}>Password</p> 
//                     {(passwordDirty && passwordError) && <div className={classes.errorBlock}>{passwordError}</div>}
//                     <input 
//                     onChange={e=>passwordHeadler(e)}
//                     value={password}
//                     onBlur={e => blurHundler(e)} 
//                     type="password"
//                     name="password"
//                     placeholder="Enter your password"/>
//                     <br /> <br />

//                     <p className={classes.formText}>Phone:</p> 
//                     {(phoneDirty && phoneError) && <div className={classes.errorBlock}>{phoneError}</div>}
//                     <input 
//                     onChange={e=>phoneHeadler(e)}
//                     value={phone}
//                     onBlur={e => blurHundler(e)}
//                     type="tel" 
//                     name="phone"
//                     placeholder="Format - 8044..."
//                     />
//                     <br /><br />

//                     <p className={classes.formText}>Birthday:</p> 
//                     {(birthdayDirty && birthdayError) && <div className={classes.errorBlock}>{birthdayError}</div>}
//                     <input 
//                     onChange={e => birthdayHeadler(e)}
//                     onBlur={e => blurHundler(e)}
//                     type="date" 
//                     value={birthday}
//                     name="birthday"
//                     min="1901-01-01"
//                     />


//                     <p className={classes.formText}>Сhoose the right one:</p>
//                     {(languageDirty && languageError) && <div className={classes.errorBlock}>{languageError}</div>}
//                     <select name="language" 
//                     value={language} 
//                     onChange={e => languageHeadler(e)}
//                     onBlur={e => blurHundler(e)}>
//                                 <option></option>
//                                 <option value="html">HTML</option>
//                                 <option value="css">CSS</option>
//                                 <option value="js">JS</option>
//                                 <option value="reactJs">React JS</option>   
//                     </select>



//                     <p className={classes.formText}>choose the one you want</p>
//                         <input 
//                         type="checkbox" 
//                         name="months" 
//                         value="months"/>
//                         <p className={classes.formText}> 3 months</p>
//                         <br />
//                         <input 
//                         type="checkbox" 
//                         name="months" 
//                         value="months"/>
//                         <p className={classes.formText}> 6 months</p>
//                         <br />
//                         <input 
//                         type="checkbox" 
//                         name="months" 
//                         value="months"/>
//                         <p className={classes.formText}> 9 months</p>
//                         <br />



//                     <p className={classes.formText}>
//                     {(newsDirty && languageError) && <div className={classes.errorBlock}>{newsError}</div>}
//                     <label>
//                         <input 
//                         onChange={e => newsHeadler(e)}
//                         onBlur={e => blurHundler(e)}
//                         type="checkbox" 
//                         name="news"  
//                         value={news}
//                         />
//                     </label> - Want to receive news? 
//                     </p>  


//                     <div className={classes.container}>
//                     <input 
//                     type="checkbox" 
//                     name="toggle" 
//                     id="toggleButton" 
//                     className={classes.toggleButton}/>
//                         <p for="toggleButton" className={classes.text}>male/female</p>
//                     </div>


//                     <div className={classes.uploadWrapper}>
//                     <input
//                     type="file"
//                     accept=".jpg, .png, .gif"
//                     name="upload"
//                     id="upload"/>
//                     </div>
 
//                 <input type="submit" />
                
//             </div>
//         </div>
//         </form>
//     )
