import React from 'react';
import Col from "react-bootstrap/Col";
import css from './TodayDetail.module.css'
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";
import Map from "react-map-gl";
import Moment from "react-moment";
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";

const TodayDetail = (props) => {
    return (
        <Container className={css.TodayHigh}>
            <h1 className={css.Title}>Today's Highlights</h1>
            <Row>
                {props.FiveDayForCast &&
                <Col sm = {12} md lg={8}>
                    <Row>
                        <Col className={css.Body}>
                            <div className={css.Header}>Feels Like:</div>

                                <div className={css.Margin}><span><img className={css.Icons}
                                                                       src="https://img.icons8.com/emoji/48/000000/sun-emoji.png"/></span>Day: {Math.round(props.FiveDayForCast.daily[0].feels_like.day)} {props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>
                                <div className={css.Margin} ><span><img className={css.Icons}
                                                src="https://img.icons8.com/dusk/64/000000/partly-cloudy-night--v1.png"/></span>Night: {Math.round(props.FiveDayForCast.daily[0].feels_like.night)}{props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>
                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Wind Status:</div>

                                <div className={css.Margin}><span><img className={css.Icons}
                                                                       src="https://img.icons8.com/ios/50/000000/compass--v1.png"/></span>
                                    Direction: {props.FiveDayForCast.daily[0]['wind_deg']}<sup>o</sup></div>
                                <div className={css.Margin}><span><img className={css.Icons}
                                                src="https://img.icons8.com/external-others-zufarizal-robiyanto/64/000000/external-weather-mutuline-weather-others-zufarizal-robiyanto.png"/></span>Speed: {Math.round(props.FiveDayForCast.daily[0].wind_speed)}<span>km/h</span>
                                </div>
                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Sunset & Sunrise</div>

                                <div className={css.Margin}><span><img className={css.Icons}
                                                                       src="https://img.icons8.com/ios/50/000000/sunrise--v1.png"/></span>
                                    Sunrise:
                                    <Moment format={'hh:mm'} unix>{props.FiveDayForCast.daily[0].sunrise}</Moment>
                                </div>

                                <div className={css.Margin}>
                                    <span><img className={css.Icons}
                                               src="https://img.icons8.com/ios/50/000000/sunset--v1.png"/></span>
                                    Sunset: <Moment format={'hh:mm'}
                                                    unix>{props.FiveDayForCast.daily[0].sunset}</Moment>
                                </div>

                        </Col>
                    </Row>
                    <Row>
                        <Col className={css.Body}>
                            <div className={css.Header}>Humidity:</div>

                                <div className={css.Margin} style={{width: 100, margin: "auto"}}>
                                    <CircularProgressbarWithChildren value={props.FiveDayForCast.daily[0].humidity}
                                                                     maxValue={100} strokeWidth={5} circleRatio={1}
                                                                     counterClockwise backgroundPadding={10}
                                                                     styles={
                                                                         buildStyles({

                                                                             pathColor: 'teal',
                                                                             textColor: '#000',
                                                                             trailColor: '#d6d6d6',
                                                                             backgroundColor: '#000',
                                                                         })}>
                                        <img className={css.Icons}
                                             src="https://img.icons8.com/external-justicon-flat-justicon/64/000000/external-humidity-weather-justicon-flat-justicon-1.png"/>
                                        <div>{props.FiveDayForCast.daily[0].humidity}%</div>
                                    </CircularProgressbarWithChildren>
                                </div>

                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Visibility:</div>

                                {props.data && props.data.visibility &&
                                <div className={css.Margin} style={{width: '100px', margin: "auto"}}>
                                    <CircularProgressbarWithChildren value={props.data.visibility / 1000} maxValue={10}
                                                                     strokeWidth={5} circleRatio={1}
                                                                     counterClockwise backgroundPadding={10}
                                                                     styles={
                                                                         buildStyles({

                                                                             pathColor: 'teal',
                                                                             textColor: '#000',
                                                                             trailColor: '#d6d6d6',
                                                                             backgroundColor: '#000',
                                                                         })}>
                                        <img className={css.Icons} src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-visibility-diving-flaticons-lineal-color-flat-icons-2.png"/>
                                        <div>{props.data.visibility / 1000} km</div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                }

                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Min & Max temperature:</div>

                                <div
                                    className={css.Margin}><span><img className={css.Icons} src="https://img.icons8.com/color/48/000000/cold.png"/></span>Min: {Math.round(props.FiveDayForCast.daily[0].temp.min)}{props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>
                                <div className={css.Margin}><span><img className={css.Icons} src="https://img.icons8.com/office/30/000000/temperature--v1.png"/></span>Max: {Math.round(props.FiveDayForCast.daily[0].temp.max)}{props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>

                        </Col>

                    </Row>
                </Col>}
                <Col sm = {12} md lg={4} className={css.Map}>
                    <Map
                        mapboxAccessToken={'pk.eyJ1IjoiaWZ1ZG9yMWEiLCJhIjoiY2wyNXV1andqMGh4ODNrcDZiMWUyYzYxMSJ9.-QLL6R9kVeL1imGDDZOjVA'}  {...props.viewport}
                        onMove={evt => props.setViewport(evt.viewState)} style={{width: '100%', height: '100%'}}
                        mapStyle='mapbox://styles/mapbox/streets-v9' attributionControl={false}/>
                </Col>

            </Row>
        </Container>
    );
}

export default TodayDetail;