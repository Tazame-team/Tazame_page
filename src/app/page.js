"use client"

import Image from "next/image";
import { useState } from "react";
import Text_carrucel from "./assets/components/carrucel/Text-carruecel";
import Card_servicios from "./assets/components/Cards/Card_servicios/Card_servicios";
import { BiSolidWebcam } from "react-icons/bi";
import Card_paquetes from "./assets/components/Cards/Cards_paquetes/Card_paquetes";

export default function Home() {
  const [cardAbierta, setCardAbierta] = useState(null);


  const Servicios = [
    {
      titulo: "Desarrollo y diseño web",
      imagen: "",
      descripcion:
        "Creamos sitios web modernos, rápidos y responsivos enfocados en brindar una excelente experiencia de usuario y alcanzar los objetivos de tu negocio.",
      icono: <BiSolidWebcam />,
    },
    {
      titulo: "Desarrollo móvil",
      imagen: "",
      descripcion:
        "Diseñamos y desarrollamos aplicaciones móviles para Android e iOS con interfaces intuitivas, alto rendimiento y funcionalidades adaptadas a tus necesidades.",
      icono: <BiSolidWebcam />,
    },
    {
      titulo: "Desarrollo de aplicaciones de escritorio",
      imagen: "",
      descripcion:
        "Construimos aplicaciones de escritorio seguras y eficientes para optimizar procesos, administrar información y mejorar la productividad de tu empresa.",
      icono: <BiSolidWebcam />,
    },
    {
      titulo: "Gestión de redes sociales",
      imagen: "",
      descripcion:
        "Planificamos, administramos y optimizamos tus redes sociales para aumentar tu alcance, fortalecer tu marca y conectar con tu audiencia.",
      icono: <BiSolidWebcam />,
    },
    {
      titulo: "Fotografía y video",
      imagen: "",
      descripcion:
        "Capturamos imágenes y videos profesionales para promocionar productos, servicios, eventos y fortalecer la identidad visual de tu marca.",
      icono: <BiSolidWebcam />,
    },
    {
      titulo: "Edición y creación de contenido",
      imagen: "",
      descripcion:
        "Creamos contenido visual y audiovisual atractivo, incluyendo diseño gráfico, edición de video y material publicitario para diferentes plataformas.",
      icono: <BiSolidWebcam />,
    },
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center  font-sans  ">


      <div
        id="img"
        className="relative w-full h-[calc(95vh-5rem)] "
      >
        <Image
          src="/images/icons/TAZAME/4x/Asset 1@4x.png"
          alt="Logo Tazame"
          fill
          className="object-fill"
          priority
        />
      </div>


      <div className="w-full h-[5vh] ">

        <Text_carrucel />
      </div>




      <div className="w-full h-auto  flex flex-col justify-start items-center gap-4  p-4">
        <h2 className="w-full  text-3xl text-wrap text-primary-light text-center font-bold">Nuestros servicios:</h2>
        <div className="w-full h-full grid grid-cols-1  md:grid-cols-2 gap-16 ">

          {Servicios.map((item, index) => {
            const IsPar = index % 2 === 0;

            return (
              <div
                key={index}
                className={`col-span-1 w-full flex ${!IsPar ? "justify-start" : "justify-end"
                  } items-center`}
              >
                <div className="w-full md:w-3/4 min-h-40">
                  <Card_servicios
                    alto_minimo="h-[50vh]"
                    imagen={item.imagen}
                    indice={index}
                    descripcion={item.descripcion}
                    icono={item.icono}
                    titulo={item.titulo}
                    flipped={cardAbierta === index}
                    onFlip={() =>
                      setCardAbierta(cardAbierta === index ? null : index)
                    }
                  />
                </div>
              </div>
            );
          })}


        </div>
      </div>




      <div className="w-full h-auto mt-20 flex flex-col justify-center items-center gap-2">
        <h2 className="w-full  text-3xl text-wrap text-primary-light text-center font-bold">Paquetes de redes sociales:</h2>




        <div className="w-full h-full grid grid-cols-1 bg-emerald-400 md:grid-cols-3 gap-16 p-8">



          <div className={`col-span-1 w-full flex  items-center rounded`}>
            <Card_paquetes titulo={"tu papa"} alto_minimo="h-102" lista={["das","das","das","dsa","dfzdsfg"]} />
          </div>

          <div className={`col-span-1 w-full flex  items-center rounded`}>
            <Card_paquetes titulo={"tu papa"} alto_minimo="h-92" />
          </div>

          <div className={`col-span-1 w-full flex  items-center rounded`}>
            <Card_paquetes titulo={"tu papa"}   alto_minimo="h-92" bg={"bg-secondary-light"} />
          </div>


        </div>


      </div>


    </div>
  );
}

