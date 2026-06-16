"use client"

//import { useRouter } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";



const Social_media_button = ({ icon = <FaWhatsapp />, size = "w-16 h-16 text-5xl", color = "bg-primary-light", href = null, showChat_menu = false }) => {

    //   const router = useRouter();




    return (

        <div


            onClick={() => {
                if (href) {
                    window.open(href, "_blank");
                }
            }}
            className={`${size} ${color} p-3 rounded-full text-white z-30 flex flex-col justify-center items-center cursor-pointer *:
            transition-all duration-100 hover:scale-120 active:scale-120
            `}>


            {icon}


        </div>

    )


}


export default Social_media_button;
