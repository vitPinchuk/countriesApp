export type Country = {
  name: {
    common: string
  }
  cca2: string
  cca3:string
  flags: {
    alt: string
    svg: string
  };
};

export type CountryPage = {
  name: {
    common: string,
    official: string,
    nativeName: { eng: [Object] }
  },
  tld: string [],
  cca2: string,
  ccn3: string,
  cca3: string,
  cioc: string,
  independent: boolean,
  status: string,
  unMember: boolean,
  currencies: { KYD: { name: string, symbol: string } },
  idd: { root: string, suffixes: string[] },
  capital: string[],
  altSpellings: string[],
  region: string,
  subregion: string,
  languages: { [key in string]: string },
  latlng: [ number, number ],
  landlocked: boolean,
  area: number,
  flag: string,
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  population: number,
  fifa: string,
  timezones: string[],
  continents: string [],
  borders:string[],
  flags: {
    png: string,
    svg: string
  },
  coatOfArms: {
    png: string,
    svg: string
  },
  startOfWeek: string,
  capitalInfo: { latlng: [ number, number ] }
}