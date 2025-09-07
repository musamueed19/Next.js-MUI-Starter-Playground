"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CssBaseline, Switch, ThemeProvider } from "@mui/material";
import theme from "@/lib/theme";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata = {
//   title: "Next.js - MUI Playground",
//   description: "Next.js - MUI Playground",
// };

export default function RootLayout({ children }) {
  const [lightmode, setLightMode] = useState(true)
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch checked={lightmode} />
             {children}
           </ThemeProvider>
      </body>
    </html>
  );
}
