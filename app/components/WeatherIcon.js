import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faRainbow,
  faSnowflake,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherIcon({ weatherType }) {
  switch (weatherType) {
    case "Clear":
      return <FontAwesomeIcon icon={faSun} />;
    case "Clouds":
      return <FontAwesomeIcon icon={faCloud} />;
    case "Rain":
      return <FontAwesomeIcon icon={faCloudRain} />;
    case "Thunderstorm":
      return <FontAwesomeIcon icon={faCloudBolt} />;
    case "Snow":
      return <FontAwesomeIcon icon={faSnowflake} />;
    default:
      return <FontAwesomeIcon icon={faRainbow} />;
  }
}
