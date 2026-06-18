"use client "


import Next_image from "../../components/Images/Next_image";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import Social_media_button from "../../components/buttons/Social_media_button/Social_media_buttom";

const Footer = () => {

    return (

        <div className="w-full min-h-[20vh] bg-primary-light p-2 flex flex-col  justify-center items-center gap-2 p-4">



            <div className="w-15 h-15  p-2 rounded-full bg-white">
                <Next_image src={"/images/icons/TAZAME/4x/Asset 3@4x.png"} alt="logo" />
            </div>


            <div className="w-full">
                <div className="flex flex-row justify-center items-center gap-2">
                    <Social_media_button color="bg-primary-light" href={"https://wa.me/521234567890"} size="w-10 h-10 text-2xl " />
                    <Social_media_button color="bg-primary-light" icon={<FaTiktok />} href={"https://wa.me/521234567890"} size="w-10 h-10 text-2xl" />
                    <Social_media_button color="bg-primary-light" icon={<FaFacebook />} href={"https://wa.me/521234567890"} size="w-10 h-10 text-2xl" />
                    <Social_media_button color="bg-primary-light" icon={<FaSquareInstagram />} href={"https://wa.me/521234567890"} size="w-10 h-10 text-2xl" />

                </div>

            </div>

            <hr className="border-1 w-full border-white/10" />


            <div className="w-full text-white">
                <p className="text-xs text-center">2026@     Tazame derechos sacados del culo</p>
            </div>



        </div>

    )

}


export default Footer;