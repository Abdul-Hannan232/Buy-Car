import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/footer"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buy Car",
  description: "Buy New Car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
