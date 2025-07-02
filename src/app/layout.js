import { Poppins, Orelega_One, Grandstander } from "next/font/google";
import "./globals.css";


// Define fonts with variables
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // you can adjust as needed
  variable: "--font-poppins",
});

const orelega = Orelega_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-orelega",
});

const grandstander = Grandstander({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-grandstander",
});

export const metadata = {
  title: "Ecstasy — Designer Stationery",
  description: "Shop handmade notebooks, creative planners, and art goods.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${orelega.variable} ${grandstander.variable} antialiased`}>{children}</body>
    </html>
  );
}
