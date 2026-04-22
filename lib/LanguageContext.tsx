"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "./translations";

type LanguageContextType = {
  lang: Language;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "ja",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("ja");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "en" || saved === "ja") setLang(saved);
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Language = prev === "ja" ? "en" : "ja";
      localStorage.setItem("lang", next);
      return next;
    });
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
