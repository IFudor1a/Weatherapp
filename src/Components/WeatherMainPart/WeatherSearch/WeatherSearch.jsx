import React, {useEffect} from 'react';

import WeatherAPI from "../../../API/API";
import MyInput from "../../../UI/Input/MyInput";
import css from '../../../Styles/WeatherMain.module.css'

const WeatherSearch = (props) => {
    useEffect(() => {
        OnLoad()
    }, [props.measure])
    const onSubmit = e => {
        e.preventDefault()
        if (!props.city) return;
        WeatherAPI.Current(props.city, props.measure).then(data => {
            props.setData(data)
            props.setViewport({
                latitude: props.data.coord.lat,
                longitude: props.data.coord.lon,
                zoom: 7
            })
        })
        WeatherAPI.DailyForeCast(props.viewport.latitude, props.viewport.longitude, props.measure).then(data => {
            props.setFiveDayForCast(data)
        })
    }
    const OnLoad = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition)
        }
    }
    const showPosition = (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        props.setViewport({latitude: lat, longitude: lon, zoom: 7})
        WeatherAPI.WeatherByGeo(lat, lon, props.measure).then(data => {
            props.setData(data)

        })
        WeatherAPI.DailyForeCast(lat, lon, props.measure).then(data => {
            props.setFiveDayForCast(data)
        })
    }
    return (
        <div>
            <form onSubmit={onSubmit} style={{display: "inline"}}>
                <MyInput placeholder={'Search for city'} value={props.city}
                         onChange={e => props.setCity(e.target.value)} required={true}/>
            </form>
            <button className={css.CircleButton} onClick={e => OnLoad(e)} onLoad={e => OnLoad(e)}><img
                src="https://img.icons8.com/material-sharp/24/000000/home.png" alt={'house'}/></button>
        </div>
    );
};

export default WeatherSearch;