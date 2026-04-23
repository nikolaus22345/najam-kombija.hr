import { useEffect } from "react";
import { useParams, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import { translations, Language } from "../lib/translations";
import NotFound from "../pages/NotFound";


const VALID_LANGUAGES = Object.keys(translations) as Language[];

const LanguageWrapper = () => {
    const { lang } = useParams<{ lang: string }>();
    const { language, setLanguage } = useLanguage();
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect /hr/* → /* (canonical URL without /hr prefix)
        if (lang === "hr") {
            const restOfPath = location.pathname.replace(/^\/hr/, '') || '/';
            navigate(restOfPath + location.search + location.hash, { replace: true });
            return;
        }

        if (lang && VALID_LANGUAGES.includes(lang as Language)) {
            setLanguage(lang as Language);
        }
    }, [lang, setLanguage, location.pathname, location.search, location.hash, navigate]);

    // /hr/* - while redirect is happening, render nothing
    if (lang === "hr") {
        return null;
    }

    // If lang is missing or invalid, render NotFound
    if (!lang || !VALID_LANGUAGES.includes(lang as Language)) {
        return <NotFound />;
    }

    // Prevent rendering children until the LanguageContext has updated to match the URL language.
    // This solves the issue where SEO tools capture the English/fallback metadata before the useEffect fires.
    if (lang && VALID_LANGUAGES.includes(lang as Language) && lang !== language) {
        return null;
    }

    return (
        <>
            <Outlet />
        </>
    );
};

export default LanguageWrapper;
