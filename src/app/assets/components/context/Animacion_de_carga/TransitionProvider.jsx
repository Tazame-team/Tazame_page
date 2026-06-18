"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Loading_page from "../../loading/loading_page";

const TransitionContext = createContext(null);

export function useTransitionRouter() {
  const ctx = useContext(TransitionContext);
  if (!ctx) {
    throw new Error("useTransitionRouter must be used inside TransitionProvider");
  }
  return ctx;
}

export default function TransitionProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const push = (href) => {
    if (href === pathname) return;

    setShow(true);
    setLoading(true);

    setTimeout(() => { //tiempo a espera para cambiar de pagina
      router.push(href);
    }, 600);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    return () => {};
  }, [pathname]);

  useEffect(() => {
    if (!loading && show) {
      const t = setTimeout(() => {
        setShow(false);
      }, 350);

      return () => clearTimeout(t);
    }
  }, [loading, show]);

  const value = useMemo(() => ({ push, loading }), [loading, pathname]);

  return (
    <TransitionContext.Provider value={value}>
      {show && <Loading_page active={loading} />}
      {children}
    </TransitionContext.Provider>
  );
}