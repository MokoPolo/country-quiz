import { useEffect, useState } from "react";
import _ from "lodash"; // Import lodash library
import CountryDTO from "../data/countryDto";

const BASE_URL = "https://restcountries.com/v3.1";

/**
 * Custom hook to fetch a specified number of countries.
 * @param count The number of countries to fetch.
 * @returns An array of CountryDTO objects representing the fetched countries.
 */
export const useFetchCountries = (count: number) => {
  const [countries, setCountries] = useState<CountryDTO[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/all`);
        const data = await response.json();

        const countryData = _.sampleSize(data, count).map(
          (country: any): CountryDTO => ({
            name: country.name.common,
            capital: country.capital,
            flag: country.flags.svg,
          })
        );
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching all countries:", error);
      }
    };

    fetchData();
  }, []);

  return countries;
};
