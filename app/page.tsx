import CountryCard from './components/country-card';
import type { Country } from './types/types';

const getCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,cca2,flags");
    return response.json();
  } catch (error) {
    return [];
  }
};

export default async function Home() {
  const countries = await getCountries();
  return !countries.length ? (
    <div className="m-10 text-center">{`Received 0 countries`}</div>
  ) : (
    <section className="flex flex-wrap mt-15 max-w-screen-xl mx-auto my-0 min-w-[20rem] justify-center">
      {countries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => (
        <CountryCard country={country} key={country.cca2} />
      ))}
    </section>
  );
}
