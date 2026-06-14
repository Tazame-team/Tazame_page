"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import Next_image from "../../Images/Next_image";
import Menu_button from "../../buttons/menu_button/Menu_button";

const Navbar = ({ absolute = false }) => {
    const router = useRouter();
    const [IsActive, setIsActive] = useState(false);

    const redirect = (url) => {
        router.push(url);
    };

    const redirect_buttons = [
        { text: "Inicio", url: "/" },
        { text: "Servicios", url: "/servicios" },
        { text: "Portafolio", url: "/portafolio" },
        { text: "Paquetes", url: "/paquetes" },
        { text: "Nosotros", url: "/nosotros" },
        { text: "Contacto", url: "/contacto" },
    ];

    return (
        <div


            className={`w-full  z-20 top-0 ${absolute ? "absolute" : "sticky"}  bg-white   ${IsActive ? "" : "h-20"}  flex flex-col `} >


            <div id="subnavbar" className={`p-1 grid grid-cols-2  ${IsActive ? "h-20" : "h-full"}`}>


                <div className="flex justify-start items-center">
                    <div
                        onClick={() => redirect("/")}
                        className="hidden md:flex w-40 h-full cursor-pointer"
                    >
                        <Next_image
                            src="/images/icons/TAZAME/4x/Asset 2@4x.png"
                            alt="logo tazame"
                        />
                    </div>

                    <div
                        onClick={() => redirect("/")}
                        className="flex md:hidden w-20 h-full cursor-pointer"
                    >
                        <Next_image
                            src="/images/icons/TAZAME/4x/Asset 3@4x.png"
                            alt="logo tazame"
                        />
                    </div>
                </div>

                <div>
                    <div className="w-full h-full flex justify-end md:justify-start items-center gap-2 p-2">
                        <div
                            id="botones"
                            className="hidden md:flex justify-evenly w-full items-center gap-2"
                        >
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

                        <div
                            id="icon"
                            className="flex md:hidden justify-end items-center w-12"
                        >
                            <Menu_button
                                submit={() =>
                                    setIsActive((prev) => !prev)
                                }

                                IsActive={IsActive}

                            />
                        </div>
                    </div>
                </div>
            </div>



            <AnimatePresence>
                {IsActive && (

                    <div className="relative w-full">
                        <motion.div
                            initial={{ scaleY: 0, opacity: 0, transformOrigin: "top", }}
                            animate={{ scaleY: 1, opacity: 1, }}
                            exit={{ scaleY: 0, opacity: 0, transformOrigin: "top" }}
                            transition={{ duration: 0.3, ease: "easeInOut", }}
                            className="flex-1 absolute w-full flex justify-center items-center bg-white min-h-screen origin-top">



                            Menu


                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default Navbar;