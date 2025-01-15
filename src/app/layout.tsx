import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/util/font";
import DesktopNav from "./(shared)/DesktopNav";
import MobileNav from "./(shared)/MobileNav";

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
      <body className={inter.className}>
        <DesktopNav />
        <MobileNav />
        {children}
      </body>
    </html>
  );
}
