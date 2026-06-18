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

    const InputComponent = multiline ? motion.textarea : motion.input;

    return (
        <div className="relative w-full flex flex-col">
            {title && (
                <p className={value ? "text-seconda-light" : "text-black"}>
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
                    value={value.trim()}
                    onChange={(e) => setvalue(e.target.value)}
                    onFocus={() => setfocus(true)}
                    onBlur={() => setfocus(false)}
                    type={!multiline ? tipo : undefined}
                    maxLength={maxLenght}
                    placeholder={placeholder}
                    required
                    autoCorrect="off"
                    autoComplete="off"
                    spellCheck={false}
                    min={0}
                    max={9999999}
                    step={tipo === "number" ? "any" : undefined}
                    name={nombre}
                    id={nombre}
                    className={`
                        w-full
                        ${multiline ? "min-h-32 resize-none pt-6" : "h-14"}
                        ${tipo === "number" ? "pl-16" : "pl-4"}
                        pr-14

                    bg-gray-50

                        border-1

                        ${focus
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

                {/* Label flotante */}
                {!(focus && !value) && (
                    <motion.label
                        animate={{
                            y: focus || value ? -20 : 0,
                            scale: focus || value ? 0.85 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                        htmlFor={nombre}
                        className={`
                            absolute
                            left-4
                            ${multiline ? "top-5" : "top-4"}
                            origin-left
                            pointer-events-none
                            text-secondary
                            bg-white
                            px-1
                        `}
                    >
                        {nombre}
                    </motion.label>
                )}

                {/* Ícono */}
                <motion.div
                    animate={{
                        scale: focus ? 1.15 : 1,
                        rotate: focus ? 5 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className={`
                        absolute
                        right-4
                        ${multiline ? "top-5" : "top-1/2 -translate-y-1/2"}
                        text-xl
                        ${focus
                            ? "text-black"
                            : "text-secondary/50"
                        }
                    `}
                >
                    {icono}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default General_input;