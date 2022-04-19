import './App.css';
import Row from 'react-bootstrap/Row'
import WeatherMain from "./Components/WeatherMainPart/WeatherMain";
import WeatherBodyPart from "./Components/WeatherBodyPart/WeatherBodyPart";


function App() {
  return (
    <div className="App">
      <Row>
          <WeatherMain/>
          <WeatherBodyPart />
      </Row>
    </div>
  );
}

export default App;
