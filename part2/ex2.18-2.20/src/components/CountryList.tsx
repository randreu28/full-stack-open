import { CountryType } from "../types";
import Country from "./Country";

type Props = {
  countries: CountryType[];
};

export default function CountryList({ countries }: Props) {
  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name.common}>{country.name.common}</li>
      ))}
    </ul>
  );
}
