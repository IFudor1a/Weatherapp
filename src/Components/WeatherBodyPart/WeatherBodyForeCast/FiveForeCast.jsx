import React from 'react';
import {Container} from "react-bootstrap";
import css from './FiveForeCast.module.css';

const FiveForeCast = () => {
    return (
        <Container>
            <div className={css.Body}>
                <div className={css.Header}>Monday</div>
                <div className={css.ImageContainer}><img className={css.Image} src={`http://openweathermap.org/img/wn/10n@2x.png`} alt='S'/></div>
                <div className={css.Deg}>5&deg; <span className={css.DegMax}>8&deg;</span></div>
            </div>
            <div className={css.Body}>
                <div className={css.Header}>Monday</div>
                <div className={css.ImageContainer}><img className={css.Image} src={`http://openweathermap.org/img/wn/10d@2x.png`} alt='S'/></div>
                <div className={css.Deg}>5&deg; <span className={css.DegMax}>8&deg;</span></div>
            </div>
            <div className={css.Body}>
                <div className={css.Header}>Monday</div>
                <div className={css.ImageContainer}><img className={css.Image} src={`http://openweathermap.org/img/wn/11d@2x.png`} alt='S'/></div>
                <div className={css.Deg}>5&deg; <span className={css.DegMax}>8&deg;</span></div>
            </div>
            <div className={css.Body}>
                <div className={css.Header}>Monday</div>
                <div className={css.ImageContainer}><img className={css.Image} src={`http://openweathermap.org/img/wn/01d@2x.png`} alt='S'/></div>
                <div className={css.Deg}>5&deg; <span className={css.DegMax}>8&deg;</span></div>
            </div>
            <div className={css.Body}>
                <div className={css.Header}>Monday</div>
                <div className={css.ImageContainer}><img className={css.Image} src={`http://openweathermap.org/img/wn/02d@2x.png`} alt='S'/></div>
                <div className={css.Deg}>5&deg; <span className={css.DegMax}>8&deg;</span></div>
            </div>
            <div className={css.Body}>
                <div className={css.Header}>Monday</div>
                <div className={css.ImageContainer}><img className={css.Image} src={`http://openweathermap.org/img/wn/02n@2x.png`} alt='S'/></div>
                <div className={css.Deg}>5&deg; <span className={css.DegMax}>8&deg;</span></div>
            </div>
            <div className={css.Body}>
                <div className={css.Header}>Monday</div>
                <div className={css.ImageContainer}><img className={css.Image} src={`http://openweathermap.org/img/wn/02n@2x.png`} alt='S'/></div>
                <div className={css.Deg}>5&deg; <span className={css.DegMax}>8&deg;</span></div>
            </div>
        </Container>
    );
};

export default FiveForeCast;