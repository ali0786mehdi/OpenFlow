import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenFlow — Build. Learn. Measure. Improve.",
  description:
    "An open-source platform for learning computer science through interactive visualizations and hands-on practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
