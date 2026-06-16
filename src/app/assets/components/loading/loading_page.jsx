"use client";

import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Next_image from "../Images/Next_image";

export default function Loading_page({ active }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[9999] flex bg-black"
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <div className="w-full h-full flex justify-center items-center">
            <div className="w-60 h-60 rounded-full bg-white p-8 flex items-center justify-center">
              <Next_image
                src="/images/icons/TAZAME/4x/Asset 3@4x.png"
                alt="titaja logo"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}