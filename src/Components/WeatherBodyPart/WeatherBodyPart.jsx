import React from 'react';
import Navbar from './WeatherBodyNavbar/Navbar';
import FiveForeCast from "./WeatherBodyForeCast/FiveForeCast";
import TodayDetail from "./WeatherBodyContent/TodayDetail";
import Col from "react-bootstrap/Col";
import Footer from "./Footer/Footer";

const WeatherBodyPart = (props) => {
    return (
        <Col className="d-none d-sm-block" sm md lg={9}>
            <Navbar measure={props.measure} setMeasure={props.setMeasure}/>
            <FiveForeCast data={props.data} FiveDayForCast = {props.FiveDayForCast} measure = {props.measure}/>
            <TodayDetail data={props.data} viewport={props.viewport} setViewport={props.setViewport} FiveDayForCast = {props.FiveDayForCast} measure = {props.measure}/>
            <Footer>

            </Footer>
        </Col>
    );
};

export default WeatherBodyPart;