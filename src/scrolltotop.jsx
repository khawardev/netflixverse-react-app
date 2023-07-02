/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const scrolltoTop = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return null;
}

export default scrolltoTop
