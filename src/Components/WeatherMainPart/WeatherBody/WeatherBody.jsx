import React, {useState} from 'react';
import css from "../../../Styles/WeatherMain.module.css";
import {Spinner} from "react-bootstrap";

const WeatherBody = (props) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const [Loading, isLoading] = useState(true)
    let hour = ''
    let minutes = ''
    let day = ''
    setTimeout(() => {
        isLoading(false)
    }, 5000)
    const calcTime = (offset) => {
        let b = new Date()
        let localTime = b.getTime()
        let localOffSet = b.getTimezoneOffset() * 60000
        let utc = localTime + localOffSet
        let cityTime = utc + (offset * 1000)
        let d = new Date(cityTime)
        hour = d.getHours()
        minutes = d.getMinutes() < 10?('0' + d.getMinutes()):d.getMinutes()
        day = weekday[d.getDay()]
    }
    props.data && calcTime(props.data.timezone)

    return (
        <div>
            {
                props.data && props.data['weather'] ? <div className={css.CurrentDay}>
                    <div className={css.Container}><img className={css.Image}
                                                        src={`http://openweathermap.org/img/wn/${props.data['weather'][0].icon}@2x.png`}
                                                        alt={props.data['weather'][0].icon}/></div>
                    <div className={css.WeatherText}>{Math.round(props.data['main'].temp)}{props.measure === 'metric' ?
                        <sup>&deg;C</sup> : <sup>&deg;F</sup>}
                    </div>
                    <div className={css.WeatherCity}>{props.data.name}, {props.data['sys']['country']}</div>
                    <div>
                        <div className={css.WeatherDay}>{day},</div>
                        <div className={css.WeatherTime}> {hour}:{minutes}</div>
                    </div>

                </div> : Loading ? <div style={{display: 'flex', justifyContent: 'center'}}><Spinner
                        style={{width: '50px', height: '50px'}} animation="border"/></div>
                    : <div style={{textAlign: 'center'}}>Nothing Founded!</div>
            }

        </div>
    );
};

export default WeatherBody;