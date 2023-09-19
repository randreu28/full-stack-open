import useWeather, { Position } from "../hooks/useWeather";

export default function Weather(position: Position) {
  const { weather, isLoading, error } = useWeather(position);

  if (isLoading || weather === undefined) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <>
      <br />

      <div>
        <b>Temperature: </b>
        <span>{weather.current_weather.temperature}</span>
      </div>

      <div>
        <b>Wind speed: </b>
        <span>{weather.current_weather.windspeed}</span>
      </div>

      <div>
        <b>Wind direction </b>
        <span>{weather.current_weather.winddirection}</span>
      </div>

      <br />
    </>
  );
}
