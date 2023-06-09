import { useForm } from "react-hook-form";
import { useState } from "react"; 
import {useEffect} from "react"
import classes from './Forms.module.css';


function Forms(){
    const {register, handleSubmit, formState: {errors}} = useForm({mode: "onBlur"});
    const [formData, setFormData]=useState([])
    
    function onSubmit(data){
        setFormData ([...formData, data]);
    };

    useEffect(() => { 
        console.log(formData); 
    },[formData]); 

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formsWrapper}> 
            <div className={classes.formsBorder}>
                <label className={classes.formText}>First name</label>
                <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName",{ 
                    required: "Введите имя!",
                    minLength: {value:4, message: "Min length in 4"} })}
                />
            <p className={classes.errorBlock}>{errors.firstName?.message}</p>

                <label className={classes.formText}>Last name</label>
                <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName",{ 
                        required: "Введите фамилию!",
                        minLength: {value:4, message: "Min length in 4"} })}   
                />
            <p className={classes.errorBlock}>{errors.lastName?.message}</p>


                <label className={classes.formText}>Email:</label> 
                <input
                    type="email"
                    placeholder="Email"
                    {...register("email",{ 
                        required: "Введите email!",
                        pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                        message: "This is not a valid email!"}
                        } )}
                />
                <p className={classes.errorBlock}>{errors.email?.message}</p>


                <label className={classes.formText}>Password</label> 
                <input
                    type="password"
                    placeholder="Password"
                    {...register("password",{ 
                        required: "Введите пароль!",
                        minLength: {value:4, message: "Min length in 4"},
                        maxLength: {value:10, message: "Max length in 10"} })}
                />
                <p className={classes.errorBlock}>{errors.password?.message}</p>

                <label className={classes.formText}>Are you friendly? 
                <br />
                <input 
                    type="checkbox" 
                    id="isFriendly" 
                    {...register("isFriendly",{ 
                        required: "Необходимо указать!",})}
                />
                <p className={classes.errorBlock}>{errors.isFriendly?.message}</p>
                </label>
                <br />
                <br />

                <fieldset>
                <p className={classes.formText}>Current employment status</p>
                    <input 
                        type="radio"
                        id="unemployed"
                        {...register("employment",{ 
                            required: "Выберете что-то одно!",})}
                    />

                    <label className={classes.formText}>Unemployed</label>
                    <br />
                    <input 
                        type="radio"
                        id="part-time"
                        {...register("employment",{ 
                            required: "Выберете что-то одно!",})}
                    />

                    <label className={classes.formText}>Part-time</label>
                    <br />
                    <input 
                        type="radio"
                        id="full-time"
                        {...register("employment",{ 
                            required: "Выберете что-то одно!",})}
                    />

                    <label className={classes.formText}>Full-time</label>
                    <p className={classes.errorBlock}>{errors.employment?.message}</p>
                </fieldset>
                <br />

                <label className={classes.text}>What is your favorite color?</label>
                <br />
                <select 
                    id="favColor" 
                    {...register("favColor",{ 
                        required: "Выберете любимый цвет!"})}
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
                <p className={classes.errorBlock}>{errors.favColor?.message}</p>
                <br />

                <div className={classes.container}>
                <label for="toggleButton" className={classes.text}>Согласны на обработку данных? - нет/да</label>
                <br />
                 <input 
                    type="checkbox" 
                    id="dataProcessing" 
                    {...register("dataProcessing",{ 
                        required: "Нужно ваше согласие"})} 
                    className={classes.toggleButton}/>
                    <p className={classes.errorBlock}>{errors.dataProcessing?.message}</p>  
            </div>
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>  
            <div > 
                {formData.map((data, index) => ( 
                    <div key={index} className={classes.formWindow}> 
                        <p>{data.firstName}</p> 
                        <p>{data.lastName}</p> 
                        <p>{data.email}</p> 
                        <p>{data.password}</p> 
                        <p>{data.isFriendly}</p> 
                        <p>{data.employment}</p> 
                        <p>{data.favColor}</p>
                        <p>{data.dataProcessing}</p>
                   </div> 
                ))} 
            </div>
        </div>
        
        </div>
    </form>
)
}

export default Forms;
    



// function Forms() { 
//     const initialValues ={
//         firstName: "", 
//         lastName: "", 
//         email: "", 
//         password: "",
//         isFriendly: true,
//         employment: "",
//         favColor: "",
//         isMan: "",
//     }
//     const [formData, setFormData] = useState(initialValues);
//     const [formErrors, setFormErrors] = useState({});
//     const [isSubmit, setIsSubmit] = useState(false);
//     const [formsList, setFormsList] = useState([]);

//     function handleSubmit(event) {
//         event.preventDefault()
//         const validateResult = validate(formData)
//         let valid = Object.keys(validateResult).length === 0
//         setFormErrors (validateResult);

//         if (!valid) {
//             return
//         }
//         setFormsList([...formsList, formData ])
//         setIsSubmit(true)
//     }

//     useEffect(()=>{
//         if(Object.keys(formErrors).length === 0 && isSubmit){
//             console.log(formData);
//         }
//     },[formErrors])

//     const validate = (values) => {
//         const errors = {}
//         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//         if (!values.firstName) {
//             errors.firstName = "FirstName is required!";
//         }

