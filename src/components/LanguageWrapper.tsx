import { useEffect } from "react";
import { useParams, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Language } from "@/lib/translations";
import NotFound from "@/pages/NotFound";

const VALID_LANGUAGES = Object.keys(translations) as Language[];

const LanguageWrapper = () => {
    const { lang } = useParams<{ lang: string }>();
    const { setLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect /en/* → /* (canonical URL without /en prefix)
        if (lang === "en") {
            const restOfPath = location.pathname.replace(/^\/en/, '') || '/';
            navigate(restOfPath + location.search + location.hash, { replace: true });
            return;
        }

        if (lang && VALID_LANGUAGES.includes(lang as Language)) {
            setLanguage(lang as Language);
        }
    }, [lang, setLanguage, location.pathname, location.search, location.hash, navigate]);

    // /en/* - while redirect is happening, render nothing
    if (lang === "en") {
        return null;
    }

    // If lang is missing or invalid, render NotFound
    if (!lang || !VALID_LANGUAGES.includes(lang as Language)) {
        return <NotFound />;
    }

    return <Outlet />;
};

export default LanguageWrapper;
