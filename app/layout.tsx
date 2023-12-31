import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunitoSans.className}>
          <Link className="mx-4 flex items-center p-4 mx-auto bg-gray-200 shadow-md" href={'/'}>
            <Image
              src="/images/logo.png"
              alt="Earth logo"
              width={48}
              height={48}
            />
            <h2 className="px-4 font-bold text-2xl uppercase">Countries App</h2>
          </Link>
        {children}
      </body>
    </html>
  );
}
