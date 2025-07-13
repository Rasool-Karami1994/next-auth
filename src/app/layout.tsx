import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Task",
  description: "Simple auth and dashboard page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Toaster reverseOrder={false} position="bottom-right" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
