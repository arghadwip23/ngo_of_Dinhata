import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/just.ttf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/just.ttf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Dayboddho paribar",
//   description: "a ngo from dinhata working hard to improve the society",
// };
export function generateMetadata({ params }) {
  // Dynamically generate metadata based on the route or other logic
  const metadata = {
    title: params.slug
      ? `Page for ${params.slug}`
      : 'Default Page Title',
    description: params.slug
      ? `Learn more about ${params.slug}`
      : 'Default page description for the site.',
    openGraph: {
      title: params.slug
        ? `OpenGraph Title for ${params.slug}`
        : 'Default OpenGraph Title',
      description: params.slug
        ? `OpenGraph description for ${params.slug}`
        : 'Default OpenGraph description.',
      images: [
        {
          url: params.slug
            ? `https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png`
            : 'https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png',
          width: 800,
          height: 600,
          alt: 'Dynamic Image',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: params.slug
        ? `Twitter Title for ${params.slug}`
        : 'Default Twitter Title',
      description: params.slug
        ? `Twitter description for ${params.slug}`
        : 'Default Twitter description.',
      images: [
        {
          url: params.slug
            ? `https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png`
            : 'https://ztmiuwqaannhjkbpxfue.supabase.co/storage/v1/object/public/gallery/assets/Group%2010.png',
        },
      ],
    },
  };

  return metadata;
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="theme-color" content="#facc15" />

      </head>
      <body
        className={` antialiased bg-white font-basundhara`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
