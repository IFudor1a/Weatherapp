import React from 'react';
import {Container} from "react-bootstrap";
import css from './FiveForeCast.module.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Moment from "react-moment";

const FiveForeCast = (props) => {
    return (
        <Container>
            <Row>
                {props.FiveDayForCast && props.FiveDayForCast.daily.map((day, index) => {
                    if (index == 0) {
                    } else {
                        return <Col className={css.Body}>
                            <div className={css.Header}><Moment format={'ddd'} unix>{day['dt']}</Moment></div>
                            <div className={css.ImageContainer}><img className={css.Image}
                                                                     src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                                                                     alt='S'/></div>
                            <div className={css.Deg}>{Math.round(day.temp.min)}{props.measure === 'metric' ?
                                <sup>&deg;C</sup> : <sup>&deg;F</sup>} <span
                                className={css.DegMax}>{Math.round(day.temp.max)}{props.measure === 'metric' ?
                                <sup>&deg;C</sup> : <sup>&deg;F</sup>}</span></div>
                        </Col>
                    }
                })}
            </Row>
        </Container>
    );
};

export default FiveForeCast;