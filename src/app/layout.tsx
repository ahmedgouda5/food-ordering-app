import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "400", "500"],
});

export const metadata: Metadata = {
  title: "Food Ordering App",
  description:
    "A modern and user-friendly app to browse restaurants, explore menus, and place food orders online with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
