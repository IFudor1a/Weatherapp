import React, {useEffect} from 'react';

import WeatherAPI from "../../../API/API";
import MyInput from "../../../UI/Input/MyInput";
import css from '../../../Styles/WeatherMain.module.css'
const WeatherSearch = (props) => {
    const onSubmit = e => {
        e.preventDefault()
        if (!props.city) return;
        WeatherAPI.Current(props.city).then(data => {console.log(data)
            props.setData(data)})
    }
    const OnClick = ()=> {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(showPosition)
        }
    }
    const showPosition = (position) => {
        let lat = position.coords.latitude
        let lon = position.coords.longitude
        WeatherAPI.WeatherByGeo(lat,lon).then(e => {
            console.log(e)
            props.setData(e)

        })
    }
    useEffect(() =>{
        OnClick()
    },[])
    return (
        <div>
            <form onSubmit={onSubmit} style={{display:"inline"}}>
                <MyInput  placeholder = {'Search for city'} value={props.city} onChange={e => props.setCity(e.target.value)} required ={true} />
            </form>
            <button className={css.CircleButton} onClick={e => OnClick(e)}><img src="https://img.icons8.com/material-sharp/24/000000/home.png"/></button>
        </div>
    );
};

export default WeatherSearch;