
import localfont from "next/font/local";


export const Knockout = localfont({

    src: [
        {
            path: "../../../../public/fonts/Knockout-Bold.ttf",
            weight: "400",
         
            style: "normal",
        },
    ],
    variable: "--font-knockout",
    display: "swap",
});