import { motion } from "framer-motion";
import { useState } from "react";

const General_input = ({
    title,
    value,
    setvalue,
    icono,
    tipo = "text",
    maxLenght,
    placeholder = "Ingresa los valores",
    nombre,
    numerico_msg,
    multiline = false,
    rows = 4,
    ShowColor = false,
}) => {
    const [focus, setfocus] = useState(false);
    const [error, seterror] = useState("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const phoneRegex =
        /^\+?[0-9\s\-()]{8,20}$/;

    const InputComponent = multiline
        ? motion.textarea
        : motion.input;

    const validarInput = () => {
        const valor = value.trim();

        if (!valor) {
            seterror("");
            return;
        }

        if (tipo === "email") {
            if (!emailRegex.test(valor)) {
                seterror("Correo electrónico inválido");
            } else {
                seterror("");
            }
        }

        if (tipo === "tel") {
            if (!phoneRegex.test(valor)) {
                seterror("Número telefónico inválido");
            } else {
                seterror("");
            }
        }
    };

    return (
        <div className="relative w-full flex flex-col">
            {title && (
                <p className="text-black">
                    {title}
                </p>
            )}

            {tipo === "number" && (
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-black z-10">
                    {numerico_msg}
                </span>
            )}

            <motion.div
                animate={{
                    boxShadow: focus
                        ? "0 0 20px rgba(0,158,227,.25)"
                        : "0 0 0px rgba(0,0,0,0)",
                }}
                className="relative"
            >
                <InputComponent
                    rows={multiline ? rows : undefined}
                    value={value}
                    onChange={(e) => {
                        let nuevoValor = e.target.value;

                        if (tipo === "tel") {
                            nuevoValor = nuevoValor.replace(/\D/g, "");
                        }

                        setvalue(nuevoValor);

                        if (
                            tipo === "email" &&
                            error &&
                            emailRegex.test(nuevoValor.trim())
                        ) {
                            seterror("");
                        }

                        if (
                            tipo === "tel" &&
                            error &&
                            phoneRegex.test(nuevoValor.trim())
                        ) {
                            seterror("");
                        }
                    }}  
                    onFocus={() =>
                        setfocus(true)
                    }
                    onBlur={() => {
                        setfocus(false);
                        validarInput();
                    }}
                    type={
                        !multiline
                            ? tipo
                            : undefined
                    }
                    maxLength={maxLenght}
                    placeholder={placeholder}
                    required
                    autoCorrect="off"
                    autoComplete="off"
                    spellCheck={false}
                    min={0}
                    max={9999999}
                    step={
                        tipo === "number"
                            ? "any"
                            : undefined
                    }
                    name={nombre}
                    id={nombre}
                    className={`
                        w-full
                        ${multiline
                            ? "min-h-32 resize-none pt-6"
                            : "h-14"
                        }
                        ${tipo === "number"
                            ? "pl-16"
                            : "pl-4"
                        }
                        pr-14
                        bg-gray-50
                        border
                        ${error
                            ? "border-red-500"
                            : focus
                                ? "border-primary-light"
                                : "border-gray-200"
                        }
                        rounded-xl
                        outline-none
                        transition-all
                        duration-100
                        text-black
                        placeholder:text-gray-400
                        placeholder:text-sm
                    `}
                />

                {(focus || value) && (
                    <motion.label
                        animate={{
                            y: -20,
                            scale: 0.85,
                        }}
                        transition={{
                            duration: 0.2,
                        }}
                        htmlFor={nombre}
                        className="
                            absolute
                            left-4
                            top-4
                            origin-left
                            pointer-events-none
                            text-secondary
                            bg-white
                            px-1
                        "
                    >
                        {nombre}
                    </motion.label>
                )}

                <motion.div
                    animate={{
                        scale: focus
                            ? 1.15
                            : 1,
                        rotate: focus
                            ? 5
                            : 0,
                    }}
                    transition={{
                        duration: 0.2,
                    }}
                    className={`
                        absolute
                        right-4
                        ${multiline
                            ? "top-5"
                            : "top-1/2 -translate-y-1/2"
                        }
                        text-xl
                        ${error
                            ? "text-red-500"
                            : focus
                                ? "text-black"
                                : "text-secondary/50"
                        }
                    `}
                >
                    {icono}
                </motion.div>
            </motion.div>

            {error && (
                <motion.p
                    initial={{
                        opacity: 0,
                        y: -5,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    className="mt-1 text-sm text-red-500"
                >
                    {error}
                </motion.p>
            )}
        </div>
    );
};

export default General_input;