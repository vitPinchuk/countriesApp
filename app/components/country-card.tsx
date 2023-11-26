import Image from "next/image";
import Link from "next/link";
import type { Country } from "../types/types";

function CountryCard(props: { country: Country }) {
  const { country } = props;

  return (
    <Link href={`/country/${country.name.common.toLowerCase()}`} className="group/item">
      <div className="m-2 border rounded-lg w-60 h-44 flex flex-col items-center bg-gray-50 group-hover/item:bg-slate-100">
        <div className="w-36 h-28 flex items-center justify-center">
          <Image
            src={country.flags.svg}
            alt={country.flags.alt}
            loading="lazy"
            width={100}
            height={100}
            className="group-hover/item:scale-105 shadow-2xl"
          />
        </div>
        <p className="uppercase text-base font-semibold group-hover/item:font-extrabold	px-2 text-center">
          {country.name.common}
        </p>
      </div>
    </Link>
  );
}

export default CountryCard;
