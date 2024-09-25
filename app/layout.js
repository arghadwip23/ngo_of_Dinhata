import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Dayboddho paribar",
  description: "a ngo from dinhata working hard to improve the society",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#facc15" />

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
