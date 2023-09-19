import { useState } from "react";
import useCountries from "./hooks/useCountries";
import CountryList from "./components/CountryList";

export default function App() {
  const countriesService = useCountries();
  const [filter, setFilter] = useState<string>("");

  if (countriesService.isLoading) {
    return <p>Loading...</p>;
  }

  if (countriesService.error) {
    return <p style={{ color: "red" }}>{countriesService.error}</p>;
  }

  const filteredCountries = countriesService.countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div>
        <p>find countries</p>
        <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      </div>
      <ul>
        <CountryList countries={filteredCountries} />
      </ul>
    </div>
  );
}
