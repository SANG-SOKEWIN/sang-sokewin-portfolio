import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANG Sokewin | Technology & Leadership",
  description: "Portfolio of SANG Sokewin, an IT Management and Computer Science student in Phnom Penh.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
