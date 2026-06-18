"use client";

import { useState } from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { PiBuildingOfficeFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import General_button from "../assets/components/buttons/general_button/General_button ";
import General_input from "../assets/components/inputs/General_input";
import Social_media_button from "../assets/components/buttons/Social_media_button/Social_media_buttom";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Next_image from "../assets/components/Images/Next_image";



const Minicards = ({
    title,
    subTitle,
    icon,
    color = "text-primary-light bg-primary-light/20",
    text = "text-primary-light"
}) => {
    return (
        <div className="w-full p-4 flex items-center gap-4 rounded-xl  shadow-sm  transition-all duration-200">

            <div
                className={`w-12 h-12 rounded-full flex justify-center items-center text-xl shrink-0 ${color}`}
            >
                {icon}
            </div>

            <div className="flex flex-col justify-center">
                <h3 className={`font-knockout text-xl leading-none wrap-break-word ${text}`}>
                    {title}
                </h3>

                <p className="text-sm text-gray-400">
                    {subTitle}
                </p>
            </div>

        </div>
    );
};



const Contacto = () => {
    const [formulario, setFormulario] = useState({
        nombre: "",
        correo: "",
        telefono: "",
        mensaje: "",
    });


    const formularioCompleto =
        formulario.nombre.trim() &&
        formulario.correo.trim() &&
        formulario.telefono.trim() &&
        formulario.mensaje.trim();

    const enviarFormulario = (e) => {
        e.preventDefault();
        console.log(formulario);
    };





    return (
        <div className="w-full min-h-[calc(80vh-5rem)]  md:h-[calc(80vh-5rem)]   overflow-hidden ">

            <div className=" w-full scale-x-102  h-5 -rotate-2 scale-y-300 overflow-hidden">
                <div className="relative w-full h-full bg-secondary-light z-50">
                    <div className="hidden absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.35)_30%,rgba(0,0,0,0)_70%)]" />
                </div>
            </div>

            <div className="relative w-full  -z-10  py-10  bg-white">


                <div id="imagenbg" className="hidden absolute inset-0 bg-amber-400 scale-y-104">

                    <div className="relative h-full w-full">
                        <Next_image src={"/images/pictures/Principal image.jpeg"} object="object-fill backdrop-blur-2xl" />

                        <div className="absolute inset-0  backdrop-blur-xs">

                        </div>
                    </div>

                </div>

                <div className="flex justify-center w-full relative z-50">

                    <div className="w-full flex flex-col  md:flex-row justify-center items-start  gap-6 max-w-7xl p-4">

                        <div id="formulario"
                            className="w-full md:w-1/2 p-6  bg-white rounded-xl shadow-2xl md:-translate-y-0"
                        >
                            <h2 className="text-2xl font-bold mb-6 font-knockout text-primary-light">
                                Déjanos un mensaje
                            </h2>

                            <form
                                onSubmit={enviarFormulario}
                                className="w-full flex flex-col gap-4"
                            >
                                <div className="w-full flex flex-col md:flex-row justify-between items-center gap-2">
                                    <div className="w-full md:w-1/2 flex flex-col">

                                        <General_input
                                            title={"Nombre:"}
                                            value={formulario.nombre}
                                            setvalue={(valor) =>
                                                setFormulario({
                                                    ...formulario,
                                                    nombre: valor,
                                                })
                                            }
                                            placeholder="Tu nombre"
                                        />
                                    </div>

                                    <div className="w-full md:w-1/2 flex flex-col">

                                        <General_input
                                            title={"Correo:"}
                                            value={formulario.correo}
                                            setvalue={(valor) =>
                                                setFormulario({
                                                    ...formulario,
                                                    correo: valor,
                                                })
                                            }
                                            tipo="email"
                                            placeholder="Tu correo electrónico"
                                        />
                                    </div>
                                </div>

                                <div className="w-full flex flex-col">


                                    <General_input

                                        title={"Teléfono:"}
                                        value={formulario.telefono}
                                        setvalue={(valor) =>
                                            setFormulario({
                                                ...formulario,
                                                telefono: valor,
                                            })
                                        }
                                        placeholder="Tu teléfono"
                                    />
                                </div>

                                <div className="w-full flex flex-col">

                                    <General_input
                                        title={"Mensaje:"}
                                        value={formulario.mensaje}
                                        setvalue={(valor) =>
                                            setFormulario({
                                                ...formulario,
                                                mensaje: valor,
                                            })
                                        }
                                        multiline={true}
                                        rows={5}
                                        placeholder="Tu mensaje"
                                    />
                                </div>

                                <div className="w-full">
                                    <General_button
                                        type="submit"
                                        disable={!formularioCompleto}
                                        texto="Enviar"
                                    />
                                </div>
                            </form>
                        </div>






                        <div
                            id="informacion"
                            className="w-full md:w-1/2 p-6 bg-white flex flex-col justify-center items-center gap-4 "
                        >


                            <div id="texto" className="w-full h-auto flex flex-col justify-center items-center gap-4 wrap-break-word">
                                <h2 className="text-2xl text-center font-bold  font-knockout text-primary-light ">
                                    No te quedes sin comunicarte
                                </h2>


                                <p className="text-gray-400 text-md  ">
                                    Somos una empresa industrial textil fundada en 1971, en la ciudad de San Miguel el Alto, Jalisco. Nos dedicamos a la fabricación y comercialización de
                                    tu papa
                                </p>
                            </div>




                            <div id="cards" className="w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 p-2 gap-2">

                                <div className="w-full col-span-1 row-span-1">
                                    <Minicards icon={<PiBuildingOfficeFill />} subTitle={"Primera oriente #743"} title={"Oficina"} />
                                </div>



                                <div className="w-full col-span-1 row-span-1 ">
                                    <Minicards icon={<FaPhoneAlt />} subTitle={"+52 3481111267"} title={"Telefono"} color="text-secondary-light bg-secondary-light/20" text="text-secondary-light" />
                                </div>



                                <div className="w-full col-span-1 row-span-1  ">
                                    <Minicards icon={<FaPhoneAlt />} subTitle={"8:00 AM - 7:00 PM"} title={"Horario"} color="text-secondary-light bg-secondary-light/20" text="text-secondary-light" />
                                </div>

                                <div className="w-full col-span-1 row-span-1  ">
                                    <Minicards icon={<MdEmail />} subTitle={"tazame.team@hotmail.com"} title={"Correo"} />
                                </div>




                            </div>


                            <div className="flex flex-row justify-between w-full items-center gap-2 p-2">

                                <div>
                                    <h2 className="text-primary-light text-xl font-knockout">Redes Sociales:</h2>
                                </div>

                                <div className="flex flex-row justify-center items-center gap-2">
                                    <Social_media_button color="bg-primary-light" href={"https://wa.me/521234567890"} size="w-12 h-12 text-3xl p-1" />
                                    <Social_media_button color="bg-primary-light" icon={<FaTiktok />} href={"https://wa.me/521234567890"} size="w-12 h-12 text-3xl p-1" />
                                    <Social_media_button color="bg-primary-light" icon={<FaFacebook />} href={"https://wa.me/521234567890"} size="w-12 h-12 text-3xl p-1" />
                                    <Social_media_button color="bg-primary-light" icon={<FaSquareInstagram />} href={"https://wa.me/521234567890"} size="w-12 h-12 text-3xl p-1" />

                                </div>


                            </div>



                        </div>

                    </div>
                </div>
            </div>





        </div>
    );
};

export default Contacto;