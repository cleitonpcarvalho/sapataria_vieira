import type { Metadata } from "next";
import { Inter, Playfair_Display, Work_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const uiFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-ui",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sapataria Chrispim Vieira",
  description:
    "Landing page oficial da Sapataria Chrispim Vieira em Valinhos/SP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="facebook-domain-verification"
          content="m24yd6s7wum32jv92gflk4pkpgdnf8"
        />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${uiFont.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
