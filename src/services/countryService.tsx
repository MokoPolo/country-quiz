import { useEffect, useState } from "react";
import _ from "lodash"; // Import lodash library
import CountryDTO from "../data/countryDto";

const BASE_URL = "https://restcountries.com/v3.1";

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
            flag: country.flags,
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

// export const useFetchCountriesWithFields = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/all?fields=name,flags`);
//         const flagData: CountryDTO[] = await response.json();
//         // console.log("Flag data: ");
//         // console.log(flagData);
//       } catch (error) {
//         console.error("Error fetching countries with fields:", error);
//       }
//     };

//     fetchData();
//   }, []);
// };
