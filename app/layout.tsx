import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Burgers By Lalo",
  description:
    "El secreto está en la mordida - Las mejores hamburguesas en Cuernavaca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
