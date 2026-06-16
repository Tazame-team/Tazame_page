"use client";

import { motion } from "motion/react";
import { TbAtom2Filled } from "react-icons/tb";

const items = [
    "UI/UX",
    "Desarrollo Web",
    "Redes Sociales",
    "Fotografía y Video",
    "Diseño Gráfico",
    "Desarrollo de Aplicaciones",
];

const TextCarousel = () => {
    return (
        <div className="overflow-hidden w-full h-full flex flex-row justify-center items-center gap-2 ">
            <motion.div
                className="flex gap-10 whitespace-nowrap"
                animate={{ x: ["75%", "-100%"] }}
                transition={{
                    duration: 120,
                    repeat: Infinity,
                    ease: "linear",
                    elay: 1.1,
                }}

            >
                {[...items, ...items, ...items,...items].map((item, i) => (
                    <motion.span className={`text-lg font-bold   ${i % 2 === 0 ? "text-primary-light" : "text-secondary-light"}`} key={i}>

                        <div className="flex flex-row justify-center items-center gap-2">
                            -
                            {item}
                            -
                        </div>


                    </motion.span>
                ))}
            </motion.div>
        </div>
    );
}

export default TextCarousel;