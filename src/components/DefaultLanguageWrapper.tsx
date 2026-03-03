import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import Seo from "./Seo";

const DefaultLanguageWrapper = () => {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage("en");
    }, [setLanguage]);

    return (
        <>
            <Seo />
            <Outlet />
        </>
    );
};

export default DefaultLanguageWrapper;
