import "./globals.css";
import Navbar from "./assets/components/modals/navbar/Navbar";
import { Knockout } from "./assets/Theme/Export_Font";
import Social_media_button from "./assets/components/buttons/Social_media_button/Social_media_buttom";
import TransitionProvider from "./assets/components/context/Animacion_de_carga/TransitionProvider";

export const metadata = {
  title: "Tazame",
  description: "Descripcion pendiente",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${Knockout.variable} h-full antialiased`}>
      <body className="relative min-h-full">


        <TransitionProvider>


          <Navbar absolute={false} />


          {children}

          
          <div className="fixed bottom-6 right-6 z-40">
            <Social_media_button
              href="https://wa.me/521234567890"
              color="bg-[#25D366]"
            />
          </div>


        </TransitionProvider>
      </body>
    </html>
  );
}