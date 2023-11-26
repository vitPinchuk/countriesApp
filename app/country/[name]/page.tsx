import Image from "next/image";
import BorderedCountries from '../../components/bordered-countries';
import type { CountryPage } from "../../types/types";
const getCountry = async (name: string) => {
  const response =
    await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true
  `);
  const country = await response.json();
  return country[0];
};

export default async function Country({
  params: { name },
}: {
  params: { name: string };
}) {
  const country: CountryPage = await getCountry(name);
  const returnLanguages = (laguages: { [key in string]: string }) => {
    return Object.values(laguages).join(" ");
  };

  return (
    <main className="max-w-screen-xl mx-auto my-0 mt-28">
      {!!country ? (
        <>
          <div className="border rounded-lg bg-slate-100 mx-8">
            <div className="flex flex-wrap">
              <div className="p-6 w-64 h-64">
                <Image
                  src={country.flags.svg}
                  alt={country.name.common}
                  width={180}
                  height={180}
                  className="w-full"
                />
              </div>
              <div className="p-4 flex flex-col">
                <p className="mb-2">
                  <span className="font-bold pr-1">Name:</span>
                  {country.name.common}
                </p>
                <p className="mb-2">
                  <span className="font-bold pr-1">Official name:</span>
                  {country.name.official}
                </p>
                <p className="mb-2">
                  <span className="font-bold pr-1">Status:</span>
                  {country.status}
                </p>
                {country?.capital && country?.capital[0] && (
                  <p className="mb-2">
                    <span className="font-bold pr-1">Capital:</span>
                    {country.capital[0]}
                  </p>
                )}
                <p className="mb-2">
                  <span className="font-bold pr-1">Region:</span>
                  {country.region}
                  {country.subregion ? ` and ${country.subregion}` : ""}
                </p>
                {country?.languages && (
                  <p className="mb-2">
                    <span className="font-bold pr-1">Languages:</span>
                    {returnLanguages(country.languages)}
                  </p>
                )}
                <p className="mb-2">
                  <span className="font-bold pr-1">Continents:</span>
                  {country.continents.join(" ")}
                </p>
                <p className="mb-2">
                  <span className="font-bold pr-1">Week Start:</span>
                  {country.startOfWeek}
                </p>
                {country.maps.googleMaps && (
                  <p className="mb-2">
                    <span className="font-bold pr-1">Google Map:</span>
                    <a className="text-bold" href={country.maps.googleMaps}>
                      See on Map
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>

          {country?.borders && !!country?.borders.length && <BorderedCountries neighboringCountries={country?.borders}/>}
        </>
      ) : (
        <div>Country Not Found</div>
      )}
    </main>
  );
}
