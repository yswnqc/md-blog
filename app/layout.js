import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Samia's Blog",
  description: "My simple trial blog app",
};

let header = (
  <header>
    <Link href={"/"}>
      <h1>Samia's Blog</h1>
    </Link>
    <br />
    <hr />
  </header>
);
let footer = <footer>Made by Samia!</footer>;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
