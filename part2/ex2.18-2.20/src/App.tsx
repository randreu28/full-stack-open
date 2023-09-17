import useCountries from "./hooks/useCountries";

export default function App() {
  const countriesService = useCountries();

  if (countriesService.isLoading) {
    return <p>Loading...</p>;
  }

  if (countriesService.error) {
    return <p style={{ color: "red" }}>{countriesService.error}</p>;
  }

  return (
    <div>
      {countriesService.countries.map((country) => (
        <p>{country.name.common}</p>
      ))}
    </div>
  );
}
