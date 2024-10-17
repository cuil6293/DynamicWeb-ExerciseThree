import WeatherIcon from "@/app/components/WeatherIcon";
import Header from "../../components/Header";
import WeatherCard from "../../components/WeatherCard";
import styles from "../../page.module.css";

export default async function City({ params }) {
  const city = params.cityName;
  const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;

  const request = await fetch(queryURL);
  const weatherData = await request.json();

  console.log(weatherData);

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <WeatherCard
          city={city}
          currentTemp={weatherData.main.temp}
          highTemp={weatherData.main.temp_max}
          lowTemp={weatherData.main.temp_min}
          cloudiness={weatherData.clouds.all}
          humidity={weatherData.main.humidity}
          weatherType={weatherData.weather[0].main}
          windSpeed={weatherData.wind.speed}
        />
      </main>
    </div>
  );
}
