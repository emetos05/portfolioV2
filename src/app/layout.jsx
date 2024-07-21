import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = {
  title: "Dan Emehin",
  description: "Daniel's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
