import React, { useState } from "react";
import classes from './Forms.module.css';

const Forms = ( ) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[emailDirty, setEmailDirty] = useState(false)
    const[passwordDirty, setPasswordlDirty] = useState(false)
    const[emailError, setEmailError] = useState('Поле ввода не может быть пустым')
    const[passwordError, setPasswordError] = useState('Поле ввода не может быть пустым')

    // настройка инпута "телефон"
    const[phone, setPhone] = useState('')
    const[phoneDirty, setPhoneDirty] = useState(false)
    const[phoneError, setPhoneError] = useState('Поле ввода не может быть пустым')

    const phoneHeadler = (e) =>{
        setPhone(e.target.value.replace(/\D+/g, ''))
        if (e.target.value.length < 12 || e.target.value.length < 10){
        setPhoneError("Номер должен быть длиннее 12 символов и не меньше 10")
            if (!e.target.value){
                setPhoneError("Поле ввода не может быть пустым")
            }
        }   else {
                setPhoneError("")
            }
    }

    // настройка инпутов емейл и пароль
    const emailHandler = (e)=>{
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(String(e.target.value).toLowerCase())){
                setEmailError("Некорректный емейл")
            } else {
                setEmailError("")
            }
    }

    const passwordHeadler = (e) =>{
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length < 8){
        setPasswordError("Пароль должен быть длиннее 3 символов и не меньше 8")
            if (!e.target.value){
                setPasswordError("Поле ввода не может быть пустым")
            }
        }   else {
                setPasswordError("")
            }
    }

 // общая настройка инпутов на заполеность
    const blurHundler = (e) => {
        switch(e.target.name){
            case 'email': setEmailDirty(true)
                break
            case 'password': setPasswordlDirty(true)
                break
            case 'phone': setPhoneDirty(true) 
                break   
            }
    }

    return (
        <form>
        <div className={classes.formsWrapper}>
            <div className={classes.formsBorder}>
                    <p className={classes.formText}>Email:</p> 
                    {(emailDirty && emailError) && <div className={classes.errorBlock}>{emailError}</div>}
                    <input 
                    value={email}
                    onChange={e => emailHandler(e)}
                    onBlur={e => blurHundler(e)}
                    type="text" 
                    name="email"
                    placeholder="Enter your email"
                    />
                    <br /><br />

                    <p className={classes.formText}>Password</p> 
                    {(passwordDirty && passwordError) && <div className={classes.errorBlock}>{passwordError}</div>}
                    <input 
                    onChange={e=>passwordHeadler(e)}
                    value={password}
                    onBlur={e => blurHundler(e)} 
                    type="password"
                    name="password"
                    placeholder="Enter your password"/>
                    <br /> <br />

                    <p className={classes.formText}>Phone:</p> 
                    {(phoneDirty && phoneError) && <div className={classes.errorBlock}>{phoneError}</div>}
                    <input 
                    onChange={e=>phoneHeadler(e)}
                    value={phone}
                    onBlur={e => blurHundler(e)}
                    type="tel" 
                    name="phone"
                    placeholder="Enter your phone number"
                    />
                    <br /><br />


                    <p className={classes.formText}>Birthday:</p> 
                    <input 
                    type="date" 
                    name="birthday"
                    min="1901-01-01"
                    />


                    <p className={classes.formText}>Сhoose the right one:</p> 
                    <select name="cars" id="cars">
                        <option></option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JS</option>
                        <option value="reactJs">React JS</option>   
                    </select>


                <div className={classes.formStarsWrapper}>
                        <p className={classes.formText}>
                            choose the one you want
                        </p> 
                        <label>
                            <input type="checkbox" name="stars"  value="aldebaran"/>
                            <label  className={classes.formText}> - Aldebaran</label>
                            <br />
                            <input type="checkbox" name="stars"  value="sirius"/>
                            <label className={classes.formText}> - Sirius</label>
                            <br />
                            <input type="checkbox" name="stars"  value="vega"/>
                            <label  className={classes.formText}> - Vega</label>
                            <br />
                            <input type="checkbox" name="stars"  value="antares"/>
                            <label  className={classes.formText}> - Antares</label>
                            <br />
                        </label>
                </div>

                    <p className={classes.formText}>
                    <label>
                        <input type="checkbox" name="stars"  value="antares"/>
                    </label>  - Want to receive news? 
                    </p>  


                    <div className={classes.container}>
                    <input type="checkbox" name="toggle" id="toggleButton" className={classes.toggleButton}/>
                        <label for="toggleButton" className={classes.text}>male/female</label>
                    </div>


                    <div className={classes.uploadWrapper}>
                    <input type="file" name="upload" id="upload"/>
                    </div>
 
                <input type="submit" />
                
            </div>
        </div>
        </form>
    )
}

export default Forms;

// **Пример:** 
// input - Имя, Фамилия, Zip код;
// date input - день рождения, дата доставки;
// dropdown/select - список стран, список штатов (выбрать можно только один элемент из списка)
// checkbox - поле "согласен на обработку данных", список дополнительных подарков к заказу (выбрать можно несколько из списка)
// switcher - male/female, хочу получать уведомления об акциях/ не хочу
// file upload - profile picture
