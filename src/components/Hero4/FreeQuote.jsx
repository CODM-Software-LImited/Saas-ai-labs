import { useEffect, useState } from "react";
import FreeQuotePopup from "./FreeQuotePopup";


function FreeQuote() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [open]);

    return (
        <>
            <button
                className="explorebtn btn-gradient d-flex align-items-center text-decoration-none"
                onClick={() => setOpen(true)}
            >
                Get Free Quote
                <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M17.25 15.25V6.75H8.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M17 7L6.75 17.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>


            {open && <FreeQuotePopup isOpen={open} onClose={() => setOpen(false)} />}
        </>
    );
}

export default FreeQuote;

