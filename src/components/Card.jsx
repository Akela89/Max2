import React from "react";
import classes from './Card.module.css'
import './styles.css'

const Card = ( ) => {
    return (
            <div className={classes.mainCard}>
                <div className={classes.mainImg}></div>
                    <div className={classes.wrapperInfo}>
                        <p className={classes.titleCard}>React</p>
                        <p className={classes.textCard}>by<a className={classes.cardLink} href="https://vk.com/i.solovyev89">Soloviev Ilya</a></p>
                        <div className={classes.lineCard}></div>
                        <div className={classes.artInfo}>Art Direction, Crafts, Fine Arts</div>
                        <div className={classes.likesCard}>Any text</div>
                    </div>
            </div> 
    )
}
export default Card;