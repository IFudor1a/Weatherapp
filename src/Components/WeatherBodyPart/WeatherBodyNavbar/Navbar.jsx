import css from './Navbar.module.css'
import React, {useState} from "react";
import {Container, Nav} from "react-bootstrap";

const Navbar = (props) => {
    const classes = css.NavItem + ' ' + css.Active
    const ButtonActive = css.NavbarButton + ' ' + css.ActiveBut
    const [isActive, setActive] = useState(true)
    const Metric = (event) => {
        event.preventDefault()
        setActive(true)
        props.setMeasure('metric')

    }
    const Imperial = (event) => {
        event.preventDefault()
        setActive(false)
        props.setMeasure('imperial')
    }
    return (
        <Nav style={{marginTop: 30}}>
            <Container>
                <Nav.Item className={classes}>Today</Nav.Item>
                <Nav.Item className={css.NavItem}>Week</Nav.Item>
                <Nav.Item className={css.NavItemRight}>
                    <button onClick={event => Metric(event)}
                            className={isActive ? ButtonActive : css.NavbarButton}>&deg;C
                    </button>
                </Nav.Item>
                <Nav.Item className={css.NavItemRight}>
                    <button onClick={event => Imperial(event)}
                            className={!isActive ? ButtonActive : css.NavbarButton}>&deg;F
                    </button>
                </Nav.Item>
            </Container>
        </Nav>
    );
};

export default Navbar;