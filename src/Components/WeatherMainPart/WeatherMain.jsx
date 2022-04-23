import React from 'react';

import WeatherSearch from './WeatherSearch/WeatherSearch'
import WeatherBody from './WeatherBody/WeatherBody'
import WeatherClouds from './WeatherClouds/WeatherClouds'
import Col from "react-bootstrap/Col";
import css from '../../Styles/WeatherMain.module.css'
import {Container} from "react-bootstrap";

const WeatherMain = (props) => {
    return (
        <Col className={css.Shadows} sm md lg={3}>
            <Container className={css.WeatherMain__body}>
                <WeatherSearch measure={props.measure} setMeasure={props.setMeasure} city={props.city}
                               setCity={props.setCity} data={props.data} setData={props.setData}
                               setViewport={props.setViewport} viewport={props.viewport}
                               setFiveDayForCast={props.setFiveDayForCast}/>
                <WeatherBody measure={props.measure} data={props.data}/>
                <WeatherClouds data={props.data}/>
            </Container>
        </Col>
    );
};

export default WeatherMain;