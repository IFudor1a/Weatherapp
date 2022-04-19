import React from 'react';

import Col from "react-bootstrap/Col";
import css from './TodayDetail.module.css'

const TodayDetail = () => {
    return (
        <div>
            <h1>Today's Highlights</h1>
            <div>
                <Col sm md lg = {8}>
                    <div className={css.Body}>UV INDEX</div>
                    <div className={css.Body}>Wind Status</div>
                    <div className={css.Body}>Sunrise & Sunset</div>
                    <div className={css.Body}>Humidity</div>
                    <div className={css.Body}>Visibility</div>
                    <div className={css.Body}>Min & Max temperature</div>
                    </Col>
                <Col sm md lg = {4}>
                    SDASDAS
                </Col>
            </div>
        </div>
    );
};

export default TodayDetail;