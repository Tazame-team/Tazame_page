"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function useTransitionRouter() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const push = (href) => {
    setLoading(true);

    setTimeout(() => {
      router.push(href);
    }, 300); // delay antes de cambiar página

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return { push, loading };
}