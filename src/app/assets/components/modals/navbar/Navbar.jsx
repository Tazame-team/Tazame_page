"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Next_image from "../../Images/Next_image";
import Menu_button from "../../buttons/menu_button/Menu_button";
import { useTransitionRouter } from "../../context/Animacion_de_carga/TransitionProvider";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = ({ absolute = false }) => {
  const [IsActive, setIsActive] = useState(false);
  const { push } = useTransitionRouter();

  const redirect = (url) => {
    push(url);
  };

  const redirect_buttons = [
    { text: "Inicio", url: "/", icon: <FaWhatsapp /> },
    { text: "Servicios", url: "/Servicios", icon: <FaWhatsapp /> },
    { text: "Portafolio", url: "/Portafolio", icon: <FaWhatsapp /> },
    { text: "Paquetes", url: "/Paquetes", icon: <FaWhatsapp /> },
    { text: "Nosotros", url: "/Nosotros", icon: <FaWhatsapp /> },
    { text: "Contacto", url: "/Contacto", icon: <FaWhatsapp /> },
  ];

  return (
    <div className={`w-full z-50 top-0 ${absolute ? "absolute" : "sticky"} bg-white ${IsActive ? "" : "h-20"} flex flex-col`}>
      <div id="subnavbar" className={`p-1 grid grid-cols-2 ${IsActive ? "h-20" : "h-full"}`}>
        <div className="flex justify-start items-center md:pl-8">
          <div onClick={() => redirect("/")} className="hidden md:flex w-40 h-full cursor-pointer">
            <Next_image src="/images/icons/TAZAME/4x/Asset 2@4x.png" alt="logo tazame" />
          </div>

          <div onClick={() => redirect("/")} className="flex md:hidden w-20 h-full cursor-pointer">
            <Next_image src="/images/icons/TAZAME/4x/Asset 3@4x.png" alt="logo tazame" />
          </div>
        </div>

        <div>

          <div className="w-full h-full flex justify-end md:justify-start items-center gap-2 p-2">

            <div id="botones" className="hidden md:flex justify-evenly w-full items-center gap-2">
              {redirect_buttons.map((item) => (
                <p
                  key={item.url}
                  className="text-black font-bold md:text-xs lg:text-md xl:text-xl cursor-pointer"
                  onClick={() => redirect(item.url)}
                >
                  {item.text}
                </p>
              ))}
            </div>

            <div id="icon" className="flex md:hidden justify-end items-center w-12">
              <Menu_button submit={() => setIsActive((prev) => !prev)} IsActive={IsActive} />
            </div>

          </div>
        </div>
      </div>

      <AnimatePresence>
        {IsActive && (
          <div className="relative flex md:hidden w-full">

            <motion.div
              initial={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex-1 absolute w-full flex flex-col justify-center items-start bg-white min-h-screen origin-top overflow-x-hidden"
            >

              <div className="w-full flex flex-4 flex-col justify-start items-end gap-3">
                {redirect_buttons.map((item, index) => (

                  <motion.div
                    key={index}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.01, y: -2, borderColor: "#009ee3" }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.1 }}
                    onClick={() => redirect(item.url)}
                    className="relative overflow-hidden w-full h-16 px-4 group flex flex-row justify-end items-center border-b-2 border-transparent cursor-pointer"
                  >

                    <div className="relative z-10 flex items-center gap-4 text-black group-hover:text-primary-light">

                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="hidden w-10 h-10 rounded-xl group-hover:flex justify-center items-center text-xl transition-all duration-150"
                      >
                        {item.icon}
                      </motion.div>

                      <p className="font-knockout text-sm">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="flex-1 w-full flex justify-start items-start p-4 border-t-1 border-gray-300 text-black">
                <p className="text-xs">Tazame 2026 R</p>
              </div>


            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;