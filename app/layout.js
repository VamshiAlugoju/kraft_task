import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ClientOnly from "./components/ClientOnly";
import Head from "next/head";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div>{children}</div>
      </body>
    </html>
  );
}
