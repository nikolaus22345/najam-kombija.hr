import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const DefaultLanguageWrapper = () => {
    const { setLanguage } = useLanguage();

    useEffect(() => {
        setLanguage("en");
    }, [setLanguage]);

    return <Outlet />;
};

export default DefaultLanguageWrapper;
