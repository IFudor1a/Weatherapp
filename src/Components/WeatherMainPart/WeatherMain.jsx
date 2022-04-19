import React, {useState} from 'react';

import WeatherSearch from './WeatherSearch/WeatherSearch'
import WeatherBody from './WeatherBody/WeatherBody'
import WeatherClouds from './WeatherClouds/WeatherClouds'
import Col from "react-bootstrap/Col";
import css from '../../Styles/WeatherMain.module.css'
import {Container} from "react-bootstrap";
const WeatherMain = () => {
    const [city, setCity] = useState('')
    const [data, setData] = useState()
    return (
        <Col className={css.Shadows} sm md lg = {3}>
            <Container className={css.WeatherMain__body}>
            <WeatherSearch city={city} setCity = {setCity} setData={setData}/>
            <WeatherBody data = {data}/>
            <WeatherClouds data = {data}/>
            </Container>
        </Col>
    );
};

export default WeatherMain;