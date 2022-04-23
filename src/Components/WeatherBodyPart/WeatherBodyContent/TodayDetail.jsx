import React from 'react';
import Col from "react-bootstrap/Col";
import css from './TodayDetail.module.css'
import Row from "react-bootstrap/Row";
import {Container} from "react-bootstrap";
import Map from "react-map-gl";
import Moment from "react-moment";

const TodayDetail = (props) => {
    console.log(props.FiveDayForCast)
    return (
        <Container className={css.TodayHigh}>
            <h1 className={css.Title}>Today's Highlights</h1>
            <Row>
                {props.FiveDayForCast &&
                <Col md lg={8}>
                    <Row>
                        <Col className={css.Body}>
                            <div className={css.Header}>Feels Like:</div>
                            <Container>
                                <div className={css.Margin}><span><img className={css.Icons} src="https://img.icons8.com/emoji/48/000000/sun-emoji.png"/></span>Day: {Math.round(props.FiveDayForCast.daily[0].feels_like.day)} {props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>
                                <div><span><img className={css.Icons}src="https://img.icons8.com/dusk/64/000000/partly-cloudy-night--v1.png"/></span>Night: {Math.round(props.FiveDayForCast.daily[0].feels_like.night)}{props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>
                            </Container>
                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Wind Status:</div>
                            <Container>
                                <div className={css.Margin}><span><img className={css.Icons} src="https://img.icons8.com/ios/50/000000/compass--v1.png"/></span>
                                    Direction: {props.FiveDayForCast.daily[0]['wind_deg']}<sup>o</sup></div>
                                <div><span><img className={css.Icons} src="https://img.icons8.com/external-others-zufarizal-robiyanto/64/000000/external-weather-mutuline-weather-others-zufarizal-robiyanto.png"/></span>Speed: {props.FiveDayForCast.daily[0].wind_speed}<span>km/h</span></div>
                            </Container>
                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Sunset & Sunrise</div>
                            <Container>
                                <div className={css.Margin}><span><img className={css.Icons} src="https://img.icons8.com/ios/50/000000/sunrise--v1.png"/></span>
                                    Sunrise:
                                    <Moment format={'hh:mm'} unix>{props.FiveDayForCast.daily[0].sunrise}</Moment>
                                </div>

                                <div>
                                    <span><img className={css.Icons} src="https://img.icons8.com/ios/50/000000/sunset--v1.png"/></span>
                                    Sunset: <Moment format={'hh:mm'}
                                                    unix>{props.FiveDayForCast.daily[0].sunset}</Moment>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={css.Body}>
                            <div className={css.Header}>Humidity:</div>
                            <Container>
                                <div className={css.Margin}><span><img className={css.Icons} src="https://img.icons8.com/ios/50/000000/humidity.png"/></span>{props.FiveDayForCast.daily[0].humidity}%</div>
                            </Container>
                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Visibility:</div>
                            <Container>
                                {props.data && props.data.visibility &&
                                <div className={css.Margin}>{props.data.visibility / 1000} km/h </div>
                                }
                            </Container>
                        </Col>
                        <Col className={css.Body}>
                            <div className={css.Header}>Min & Max temperature:</div>
                            <Container>
                                <div className={css.Margin}>Min: {Math.round(props.FiveDayForCast.daily[0].temp.min)}{props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>
                                <div>Max: {Math.round(props.FiveDayForCast.daily[0].temp.max)}{props.measure === 'metric' ?
                                    <sup>&deg;C</sup> : <sup>&deg;F</sup>}</div>
                            </Container>
                        </Col>

                    </Row>
                </Col>}
                <Col className={css.Map} md lg={4}>
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