//         if (!values.lastName) {
//             errors.lastName = "LastName is required!";
//         }
//         if (!values.email) {
//             errors.email = "Email is required!";
//         } else if(!regex.test(values.email)){
//             errors.email = "This is not a valid email!";
//         }
//         if (!values.password) {
//             errors.password = "Password is required!";
//         }  else if(values.password.length < 4){
//             errors.password = "Password must be more than 4 characters";
//         } else if (values.password.length > 10) {
//             errors.password = "Password cannot exceed more than 10 characters";
//         }
//         if (!values.isFriendly) {
//             errors.isFriendly = "is required!";
//         }
//         if (!values.employment) {
//             errors.employment = "is required!";
//         }
//         if (!values.favColor) {
//             errors.favColor = "is required!";
//         }
//         if (!values.isMan) {
//             values.isMan = "";
//         } 
//         return errors        
//         };  

//         function handleChange(event) {
//         const {name, value, type, checked} = event.target
//         setFormData(prevFormData => {
//             return {
//                 ...prevFormData,
//                 [name]: type === "checkbox" ? checked : value
//             }
//         })
//     }  
    // return (
    //     <form onSubmit={handleSubmit}>      
    //          <div className={classes.formsWrapper}> 
    //          <div className={classes.formsBorder}>
    //         <label className={classes.formText}>First name</label>
    //         <input
    //             type="text"
    //             placeholder="First Name"
    //             onChange={handleChange}
    //             name="firstName"
    //             value={formData.firstName}
    //        />
    //         <p className={classes.errorBlock}>{formErrors.firstName}</p>

    //          <label className={classes.formText}>Last name</label>
    //          <input
    //             type="text"
    //             placeholder="Last Name"
    //             onChange={handleChange}
    //             name="lastName"
    //             value={formData.lastName}
    //         />
    //         <p className={classes.errorBlock}>{formErrors.firstName}</p>

    //         <label className={classes.formText}>Email:</label> 
    //         <input
    //             type="email"
    //             placeholder="Email"
    //             onChange={handleChange}
    //             name="email"
    //             value={formData.email}
    //         />
    //         <p className={classes.errorBlock}>{formErrors.email}</p>

    //         <label className={classes.formText}>Password</label> 
    //         <input
    //             type="password"
    //             placeholder="Password"
    //             onChange={handleChange}
    //             name="password"
    //             value={formData.password}
    //         />
    //         <p className={classes.errorBlock}>{formErrors.password}</p>

    //         <label className={classes.formText} htmlFor="isFriendly">Are you friendly? <br />
    //         <input 
    //             type="checkbox" 
    //             id="isFriendly" 
    //             checked={formData.isFriendly}
    //             onChange={handleChange}
    //             name="isFriendly"/>
    //         </label>
           
    //         <br />
    //         <br />

    //         <p className={classes.errorBlock}>{formErrors.isFriendly}</p>
    //         <fieldset>
    //         <p className={classes.formText}>Current employment status</p>
    //             <input 
    //                 type="radio"
    //                 id="unemployed"
    //                 name="employment"
    //                 value="unemployed"
    //                 checked={formData.employment === "unemployed"}
    //                 onChange={handleChange}/>
                
    //             <label className={classes.formText} htmlFor="unemployed">Unemployed</label>
    //             <br />
                
    //             <input 
    //                 type="radio"
    //                 id="part-time"
    //                 name="employment"
    //                 value="part-time"
    //                 checked={formData.employment === "part-time"}
    //                 onChange={handleChange}/>

    //             <label className={classes.formText} htmlFor="part-time">Part-time</label>
    //             <br />

    //             <input 
    //                 type="radio"
    //                 id="full-time"
    //                 name="employment"
    //                 value="full-time"
    //                 checked={formData.employment === "full-time"}
    //                 onChange={handleChange}/>
                    
    //             <label className={classes.formText} htmlFor="full-time">Full-time</label>
    //             <br />

    //         </fieldset>
    //         <br />
    //         <p className={classes.errorBlock}>{formErrors.radio}</p>

    //         <label 
    //         className={classes.text} 
    //         htmlFor="favColor">What is your favorite color?
    //         </label>
    //         <br />

    //         <select 
    //             id="favColor" 
    //             value={formData.favColor}
    //             onChange={handleChange}
    //             name="favColor">
    //                 <option></option>
    //                 <option value="red">Red</option>
    //                 <option value="orange">Orange</option>
    //                 <option value="yellow">Yellow</option>
    //                 <option value="green">Green</option>
    //                 <option value="blue">Blue</option>
    //                 <option value="indigo">Indigo</option>
    //                 <option value="violet">Violet</option>
    //         </select>
    //         <br />
    //         <br />

    //         <p className={classes.errorBlock}>{formErrors.favColor}</p>
    //         <div className={classes.container}>
    //             <input 
    //                 type="checkbox" 
    //                 id="isMan" 
    //                 checked={formData.isMan}
    //                 onChange={handleChange}
    //                 name="isMan" 
    //                 className={classes.toggleButton}/>
    //             <label for="toggleButton" className={classes.text}>male/female</label>
    //         </div>
    //         <br />

    //         <button type='submit' onClick={handleSubmit}> Submit</button>
    //         {formsList.map(item => {
    //             return (
    //                 <div className={classes.message}>
    //                     <p>{item.firstName}</p>
    //                     <p>{item.lastName}</p>
    //                     <p>{item.email}</p>
    //                     <p>{item.password}</p>
    //                     <p>{item.isFriendly}</p>
    //                     <p>{item.employment}</p>
    //                     <p>{item.favColor}</p>
    //                     <p>{item.isMan}</p>
    //                 </div> 
    //                 )        
    //             })
    //         }
    //         <br /> 
    //         </div>
    //         </div>
    //     </form>
    // )}
