import { useEffect } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations, Language } from "@/lib/translations";

const VALID_LANGUAGES = Object.keys(translations) as Language[];

const LanguageWrapper = () => {
    const { lang } = useParams<{ lang: string }>();
    const { setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (lang) {
            if (VALID_LANGUAGES.includes(lang as Language)) {
                setLanguage(lang as Language);
            } else {
                // If lang is invalid (e.g. visited /booking directly), default to 'en' and prepend it
                // We keep the full pathname because if the user visited /booking, 
                // lang is 'booking', so we want /en/booking.
                // If user visited /fr/booking (and fr is invalid), we get /en/fr/booking -> 404 inside EN.
                // We must properly handle the "first segment is not a language" case.

                const defaultLang = "en";
                navigate(`/${defaultLang}${location.pathname}`, { replace: true, state: location.state });
            }
        }
    }, [lang, setLanguage, navigate, location]);

    // If lang is missing or invalid, don't render Outlet to avoid matching inner routes with wrong params
    if (!lang || !VALID_LANGUAGES.includes(lang as Language)) {
        return null;
    }

    return <Outlet />;
};

export default LanguageWrapper;
