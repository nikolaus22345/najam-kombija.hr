import { useEffect } from "react";
import { useParams, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/lib/translations";

const VALID_LANGUAGES: Language[] = ["en", "hr", "de", "it"]; // Add others as needed

const LanguageWrapper = () => {
    const { lang } = useParams<{ lang: string }>();
    const { setLanguage } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (lang && VALID_LANGUAGES.includes(lang as Language)) {
            setLanguage(lang as Language);
        } else {
            // If language is invalid, redirect to default (en) but keep the path
            // This might happen if someone manually types a wrong code
            // However, App.tsx routing usually prevents this from matching if we are strict.
            // But for "/:lang/*", "foo" matches "foo".
            const defaultLang = "en";
            // Construct new path: /en/rest-of-path
            // But wait, if we are here, 'lang' is the first segment.
            // So if url is "/foo/bar", lang is "foo". We want "/en/foo/bar" ?
            // No, if the user visits "/about" (no lang), the router might not match this wrapper if it's strict on "/:lang".
            // We will handle the root "/" in App.tsx.

            if (lang && !VALID_LANGUAGES.includes(lang as Language)) {
                // Fallback for invalid codes to EN
                navigate(`/en${location.pathname.replace(/^\/[^/]+/, '')}`, { replace: true });
            }
        }
    }, [lang, setLanguage, navigate, location]);

    return <Outlet />;
};

export default LanguageWrapper;
