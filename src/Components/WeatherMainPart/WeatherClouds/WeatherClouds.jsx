import React, {useState} from 'react';
import css from '../../../Styles/WeatherMain.module.css'
import {Spinner} from "react-bootstrap";

const WeatherClouds = (props) => {
    return (
        <div>
            {props.data && props.data['weather'] && <div className={css.CurrentDay}>
                <hr style={{backgroundColor: 'grey', border: '1px solid grey'}}/>
                <div className={css.WeatherDescription}><span><img src={` http://openweathermap.org/img/wn/${props.data['weather'][0].icon}@2x.png`} alt='S' style={{width:'40px', height:'40px'}}/></span>{props.data['weather'][0].main}</div>
                <div className={css.WeatherClouds}><span><img src="https://img.icons8.com/ios/50/000000/clouds.png" style={{width:'30px', height:'30px'}} alt='S'/></span>Clouds - {props.data['clouds'].all}%</div>
            </div>
            }
        </div>
    );
};

export default WeatherClouds;