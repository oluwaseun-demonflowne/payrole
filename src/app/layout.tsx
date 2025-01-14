import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/util/font";

export const metadata: Metadata = {
  title: "Payrole",
  description: "Global Payroll Platform Made For Employees",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
