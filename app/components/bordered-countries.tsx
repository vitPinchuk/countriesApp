"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import type { Country } from "../types/types";
import CountryCard from "./country-card";
import Shimmer from "./shimmer";

function BorderedCountries(props: { neighboringCountries: string[] }) {
  const { neighboringCountries } = props;

  const [isPending, setIsPending] = useState(true);
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async (
      setIsPending: Dispatch<SetStateAction<boolean>>
    ): Promise<Country[]> => {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2,flags,cca3"
        );
        setIsPending(false);
        return response.json();
      } catch (error) {
        setIsPending(false);
        return [];
      }
    };

    getCountries(setIsPending).then((result) => {
      const countriesResponse: Country[] = result.filter((res) =>
        neighboringCountries.find((country) => country === res.cca3)
      );
      setCountries(countriesResponse);
    });
  }, []);

  return (
    <>
      {isPending && <BorderedCountriesShimmer />}
      {!!countries.length && (
        <div className="border rounded-lg mx-8 mt-10 p-4">
          <p className="font-bold">Bordering Countries:</p>
          <div className="flex flex-wrap mt-2 items-center">
            {countries.map((country) => (
              <CountryCard country={country} key={country.cca2} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default BorderedCountries;

export const BorderedCountriesShimmer = () => {
  return (
    <div className="border rounded-lg flex flex-wrap mx-8 mt-10 items-center p-4">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div className="mx-2" key={`shimmer_country_${i}`}>
            <Shimmer width="w-48" height="h-64" />
          </div>
        ))}
    </div>
  );
};
