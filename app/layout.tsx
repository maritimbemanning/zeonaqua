import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Zeon Aqua | Maritim servicepartner for havbruk i Nord-Norge",
    template: "%s | Zeon Aqua",
  },
  description: "Servicebåt og mannskap til havbruksnæringen. MS Akva Fighter leverer fortøyning, frakt og ROV-støtte i Troms, Nordland og Finnmark.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="font-sans antialiased bg-white text-slate-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
