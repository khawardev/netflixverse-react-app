/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./footer/Footer.jsx";

function ScrollToTop() {
    const [showFooter, setShowFooter] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            setShowFooter(true);
        }, 3000);

    }, [location]);

    return showFooter && <Footer />;
}

export default ScrollToTop;
