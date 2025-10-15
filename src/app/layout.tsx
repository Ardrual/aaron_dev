import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron's Portfolio",
  description: "Developer Portfolio - showcasing my projects and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
