import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  weight: "400", 
  variable: "--font-marcellus",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
