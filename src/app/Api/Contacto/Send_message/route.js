import { NextResponse } from "next/server";

const limpiar = (texto) =>
    texto
        .replace(/[<>]/g, "") // quitar html 
        .trim();




export async function POST(request) {
    try {
        const { nombre, correo, telefono, mensaje, secret, time } =
            await request.json();

        if (
            !nombre?.trim() ||
            !correo?.trim() ||
            !telefono?.trim() ||
            !mensaje?.trim()
        ) {
            return NextResponse.json(
                {
                    status: false,
                    message: "Todos los campos son obligatorios",
                },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(correo.trim())) {
            return NextResponse.json(
                {
                    status: false,
                    message: "Correo electrónico inválido",
                },
                { status: 400 }
            );
        }

        if (secret?.trim()) {
            return NextResponse.json(
                {
                    status: false,

                },
                { status: 400 }
            );
        }


        const origin = request.headers.get("origin");


        const dominiosPermitidos = [
            process.env.DOMINIO_PROD,
            process.env.DOMINIO_DEV,
        ];

        

        if (dominiosPermitidos.includes(origin)) { // si la peticion viene fuera hace error
            return NextResponse.json(
                { status: false },
                { status: 403 }
            );
        }



        const segundos =
            (Date.now() - time) / 1000;

        if (segundos < 3) {
            return NextResponse.json(
                {
                    status: false,
                    message: "Solicitud inválida",
                },
                { status: 400 }
            );
        }



        const datos = {
            nombre: limpiar(nombre),
            correo: limpiar(correo),
            telefono: limpiar(telefono),
            mensaje: limpiar(mensaje),
        };

        if (
            datos.nombre.length > 100 ||
            datos.correo.length > 200 ||
            datos.telefono.length > 20 ||
            datos.mensaje.length > 5000
        ) {
            return NextResponse.json(
                {
                    status: false,
                    message: "Uno o más campos exceden la longitud permitida",
                },
                { status: 400 }
            );
        }

        const response = await fetch(
            "https://api.emailjs.com/api/v1.0/email/send",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    service_id: process.env.EMAILJS_SERVICE_ID,
                    template_id: process.env.EMAILJS_TEMPLATE_ID,
                    user_id: process.env.EMAILJS_PUBLIC_KEY,
                    accessToken: process.env.EMAILJS_PRIVATE_KEY,
                    template_params: datos,
                }),
            }
        );

        if (!response.ok) {
            const errorText = await response.text();

            console.error("EmailJS Error:", errorText);

            throw new Error(errorText);
        }

        return NextResponse.json({
            status: true,
            message: "Correo enviado correctamente",
        });

    } catch (error) {

        console.error("Error al enviar correo:", error);

        return NextResponse.json(
            {
                status: false,
                message: "No fue posible enviar el correo",
            },
            { status: 500 }
        );
    }
}