import { CountryType } from "../types";

type Props = {
  country: CountryType;
};

export default function Country({ country }: Props) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p>
        <b>Capital: </b>
        <span>{country.capital}</span>
      </p>
      <p>
        <b>Area: </b>
        <span>{country.area}</span>
      </p>

      <div>
        <b>Languages: </b>
        <ul>
          {country.languages &&
            Object.keys(country.languages).map((lang) => (
              <li key={lang}>{country.languages![lang]}</li>
            ))}
        </ul>

        <br />
        <img src={country.flags.png} />
      </div>
    </div>
  );
}
