import { useEffect } from "react";
import { useParams, Outlet, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Language } from "@/lib/translations";
import NotFound from "@/pages/NotFound";

const VALID_LANGUAGES = Object.keys(translations) as Language[];

const LanguageWrapper = () => {
    const { lang } = useParams<{ lang: string }>();
    const { setLanguage } = useLanguage();
    const location = useLocation();

    useEffect(() => {
        if (lang && VALID_LANGUAGES.includes(lang as Language)) {
            setLanguage(lang as Language);
        }
    }, [lang, setLanguage]);

    // If lang is missing or invalid, render NotFound
    if (!lang || !VALID_LANGUAGES.includes(lang as Language)) {
        return <NotFound />;
    }

    return <Outlet />;
};

export default LanguageWrapper;
