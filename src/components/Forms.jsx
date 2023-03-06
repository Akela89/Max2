import React from "react";
import classes from './Forms.module.css';

const Forms = ( ) => {
    return (
        <div className={classes.formsWrapper}>
            <div className={classes.formsBorder}>
                <form>
                    <p className={classes.formText}>First name:</p> 
                    <input type="text" name="firstName" />
                    <br /><br />
                    <p className={classes.formText}>Last name</p> 
                    <input type="text" name="lastName"/>
                    <br /> <br />
                </form>

                <form>
                    <p className={classes.formText}>Birthday:</p> 
                    <input type="date" name="birthday" />
                </form>

                <form>
                    <p className={classes.formText}>Сhoose the right one:</p> 
                    <select name="cars" id="cars">
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        <option value="js">JS</option>
                        <option value="reactJs">React JS</option>
                        
                    </select>
                </form>

                <div className={classes.formStarsWrapper}>
                    <form>
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
                    </form> 
                </div>

                <form>
                    <p className={classes.formText}>
                    <label>
                        <input type="checkbox" name="stars"  value="antares"/>
                    </label>  - Want to receive news? 
                    </p> 
                </form> 

                <form>
                    <div className={classes.container}>
                    <input type="checkbox" name="toggle" id="toggleButton" className={classes.toggleButton}/>
                        <label for="toggleButton" className={classes.text}>male/female</label>
                    </div>
                </form> 

                <form>
                    <div className={classes.uploadWrapper}>
                    <input type="file" name="upload" id="upload"/>
                    </div>
                </form> 
                <input type="submit" />
            </div>
        </div>
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
