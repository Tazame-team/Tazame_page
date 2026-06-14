"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Next_image from "../../Images/Next_image";

const Card_servicios = ({
    alto_minimo = "h-52",
    imagen,
    titulo,
    icono,
    indice,
    descripcion,
    onFlip,
    flipped

}) => {

    return (
        <div
            className={`w-full ${alto_minimo} perspective-[1000px] cursor-pointer`}
            onClick={onFlip}
        >
            <motion.div
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
                style={{ transformStyle: "preserve-3d" }}
            >



                <div
                    className="absolute inset-0 overflow-hidden rounded-2xl shadow-xl"
                    style={{ backfaceVisibility: "hidden" }}
                >
                    <div className="relative w-full h-full">
                        <Next_image
                            src={imagen || "/images/default.jpg"}
                            alt={titulo}
                        />

                        <div className="absolute inset-0 bg-black/40" />

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-4">
                            <div className="rounded-lg  px-4 py-2">
                                <h3 className="text-center text-lg font-semibold text-white">
                                    {titulo}
                                </h3>
                            </div>

                            <div className={`flex h-14 w-14 items-center justify-center rounded-full ${indice % 2 === 0 ? "bg-secondary-light" : "bg-primary-light"}  text-3xl text-white shadow-lg`}>
                                {icono}
                            </div>
                        </div>
                    </div>
                </div>


                <div
                    id="back"
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center shadow-xl"
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                    }}
                >
                    <div className="mb-4 text-5xl text-secondary-light">
                        {icono}
                    </div>

                    <h3 className="mb-2 text-xl font-bold">
                        {titulo}
                    </h3>

                    <p className="text-base text-black">
                        {descripcion}
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default Card_servicios;