import type { Metadata } from "next";
import "./globals.css";
import "./tailwind.css";
import "../public/assets/css/bootstrap.min.css";
import "../public/assets/css/fontawesome.css";
import "../public/assets/css/magnific-popup.css";
import "../public/assets/css/nice-select.css";
import "../public/assets/css/slick-slider.css";
import "../public/assets/css/aos.css";
import "../public/assets/css/mobile-menu.css";
import "../public/assets/css/main.css";

export const metadata: Metadata = {
  title: "Philippines Consultancy & Staffing",
  description: "Dedicated Philippine market website for hiring and consultancy.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}

