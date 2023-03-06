import React from "react";
import classes from './Forms.module.css';

const Forms = ( ) => {
    return (
        <form>
        <div className={classes.formsWrapper}>
            <div className={classes.formsBorder}>
                    <p className={classes.formText}>First name:</p> 
                    <input type="text" name="firstName" />
                    <br /><br />
                    <p className={classes.formText}>Last name</p> 
                    <input type="text" name="lastName"/>
                    <br /> <br />


                    <p className={classes.formText}>Birthday:</p> 
                    <input type="date" name="birthday" />



                    <p className={classes.formText}>Сhoose the right one:</p> 
                    <select name="cars" id="cars">
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
