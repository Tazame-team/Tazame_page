"use client"

import { useState } from "react";

import { motion, AnimatePresence } from "motion/react";


const Menu_button = ({ submit, IsActive }) => {

    const [onhover, setonhover] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={() => setonhover(true)}
            whileTap={{ scale: 1.2 }}

            onClick={submit}
            className="w-full h-full cursor-pointer "
        >


            <AnimatePresence mode="wait">
                {!IsActive ? (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                  
                        className="p-2 flex flex-col justify-center items-center gap-2"
                    >
                        <div className="w-8 h-1 bg-secondary-light rounded-full" />
                        <div className="w-8 h-1 bg-black rounded-full" />
                        <div className="w-8 h-1 bg-primary-light rounded-full" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="close"
                        initial={{ opacity: 0, rotate: -90 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        exit={{ opacity: 0, rotate: 90 }}
                       
                        className="relative w-8 h-8 flex justify-center items-center"
                    >
                        <div className="absolute w-8 h-1 bg-secondary-light rounded-full rotate-45" />

                        <div className="absolute w-8 h-1 bg-secondary-light rounded-full -rotate-45" />
                    </motion.div>
                )}
            </AnimatePresence>

        </motion.div>

    )


}

export default Menu_button;