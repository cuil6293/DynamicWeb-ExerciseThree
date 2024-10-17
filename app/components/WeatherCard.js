import WeatherIcon from "./WeatherIcon";
import styles from "../page.module.css";

export default function WeatherCard({
  city,
  currentTemp,
  highTemp,
  lowTemp,
  cloudiness,
  humidity,
  weatherType,
  windSpeed,
}) {
  const cloudinessPercentage = cloudiness - 10;
  const tempColor =
    currentTemp <= 60 ? `rgb(84, 181, 238)` : `rgb(236, 75, 75)`;
  const background = `linear-gradient(0deg, white, ${cloudinessPercentage}%, ${tempColor})`;

  return (
    <div className={styles.weatherCardWrapper} style={{ background }}>
      <div className={styles.weatherCity}>
        <h2>{city}</h2>
      </div>
      <div className={styles.column}>
        <div className={styles.weatherIcon}>
          <WeatherIcon weatherType={weatherType} />
        </div>
        <div className={styles.weatherInfo}>
          <h3>{Math.round(currentTemp)}°</h3>
          <h4>{weatherType}</h4>
          <p>High Temperature: {Math.round(highTemp)}°</p>
          <p>Low Temperature: {Math.round(lowTemp)}°</p>
          <p>Cloudiness: {cloudiness}%</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {windSpeed} mph</p>
        </div>
      </div>
    </div>
  );
}
