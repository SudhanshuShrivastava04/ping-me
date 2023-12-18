import type { Metadata } from "next";
import "./globals.css";
import { SocketProvider } from "../context/SocketProvider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ping Me",
  description: "A Scaleable Chat application using Socket.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <SocketProvider>
        <body className={inter.className}>{children}</body>
      </SocketProvider>
    </html>
  );
}
