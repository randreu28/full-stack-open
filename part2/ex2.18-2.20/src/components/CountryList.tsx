import { useState } from "react";
import { CountryType } from "../types";
import Country from "./Country";

type Props = {
  countries: CountryType[];
};

export default function CountryList({ countries }: Props) {
  const [showingCountries, setShowingCountries] = useState<string[]>([]);

  if (countries.length === 1) {
    return <Country country={countries[0]} />;
  }

  return (
    <ul>
      {countries.map((country) => {
        const isShowing = showingCountries.includes(country.name.common);

        return (
          <li key={country.name.common}>
            <span>{country.name.common}</span>
            <button
              onClick={() => {
                if (!isShowing) {
                  setShowingCountries([
                    ...showingCountries,
                    country.name.common,
                  ]);
                } else {
                  setShowingCountries(
                    [...showingCountries].filter(
                      (prevCountry) => prevCountry !== country.name.common
                    )
                  );
                }
              }}
            >
              {isShowing ? "hide" : "show"}
            </button>

            {isShowing && <Country country={country} />}
          </li>
        );
      })}
    </ul>
  );
}
