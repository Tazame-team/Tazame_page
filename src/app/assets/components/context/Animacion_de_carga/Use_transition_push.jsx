"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function useTransitionRouter() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const push = (href) => {
        if (!href) return;

        setLoading(true);

        // tiempo antes de cambiar de página
        setTimeout(() => {
            router.push(href);
        }, 150);

        //duración total de la animacion
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    };

    return { push, loading };
}