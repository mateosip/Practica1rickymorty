import React from 'react';
import Styles from './Styles.css';
const Filter = (props) => {
    const {status,statusOnClick} = props;

    
    return(
        <div className="Filter">
            <div className="button" onClick={()=>statusOnClick(1)}>
                Alive
            </div>
            <div className="button" onClick={()=>statusOnClick(2)}>
                Dead
            </div>
            <div className="button" onClick={()=>statusOnClick(3)}>
                Unknown
            </div>
            <div className="button" onClick={()=>statusOnClick(0)}>
                All
            </div>
        </div>
    )
}
export default Filter;
//al pinchar en un personaje sale en pantalla completa
//si hago click en el aspa vuelve a la lista