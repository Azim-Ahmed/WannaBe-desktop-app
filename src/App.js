import './App.css';
//
import ReactWeather, { useOpenWeather } from 'react-open-weather';



function App() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: 'a4d87bf2001ef9bdc8330b755d6cc87d',
    lat: '1.2921',
    lon: '36.8219',
    lang: 'en',
    unit: 'metric', // values are (metric, standard, imperial)
  });
  return (
    <div className="App">
      <div className="App">
        <ReactWeather
          isLoading={isLoading}
          errorMessage={errorMessage}
          data={data}
          lang="en"
          locationLabel="Nairobi"
          unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
          showForecast
        />
      </div>
    </div>
  );
}

export default App;
