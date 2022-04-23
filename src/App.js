import './App.css';
import Row from 'react-bootstrap/Row'
import WeatherMain from "./Components/WeatherMainPart/WeatherMain";
import WeatherBodyPart from "./Components/WeatherBodyPart/WeatherBodyPart";
import {useState} from "react";


function App() {
    const [measure, setMeasure] = useState('metric')
    const [viewport, setViewport] = useState({
        latitude: -50,
        longitude: 37.8,
        zoom: 7
    })
    const [city, setCity] = useState('')
    const [data, setData] = useState()
    const [FiveDayForCast, setFiveDayForCast] = useState()
    return (
        <div className="App">
            <Row>
                <WeatherMain measure={measure} setMeasure={setMeasure} city={city} setCity={setCity} data={data}
                             setData={setData} viewport={viewport}
                             setViewport={setViewport} setFiveDayForCast={setFiveDayForCast}/>
                <WeatherBodyPart measure={measure} setMeasure={setMeasure} viewport={viewport} setViewport={setViewport}
                                 city={city} data={data} FiveDayForCast={FiveDayForCast}/>
            </Row>
        </div>
    );
}

export default App;
