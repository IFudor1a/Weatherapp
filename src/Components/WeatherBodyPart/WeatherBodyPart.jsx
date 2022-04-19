import React from 'react';
import Navbar from './WeatherBodyNavbar/Navbar';
import FiveForeCast from "./WeatherBodyForeCast/FiveForeCast";
import TodayDetail from "./WeatherBodyContent/TodayDetail";
import Col from "react-bootstrap/Col";

const WeatherBodyPart = () => {
    return (
        <Col sm md lg = {9}>
            <Navbar />
            <FiveForeCast />
            <TodayDetail />
        </Col>
    );
};

export default WeatherBodyPart;