import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./assets/components/modals/navbar/Navbar";


export const metadata = {
  title: "Tazame",
  description: "Descripcion pendiente",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={` h-full antialiased`}
    >

      <body className=" min-h-full   ">


        <Navbar  absolute={false}/>


        {children}
      </body>

    </html>
  );
}
