import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MuiThemeProvider from "./mui-theme-provider";
import ClientLayout from "../components/ClientLayout";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DentalCare",
  description: "Professional dental care with a gentle touch",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.className} bg-[#F9FAFB]`}>
        <MuiThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
