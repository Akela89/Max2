import React, { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import classes from "./Forms.module.css";
import { StateContext } from "./StateContext";
import { useState } from "react";



  

function Forms() {
    const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

    const [showFormWindow, setShowFormWindow] = useState(false);

    const { state, dispatch } = useContext(StateContext);
  
    function onSubmit(data) {
        dispatch({ type: 'SET_FORM_DATA', payload: data });
        setShowFormWindow(true);
      }
  
    useEffect(() => {
      console.log(state.formData);
    }, [state.formData]);

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.formsWrapper}> 
            <div className={classes.formsBorder}>
                <label className={classes.formText}>First name</label>
                <input
                    type="text"
                    placeholder = "First Name"
                    {...register("firstName",{ 
                    required: "Введите имя!",
                    minLength: {value: 4, message: "Min length in 4"}})
                    }
                />
            <p className={classes.errorBlock}>{errors.firstName?.message}</p>

                <label className={classes.formText}>Last name</label>
                <input
                    type="text"
                    placeholder = "Last Name"
                    {...register("lastName",{ 
                        required: "Введите фамилию!",
                        minLength: {value: 4, message: "Min length in 4"}})
                    }   
                />
            <p className={classes.errorBlock}>{errors.lastName?.message}</p>


                <label className={classes.formText}>Email:</label> 
                <input
                    type="email"
                    placeholder = "Email"
                    {...register("email",{ 
                        required: "Введите email!",
                        pattern:{value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                        message: "This is not a valid email!"}})
                    }
                />
                <p className={classes.errorBlock}>{errors.email?.message}</p>

                <label className={classes.formText}>Password</label> 
                <input
                    type="password"
                    placeholder = "Password"
                    {...register("password",{ 
                        required: "Введите пароль!",
                        minLength: {value: 4, message: "Min length in 4"},
                        maxLength: {value: 10, message: "Max length in 10"}
                        })
                    }
                />
                <p className={classes.errorBlock}>{errors.password?.message}</p>

                <label className={classes.formText}>Are you friendly? 
                <br />
                <input 
                    type="checkbox" 
                    id="isFriendly" 
                    {...register("isFriendly",{ 
                        required: "Необходимо указать!",})
                    }
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
                            required: "Выберете что-то одно!",})
                        }
                    />

                    <label className={classes.formText}>Unemployed</label>
                    <br />
                    <input 
                        type="radio"
                        id="part-time"
                        {...register("employment",{ 
                            required: "Выберете что-то одно!",})
                        }
                    />

                    <label className={classes.formText}>Part-time</label>
                    <br />
                    <input 
                        type="radio"
                        id="full-time"
                        {...register("employment",{ 
                            required: "Выберете что-то одно!",})
                        }
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
                        required: "Выберете любимый цвет!"})
                    }
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
                {showFormWindow && (
                <div>
                    {state.formData.map((data, index) => (
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
                    <button onClick={() => {
                    dispatch({ type: 'SET_FORM_DATA', payload: [] });
                    setShowFormWindow(false);
                    }}>Скрыть список</button>
                </div>
                )}
            </div>
        </div>
        </div>
    </form>
)
}

export default Forms;